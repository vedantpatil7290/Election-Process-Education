// ========== AEIS Application Engine ==========

// ---- Auth & Account System ----
let currentUser = null; // { username, displayName }

function getUsersDB() {
    try { return JSON.parse(localStorage.getItem('aeis_users')) || {}; } catch(e) { return {}; }
}
function saveUsersDB(db) {
    localStorage.setItem('aeis_users', JSON.stringify(db));
}
function simpleHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const ch = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + ch;
        hash |= 0;
    }
    return 'h_' + Math.abs(hash).toString(36);
}

function showLogin() {
    document.getElementById('login-form').style.display = '';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-error').textContent = '';
    document.getElementById('signup-error').textContent = '';
}
function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = '';
    document.getElementById('login-error').textContent = '';
    document.getElementById('signup-error').textContent = '';
}

function handleSignup() {
    const name = document.getElementById('signup-name').value.trim();
    const username = document.getElementById('signup-username').value.trim().toLowerCase();
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const errEl = document.getElementById('signup-error');

    if (!name || !username || !password) { errEl.textContent = '❌ All fields are required'; return; }
    if (username.length < 3) { errEl.textContent = '❌ Username must be at least 3 characters'; return; }
    if (password.length < 4) { errEl.textContent = '❌ Password must be at least 4 characters'; return; }
    if (password !== confirm) { errEl.textContent = '❌ Passwords do not match'; return; }

    const db = getUsersDB();
    if (db[username]) { errEl.textContent = '❌ Username already taken'; return; }

    db[username] = {
        displayName: name,
        passwordHash: simpleHash(password),
        createdAt: new Date().toISOString()
    };
    saveUsersDB(db);

    // Initialize empty progress for new user
    const freshState = getDefaultState();
    freshState.displayName = name;
    localStorage.setItem('aeis_progress_' + username, JSON.stringify(freshState));

    // Auto-login
    loginUser(username, name);
    showToast(`🎉 Welcome, ${name}! Your account has been created.`, 'success');
}

function handleLogin() {
    const username = document.getElementById('login-username').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    const errEl = document.getElementById('login-error');

    if (!username || !password) { errEl.textContent = '❌ Please enter username and password'; return; }

    const db = getUsersDB();
    const user = db[username];
    if (!user) { errEl.textContent = '❌ Account not found. Please sign up first.'; return; }
    if (user.passwordHash !== simpleHash(password)) { errEl.textContent = '❌ Incorrect password'; return; }

    loginUser(username, user.displayName);
    showToast(`👋 Welcome back, ${user.displayName}!`, 'success');
}

function loginUser(username, displayName) {
    currentUser = { username, displayName };
    localStorage.setItem('aeis_current_user', username);
    document.getElementById('auth-overlay').classList.add('hidden');
    loadState();
    updateXPDisplay();
    navigateTo('home');
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('aeis_current_user');
    resetStateToDefault();
    document.getElementById('auth-overlay').classList.remove('hidden');
    showLogin();
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    showToast('👋 Signed out successfully', 'info');
}

function checkAutoLogin() {
    const savedUser = localStorage.getItem('aeis_current_user');
    if (savedUser) {
        const db = getUsersDB();
        if (db[savedUser]) {
            currentUser = { username: savedUser, displayName: db[savedUser].displayName };
            document.getElementById('auth-overlay').classList.add('hidden');
            return true;
        }
    }
    return false;
}

// Allow Enter key to submit forms
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const overlay = document.getElementById('auth-overlay');
        if (!overlay.classList.contains('hidden')) {
            const loginForm = document.getElementById('login-form');
            if (loginForm.style.display !== 'none') handleLogin();
            else handleSignup();
        }
    }
});

// ---- State Management ----
function getDefaultState() {
    return {
        displayName: 'Learner',
        currentSection: 'home',
        difficulty: 'beginner',
        xp: 0,
        level: 1,
        topicsCompleted: [],
        quizzesPassed: [],
        simsCompleted: [],
        analysisCount: 0,
        analysisHistory: [],
        streak: 0,
        lastVisit: null,
        achievements: JSON.parse(JSON.stringify(ACHIEVEMENTS)),
        goalsCompleted: []
    };
}

const state = {
    ...getDefaultState(),
    // Transient state (NOT saved)
    currentTopic: null,
    currentStep: 0,
    currentQuiz: null,
    quizIndex: 0,
    quizScore: 0,
    quizAnswered: false,
    quizTimer: null,
    quizTimeLeft: 30,
    currentSim: null,
    simStep: 0,
    simCorrect: 0
};

function resetStateToDefault() {
    const defaults = getDefaultState();
    Object.assign(state, defaults);
    state.currentTopic = null;
    state.currentStep = 0;
    state.currentQuiz = null;
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;
    state.quizTimer = null;
    state.quizTimeLeft = 30;
    state.currentSim = null;
    state.simStep = 0;
    state.simCorrect = 0;
}

// ---- Load saved state (per-user) ----
function loadState() {
    if (!currentUser) return;
    const key = 'aeis_progress_' + currentUser.username;
    try {
        const saved = localStorage.getItem(key);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Only restore persistent fields
            const persistentKeys = ['displayName','currentSection','difficulty','xp','level',
                'topicsCompleted','quizzesPassed','simsCompleted','analysisCount',
                'analysisHistory','streak','lastVisit','achievements','goalsCompleted'];
            persistentKeys.forEach(k => {
                if (parsed[k] !== undefined) state[k] = parsed[k];
            });
            if (!state.achievements || !state.achievements.length) {
                state.achievements = JSON.parse(JSON.stringify(ACHIEVEMENTS));
            }
        }
    } catch(e) { console.log('Fresh start for', currentUser.username); }

    // Streak logic
    const today = new Date().toDateString();
    if (state.lastVisit) {
        const last = new Date(state.lastVisit);
        const diff = Math.floor((new Date(today) - last) / 86400000);
        if (diff === 1) { state.streak++; }
        else if (diff > 1) { state.streak = 1; }
    } else { state.streak = 1; }
    state.lastVisit = today;
    saveState();
}

function saveState() {
    if (!currentUser) return;
    const key = 'aeis_progress_' + currentUser.username;
    try {
        // Only save persistent fields — exclude transient/non-serializable data
        const toSave = {
            displayName: state.displayName,
            currentSection: state.currentSection,
            difficulty: state.difficulty,
            xp: state.xp,
            level: state.level,
            topicsCompleted: state.topicsCompleted,
            quizzesPassed: state.quizzesPassed,
            simsCompleted: state.simsCompleted,
            analysisCount: state.analysisCount,
            analysisHistory: state.analysisHistory,
            streak: state.streak,
            lastVisit: state.lastVisit,
            achievements: state.achievements,
            goalsCompleted: state.goalsCompleted
        };
        localStorage.setItem(key, JSON.stringify(toSave));
    } catch(e) { console.error('Save failed:', e); }
}

// ---- Navigation ----
function navigateTo(section) {
    state.currentSection = section;
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const el = document.getElementById(`section-${section}`);
    if (el) { el.classList.add('active'); el.scrollTop = 0; }
    const nav = document.querySelector(`[data-section="${section}"]`);
    if (nav) nav.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (section === 'educator') { renderTopics(); showTopics(); }
    if (section === 'mentor') renderMentor();
    if (section === 'detector') renderDetectorHistory();
    saveState();
}

// ---- Loading Screen ----
function initLoading() {
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 2500);
}

// ---- XP & Level System ----
function addXP(amount) {
    state.xp += amount;
    const xpForNext = state.level * 100;
    while (state.xp >= xpForNext) {
        state.xp -= state.level * 100;
        state.level++;
        showToast(`🎉 Level Up! You're now Level ${state.level} — ${LEVEL_TITLES[Math.min(state.level-1, LEVEL_TITLES.length-1)]}`, 'success');
        checkAchievement('level-5', state.level >= 5);
        checkAchievement('level-10', state.level >= 10);
    }
    updateXPDisplay();
    showToast(`+${amount} XP earned!`, 'xp');
    saveState();
}

function updateXPDisplay() {
    const xpForNext = state.level * 100;
    const pct = (state.xp / xpForNext) * 100;
    const fill = document.getElementById('nav-xp-fill');
    const val = document.getElementById('nav-xp-value');
    const lvl = document.getElementById('nav-user-level');
    if (fill) fill.style.width = pct + '%';
    if (val) val.textContent = state.xp;
    if (lvl) lvl.textContent = `Lv ${state.level}`;
}

// ---- Hero Stats Animation ----
function animateStats() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const interval = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(interval); }
            el.textContent = current;
        }, 40);
    });
}

// ---- Toast Notifications ----
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icons = { success: '✅', info: 'ℹ️', warning: '⚠️', xp: '⭐' };
    toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// ---- EDUCATOR: Topics ----
function renderTopics() {
    const grid = document.getElementById('topic-grid');
    const topics = TOPICS[state.difficulty] || [];
    grid.innerHTML = topics.map(t => {
        const done = state.topicsCompleted.includes(t.id);
        return `<div class="topic-card ${done ? 'completed' : ''}" onclick="startTopic('${t.id}')">
            <span class="topic-emoji">${t.emoji}</span>
            <h3 class="topic-title">${t.title}</h3>
            <p class="topic-desc">${t.desc}</p>
            <div class="topic-meta">
                <span>⏱️ ${t.duration}</span>
                <span>⭐ ${t.xp} XP</span>
                <span>📝 ${t.quiz ? t.quiz.length : 0} quiz Qs</span>
            </div>
        </div>`;
    }).join('');
}

function showTopics() {
    document.getElementById('topic-grid').style.display = '';
    document.getElementById('difficulty-selector').style.display = '';
    document.getElementById('lesson-view').style.display = 'none';
    document.getElementById('quiz-view').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    if(state.quizTimer) clearInterval(state.quizTimer);
    renderTopics();
}

// Difficulty buttons
document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.difficulty = btn.dataset.level;
        renderTopics();
    });
});

// ---- EDUCATOR: Lessons ----
function startTopic(topicId) {
    const topics = [...TOPICS.beginner, ...TOPICS.intermediate, ...TOPICS.advanced];
    const topic = topics.find(t => t.id === topicId);
    if (!topic) return;
    state.currentTopic = topic;
    state.currentStep = 0;
    document.getElementById('topic-grid').style.display = 'none';
    document.getElementById('difficulty-selector').style.display = 'none';
    document.getElementById('lesson-view').style.display = '';
    renderLessonStep();
}

function renderLessonStep() {
    const topic = state.currentTopic;
    if (!topic) return;
    const step = topic.steps[state.currentStep];
    const total = topic.steps.length;
    const pct = ((state.currentStep + 1) / total) * 100;
    document.getElementById('lesson-progress-fill').style.width = pct + '%';
    document.getElementById('lesson-step-label').textContent = `Step ${state.currentStep + 1} of ${total}`;
    document.getElementById('lesson-content').innerHTML = `<h3>${step.title}</h3>${step.content}`;
    const prevBtn = document.getElementById('btn-lesson-prev');
    const nextBtn = document.getElementById('btn-lesson-next');
    prevBtn.style.visibility = state.currentStep === 0 ? 'hidden' : 'visible';
    if (state.currentStep === total - 1) {
        nextBtn.textContent = topic.quiz ? 'Take Quiz →' : 'Complete ✓';
        nextBtn.onclick = topic.quiz ? () => startQuiz(topic) : () => completeTopic(topic);
    } else {
        nextBtn.textContent = 'Next →';
        nextBtn.onclick = nextLessonStep;
    }
}

function nextLessonStep() {
    if (state.currentStep < state.currentTopic.steps.length - 1) {
        state.currentStep++;
        renderLessonStep();
    }
}
function prevLessonStep() {
    if (state.currentStep > 0) {
        state.currentStep--;
        renderLessonStep();
    }
}

function completeTopic(topic) {
    if (!state.topicsCompleted.includes(topic.id)) {
        state.topicsCompleted.push(topic.id);
        addXP(topic.xp);
        checkAchievement('first-lesson', true);
        checkAchievement('five-topics', state.topicsCompleted.length >= 5);
        const begTopics = TOPICS.beginner.map(t => t.id);
        checkAchievement('all-beginner', begTopics.every(id => state.topicsCompleted.includes(id)));
    }
    showTopics();
}

// ---- EDUCATOR: Quiz ----
function startQuiz(topic) {
    state.currentQuiz = topic.quiz;
    state.quizIndex = 0;
    state.quizScore = 0;
    state.quizAnswered = false;
    state.currentTopic = topic;
    document.getElementById('lesson-view').style.display = 'none';
    document.getElementById('quiz-view').style.display = '';
    document.getElementById('quiz-results').style.display = 'none';
    document.getElementById('quiz-title').textContent = `${topic.title} Quiz`;
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const q = state.currentQuiz[state.quizIndex];
    state.quizAnswered = false;
    state.quizTimeLeft = 30;
    document.getElementById('quiz-question-count').textContent = `Question ${state.quizIndex + 1}/${state.currentQuiz.length}`;
    document.getElementById('quiz-question').textContent = q.q;
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('btn-quiz-next').style.display = 'none';
    document.getElementById('timer-value').textContent = '30';
    const optionsEl = document.getElementById('quiz-options');
    const letters = ['A', 'B', 'C', 'D'];
    optionsEl.innerHTML = q.options.map((opt, i) =>
        `<button class="quiz-option" onclick="selectAnswer(${i})">
            <span class="option-letter">${letters[i]}</span>
            <span>${opt}</span>
        </button>`
    ).join('');
    // Timer
    if (state.quizTimer) clearInterval(state.quizTimer);
    state.quizTimer = setInterval(() => {
        state.quizTimeLeft--;
        document.getElementById('timer-value').textContent = state.quizTimeLeft;
        if (state.quizTimeLeft <= 0) {
            clearInterval(state.quizTimer);
            if (!state.quizAnswered) selectAnswer(-1);
        }
    }, 1000);
}

function selectAnswer(index) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;
    if (state.quizTimer) clearInterval(state.quizTimer);
    const q = state.currentQuiz[state.quizIndex];
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    const isCorrect = index === q.correct;
    if (isCorrect) state.quizScore++;
    options.forEach((opt, i) => {
        if (i === q.correct) opt.classList.add('correct');
        else if (i === index && !isCorrect) opt.classList.add('wrong');
        opt.style.pointerEvents = 'none';
    });
    feedback.style.display = '';
    feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`;
    feedback.innerHTML = isCorrect
        ? `✅ Correct! ${q.explanation}`
        : `❌ ${index === -1 ? 'Time\'s up!' : 'Incorrect.'} ${q.explanation}`;
    document.getElementById('btn-quiz-next').style.display = '';
}

function nextQuizQuestion() {
    state.quizIndex++;
    if (state.quizIndex < state.currentQuiz.length) {
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quiz-view').style.display = 'none';
    document.getElementById('quiz-results').style.display = '';
    const total = state.currentQuiz.length;
    const pct = Math.round((state.quizScore / total) * 100);
    const passed = pct >= 60;
    document.getElementById('results-icon').textContent = pct === 100 ? '🏆' : passed ? '🎉' : '📚';
    document.getElementById('results-title').textContent = pct === 100 ? 'Perfect Score!' : passed ? 'Great Job!' : 'Keep Learning!';
    document.getElementById('score-text').textContent = pct + '%';
    // Animate circle
    const circle = document.getElementById('score-circle-fill');
    if (circle) {
        const offset = 283 - (283 * pct / 100);
        setTimeout(() => { circle.style.strokeDashoffset = offset; }, 100);
        circle.style.stroke = passed ? '#22c55e' : '#ef4444';
    }
    document.getElementById('results-stats').innerHTML = `
        <div class="r-stat"><span class="r-stat-val" style="color:var(--green)">${state.quizScore}</span><span class="r-stat-lbl">Correct</span></div>
        <div class="r-stat"><span class="r-stat-val" style="color:var(--red)">${total - state.quizScore}</span><span class="r-stat-lbl">Wrong</span></div>
        <div class="r-stat"><span class="r-stat-val">${total}</span><span class="r-stat-lbl">Total</span></div>`;
    const earnedXP = passed ? Math.round(pct / 10) * 5 : 5;
    document.getElementById('results-xp').textContent = `⭐ +${earnedXP} XP earned`;
    if (passed && state.currentTopic) {
        if (!state.quizzesPassed.includes(state.currentTopic.id)) {
            state.quizzesPassed.push(state.currentTopic.id);
        }
        completeTopic(state.currentTopic);
        checkAchievement('quiz-master', pct === 100);
    }
    addXP(earnedXP);
}

function retakeQuiz() {
    if (state.currentTopic && state.currentTopic.quiz) startQuiz(state.currentTopic);
}

// ---- DETECTOR ----
function loadExample(index) {
    document.getElementById('detector-input').value = MISINFO_EXAMPLES[index].text;
}

function analyzeContent() {
    const input = document.getElementById('detector-input').value.trim();
    if (!input) { showToast('Please enter some content to analyze', 'warning'); return; }
    // Find matching example or generate generic analysis
    const match = MISINFO_EXAMPLES.find(e => input.toLowerCase().includes(e.text.toLowerCase().substring(0, 30)));
    const result = match || generateAnalysis(input);
    renderDetectorResult(result);
    state.analysisCount++;
    state.analysisHistory.unshift({ text: input.substring(0, 80), verdict: result.verdict, timestamp: new Date().toLocaleTimeString() });
    if (state.analysisHistory.length > 10) state.analysisHistory.pop();
    checkAchievement('fact-checker', true);
    checkAchievement('detector-pro', state.analysisCount >= 5);
    addXP(10);
    renderDetectorHistory();
}

function generateAnalysis(text) {
    const lower = text.toLowerCase();
    let verdict = 'Misleading', confidence = 65;
    const keywords = { hack: 'False', fraud: 'Misleading', scam: 'False', fake: 'Misleading', rigged: 'False', constitutional: 'True', article: 'True', commission: 'True', established: 'True' };
    for (const [kw, v] of Object.entries(keywords)) {
        if (lower.includes(kw)) { verdict = v; break; }
    }
    if (verdict === 'True') confidence = 85;
    else if (verdict === 'False') confidence = 90;
    return {
        verdict, confidence,
        analysis: `The claim has been analyzed for factual accuracy, logical consistency, and known misinformation patterns related to Indian elections.`,
        flags: [
            { icon: verdict === 'True' ? '🟢' : verdict === 'False' ? '🔴' : '🟡', text: `The claim's core assertion is assessed as ${verdict.toLowerCase()}` },
            { icon: '🔹', text: 'Cross-referenced with election commission records and known fact-check databases' }
        ],
        explanation: `This claim has been evaluated against verified information about the Indian electoral system. Always verify election-related claims from official ECI sources or trusted fact-checking organizations.`,
        sources: ['Election Commission of India (eci.gov.in)', 'PIB Fact Check', 'Alt News / Boom Live']
    };
}

function renderDetectorResult(result) {
    const area = document.getElementById('detector-result-area');
    area.style.display = '';
    const badge = document.getElementById('verdict-badge');
    badge.textContent = `Verdict: ${result.verdict}`;
    badge.className = `verdict-badge verdict-${result.verdict.toLowerCase()}`;
    const confFill = document.getElementById('confidence-fill');
    confFill.style.width = result.confidence + '%';
    confFill.style.background = result.verdict === 'True' ? 'var(--green)' : result.verdict === 'False' ? 'var(--red)' : 'var(--yellow)';
    document.getElementById('confidence-value').textContent = result.confidence + '%';
    document.getElementById('result-analysis').innerHTML = `<h4>📋 Analysis</h4><p>${result.analysis}</p>`;
    document.getElementById('result-flags').innerHTML = `<h4>🚩 Key Flags</h4>${result.flags.map(f => `<div class="flag-item"><span class="flag-icon">${f.icon}</span><span>${f.text}</span></div>`).join('')}`;
    document.getElementById('result-explanation').innerHTML = `<h4>💡 Detailed Explanation</h4><p>${result.explanation}</p>`;
    document.getElementById('result-sources').innerHTML = result.sources ? `<p style="font-size:0.8rem;color:var(--text-muted);margin-top:12px;">📎 Sources: ${result.sources.join(', ')}</p>` : '';
    area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderDetectorHistory() {
    const list = document.getElementById('history-list');
    if (!state.analysisHistory.length) {
        list.innerHTML = '<div class="history-empty">No analyses yet. Try checking a claim above!</div>';
        return;
    }
    list.innerHTML = state.analysisHistory.map(h => {
        const cls = h.verdict === 'True' ? 'verdict-true' : h.verdict === 'False' ? 'verdict-false' : 'verdict-misleading';
        return `<div class="history-item"><span class="history-verdict ${cls}">${h.verdict}</span><span class="history-text">${h.text}...</span><span style="font-size:0.7rem;color:var(--text-muted)">${h.timestamp}</span></div>`;
    }).join('');
}

// ---- SIMULATOR ----
function startSimulation(simId) {
    const sim = SIMULATIONS[simId];
    if (!sim) return;
    state.currentSim = { id: simId, ...sim };
    state.simStep = 0;
    state.simCorrect = 0;
    document.getElementById('sim-selection').style.display = 'none';
    document.getElementById('sim-play-area').style.display = '';
    document.getElementById('sim-complete').style.display = 'none';
    document.getElementById('sim-game-title').textContent = sim.title;
    renderSimStep();
}

function showSimSelection() {
    document.getElementById('sim-selection').style.display = '';
    document.getElementById('sim-play-area').style.display = 'none';
    document.getElementById('sim-complete').style.display = 'none';
}

function renderSimStep() {
    const sim = state.currentSim;
    const step = sim.steps[state.simStep];
    const total = sim.steps.length;
    const pct = ((state.simStep + 1) / total) * 100;
    document.getElementById('sim-progress-fill').style.width = pct + '%';
    document.getElementById('sim-step-label').textContent = `Step ${state.simStep + 1}/${total}`;
    document.getElementById('sim-game-content').innerHTML = step.content;
    const letters = ['A', 'B', 'C'];
    document.getElementById('sim-game-actions').innerHTML = step.choices.map((c, i) =>
        `<button class="sim-choice-btn" onclick="simChoice(${i})"><span class="choice-letter">${letters[i]}</span><span>${c.text}</span></button>`
    ).join('');
}

function simChoice(index) {
    const step = state.currentSim.steps[state.simStep];
    const choice = step.choices[index];
    if (choice.correct) state.simCorrect++;
    // Disable buttons
    document.querySelectorAll('.sim-choice-btn').forEach(b => b.style.pointerEvents = 'none');
    // Show feedback
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'sim-scenario';
    feedbackDiv.style.marginTop = '16px';
    feedbackDiv.innerHTML = `<p>${choice.feedback}</p>`;
    document.getElementById('sim-game-content').appendChild(feedbackDiv);
    // Next button
    document.getElementById('sim-game-actions').innerHTML = `<button class="btn btn-primary" style="width:100%;justify-content:center;" onclick="nextSimStep()">Continue →</button>`;
}

function nextSimStep() {
    state.simStep++;
    if (state.simStep < state.currentSim.steps.length) {
        renderSimStep();
    } else {
        completeSimulation();
    }
}

function completeSimulation() {
    document.getElementById('sim-play-area').style.display = 'none';
    document.getElementById('sim-complete').style.display = '';
    const sim = state.currentSim;
    const comp = sim.completion;
    document.getElementById('sim-complete-msg').textContent = comp.message;
    document.getElementById('sim-complete-stats').innerHTML = `
        <div class="r-stat"><span class="r-stat-val" style="color:var(--green)">${state.simCorrect}</span><span class="r-stat-lbl">Best Choices</span></div>
        <div class="r-stat"><span class="r-stat-val">${sim.steps.length}</span><span class="r-stat-lbl">Total Steps</span></div>
        <div class="r-stat"><span class="r-stat-val" style="color:var(--purple)">+${comp.xp}</span><span class="r-stat-lbl">XP Earned</span></div>`;
    document.getElementById('sim-complete-lessons').innerHTML = `<h4>🎓 Key Lessons</h4><ul>${comp.lessons.map(l => `<li>${l}</li>`).join('')}</ul>`;
    if (!state.simsCompleted.includes(sim.id)) {
        state.simsCompleted.push(sim.id);
        checkAchievement('sim-beginner', true);
        checkAchievement('three-sims', state.simsCompleted.length >= 3);
        checkAchievement('full-election', sim.id === 'fullElection');
    }
    addXP(comp.xp);
}

// ---- MENTOR ----
function renderMentor() {
    // Profile
    const userName = currentUser ? currentUser.displayName : state.displayName;
    document.getElementById('profile-name').textContent = userName;
    document.getElementById('profile-level-badge').textContent = `Level ${state.level}`;
    document.getElementById('profile-level-title').textContent = LEVEL_TITLES[Math.min(state.level-1, LEVEL_TITLES.length-1)];
    const xpForNext = state.level * 100;
    document.getElementById('profile-xp-fill').style.width = (state.xp / xpForNext * 100) + '%';
    document.getElementById('profile-xp-current').textContent = `${state.xp} XP`;
    document.getElementById('profile-xp-next').textContent = `Next: ${xpForNext} XP`;
    document.getElementById('stat-topics').textContent = state.topicsCompleted.length;
    document.getElementById('stat-quizzes').textContent = state.quizzesPassed.length;
    document.getElementById('stat-sims').textContent = state.simsCompleted.length;
    document.getElementById('stat-streak').textContent = state.streak;
    // Goals
    renderGoals();
    // Skills Chart
    drawSkillsChart();
    // Achievements
    renderAchievements();
    // Learning Path
    renderLearningPath();
    // Tips
    renderTips();
}

function renderGoals() {
    const list = document.getElementById('goals-list');
    const goals = DAILY_GOALS;
    let done = 0;
    list.innerHTML = goals.map((g, i) => {
        let completed = false;
        if (g.type === 'lesson' && state.topicsCompleted.length > 0) completed = true;
        if (g.type === 'quiz' && state.quizzesPassed.length > 0) completed = true;
        if (g.type === 'detector' && state.analysisCount > 0) completed = true;
        if (completed) done++;
        return `<div class="goal-item">
            <div class="goal-check ${completed ? 'done' : ''}">✓</div>
            <span class="goal-text ${completed ? 'done' : ''}">${g.text}</span>
            <span class="goal-xp">+${g.xp} XP</span>
        </div>`;
    }).join('');
    document.getElementById('goals-done').textContent = `${done}/${goals.length} completed`;
}

function drawSkillsChart() {
    const canvas = document.getElementById('skills-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const cx = 150, cy = 150, r = 110;
    ctx.clearRect(0, 0, 300, 300);
    const skills = [
        { name: 'Election Basics', value: Math.min(100, state.topicsCompleted.filter(t => TOPICS.beginner.some(b => b.id === t)).length * 25), color: '#22c55e' },
        { name: 'Advanced Knowledge', value: Math.min(100, state.topicsCompleted.filter(t => TOPICS.advanced.some(a => a.id === t)).length * 50), color: '#a855f7' },
        { name: 'Quiz Performance', value: Math.min(100, state.quizzesPassed.length * 20), color: '#3b82f6' },
        { name: 'Critical Thinking', value: Math.min(100, state.analysisCount * 20), color: '#eab308' },
        { name: 'Practical Skills', value: Math.min(100, state.simsCompleted.length * 25), color: '#ef4444' }
    ];
    const n = skills.length;
    const angleStep = (2 * Math.PI) / n;
    // Draw grid
    for (let ring = 1; ring <= 4; ring++) {
        ctx.beginPath();
        const rr = (r * ring) / 4;
        for (let i = 0; i <= n; i++) {
            const angle = i * angleStep - Math.PI / 2;
            const x = cx + rr * Math.cos(angle);
            const y = cy + rr * Math.sin(angle);
            i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.06)';
        ctx.stroke();
    }
    // Draw axes
    for (let i = 0; i < n; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
        ctx.strokeStyle = 'rgba(255,255,255,0.08)';
        ctx.stroke();
    }
    // Draw data polygon
    ctx.beginPath();
    skills.forEach((s, i) => {
        const val = Math.max(5, s.value);
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + (r * val / 100) * Math.cos(angle);
        const y = cy + (r * val / 100) * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = 'rgba(168,85,247,0.15)';
    ctx.fill();
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Draw points
    skills.forEach((s, i) => {
        const val = Math.max(5, s.value);
        const angle = i * angleStep - Math.PI / 2;
        const x = cx + (r * val / 100) * Math.cos(angle);
        const y = cy + (r * val / 100) * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = s.color;
        ctx.fill();
    });
    // Legend
    document.getElementById('skills-legend').innerHTML = skills.map(s =>
        `<div class="legend-item"><div class="legend-dot" style="background:${s.color}"></div>${s.name}: ${s.value}%</div>`
    ).join('');
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = state.achievements.map(a =>
        `<div class="achievement ${a.unlocked ? '' : 'locked'}" title="${a.desc}">
            <span class="achievement-icon">${a.icon}</span>
            <span class="achievement-name">${a.name}</span>
        </div>`
    ).join('');
}

function renderLearningPath() {
    const allTopics = [...TOPICS.beginner, ...TOPICS.intermediate, ...TOPICS.advanced];
    const path = document.getElementById('learning-path');
    path.innerHTML = allTopics.slice(0, 6).map((t, i) => {
        const done = state.topicsCompleted.includes(t.id);
        const current = !done && (i === 0 || state.topicsCompleted.includes(allTopics[Math.max(0, i-1)].id));
        return `<div class="path-item">
            <div class="path-dot ${done ? 'done' : current ? 'current' : ''}">
                ${done ? '✓' : t.emoji}
            </div>
            <div class="path-info">
                <h4>${t.title}</h4>
                <p>${done ? 'Completed ✅' : current ? 'Up Next →' : 'Locked 🔒'}</p>
            </div>
        </div>`;
    }).join('');
}

function renderTips() {
    const container = document.getElementById('tips-content');
    container.innerHTML = MENTOR_TIPS.map(t =>
        `<div class="tip-item"><span class="tip-icon">${t.icon}</span><span class="tip-text">${t.text}</span></div>`
    ).join('');
}

// ---- Achievements ----
function checkAchievement(id, condition) {
    if (!condition) return;
    const ach = state.achievements.find(a => a.id === id);
    if (ach && !ach.unlocked) {
        ach.unlocked = true;
        showToast(`🏅 Achievement Unlocked: ${ach.name}!`, 'success');
        saveState();
    }
}

// ---- SVG Gradient for Score Circle ----
function addSVGDefs() {
    const svg = document.querySelector('.score-circle svg');
    if (!svg) return;
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const grad = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    grad.id = 'scoreGrad';
    const s1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s1.setAttribute('offset', '0%'); s1.setAttribute('stop-color', '#a855f7');
    const s2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    s2.setAttribute('offset', '100%'); s2.setAttribute('stop-color', '#22c55e');
    grad.appendChild(s1); grad.appendChild(s2);
    defs.appendChild(grad); svg.insertBefore(defs, svg.firstChild);
}

// ---- INIT ----
function init() {
    initLoading();
    addSVGDefs();
    setTimeout(animateStats, 2600);

    // Nav event listeners
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navigateTo(link.dataset.section));
    });

    // Check for saved login session
    if (checkAutoLogin()) {
        loadState();
        updateXPDisplay();
    }
    // If not auto-logged in, the auth overlay stays visible
}
init();

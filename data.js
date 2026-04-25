// ========== AEIS DATA MODULE ==========

const TOPICS = {
    beginner: [
        {
            id: 'what-is-election', emoji: '🗳️', title: 'What is an Election?',
            desc: 'Understand the fundamental concept of elections and why they matter in a democracy.',
            duration: '5 min', xp: 20,
            steps: [
                { title: '🗳️ What is an Election?', content: `<p>An <strong>election</strong> is a formal process in which citizens choose their representatives by voting. It is the backbone of any democracy.</p><div class="lesson-highlight"><strong>Think of it this way:</strong> Imagine your school needs a new class monitor. Everyone votes for who they think is best — that's an election!</div><p>In India, elections are used to choose leaders at every level — from village panchayats to the Prime Minister.</p>` },
                { title: '🏛️ Why Elections Matter', content: `<p>Elections give ordinary citizens the <strong>power to decide</strong> who will govern them. Without elections, there would be no accountability.</p><ul><li>🔹 They ensure <strong>peaceful transfer of power</strong></li><li>🔹 They give every citizen an <strong>equal voice</strong></li><li>🔹 They hold leaders <strong>accountable</strong></li><li>🔹 They protect <strong>fundamental rights</strong></li></ul><div class="lesson-example"><h4>💡 Real-World Example</h4><p>In 2024, over 640 million Indians voted in the Lok Sabha elections — the largest democratic exercise in human history!</p></div>` },
                { title: '📋 Types of Elections in India', content: `<p>India conducts several types of elections:</p><ul><li><strong>Lok Sabha Elections</strong> — Choose MPs for the national parliament (every 5 years)</li><li><strong>Vidhan Sabha Elections</strong> — Choose MLAs for state legislatures</li><li><strong>Local Body Elections</strong> — Panchayat, Municipal, Corporation elections</li><li><strong>Rajya Sabha Elections</strong> — Indirect election by MLAs</li><li><strong>Presidential Elections</strong> — Elected by an electoral college</li></ul><div class="lesson-highlight"><strong>Key Fact:</strong> India has the largest electorate in the world with nearly 970 million eligible voters!</div>` },
                { title: '⚖️ The Election Commission of India', content: `<p>The <strong>Election Commission of India (ECI)</strong> is the constitutional body that supervises all elections in India.</p><ul><li>📌 Established: 25th January 1950</li><li>📌 Head: Chief Election Commissioner (CEC)</li><li>📌 Article 324 of the Constitution gives it power</li><li>📌 It is independent of the government</li></ul><div class="lesson-example"><h4>💡 Did You Know?</h4><p>The ECI uses EVMs (Electronic Voting Machines) and VVPATs (Voter Verifiable Paper Audit Trail) to ensure transparent voting.</p></div>` },
                { title: '✅ Quick Summary', content: `<p>Let's recap what you learned:</p><ul><li>✅ Elections are the process of choosing representatives through voting</li><li>✅ They are essential for democracy, accountability, and equal representation</li><li>✅ India has multiple types of elections at different levels</li><li>✅ The Election Commission of India ensures free and fair elections</li></ul><div class="lesson-highlight"><strong>🎉 Great job!</strong> You've completed your first topic. Ready for a quiz?</div>` }
            ],
            quiz: [
                { q: 'What is the primary purpose of an election?', options: ['To create new laws', 'To choose representatives through voting', 'To collect taxes', 'To punish criminals'], correct: 1, explanation: 'Elections are formal processes where citizens vote to choose their representatives who will govern on their behalf.' },
                { q: 'Which body supervises elections in India?', options: ['Supreme Court', 'Parliament', 'Election Commission of India', 'President of India'], correct: 2, explanation: 'The Election Commission of India (ECI), established under Article 324, is the constitutional body that supervises all elections.' },
                { q: 'How often are Lok Sabha elections held?', options: ['Every 2 years', 'Every 4 years', 'Every 5 years', 'Every 6 years'], correct: 2, explanation: 'Lok Sabha elections are held every 5 years, unless dissolved earlier.' },
                { q: 'What does EVM stand for?', options: ['Electronic Vote Manager', 'Electronic Voting Machine', 'Election Verification Method', 'Electoral Vote Mechanism'], correct: 1, explanation: 'EVM stands for Electronic Voting Machine — used in Indian elections since 1982 (pilot) and fully since 2004.' },
                { q: 'Approximately how many eligible voters does India have?', options: ['100 million', '500 million', '970 million', '2 billion'], correct: 2, explanation: 'India has nearly 970 million eligible voters, making it the largest electorate in the world.' }
            ]
        },
        {
            id: 'voter-registration', emoji: '📝', title: 'Voter Registration',
            desc: 'Learn how to register as a voter and the importance of having a voter ID card.',
            duration: '6 min', xp: 25,
            steps: [
                { title: '📝 Why Register to Vote?', content: `<p>To participate in elections, you must be a <strong>registered voter</strong>. Without registration, you cannot cast your vote.</p><div class="lesson-highlight"><strong>Eligibility:</strong> Any Indian citizen who is 18 years or older on the qualifying date can register as a voter.</div><p>Your voter registration gives you a <strong>Voter ID card (EPIC)</strong> — your identity proof for voting.</p>` },
                { title: '📋 How to Register', content: `<p>There are multiple ways to register as a voter in India:</p><ul><li><strong>Online:</strong> Visit the National Voter Service Portal (voters.eci.gov.in) and fill Form 6</li><li><strong>Offline:</strong> Visit your nearest Electoral Registration Office</li><li><strong>Mobile App:</strong> Use the Voter Helpline App</li></ul><div class="lesson-example"><h4>📱 Documents Needed</h4><p>Age proof (birth certificate, passport, etc.), address proof, and a passport-size photograph.</p></div>` },
                { title: '🪪 The Voter ID Card', content: `<p>The <strong>EPIC (Electors Photo Identity Card)</strong> is your voter ID card. It contains:</p><ul><li>Your photograph and name</li><li>Your father's/husband's name</li><li>Date of birth and gender</li><li>Your address and constituency</li><li>A unique EPIC number</li></ul><div class="lesson-highlight"><strong>Important:</strong> While the voter ID is not mandatory to vote (other IDs work too), it is the most commonly accepted proof at polling stations.</div>` },
                { title: '✅ Summary', content: `<ul><li>✅ You must be 18+ and an Indian citizen to vote</li><li>✅ Register online, offline, or via mobile app using Form 6</li><li>✅ The EPIC card is your primary voter identity</li><li>✅ Check your name in the electoral roll before election day</li></ul><div class="lesson-highlight"><strong>🎯 Pro Tip:</strong> Always verify your name in the voter list before election day using the Voter Helpline App!</div>` }
            ],
            quiz: [
                { q: 'What is the minimum age to vote in India?', options: ['16 years', '18 years', '21 years', '25 years'], correct: 1, explanation: 'The minimum voting age in India is 18 years, as per the 61st Constitutional Amendment Act, 1988.' },
                { q: 'Which form is used for new voter registration?', options: ['Form 1', 'Form 6', 'Form 8', 'Form 11'], correct: 1, explanation: 'Form 6 is used for new voter registration in India.' },
                { q: 'What does EPIC stand for?', options: ['Electronic Poll Identity Card', 'Electors Photo Identity Card', 'Election Process ID Certificate', 'Electoral Public Identity Card'], correct: 1, explanation: 'EPIC stands for Electors Photo Identity Card — the official voter ID card.' },
                { q: 'Can you vote without a Voter ID card?', options: ['No, never', 'Yes, with other valid ID proofs', 'Only in local elections', 'Only if you are over 60'], correct: 1, explanation: 'Yes! While the EPIC is preferred, 12 other forms of identification are accepted at polling stations.' }
            ]
        },
        {
            id: 'voting-process', emoji: '🏫', title: 'The Voting Process',
            desc: 'Step-by-step guide to what happens on election day at the polling station.',
            duration: '7 min', xp: 25,
            steps: [
                { title: '🏫 Election Day Overview', content: `<p>Election day is the culmination of the entire electoral process. Here's what happens:</p><ul><li>📌 Polling stations open at <strong>7:00 AM</strong></li><li>📌 Voting continues till <strong>6:00 PM</strong></li><li>📌 Each voter gets approximately <strong>2-3 minutes</strong> inside</li></ul><div class="lesson-highlight"><strong>Fun Fact:</strong> India sets up polling stations within 2 km of every voter's residence. In 2024, there were over 1 million polling stations!</div>` },
                { title: '🚶 Step-by-Step Voting', content: `<p>Here's exactly what happens when you go to vote:</p><ul><li><strong>Step 1:</strong> Find your polling station (check Voter Helpline App)</li><li><strong>Step 2:</strong> Join the queue and wait for your turn</li><li><strong>Step 3:</strong> Show your ID to the polling officer</li><li><strong>Step 4:</strong> Get your finger marked with indelible ink</li><li><strong>Step 5:</strong> Enter the voting compartment</li><li><strong>Step 6:</strong> Press the button next to your chosen candidate on the EVM</li><li><strong>Step 7:</strong> Verify your vote on the VVPAT slip</li><li><strong>Step 8:</strong> Exit the polling station</li></ul>` },
                { title: '🖥️ Understanding the EVM', content: `<p>The <strong>Electronic Voting Machine (EVM)</strong> has two parts:</p><ul><li><strong>Control Unit:</strong> Operated by the polling officer</li><li><strong>Ballot Unit:</strong> Used by the voter to press the button</li></ul><div class="lesson-example"><h4>🔒 EVM Security Features</h4><p>EVMs are standalone machines with no internet connectivity. They can record a maximum of 2,000 votes and are sealed before elections.</p></div><p>The <strong>VVPAT</strong> (added since 2013) prints a paper slip showing your vote for 7 seconds so you can verify it.</p>` },
                { title: '✅ Summary', content: `<ul><li>✅ Voting happens between 7 AM and 6 PM</li><li>✅ You need valid ID to vote</li><li>✅ Indelible ink prevents duplicate voting</li><li>✅ EVMs are secure, standalone machines</li><li>✅ VVPAT allows vote verification</li></ul>` }
            ],
            quiz: [
                { q: 'What time do polling stations typically open in India?', options: ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM'], correct: 1, explanation: 'Polling stations typically open at 7:00 AM and close at 6:00 PM.' },
                { q: 'Why is indelible ink applied to your finger?', options: ['For decoration', 'To prevent duplicate voting', 'To verify age', 'For health screening'], correct: 1, explanation: 'Indelible ink is applied to prevent the same person from voting more than once.' },
                { q: 'What does VVPAT stand for?', options: ['Voter Verified Paper Audit Trail', 'Vote Validation Paper Automated Tool', 'Verified Voting Process Audit Track', 'Voter Validity Proof And Test'], correct: 0, explanation: 'VVPAT stands for Voter Verifiable Paper Audit Trail — it prints a slip showing your vote for verification.' }
            ]
        },
        {
            id: 'parties-symbols', emoji: '🏳️', title: 'Parties & Symbols',
            desc: 'Learn about political parties, their symbols, and how they participate in elections.',
            duration: '5 min', xp: 20,
            steps: [
                { title: '🏳️ Political Parties in India', content: `<p>Political parties are organizations of people with similar political ideas who contest elections to form the government.</p><div class="lesson-highlight"><strong>India has 3 types of recognized parties:</strong><br>1. National Parties (recognized in 4+ states)<br>2. State Parties (recognized in one state)<br>3. Registered Unrecognized Parties</div>` },
                { title: '🔣 Election Symbols', content: `<p>Each party is allotted a <strong>unique election symbol</strong> by the ECI. This helps voters, especially those who cannot read, identify their preferred party.</p><ul><li>🪷 <strong>Lotus</strong> — BJP</li><li>✋ <strong>Hand</strong> — INC (Congress)</li><li>🔔 <strong>Broom</strong> — AAP</li><li>⚙️ <strong>Hammer, Sickle & Star</strong> — CPI(M)</li></ul><div class="lesson-example"><h4>🎯 Why Symbols Matter</h4><p>In a country where literacy rates vary, symbols ensure every citizen can identify and vote for their preferred candidate.</p></div>` },
                { title: '✅ Summary', content: `<ul><li>✅ Parties are classified as National, State, or Unrecognized</li><li>✅ Each party gets a unique symbol from ECI</li><li>✅ Symbols help illiterate voters identify candidates</li><li>✅ Independent candidates also get symbols</li></ul>` }
            ],
            quiz: [
                { q: 'How many states must a party be recognized in to be a National Party?', options: ['2 states', '3 states', '4 states', 'All states'], correct: 2, explanation: 'A party must be recognized in at least 4 states to qualify as a National Party.' },
                { q: 'Who allots election symbols to parties?', options: ['Prime Minister', 'President', 'Election Commission', 'Supreme Court'], correct: 2, explanation: 'The Election Commission of India allots and manages election symbols for all parties.' }
            ]
        }
    ],
    intermediate: [
        {
            id: 'evm-technology', emoji: '🖥️', title: 'EVM Technology Deep Dive',
            desc: 'Understand how EVMs work, their security features, and the technology behind them.',
            duration: '8 min', xp: 35,
            steps: [
                { title: '🖥️ Inside an EVM', content: `<p>An EVM consists of two units linked by a 5-meter cable:</p><ul><li><strong>Control Unit (CU):</strong> With the presiding officer — controls the process</li><li><strong>Ballot Unit (BU):</strong> In the voting compartment — has candidate buttons</li></ul><div class="lesson-highlight"><strong>Technical Specs:</strong> The EVM uses a one-time programmable (OTP) chip. Once programmed, the software CANNOT be altered or reprogrammed.</div>` },
                { title: '🔒 Security Mechanisms', content: `<p>EVMs have multiple layers of security:</p><ul><li><strong>No Network:</strong> EVMs are standalone — no WiFi, Bluetooth, or internet</li><li><strong>Tamper Detection:</strong> Any attempt to open triggers self-locking</li><li><strong>OTP Chip:</strong> Software is burned into the chip during manufacturing</li><li><strong>Randomization:</strong> EVM distribution is randomized twice</li><li><strong>Sealing:</strong> Multiple seals with party agent signatures</li></ul><div class="lesson-example"><h4>🛡️ Mock Poll</h4><p>Before voting begins, a mock poll is conducted with at least 50 votes in front of party agents to verify EVM accuracy.</p></div>` },
                { title: '✅ Summary', content: `<ul><li>✅ EVMs use unhackable OTP chips</li><li>✅ No wireless connectivity of any kind</li><li>✅ Randomized distribution prevents targeting</li><li>✅ VVPAT adds paper verification layer</li></ul>` }
            ],
            quiz: [
                { q: 'What type of chip does an EVM use?', options: ['Reprogrammable chip', 'One-Time Programmable chip', 'Flash memory chip', 'Cloud-connected chip'], correct: 1, explanation: 'EVMs use One-Time Programmable (OTP) chips that cannot be reprogrammed after manufacturing.' },
                { q: 'How many times are EVMs randomized before elections?', options: ['Once', 'Twice', 'Three times', 'Not randomized'], correct: 1, explanation: 'EVMs are randomized twice — first for constituency allocation, then for specific polling station assignment.' }
            ]
        },
        {
            id: 'counting-process', emoji: '📊', title: 'Vote Counting Process',
            desc: 'Learn how votes are counted, results declared, and the role of returning officers.',
            duration: '7 min', xp: 30,
            steps: [
                { title: '📊 The Counting Day', content: `<p>Vote counting typically happens <strong>3 days after polling</strong>. Here's the process:</p><ul><li>📌 Counting starts at <strong>8:00 AM</strong></li><li>📌 Conducted at designated counting centers</li><li>📌 Supervised by the <strong>Returning Officer</strong></li><li>📌 Counting agents from all parties are present</li></ul><div class="lesson-highlight"><strong>Three Rounds:</strong> Postal ballots are counted first, then EVMs are opened round by round (each round = 14 EVMs).</div>` },
                { title: '📈 Result Declaration', content: `<p>After counting:</p><ul><li>The candidate with the <strong>most votes wins</strong> (First Past The Post system)</li><li>Results are announced by the Returning Officer</li><li>A formal certificate is issued to the winner</li><li>If the margin is very close, <strong>VVPAT verification</strong> may be conducted</li></ul><div class="lesson-example"><h4>🔢 FPTP System</h4><p>India uses the First Past The Post (FPTP) system — the candidate with the highest number of votes wins, even without a majority.</p></div>` },
                { title: '✅ Summary', content: `<ul><li>✅ Counting happens 3 days after polling at 8 AM</li><li>✅ Postal ballots are counted first</li><li>✅ India uses the FPTP electoral system</li><li>✅ VVPAT can be used for verification</li></ul>` }
            ],
            quiz: [
                { q: 'What electoral system does India use?', options: ['Proportional Representation', 'First Past The Post', 'Ranked Choice Voting', 'Two-Round System'], correct: 1, explanation: 'India uses the First Past The Post (FPTP) system where the candidate with the most votes wins.' },
                { q: 'What is counted first on counting day?', options: ['EVM votes', 'Postal ballots', 'VVPAT slips', 'Online votes'], correct: 1, explanation: 'Postal ballots are always counted first, before EVM counting begins.' }
            ]
        },
        {
            id: 'model-code', emoji: '📜', title: 'Model Code of Conduct',
            desc: 'Understand the rules political parties must follow during election season.',
            duration: '6 min', xp: 30,
            steps: [
                { title: '📜 What is the MCC?', content: `<p>The <strong>Model Code of Conduct (MCC)</strong> is a set of guidelines issued by the Election Commission that all political parties and candidates must follow during elections.</p><div class="lesson-highlight"><strong>When does it apply?</strong> From the date election dates are announced until results are declared.</div><p>The MCC covers behavior of parties, government, candidates, and the use of public resources.</p>` },
                { title: '📋 Key Rules', content: `<ul><li><strong>No appeals</strong> based on caste or religion</li><li><strong>No government ads</strong> with public money during elections</li><li><strong>No new schemes</strong> can be announced by the ruling party</li><li><strong>Equal access</strong> to public spaces for rallies</li><li><strong>No bribery</strong> or distribution of liquor</li><li><strong>Campaign silence</strong> 48 hours before polling</li></ul><div class="lesson-example"><h4>⚖️ Enforcement</h4><p>While the MCC isn't a law, the ECI enforces it strictly and can penalize parties, cancel nominations, or even defer elections.</p></div>` },
                { title: '✅ Summary', content: `<ul><li>✅ MCC applies from announcement to results</li><li>✅ Prohibits religious/caste appeals</li><li>✅ Stops government ad spending during elections</li><li>✅ Enforced by ECI though not a formal law</li></ul>` }
            ],
            quiz: [
                { q: 'When does the Model Code of Conduct begin?', options: ['When campaigning starts', 'When elections are announced', 'On polling day', '30 days before elections'], correct: 1, explanation: 'The MCC comes into effect from the date election schedule is announced by the ECI.' },
                { q: 'How many hours before polling must campaigning stop?', options: ['24 hours', '36 hours', '48 hours', '72 hours'], correct: 2, explanation: 'Campaigning must stop 48 hours before the scheduled polling time.' }
            ]
        }
    ],
    advanced: [
        {
            id: 'electoral-reforms', emoji: '⚖️', title: 'Electoral Reforms',
            desc: 'Explore major electoral reforms, challenges, and proposed changes in India\'s democracy.',
            duration: '10 min', xp: 50,
            steps: [
                { title: '⚖️ Major Electoral Reforms', content: `<p>India has undergone significant electoral reforms since independence:</p><ul><li><strong>1989:</strong> Voting age reduced from 21 to 18 (61st Amendment)</li><li><strong>2003:</strong> Introduction of EVMs nationwide</li><li><strong>2013:</strong> NOTA (None of the Above) option introduced</li><li><strong>2017:</strong> VVPAT mandated for all elections</li></ul><div class="lesson-highlight"><strong>NOTA:</strong> Supreme Court ruled in 2013 that voters have a right to reject all candidates. If NOTA gets the most votes, re-election is NOT mandatory (as of current rules).</div>` },
                { title: '🔮 Ongoing Debates', content: `<ul><li><strong>One Nation One Election:</strong> Conducting Lok Sabha and all state elections simultaneously</li><li><strong>Proportional Representation:</strong> Should India move beyond FPTP?</li><li><strong>State Funding of Elections:</strong> Reduce role of private money</li><li><strong>Criminalization:</strong> Preventing candidates with criminal records</li><li><strong>Digital Voting:</strong> Remote/blockchain-based voting possibilities</li></ul><div class="lesson-example"><h4>📊 Did You Know?</h4><p>In 2024 Lok Sabha elections, about 40% of winning MPs had criminal cases against them, highlighting the criminalization challenge.</p></div>` },
                { title: '✅ Summary', content: `<ul><li>✅ India continues to evolve its electoral system</li><li>✅ NOTA gives power to reject all candidates</li><li>✅ One Nation One Election is a major ongoing debate</li><li>✅ Criminalization remains a significant challenge</li></ul>` }
            ],
            quiz: [
                { q: 'When was NOTA introduced in Indian elections?', options: ['2003', '2009', '2013', '2017'], correct: 2, explanation: 'NOTA was introduced in 2013 following a Supreme Court ruling in the PUCL vs Union of India case.' },
                { q: 'What does "One Nation One Election" propose?', options: ['One voting machine per voter', 'Simultaneous national and state elections', 'Single national party', 'Abolishing state elections'], correct: 1, explanation: 'One Nation One Election proposes conducting Lok Sabha and all state assembly elections simultaneously.' }
            ]
        },
        {
            id: 'anti-defection', emoji: '🚫', title: 'Anti-Defection Law',
            desc: 'Deep dive into the 10th Schedule and its impact on legislative politics.',
            duration: '8 min', xp: 45,
            steps: [
                { title: '🚫 The Anti-Defection Law', content: `<p>The <strong>52nd Amendment (1985)</strong> added the <strong>10th Schedule</strong> to the Constitution, commonly called the Anti-Defection Law.</p><div class="lesson-highlight"><strong>Purpose:</strong> To prevent elected representatives from frequently switching parties for power or money, which destabilizes governments.</div>` },
                { title: '📋 Key Provisions', content: `<ul><li>A member is <strong>disqualified</strong> if they voluntarily give up party membership</li><li>Voting against party whip leads to disqualification</li><li>The <strong>Speaker</strong> of the House decides on disqualification</li><li><strong>Exception:</strong> If 2/3 of a party's legislators merge with another party, it's NOT defection</li></ul><div class="lesson-example"><h4>⚠️ Criticism</h4><p>Critics say the law gives too much power to party leadership and reduces the independence of individual legislators.</p></div>` },
                { title: '✅ Summary', content: `<ul><li>✅ Added via 52nd Amendment in 1985</li><li>✅ Prevents party-switching after elections</li><li>✅ Speaker decides disqualification</li><li>✅ 2/3 merger exception exists</li></ul>` }
            ],
            quiz: [
                { q: 'Which amendment introduced the Anti-Defection Law?', options: ['42nd', '44th', '52nd', '61st'], correct: 2, explanation: 'The 52nd Amendment Act, 1985 added the 10th Schedule (Anti-Defection Law) to the Constitution.' },
                { q: 'What fraction of legislators must agree for a "merger" exception?', options: ['1/2', '2/3', '3/4', 'All members'], correct: 1, explanation: 'If 2/3 or more of a party\'s legislators merge with another party, it is not considered defection.' }
            ]
        }
    ]
};

const MISINFO_EXAMPLES = [
    {
        text: 'EVMs can be hacked remotely using Bluetooth technology to change election results.',
        verdict: 'False',
        confidence: 95,
        analysis: 'This is a widely circulated false claim. EVMs used in Indian elections are completely standalone devices with NO wireless connectivity of any kind.',
        flags: [
            { icon: '🔴', text: 'Technical impossibility — EVMs have no Bluetooth, WiFi, or any network capability' },
            { icon: '🔴', text: 'OTP (One-Time Programmable) chips cannot be remotely altered' },
            { icon: '🔴', text: 'Multiple independent security audits have confirmed this' }
        ],
        explanation: 'EVMs are manufactured by Bharat Electronics Ltd (BEL) and Electronics Corporation of India Ltd (ECIL) under strict security protocols. The machines use OTP microcontrollers whose software is burned in during manufacturing and cannot be reprogrammed. They have no ports, antennas, or wireless modules. The ECI has conducted multiple open challenges, and no one has demonstrated remote hacking capability.',
        sources: ['Election Commission of India official statements', 'Supreme Court of India judgments', 'Technical audits by IIT experts']
    },
    {
        text: 'Millions of fake voters are registered in the electoral rolls, and dead people regularly vote in Indian elections.',
        verdict: 'Misleading',
        confidence: 80,
        analysis: 'While electoral roll maintenance is an ongoing challenge, the claim of "millions of fake voters" and "dead people voting regularly" is a significant exaggeration of isolated incidents.',
        flags: [
            { icon: '🟡', text: 'Exaggeration of scale — isolated incidents are presented as systemic fraud' },
            { icon: '🟡', text: 'Ignores the continuous purification process by ECI' },
            { icon: '🟡', text: 'Lacks specific data or sources to support "millions" claim' }
        ],
        explanation: 'The ECI conducts regular revision of electoral rolls, removing deceased voters and duplicate entries. While some discrepancies exist in a country with 970 million voters, the ECI\'s EPIC system, Aadhaar linking, and booth-level officers work to maintain accuracy. Impersonation at polling stations is also prevented through indelible ink, photo verification, and strict monitoring.',
        sources: ['ECI annual reports on electoral roll revision', 'Systematic Voters Education and Electoral Participation (SVEEP)']
    },
    {
        text: 'The ruling party promised free electricity and laptops for all if re-elected. These promises will definitely be fulfilled.',
        verdict: 'Misleading',
        confidence: 75,
        analysis: 'While parties do make campaign promises (manifesto commitments), claiming they "will definitely be fulfilled" is misleading as election promises are not legally binding.',
        flags: [
            { icon: '🟡', text: 'Election manifestos are not legally enforceable documents' },
            { icon: '🟡', text: 'History shows many manifesto promises remain unfulfilled' },
            { icon: '🟡', text: '"Freebies" debate — Supreme Court has raised concerns about fiscal responsibility' }
        ],
        explanation: 'Election manifestos contain aspirational promises, not legal commitments. The Supreme Court has ruled that while manifestos are not legally binding, they are an important part of the democratic process. Voters should evaluate promises based on fiscal feasibility and the party\'s track record.',
        sources: ['Supreme Court judgments on election manifestos', 'S. Subramaniam Balaji vs Government of Tamil Nadu (2013)']
    },
    {
        text: 'The Election Commission of India is an independent constitutional body established under Article 324 of the Constitution.',
        verdict: 'True',
        confidence: 98,
        analysis: 'This is factually accurate. The Election Commission of India is indeed established as an independent constitutional body under Article 324.',
        flags: [
            { icon: '🟢', text: 'Accurately references Article 324 of the Constitution' },
            { icon: '🟢', text: 'Correctly identifies ECI as a constitutional body' },
            { icon: '🟢', text: 'The term "independent" is constitutionally supported' }
        ],
        explanation: 'Article 324 of the Indian Constitution vests the superintendence, direction, and control of elections in the Election Commission. The ECI was established on January 25, 1950. It has the power to conduct elections at all levels — from Panchayat to Parliament — in a free and fair manner.',
        sources: ['Constitution of India, Article 324', 'Election Commission of India official website']
    }
];

const SIMULATIONS = {
    voting: {
        title: '🗳️ Voting Day Simulation',
        steps: [
            {
                content: `<h3>🌅 It's Election Day!</h3><p>You wake up to the news that today is the Lok Sabha election in your constituency — <strong>Mumbai North</strong>. The polling station is 1 km from your home at the local government school.</p><div class="sim-scenario"><h4>📋 Scenario</h4><p>Your name is Priya, a 22-year-old first-time voter. You received your Voter ID card last month. The polling time is 7:00 AM to 6:00 PM.</p></div><p>What do you do first?</p>`,
                choices: [
                    { text: 'Check if my name is in the voter list using the Voter Helpline App', correct: true, feedback: '✅ Smart move! Always verify your name in the voter list before heading to the polling station. This saves time and ensures you go to the right booth.' },
                    { text: 'Go directly to the polling station without checking anything', correct: false, feedback: '⚠️ It\'s better to verify your name first! Many voters waste time at wrong polling stations. Always check the Voter Helpline App.' },
                    { text: 'Wait until evening to avoid crowds', correct: false, feedback: '⚠️ While avoiding crowds isn\'t wrong, morning voting is recommended. You might run into last-minute issues that can\'t be resolved late in the day.' }
                ]
            },
            {
                content: `<h3>🚶 Arriving at the Polling Station</h3><p>Great! You verified your name and booth number. You arrive at the polling station at 8:30 AM. There's a queue of about 30 people.</p><div class="sim-scenario"><h4>📋 What you see</h4><p>Security personnel at the entrance, a help desk, and signboards showing booth numbers. You also notice campaign volunteers from different parties near the entrance.</p></div><p>A campaign volunteer offers you a pamphlet and asks who you're voting for. What do you do?</p>`,
                choices: [
                    { text: 'Politely decline and maintain your privacy — voting is a secret right', correct: true, feedback: '✅ Correct! Your vote is your secret. No one can force you to reveal who you vote for. Also, campaigning within 100 meters of a polling station is illegal!' },
                    { text: 'Take the pamphlet and discuss candidates with them', correct: false, feedback: '⚠️ Campaigning within 100 meters of a polling station is prohibited. You should avoid engaging and inform the presiding officer if it continues.' },
                    { text: 'Report them immediately to the police', correct: false, feedback: '🔹 While you could report, the first step should be to politely decline and inform the polling station officials, not jump straight to police action.' }
                ]
            },
            {
                content: `<h3>✅ Identity Verification</h3><p>It's your turn! You step up to the first polling officer at the desk. They ask for your identification.</p><div class="sim-scenario"><h4>📋 Available IDs</h4><p>You have your Voter ID card (EPIC), Aadhaar card, and a PAN card in your bag.</p></div><p>Which ID do you present?</p>`,
                choices: [
                    { text: 'Voter ID card (EPIC)', correct: true, feedback: '✅ Perfect choice! The EPIC is the preferred identification at polling stations. Your details are matched with the electoral roll.' },
                    { text: 'Aadhaar card', correct: false, feedback: '🔹 Aadhaar is accepted as one of the 12 valid IDs, but the EPIC is the primary and preferred document at polling stations.' },
                    { text: 'PAN card', correct: false, feedback: '⚠️ PAN card is NOT in the list of 12 approved identification documents for voting purposes. You would need to show another valid ID.' }
                ]
            },
            {
                content: `<h3>✍️ Indelible Ink & EVM</h3><p>Your identity is verified! The polling officer marks your left index finger with indelible ink and you sign the voter register.</p><p>You enter the voting compartment and see the <strong>EVM ballot unit</strong> with candidate names and party symbols.</p><div class="sim-scenario"><h4>🗳️ Candidates</h4><p>You see 6 candidates from different parties and a NOTA option. You've already decided who to vote for based on your research.</p></div><p>What do you do?</p>`,
                choices: [
                    { text: 'Press the blue button next to your chosen candidate and verify on VVPAT', correct: true, feedback: '✅ You pressed the button, heard a beep, and saw your vote appear on the VVPAT slip for 7 seconds. Your vote is recorded! Well done!' },
                    { text: 'Take a photo of the EVM as proof of voting', correct: false, feedback: '🚫 Taking photos inside the voting compartment is STRICTLY PROHIBITED and is a criminal offense. You could face legal consequences.' },
                    { text: 'Ask the polling officer who to vote for', correct: false, feedback: '🚫 Polling officers are strictly neutral! They cannot advise or influence your vote in any way. Your vote is your personal choice.' }
                ]
            },
            {
                content: `<h3>🎉 Congratulations, You Voted!</h3><p>You successfully cast your first vote! As you exit the polling station, you feel a sense of pride and civic responsibility.</p><div class="sim-scenario"><h4>🏆 What You Learned</h4><p>The entire process took about 15 minutes — from queue to exit. Your vote is now securely stored in the EVM and will be counted on counting day.</p></div><p>One last thing — your friend calls and says they want to know the VVPAT slip result. What do you tell them?</p>`,
                choices: [
                    { text: 'I saw my vote on the VVPAT slip but won\'t reveal who I voted for — it\'s my secret!', correct: true, feedback: '✅ Absolutely right! The secrecy of the ballot is a fundamental principle. You verified your vote was recorded correctly via VVPAT, and that\'s all that matters.' },
                    { text: 'Share a detailed description of who you voted for', correct: false, feedback: '⚠️ While not illegal to share after voting, the principle of secret ballot encourages privacy. It protects you from pressure and intimidation.' },
                    { text: 'Tell them you couldn\'t see the VVPAT slip', correct: false, feedback: '🔹 The VVPAT slip is visible for 7 seconds after you press the EVM button. If you couldn\'t see it, you should have informed the presiding officer immediately.' }
                ]
            }
        ],
        completion: {
            message: 'You\'ve successfully experienced the complete voting process as a first-time voter! You made informed decisions at every step.',
            lessons: ['Always verify your voter registration before election day', 'Carry your EPIC (Voter ID) to the polling station', 'Campaigning near polling stations is illegal', 'Never take photos inside the voting compartment', 'Your vote is your secret — VVPAT helps you verify it'],
            xp: 40
        }
    },
    campaign: {
        title: '📢 Campaign Strategy Simulation',
        steps: [
            {
                content: `<h3>📢 You're a Campaign Manager!</h3><p>You've been appointed as the campaign manager for a Lok Sabha candidate in <strong>Lucknow constituency</strong>. The election is 30 days away.</p><div class="sim-scenario"><h4>📊 Constituency Profile</h4><p>Urban-rural mix, 18 lakh voters, diverse demographics. Your candidate is a first-timer from a major national party.</p></div><p>What's your first priority?</p>`,
                choices: [
                    { text: 'Conduct a voter survey to understand key issues and concerns', correct: true, feedback: '✅ Excellent strategy! Understanding voter concerns is the foundation of any successful campaign. Data-driven campaigns are more effective than emotional ones.' },
                    { text: 'Start printing posters and booking rally venues', correct: false, feedback: '⚠️ While promotion matters, without understanding voter concerns first, your messaging won\'t resonate. Survey first, then strategize!' },
                    { text: 'Offer free items to attract voters at rallies', correct: false, feedback: '🚫 Distributing freebies during elections is considered a corrupt practice under the Representation of People Act and violates the Model Code of Conduct!' }
                ]
            },
            {
                content: `<h3>📊 Survey Results Are In!</h3><p>Your survey of 5,000 voters reveals the top concerns:</p><ul><li>1️⃣ Employment & Jobs (42%)</li><li>2️⃣ Water & Infrastructure (28%)</li><li>3️⃣ Education Quality (18%)</li><li>4️⃣ Safety & Security (12%)</li></ul><div class="sim-scenario"><h4>💰 Budget</h4><p>You have a campaign budget of ₹70 lakhs (the legal limit for a Lok Sabha candidate). How do you allocate it?</p></div>`,
                choices: [
                    { text: 'Balanced approach: Ground-level outreach (40%), Digital/social media (30%), Rallies (20%), Logistics (10%)', correct: true, feedback: '✅ A balanced strategy! Modern campaigns need both ground presence and digital reach. This allocation covers all demographics effectively.' },
                    { text: 'Spend 80% on large rallies and celebrity endorsements', correct: false, feedback: '⚠️ Large rallies are expensive and reach limited voters. A balanced approach with ground-level and digital outreach is more cost-effective.' },
                    { text: 'Invest everything in social media and ignore ground campaigns', correct: false, feedback: '⚠️ In India, a significant portion of voters, especially in rural areas, aren\'t heavy social media users. Ground campaigns remain essential.' }
                ]
            },
            {
                content: `<h3>⚠️ Crisis Management!</h3><p>A rival candidate spreads a <strong>fake video</strong> showing your candidate making controversial remarks. The video is going viral on social media.</p><div class="sim-scenario"><h4>📱 Impact</h4><p>The video has 2 million views already. Media channels are calling for comments. Your candidate is worried.</p></div><p>How do you respond?</p>`,
                choices: [
                    { text: 'Issue an official statement with evidence it\'s fake, file a complaint with ECI, and report the video to platforms', correct: true, feedback: '✅ Professional and effective! Using official channels (ECI complaint) and platform reporting is the right approach. Evidence-based response beats emotional reactions.' },
                    { text: 'Create a fake video of the rival candidate in retaliation', correct: false, feedback: '🚫 Creating fake content is unethical and potentially illegal! It violates the IT Act and MCC, and could disqualify your candidate.' },
                    { text: 'Ignore it and hope it goes away', correct: false, feedback: '⚠️ In the age of social media, ignoring viral misinformation can be devastating. Address it quickly, factually, and through proper channels.' }
                ]
            },
            {
                content: `<h3>🗓️ Final Day Before Polling</h3><p>It's 48 hours before polling — the <strong>campaign silence period</strong> has begun. No more rallies, speeches, or promotional activities.</p><div class="sim-scenario"><h4>📋 Situation</h4><p>Your team wants to do "one last push" — a small door-to-door campaign in key areas. Booths agents need final briefing.</p></div><p>What do you decide?</p>`,
                choices: [
                    { text: 'Stop all campaigning strictly and only brief booth agents on election-day logistics', correct: true, feedback: '✅ Correct! Campaigning during the silence period is a violation of MCC. You can only prepare logistics and brief agents about their roles — no voter contact for persuasion.' },
                    { text: 'Send "personal" WhatsApp messages to voters — it\'s not technically campaigning', correct: false, feedback: '🚫 WhatsApp messages asking for votes during the silence period IS campaigning! ECI monitors digital channels too. This could lead to penalties.' },
                    { text: 'Do a small, quiet door-to-door campaign hoping nobody notices', correct: false, feedback: '🚫 Any form of campaigning during the silence period is a violation. Rival parties have observers everywhere and will report it immediately.' }
                ]
            }
        ],
        completion: {
            message: 'You\'ve navigated the complex world of political campaign management! From strategy to crisis management, you handled it like a pro.',
            lessons: ['Data-driven campaigns are more effective than emotional ones', 'Campaign spending has legal limits (₹70 lakhs for Lok Sabha)', 'Fake content creation is illegal and unethical', 'The 48-hour campaign silence period is strictly enforced', 'Balanced budget allocation across channels is key'],
            xp: 55
        }
    },
    counting: {
        title: '📊 Vote Counting Simulation',
        steps: [
            {
                content: `<h3>📊 Welcome to the Counting Center!</h3><p>You are a <strong>Counting Observer</strong> appointed by the Election Commission. Today is counting day for the constituency of <strong>Varanasi</strong>.</p><div class="sim-scenario"><h4>📋 Setup</h4><p>The counting center is at a government college. 1,500 EVMs from 1,500 polling stations are stored in a strong room, sealed and under 24/7 CCTV surveillance since polling day.</p></div><p>As counting begins at 8 AM, what happens first?</p>`,
                choices: [
                    { text: 'Postal ballots are counted first, before any EVMs', correct: true, feedback: '✅ Correct! Postal ballots (including service voters, election duty staff, and senior citizens) are always counted first. This process happens on separate tables.' },
                    { text: 'All EVMs are opened simultaneously', correct: false, feedback: '⚠️ EVMs are opened in rounds, not all at once. And postal ballot counting always precedes EVM counting.' },
                    { text: 'VVPAT slips are counted first for verification', correct: false, feedback: '⚠️ VVPAT verification happens for 5 randomly selected EVMs per constituency, after the main counting, not before.' }
                ]
            },
            {
                content: `<h3>🔢 EVM Counting Begins</h3><p>Postal ballots are done. Now EVM counting starts. EVMs are brought in from the strong room in batches of 14.</p><div class="sim-scenario"><h4>📋 Round 1</h4><p>14 EVMs are placed on 14 counting tables. Each table has a counting supervisor and agents from all candidates. The Returning Officer gives the signal.</p></div><p>How are votes extracted from the EVM?</p>`,
                choices: [
                    { text: 'The result button on the control unit is pressed to display vote totals', correct: true, feedback: '✅ Correct! The "Result" button on the CU displays the total votes received by each candidate. These numbers are recorded on a result sheet and signed by agents.' },
                    { text: 'Each vote is manually replayed and counted', correct: false, feedback: '⚠️ EVMs don\'t replay individual votes. The control unit has a "Result" button that displays the total count for each candidate directly.' },
                    { text: 'The EVM is connected to a computer for data transfer', correct: false, feedback: '🚫 EVMs are NEVER connected to any external device or computer! The count is displayed on the CU screen and manually recorded.' }
                ]
            },
            {
                content: `<h3>📈 Results Emerging</h3><p>After 10 rounds, a clear pattern is emerging:</p><ul><li>Candidate A (Party X): 2,45,000 votes</li><li>Candidate B (Party Y): 2,42,800 votes</li><li>Candidate C (Independent): 18,500 votes</li><li>NOTA: 3,200 votes</li></ul><div class="sim-scenario"><h4>⚠️ Close Contest!</h4><p>The margin between the top two candidates is just 2,200 votes with 5 more rounds to go. An agent demands a recount. Can they?</p></div>`,
                choices: [
                    { text: 'A recount is possible — any candidate can request it, and the Returning Officer decides', correct: true, feedback: '✅ Correct! Under the rules, a candidate or their agent can request a recount. The Returning Officer has the authority to allow or deny it based on merit.' },
                    { text: 'Once counted, there is no provision for recount', correct: false, feedback: '⚠️ Recounts are allowed! The Returning Officer can order a recount of all or specific EVMs if there are legitimate concerns.' },
                    { text: 'Only the Supreme Court can order a recount', correct: false, feedback: '⚠️ The Returning Officer at the counting center has the authority to order a recount. Courts can also intervene, but the first recourse is with the RO.' }
                ]
            }
        ],
        completion: {
            message: 'You\'ve witnessed the complete vote counting process! You now understand how India transforms votes into results.',
            lessons: ['Postal ballots are always counted first', 'EVMs display results via a Result button — no computers involved', 'Counting happens in rounds of 14 EVMs', 'VVPAT verification is done for 5 random EVMs per constituency', 'Recounts can be requested through the Returning Officer'],
            xp: 45
        }
    },
    fullElection: {
        title: '🏛️ Full Election Cycle',
        steps: [
            {
                content: `<h3>🏛️ The Election is Announced!</h3><p>The Election Commission has just announced the schedule for Lok Sabha elections. As a citizen-observer, you'll experience the entire election cycle.</p><div class="sim-scenario"><h4>📅 Key Dates</h4><p>Notification: March 15 | Last date for nominations: March 22 | Scrutiny: March 23 | Polling: April 19 | Counting: April 23</p></div><p>The Model Code of Conduct is now in effect. What does this mean?</p>`,
                choices: [
                    { text: 'The ruling government cannot announce new policies, schemes, or make transfers — level playing field for all', correct: true, feedback: '✅ Exactly! The MCC ensures the ruling party doesn\'t misuse government machinery for electoral advantage. No new schemes, no government-funded ads, no transfers.' },
                    { text: 'Government continues to function normally with no restrictions', correct: false, feedback: '⚠️ The MCC significantly restricts the ruling government\'s functioning — no new policies, no inaugurations, no transfers, limited spending.' },
                    { text: 'Only the opposition faces restrictions during MCC', correct: false, feedback: '🚫 The MCC applies equally to ALL parties, but has special provisions restricting the ruling party from using government resources for electoral gain.' }
                ]
            },
            {
                content: `<h3>📋 Nomination Process</h3><p>It's March 20 — candidates are filing their nominations. A candidate must submit:</p><ul><li>Nomination papers with proposer signatures</li><li>Security deposit: ₹25,000 (₹12,500 for SC/ST candidates)</li><li>Mandatory affidavit on criminal cases, assets, and education</li></ul><div class="sim-scenario"><h4>🔍 Scrutiny</h4><p>You notice a candidate has filed papers from two different constituencies. Is this allowed?</p></div>`,
                choices: [
                    { text: 'Yes, a candidate can contest from up to 2 constituencies simultaneously', correct: true, feedback: '✅ Correct! A candidate can contest from a maximum of 2 constituencies. If they win both, they must vacate one within 14 days, triggering a by-election.' },
                    { text: 'No, a candidate can only contest from one constituency', correct: false, feedback: '🔹 Actually, Indian election law allows candidates to contest from up to 2 constituencies. If they win both, they must relinquish one.' },
                    { text: 'A candidate can contest from unlimited constituencies', correct: false, feedback: '⚠️ Until 1996, there was no limit. Now, a candidate can contest from a maximum of 2 constituencies as per the amendment to the RPA.' }
                ]
            },
            {
                content: `<h3>🗳️ Polling Day!</h3><p>April 19 — Millions head to polling stations across the phase. You observe the process as a volunteer.</p><div class="sim-scenario"><h4>📊 Observations</h4><p>By 1 PM, your constituency shows 45% voter turnout. You hear reports of some EVM malfunctions at 3 booths and a complaint about a candidate distributing money near a polling station.</p></div><p>What typically happens when an EVM malfunctions?</p>`,
                choices: [
                    { text: 'It\'s replaced with a spare EVM, and votes already cast on the old machine remain counted', correct: true, feedback: '✅ Correct! Every polling station keeps spare EVMs. If one malfunctions, it\'s replaced. Votes already recorded on the original machine are preserved and counted.' },
                    { text: 'Polling is cancelled at that booth and rescheduled', correct: false, feedback: '⚠️ Polling is only cancelled and rescheduled in extreme cases. Minor malfunctions are handled by replacing the EVM with a spare.' },
                    { text: 'Voters are asked to use paper ballots instead', correct: false, feedback: '⚠️ India doesn\'t switch to paper ballots if EVMs malfunction. Spare EVMs are used. Paper ballots are only used in very rare, exceptional circumstances.' }
                ]
            },
            {
                content: `<h3>📊 Counting & Results!</h3><p>April 23 — Counting day. Results start flowing in from 8 AM. By noon, trends are clear in most constituencies.</p><div class="sim-scenario"><h4>🏆 Result</h4><p>The election produces a hung parliament — no single party has 272 seats needed for majority. Coalition talks begin immediately.</p></div><p>What happens in a hung parliament scenario?</p>`,
                choices: [
                    { text: 'The President invites the largest party/coalition to prove majority on the floor of the House', correct: true, feedback: '✅ Correct! In a hung parliament, the President typically invites the largest party or pre-election coalition to attempt forming the government and prove majority within a specified timeframe.' },
                    { text: 'Elections are immediately held again', correct: false, feedback: '⚠️ Re-elections don\'t happen immediately. The President invites parties to try forming a government. Only if all attempts fail might fresh elections be considered.' },
                    { text: 'The party with most seats automatically forms the government', correct: false, feedback: '⚠️ Having the most seats doesn\'t automatically mean forming the government. A party/coalition must prove majority (272 seats) on the floor of the House.' }
                ]
            }
        ],
        completion: {
            message: 'You\'ve experienced a complete Lok Sabha election cycle from announcement to government formation! This is the essence of Indian democracy.',
            lessons: ['MCC restricts the ruling government from the date of announcement', 'Candidates can contest from up to 2 constituencies', 'Spare EVMs replace malfunctioning ones — votes remain safe', 'A party needs 272 seats (simple majority) to form Lok Sabha government', 'In a hung parliament, the President invites the largest coalition'],
            xp: 70
        }
    }
};

const ACHIEVEMENTS = [
    { id:'first-lesson', icon:'📖', name:'First Lesson', desc:'Complete your first lesson', unlocked: false },
    { id:'quiz-master', icon:'🏆', name:'Quiz Master', desc:'Score 100% on any quiz', unlocked: false },
    { id:'sim-beginner', icon:'🎮', name:'Simulator Beginner', desc:'Complete your first simulation', unlocked: false },
    { id:'fact-checker', icon:'🔍', name:'Fact Checker', desc:'Analyze your first claim', unlocked: false },
    { id:'five-topics', icon:'📚', name:'Bookworm', desc:'Complete 5 topics', unlocked: false },
    { id:'three-sims', icon:'🎯', name:'Sim Expert', desc:'Complete 3 simulations', unlocked: false },
    { id:'level-5', icon:'⭐', name:'Rising Star', desc:'Reach Level 5', unlocked: false },
    { id:'streak-3', icon:'🔥', name:'On Fire', desc:'3-day learning streak', unlocked: false },
    { id:'all-beginner', icon:'🌱', name:'Beginner Done', desc:'Complete all beginner topics', unlocked: false },
    { id:'detector-pro', icon:'🛡️', name:'Misinfo Hunter', desc:'Analyze 5 claims', unlocked: false },
    { id:'level-10', icon:'👑', name:'Election Guru', desc:'Reach Level 10', unlocked: false },
    { id:'full-election', icon:'🏛️', name:'Democracy Hero', desc:'Complete Full Election sim', unlocked: false }
];

const LEVEL_TITLES = [
    'Election Novice', 'Civic Learner', 'Ballot Buddy', 'Democracy Scout',
    'Voter Advocate', 'Civic Champion', 'Electoral Scholar', 'Democracy Guardian',
    'Governance Expert', 'Election Authority', 'Constitutional Sage', 'Democracy Legend'
];

const DAILY_GOALS = [
    { text: 'Complete 1 lesson topic', xp: 15, type: 'lesson' },
    { text: 'Pass a quiz with 60%+ score', xp: 20, type: 'quiz' },
    { text: 'Try the Misinformation Detector', xp: 10, type: 'detector' }
];

const MENTOR_TIPS = [
    { icon: '💡', text: 'Start with beginner topics to build a strong foundation before moving to advanced concepts.' },
    { icon: '🎯', text: 'Quizzes reinforce memory by 40% — always take the quiz after completing a lesson!' },
    { icon: '📊', text: 'The Misinformation Detector helps you develop critical thinking skills essential for informed voting.' },
    { icon: '🎮', text: 'Simulations offer experiential learning — try the Voting Simulation first for a hands-on experience.' },
    { icon: '🔥', text: 'Maintain a daily learning streak for maximum retention and bonus XP rewards!' }
];

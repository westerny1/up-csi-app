<script lang="ts">
    import { createClient } from '@supabase/supabase-js';
    import { env } from '$env/dynamic/public';
    // Alphabetical imports
    import CheckboxQuestion from './CheckboxQuestion.svelte';
    import LongTextQuestion from './LongTextQuestion.svelte';
    import RadioQuestion from './RadioQuestion.svelte';
    import SectionNav from './SectionNav.svelte';
    import ShortTextQuestion from './ShortTextQuestion.svelte';

    // Supabase client
    const supabase = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY);

    // first pull out `data`
    const { data } = $props();
    // then destructure `user` from that
    const { user } = data;

    // State variables for messages
    let submissionError = $state('');
    let submissionSuccess = $state('');

    // not used
    const mv1 = $state('');
    const mv2 = $state('');
    const mv3 = $state('');
    const ec1 = $state('');
    const ec2 = $state('');
    const ec3 = $state('');
    const b1 = $state('');
    const b2 = $state('');
    const b3 = $state('');
    const b4 = $state('');
    const b5 = $state('');
    // quiz state
    let preamble1 = $state(''),
        preamble2 = $state(''),
        preamble3 = $state(''),
        preamble4 = $state(''),
        preamble5 = $state('');
    let mv4 = $state('');
    let tf1 = $state(''),
        tf2 = $state(''),
        tf3 = $state(''),
        tf4 = $state(''),
        tf5 = $state(''),
        tf6 = $state(''),
        tf7 = $state(''),
        tf8 = $state(''),
        tf9 = $state('');
    let mc1 = $state(''),
        mc2 = $state(''),
        mc3 = $state(''),
        mc5 = $state('');
    let mc4 = $state<string[]>([]);

    function calculateClosedEndedScore(): number {
        // Helper to turn "1" or "0" (or empty) into a 1 or 0
        const toNum = (s: string) => {
            if (s === '') return 0;
            const n = parseInt(s, 10);
            return isNaN(n) ? 0 : n;
        };

        // Add up points from all radio button questions (each worth 1 point)
        const radioScores = [
            preamble1,
            preamble2,
            preamble3,
            preamble4,
            preamble5, // 5 points
            mv4, // 1 point
            tf1,
            tf2,
            tf3,
            tf4,
            tf5,
            tf6,
            tf7,
            tf8,
            tf9, // 9 points
            mc1,
            mc2,
            mc3,
            mc5, // 4 points
        ].map(toNum);

        // Calculate score from checkbox question (potentially multiple points)
        // Each correct checkbox selection is worth 1 point
        const checkboxScore = mc4.length > 0 ? mc4.map(toNum).reduce((a, b) => a + b, 0) : 0;

        // Sum all scores
        return radioScores.reduce((a, b) => a + b, 0) + checkboxScore;
    }

    async function handleSubmit() {
        const username = user?.email?.split('@')[0] ?? 'anonymous';
        const score = calculateClosedEndedScore();

        const { error } = await supabase
            .from('consti-quiz')
            .insert([{ name: username, score, created_at: new Date().toISOString() }]);

        if (error) {
            submissionError = 'Failed to submit score. Please try again.';
            submissionSuccess = '';
        } else {
            submissionSuccess = `Your score of ${score} has been submitted!`;
            submissionError = '';
        }
    }
</script>

<div class="flex h-screen bg-[#161619] text-[#F9FAFB]">
    <!-- Right side container (flexbox column) -->
    <div class="flex flex-1 flex-col bg-[#161619]">
        <!-- Banner at top (full width) -->
        <div class="bg-[#161619] p-8 pb-4">
            <h1 class="text-5xl font-bold">Constitution Quiz</h1>
        </div>

        <!-- Content area -->
        <div class="flex flex-1 overflow-hidden">
            <!-- Main Content -->
            <main class="w-3/5 overflow-y-auto bg-[#161619] p-8 pt-4">
                <!-- Preamble -->
                <div class="mb-5">
                    <!-- Title -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6" id="up-csi-preamble">
                        <p class="mb-4 text-xl font-medium">
                            <span class="text-[#00C6D7]">UP CSI Preamble</span> [5 Points]
                        </p>
                    </div>

                    <RadioQuestion
                        title="We, the members of the University of the Philippines Center for Student Innovations, committing ourselves to promoting the ____________ in the field of Computer Science"
                        name="preamble1"
                        bind:value={preamble1}
                        items={[
                            { id: 111, value: '0', label: 'pursuit of knowledge' },
                            { id: 112, value: '1', label: 'pursuit of innovation' },
                            { id: 113, value: '0', label: 'pursuit of service' },
                            { id: 114, value: '0', label: 'pursuit of organization culture' },
                        ]}
                    />
                    <RadioQuestion
                        title="by producing ____________"
                        name="preamble2"
                        bind:value={preamble2}
                        items={[
                            { id: 121, value: '1', label: 'quality software' },
                            { id: 122, value: '0', label: 'quality websites' },
                            { id: 123, value: '0', label: 'quality developers' },
                            { id: 124, value: '0', label: 'quality projects' },
                        ]}
                    />
                    <RadioQuestion
                        title="that ___________"
                        name="preamble3"
                        bind:value={preamble3}
                        items={[
                            { id: 131, value: '0', label: 'is geared towards academic excellence' },
                            { id: 132, value: '1', label: 'serves society in innovative ways' },
                            { id: 133, value: '0', label: 'is geared towards innovation and service' },
                            { id: 134, value: '0', label: 'is geared towards extended learning' },
                        ]}
                    />
                    <RadioQuestion
                        title="while ____________"
                        name="preamble4"
                        bind:value={preamble4}
                        items={[
                            { id: 141, value: '0', label: 'building up the trust' },
                            { id: 142, value: '0', label: 'building up the professional respect' },
                            { id: 143, value: '0', label: 'building a professional relationship' },
                            { id: 144, value: '1', label: 'building a harmonious relationship' },
                        ]}
                    />
                    <RadioQuestion
                        title="with our ____________ do hereby abide this constitution."
                        name="preamble5"
                        bind:value={preamble5}
                        items={[
                            {
                                id: 151,
                                value: '1',
                                label: 'fellow members, clients, the UP Department of Computer Science, and the University of the Philippines,',
                            },
                            {
                                id: 152,
                                value: '0',
                                label: 'colleagues, clients, the University of the Philippines, and our fellow countrymen',
                            },
                            {
                                id: 153,
                                value: '0',
                                label: 'selves, families, friends, organization, and the Department',
                            },
                            {
                                id: 154,
                                value: '0',
                                label: 'Executive Board, fellow members, the Department of Computer Science, and the University of the Philippines',
                            },
                        ]}
                    />
                </div>

                <!-- Mission, Vision and Purpose -->
                <div class="mb-5">
                    <!-- Title -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6" id="mission-vision-purpose">
                        <p class="mb-4 text-xl font-medium">
                            <span class="text-[#00C6D7]">Mission, Vision and Purpose</span> [17 Points]
                        </p>
                    </div>

                    <LongTextQuestion title="In your own words, what is the mission of UP CSI?" value={mv1} />
                    <LongTextQuestion title="In your own words, what is the vision of UP CSI?" value={mv2} />
                    <LongTextQuestion title="What are the two types of projects in UP CSI?" value={mv3} />
                    <RadioQuestion
                        title="What does the acronym 'UP CSI' stand for?"
                        name="mv4"
                        bind:value={mv4}
                        items={[
                            {
                                id: 211,
                                value: '0',
                                label: 'University of the Philippines Center of Student Inventions',
                            },
                            {
                                id: 212,
                                value: '1',
                                label: 'University of the Philippines Center for Student Innovations',
                            },
                            { id: 213, value: '0', label: 'University of the Philippines Center for Student Inumans' },
                            {
                                id: 214,
                                value: '0',
                                label: 'University of the Philippines Center of Sustainable Innovations',
                            },
                        ]}
                    />
                </div>

                <!-- Executive Board and Committees -->
                <div class="mb-5">
                    <!-- Title -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6" id="executive-board-committees">
                        <p class="mb-4 text-xl font-medium">
                            <span class="text-[#00C6D7]">Executive Board and Committees</span> [28 points]
                        </p>
                    </div>

                    <LongTextQuestion
                        title="List down the full name (first name and surname; not nicknames) of the current Executive Board and their corresponding OFFICIAL position names."
                        value={ec1}
                    />
                    <LongTextQuestion title="List all the committees and give their main purpose(s)." value={ec2} />
                    <LongTextQuestion title="Who are the Application Process Heads?" value={ec3} />
                </div>

                <!-- True or False -->
                <div class="mb-5">
                    <!-- Title -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6" id="true-or-false">
                        <p class="mb-4 text-xl font-medium">
                            <span class="text-[#00C6D7]">True or False</span> [18 points]
                        </p>
                    </div>

                    <RadioQuestion
                        title="Only BS Computer Science students can apply for UP CSI."
                        name="tf1"
                        bind:value={tf1}
                        items={[
                            { id: 311, value: '0', label: 'True' },
                            { id: 312, value: '1', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="All partnerships and sponsoring organizations are handled by the Service Committee."
                        name="tf2"
                        bind:value={tf2}
                        items={[
                            { id: 321, value: '0', label: 'True' },
                            { id: 322, value: '1', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="A member of the Executive Board must not be a member of another Executive Board or the equivalent of their other organizations."
                        name="tf3"
                        bind:value={tf3}
                        items={[
                            { id: 331, value: '1', label: 'True' },
                            { id: 332, value: '0', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="The Innovation Committee is responsible for researching on the latest trends and technologies that might be useful in developing innovation projects."
                        name="tf4"
                        bind:value={tf4}
                        items={[
                            { id: 341, value: '1', label: 'True' },
                            { id: 342, value: '0', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="The incumbent Vice President for Membership and Internals spearheads the application process together with the Application Process Head."
                        name="tf5"
                        bind:value={tf5}
                        items={[
                            { id: 351, value: '0', label: 'True' },
                            { id: 352, value: '1', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="The 'Majority Votes' refers to at least fifty percent (50%) of the total number of votes."
                        name="tf6"
                        bind:value={tf6}
                        items={[
                            { id: 361, value: '0', label: 'True' },
                            { id: 362, value: '1', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="A probationary member still enjoys the rights and privileges of membership like a regular member."
                        name="tf7"
                        bind:value={tf7}
                        items={[
                            { id: 371, value: '1', label: 'True' },
                            { id: 372, value: '0', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="A lone candidate for a position may only be elected if they receive 50% of the total number of votes plus one."
                        name="tf8"
                        bind:value={tf8}
                        items={[
                            { id: 381, value: '1', label: 'True' },
                            { id: 382, value: '0', label: 'False' },
                        ]}
                    />
                    <RadioQuestion
                        title="In an event of position vacancy due to ongoing investigation of a member of the Executive Board, the Executive Board may leave the position empty as long as the investigation is ongoing."
                        name="tf9"
                        bind:value={tf9}
                        items={[
                            { id: 391, value: '0', label: 'True' },
                            { id: 392, value: '1', label: 'False' },
                        ]}
                    />
                </div>

                <!-- Multiple Choice -->
                <div class="mb-5">
                    <!-- Title -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6" id="multiple-choice">
                        <p class="mb-4 text-xl font-medium">
                            <span class="text-[#00C6D7]">Multiple Choice</span> [12 points]
                        </p>
                    </div>
                    <RadioQuestion
                        title="Which of the following assembly is NOT held within UP CSI?"
                        name="mc1"
                        bind:value={mc1}
                        items={[
                            { id: 411, value: '0', label: 'Committee Assembly' },
                            { id: 412, value: '0', label: 'General Assembly' },
                            { id: 413, value: '1', label: 'One-on-one Assembly' },
                            { id: 414, value: '0', label: 'Executive Assembly' },
                        ]}
                    />
                    <RadioQuestion
                        title="How many consecutive semesters can a member have a Member of Leave (MOL) status before they are required to renew the following semester?"
                        name="mc2"
                        bind:value={mc2}
                        items={[
                            { id: 421, value: '0', label: '1 semester' },
                            { id: 422, value: '1', label: '2 semesters' },
                            { id: 423, value: '0', label: '3 semesters' },
                            { id: 424, value: '0', label: 'no limit on MOL status' },
                        ]}
                    />
                    <RadioQuestion
                        title="Which of the following is NOT a responsibility of COMELEC?"
                        name="mc3"
                        bind:value={mc3}
                        items={[
                            {
                                id: 411,
                                value: '1',
                                label: 'They shall nominate the members who will run for the positions.',
                            },
                            { id: 412, value: '0', label: 'They shall facilitate the Miting de Avance' },
                            {
                                id: 413,
                                value: '0',
                                label: 'They shall release a list of members that are eligible to vote',
                            },
                            {
                                id: 414,
                                value: '0',
                                label: 'They shall determine the duration and timeline of the election period',
                            },
                        ]}
                    />
                    <CheckboxQuestion
                        title="Which of the following is/are rights and privileges of student with an Alumni Status?"
                        name="mc4"
                        bind:value={mc4}
                        items={[
                            { id: 411, value: '0', label: 'To undergo due process before being given any sanction.' },
                            { id: 412, value: '1', label: 'To file a complaint against a member of the Organization.' },
                            { id: 413, value: '0', label: 'To file for impeachment of an Executive Board Member.' },
                            { id: 414, value: '1', label: "To participate in the Organization's General Assemblies." },
                            { id: 415, value: '0', label: 'To vote on decisions in General Assemblies' },
                            { id: 416, value: '0', label: 'To renew their membership each semester.' },
                        ]}
                    />
                    <RadioQuestion
                        title="How many members from each committee must be included in the Judicial Body?"
                        name="mc5"
                        bind:value={mc5}
                        items={[
                            { id: 411, value: '1', label: 'one' },
                            { id: 412, value: '0', label: 'at least one' },
                            { id: 413, value: '0', label: 'at least two' },
                            {
                                id: 414,
                                value: '0',
                                label: 'every member of the Organization is included in the Judicial Body',
                            },
                        ]}
                    />
                </div>

                <!-- Bonus -->
                <div class="mb-5">
                    <!-- Title -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6" id="bonus">
                        <p class="mb-4 text-xl font-medium">
                            <span class="text-[#00C6D7]">Bonus</span> [12 points]
                        </p>
                    </div>

                    <RadioQuestion
                        title="What is UP CSI’s tagline? (Only three words)"
                        name="b1"
                        value={b1}
                        items={[
                            { id: 511, value: '0', label: 'Serve. Develop. Innovate' },
                            { id: 512, value: '0', label: 'Imagine. Influence. Innovate.' },
                            { id: 513, value: '0', label: 'Create. Serve. Innovate.' },
                            { id: 514, value: '0', label: 'Learn. Create. Innovate.' },
                        ]}
                        other
                    />
                    <RadioQuestion
                        title="What is the hex code of CSI Blue?"
                        name="b2"
                        value={b2}
                        items={[
                            { id: 521, value: '0', label: '#006c7d' },
                            { id: 522, value: '0', label: '#00c6d7' },
                            { id: 523, value: '0', label: '#00d7c5' },
                            { id: 524, value: '0', label: '#00c5d7' },
                        ]}
                        other
                    />
                    <!-- Expected Answer - Other: #00c6d7 -->
                    <ShortTextQuestion title="Where is UP CSI's tambs located?" value={b3} />
                    <ShortTextQuestion title="Who is the founder of UP CSI?" value={b4} />
                    <ShortTextQuestion title="Who is the best DCS prof?" value={b5} />
                </div>

                <button
                    onclick={handleSubmit}
                    class="mt-6 rounded bg-[#00C6D7] px-4 py-2 font-bold text-[#161619] hover:opacity-90"
                >
                    Submit
                </button>

                {#if submissionError}
                    <div class="mb-4 text-red-500">{submissionError}</div>
                {/if}

                {#if submissionSuccess}
                    <div class="mb-4 text-green-500">{submissionSuccess}</div>
                {/if}
            </main>

            <!-- Quiz Navigation Sidebar -->
            <aside class="w-2/5 overflow-y-auto bg-[#161619] p-8 pt-4">
                <div class="mb-4 text-3xl font-bold text-[#00C6D7]">Table of Contents</div>

                <!-- Section dropdown -->
                <div class="rounded-lg bg-[#262629] p-6">
                    <SectionNav />
                </div>
            </aside>
        </div>
    </div>
</div>

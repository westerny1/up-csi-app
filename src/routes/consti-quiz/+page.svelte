<script>
    import LongTextQuestion from './LongTextQuestion.svelte';
    import Question from './Question.svelte';
    import QuestionShowcase from './QuestionShowcase.svelte';
    import RadioQuestion from './RadioQuestion.svelte';
    import logo from '$lib/icons/upcsi.svg';

    // For backend purposes
    let question1 = $state('');
    let question2 = $state('');
</script>

<div class="flex h-screen bg-[#161619] text-[#F9FAFB]">
    <!-- Left Navbar -->
    <nav class="flex w-3/20 flex-col border-r border-[#636365] bg-[#161619] p-4">
        <!-- Logo or Title -->
        <div class="mb-8 flex items-center text-2xl text-[#00C6D7]">
            <img src={logo} class="mr-2 w-[25px]" alt="CSI Logo" />
            <span>UP CSI</span>
        </div>

        <!-- Nav Items -->
        <ul class="flex-grow space-y-2 text-xl">
            <li>
                <a href="#A" class="block rounded px-4 py-2 text-[#5A5A5D]">Profile</a>
            </li>
            <li>
                <a href="#A" class="block rounded px-4 py-2 text-[#5A5A5D]">Dashboard</a>
            </li>
            <li>
                <a href="#A" class="block rounded px-4 py-2 text-[#5A5A5D]">Signature Sheet</a>
            </li>
            <li>
                <a href="#A" class="block rounded px-4 py-2">Constitution Quiz</a>
            </li>
        </ul>

        <!-- Logout -->
        <div>
            <a href="#A" class="block rounded px-4 py-2">Log out</a>
        </div>
    </nav>

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
                <!-- Text block with formatting -->
                <Question>
                    <p class="text-xl font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis augue risus, a
                        <span class="text-[#00C6D7]">laoreet leo placerat et. Maecenas sagittis</span>
                        leo viverra diam imperdiet, ac feugiat dolor sagittis?
                    </p>
                </Question>

                <!-- Question block with title and content -->
                <Question title="Lorem ipsum">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, autem odio, maxime ducimus
                        aliquid voluptates libero, ex sed ut similique natus blanditiis aut ipsam possimus sapiente
                        atque expedita nesciunt placeat?
                    </p>
                </Question>

                <!-- Radio button question -->
                <RadioQuestion
                    title="1. Lorem ipsum dolor sit amet"
                    name="question1"
                    bind:value={question1}
                    items={[
                        { id: 1, value: '1', label: 'Choice 1' },
                        { id: 2, value: '2', label: 'Choice 2' },
                        { id: 3, value: '3', label: 'Choice 3' },
                        { id: 4, value: '4', label: 'Choice 4' },
                    ]}
                />

                <!-- Paragraph question -->
                <LongTextQuestion
                    title="2. Lorem ipsum"
                    bind:value={question2}
                    placeholder="Type your answer here..."
                    rows={3}
                />

                <QuestionShowcase/>
            </main>

            <!-- Quiz Navigation Sidebar -->
            <aside class="w-2/5 overflow-y-auto bg-[#161619] p-8 pt-4">
                <div class="mb-4 text-3xl font-bold text-[#00C6D7]">Section 1 Header</div>
                <p class=" mb-10 text-lg italic">
                    &lt;section instructions&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <!-- Section dropdown -->
                <div class="rounded-lg bg-[#262629] p-6">
                    <h2 class="mb-6 text-2xl font-bold">Quiz Navigation</h2>
                    <div class="mb-1">
                        <div class="mb-3 flex items-center justify-between rounded p-4 text-lg text-[#00C6D7]">
                            <span>Section 1</span>
                        </div>
                        <!-- Sub-items -->
                        <div class="ml-6">
                            <a href="#A" class="block rounded px-4 py-3 text-lg">Section 1 sub item 1</a>
                            <a href="#A" class="block rounded px-4 py-3 text-lg">Section 1 sub item 2</a>
                            <a href="#A" class="block rounded px-4 py-3 text-lg">Section 1 sub item 3</a>
                            <a href="#A" class="block rounded px-4 py-3 text-lg">Section 1 sub item 4</a>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between rounded p-4 text-lg text-[#00C6D7]">
                            <span>Section 2</span>
                        </div>
                        <div class="flex items-center justify-between rounded p-4 text-lg text-[#00C6D7]">
                            <span>Section 3</span>
                        </div>
                        <div class="flex items-center justify-between rounded p-4 text-lg text-[#00C6D7]">
                            <span>Section 4</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</div>

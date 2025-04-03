<script>
    import SectionNav from './SectionNav.svelte';

    import logo from '$lib/icons/upcsi.svg';
    // For backend purposes
    let question1 = '';
    let question2 = '';
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
                <a href="#test" class="block rounded px-4 py-2 text-[#5A5A5D]">Profile</a>
            </li>
            <li>
                <a href="#test" class="block rounded px-4 py-2 text-[#5A5A5D]">Dashboard</a>
            </li>
            <li>
                <a href="#test" class="block rounded px-4 py-2 text-[#5A5A5D]">Signature Sheet</a>
            </li>
            <li>
                <a href="#test" class="block rounded px-4 py-2">Constitution Quiz</a>
            </li>
        </ul>

        <!-- Logout -->
        <div>
            <a href="#test" class="block rounded px-4 py-2">Log out</a>
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
                <!-- Question 1 -->
                <div class="mb-5">
                    <!-- Question box -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6">
                        <p class="mb-4 text-xl font-medium">
                            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis augue risus, a <span
                                class="text-[#00C6D7]">laoreet leo placerat et. Maecenas sagittis</span
                            > leo viverra diam imperdiet, ac feugiat dolor sagittis?
                        </p>
                    </div>

                    <!-- Answer box -->
                    <div class="space-y-4 rounded-lg bg-[#262629] p-6">
                        <label class="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="question1"
                                bind:group={question1}
                                value="Choice1"
                                class="form-radio h-5 w-5"
                            />
                            <span class="text-lg">Choice 1</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="question1"
                                bind:group={question1}
                                value="Choice2"
                                class="form-radio h-5 w-5"
                            />
                            <span class="text-lg">Choice 2</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="question1"
                                bind:group={question1}
                                value="Choice3"
                                class="form-radio h-5 w-5"
                            />
                            <span class="text-lg">Choice 3</span>
                        </label>
                        <label class="flex items-center space-x-3">
                            <input
                                type="radio"
                                name="question1"
                                bind:group={question1}
                                value="Choice4"
                                class="form-radio h-5 w-5"
                            />
                            <span class="text-lg">Choice 4</span>
                        </label>
                    </div>
                </div>

                <!-- Question 2 -->
                <div class="mb-5">
                    <!-- Question box -->
                    <div class="mb-3 rounded-lg bg-[#303032] p-6">
                        <p class="mb-4 text-xl font-medium">
                            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis augue risus, a
                            laoreet leo placerat et. Maecenas sagittis leo viverra diam imperdiet, ac feugiat dolor
                            sagittis?
                        </p>
                    </div>

                    <!-- Answer box -->
                    <div class="space-y-4 rounded-lg bg-[#262629] p-6">
                        <textarea
                            bind:value={question2}
                            placeholder="Type your answer here ..."
                            rows="3"
                            class="w-full rounded border-none bg-[#262629] p-2 text-xl focus:ring-2 focus:outline-none"
                        ></textarea>
                    </div>
                </div>
            </main>

            <!-- Quiz Navigation Sidebar -->
            <aside class="w-2/5 overflow-y-auto bg-[#161619] p-8 pt-4">
                <div class="mb-4 text-3xl font-bold text-[#00C6D7]">Section 1 Header</div>
                <p class=" mb-10 text-lg italic">
                    &lt;section instructions&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <!-- Section dropdown -->
                <div class="rounded-lg bg-[#262629] p-6">
                    <SectionNav />
                </div>
            </aside>
        </div>
    </div>
</div>

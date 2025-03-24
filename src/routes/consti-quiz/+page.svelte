<script>
    import logo from '$lib/icons/upcsi.svg';
    // For backend purposes
    let question1 = '';
    let question2 = '';
</script>
  
  <div class="flex h-screen text-[#F9FAFB] bg-[#161619] ">
    <!-- Left Navbar -->
    <nav class="w-3/20 bg-[#161619] flex flex-col p-4 border-r border-[#636365]">
        
      <!-- Logo or Title -->
      <div class="flex items-center text-2xl mb-8 text-[#00C6D7]">
        <img src={logo} class="w-[25px] mr-2" alt="CSI Logo"/>
        <span>UP CSI</span>
      </div>
  
      <!-- Nav Items -->
      <ul class="space-y-2 flex-grow text-xl">
        <li>
          <a href="#" class="block px-4 py-2 rounded text-[#5A5A5D]">Profile</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 rounded text-[#5A5A5D]">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 rounded text-[#5A5A5D]">Signature Sheet</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 rounded">Constitution Quiz</a>
        </li>
      </ul>
  
      <!-- Logout -->
      <div>
        <a href="#" class="block px-4 py-2 rounded">Log out</a>
      </div>
    </nav>
    

    <!-- Right side container (flexbox column) -->
    <div class="flex-1 flex flex-col bg-[#161619]">
        <!-- Banner at top (full width) -->
        <div class="p-8 pb-4 bg-[#161619]">
            <h1 class="text-5xl font-bold">Constitution Quiz</h1>
        </div>
        
        <!-- Content area -->
        <div class="flex flex-1 overflow-hidden">
            <!-- Main Content -->
            <main class="w-3/5 bg-[#161619] p-8 pt-4 overflow-y-auto">
                <!-- Question 1 -->
                <div class="mb-5">

                    <!-- Question box -->
                    <div class="bg-[#303032] p-6 rounded-lg mb-3">
                        <p class="mb-4 font-medium text-xl">
                            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis augue risus, a <span class="text-[#00C6D7]">laoreet leo placerat et. Maecenas sagittis</span> leo viverra diam imperdiet, ac feugiat dolor sagittis?
                        </p>
                    </div>
                    
                    <!-- Answer box -->
                    <div class="space-y-4 bg-[#262629] rounded-lg p-6">
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
                    <div class="bg-[#303032] p-6 rounded-lg mb-3">
                        <p class="mb-4 font-medium text-xl">
                            2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis augue risus, a laoreet leo placerat et. Maecenas sagittis leo viverra diam imperdiet, ac feugiat dolor sagittis?
                        </p>
                    </div>
                    
                    <!-- Answer box -->
                    <div class="space-y-4 bg-[#262629] rounded-lg p-6">
                    <textarea
                        bind:value={question2}
                        placeholder="Type your answer here ..."
                        rows="3"
                        class="w-full p-2 bg-[#262629] border-none rounded focus:outline-none focus:ring-2 text-xl"
                    ></textarea>
                    </div>
                    
                </div>
            </main>
            
            <!-- Quiz Navigation Sidebar -->
            <aside class="w-2/5 bg-[#161619] p-8 pt-4 overflow-y-auto">
                <div class="text-[#00C6D7] text-3xl font-bold mb-4">Section 1 Header</div>
                <p class=" mb-10 text-lg italic">&lt;section instructions&gt; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                
                <!-- Section dropdown -->
                <div class="bg-[#262629] rounded-lg p-6">
                    <h2 class="text-2xl font-bold mb-6">Quiz Navigation</h2>
                    <div class="mb-1">
                        <div class="flex items-center justify-between p-4 rounded mb-3 text-[#00C6D7] text-lg">
                            <span>Section 1</span>
                        </div>
                        <!-- Sub-items -->
                        <div class="ml-6">
                            <a href="#" class="block px-4 py-3 rounded text-lg">Section 1 sub item 1</a>
                            <a href="#" class="block px-4 py-3 rounded text-lg">Section 1 sub item 2</a>
                            <a href="#" class="block px-4 py-3 rounded text-lg">Section 1 sub item 3</a>
                            <a href="#" class="block px-4 py-3 rounded text-lg">Section 1 sub item 4</a>
                        </div>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center justify-between p-4 rounded text-[#00C6D7] text-lg">
                            <span>Section 2</span>
                        </div>
                        <div class="flex items-center justify-between p-4 rounded text-[#00C6D7] text-lg">
                            <span>Section 3</span>
                        </div>
                        <div class="flex items-center justify-between p-4 rounded text-[#00C6D7] text-lg">
                            <span>Section 4</span>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </div>
    </div>
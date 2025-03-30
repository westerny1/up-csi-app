

<main
    class="font-inter gap-8 rounded-xl mx-[12%] my-[14%] px-4 py-6 md:px-8 dark:bg-[#2f2f32] grid md:grid-cols-2"
>
    <div>
        <h2 class="dark:text-csi-blue text-4xl font-bold pb-1">Victor Reyes</h2>
        <h3 class="dark:text-csi-white text-sm">President and Director for Engineering</h3> 

        <form class="mt-4">
            <label for="question" class="dark:text-csi-white text-2xl font-bold block pt-5 mb-1">Your Question</label>
            <textarea 
                id="question"
                class="dark:text-csi-white mb-3 w-full rounded-xl py-2 pl-4 text-sm font-light md:h-10 dark:bg-[#161619]"
                placeholder="Type your question here ..."
                style="height: 100px; resize: none"
                required
            ></textarea>

            <label for="answer" class="dark:text-csi-white text-2xl font-bold block pt-5 mb-1">Their Answer</label>
            <textarea 
                id="answer"
                class="dark:text-csi-white mb-3 w-full rounded-xl py-2 pl-4 text-sm font-light md:h-10 dark:bg-[#161619]"
                placeholder="Type their answer here ..."
                style="height: 100px; resize: none"
                required
            ></textarea> 
        </form>
    </div>

    <div class="text-csi-black mb-4 items-center justify-center gap-4 flex flex-col">
        <div class="text-center flex flex-col items-center border-dashed border-2 border-gray-500 p-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00C6D7" class="size-30 justify-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
            </svg>
                          
            <p>Drop file here or click to take a picture</p>
        </div>
        <button
            class="dark:bg-csi-blue dark:hover:bg-innov-orange rounded-full px-6 py-2 font-semibold">
            Submit
        </button>
    </div>
</main>
  
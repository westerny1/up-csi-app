

<main
    class="font-inter gap-8 rounded-xl px-4 py-6 md:px-8 dark:bg-[#2f2f32] grid md:grid-cols-2"
>
    <div>
        <h2 class="dark:text-csi-blue text-3xl font-bold pb-1">Victor Reyes</h2>
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
        <div class="text-center flex flex-col border-dashed border-2 border-gray-500 p-4 rounded-lg">
            Drop file here or click to take a picture
        </div>
        <button
            class="dark:bg-csi-blue dark:hover:bg-innov-orange rounded-full px-6 py-2 font-semibold">
            Submit
        </button>
    </div>
</main>



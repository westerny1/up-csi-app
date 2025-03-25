

<main
    class="font-inter gap-2 rounded-xl px-4 py-6 md:px-8 dark:bg-[#2f2f32] grid md:grid-cols-2"
>
    <div>
        <h2 class="dark:text-csi-white text-xl font-bold">Victor Reyes</h2>
        <h3 class="dark:text-csi-white">Director for Engineering</h3> 

        <form class="mt-4">
            <label for="question" class="dark:text-csi-white block mb-1">Your Question</label>
            <input 
                id="question"
                class="dark:text-csi-white mb-3 w-full rounded-xl py-2 pl-4 text-sm font-light md:h-10 dark:bg-[#161619]"
                required
            />

            <label for="answer" class="dark:text-csi-white block mb-1">Their Answer</label>
            <input 
                id="answer"
                class="dark:text-csi-white mb-3 w-full rounded-xl py-2 pl-4 text-sm font-light md:h-10 dark:bg-[#161619]"
            /> 
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



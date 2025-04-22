<script>
    import logo from '$lib/icons/upcsi.svg';
</script>

<div
    class="font-inter flex min-h-screen w-full flex-col items-center justify-center gap-4 border text-center dark:bg-[#161619]"
>
    <h1 class="dark:text-csi-white text-4xl font-extrabold">Log In</h1>
    <main
        class="font-inter flex flex-col items-center justify-center gap-2 rounded-xl px-4 py-6 md:px-8 dark:bg-[#2f2f32]"
    >
        <div class="text-csi-blue mb-4 flex items-center justify-center gap-4">
            <img src={logo} class="w-[25px]" alt="CSI Logo" />
            <div class="font-inter flex flex-col text-left">
                <span class="text-xs font-extralight">University of the Philippines</span>
                <span class="mt-[-2px] text-xs font-semibold">Center for Student Innovations</span>
            </div>
        </div>

        <h2 class="dark:text-csi-white mb-2 text-xl font-bold">Welcome to the CSI App!</h2>

        <form class="mb-2 flex w-full flex-col items-center justify-center">
            <input
                type="text"
                placeholder="Username"
                required
                class="dark:text-csi-white mb-3 w-full rounded-xl py-2 pl-4 text-sm font-light md:h-10 dark:bg-[#161619]"
            />
            <input
                type="password"
                placeholder="Password"
                class="dark:text-csi-white mb-4 w-full rounded-xl py-2 pl-4 text-sm font-light md:h-10 dark:bg-[#161619]"
            />
            <button
                type="submit"
                class="dark:bg-csi-blue dark:hover:bg-innov-orange rounded-full px-6 py-2 font-semibold">Log In</button
            >
        </form>

        <button class="text-csi-blue text-sm font-bold underline">Sign In through Google</button>
    </main>
</div>

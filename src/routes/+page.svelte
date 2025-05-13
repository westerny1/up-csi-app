<!-- <script lang="ts"> -->
<!-- </script> -->

<script lang="ts">
    const signatureSheet = [
        { name: 'Executive', progress: '18/34', color: 'bg-cyan-400' },
        { name: 'Membership & Internals', progress: '12/34', color: 'bg-pink-400' },
        { name: 'Service', progress: '17/34', color: 'bg-yellow-400' },
        { name: 'Innovation', progress: '20/34', color: 'bg-orange-400' },
        { name: 'Engineering', progress: '34/34', color: 'bg-red-500' },
        { name: 'External Relations', progress: '30/34', color: 'bg-blue-500' },
        { name: 'Branding and Creatives', progress: '25/34', color: 'bg-green-500' },
    ];

    const quizProgress = '28/40';

    function calculatePercentage(progress: string) {
        const [num, denom] = progress.split('/').map(Number);
        if (num && denom) return (num / denom) * 100;
    }

    const { data } = $props();
    import logo from '$lib/icons/upcsi.svg';
</script>

{#if data.session}
    <div class="font-inter h-screen flex-1 flex-row bg-[#161619] p-6">
        <h1 class="text-csi-white mb-2 flex w-100 text-4xl font-bold">Hello, {data.user?.email?.split('@')[0]}!</h1>
        <h2 class="text-csi-white flex w-100 text-2xl font-bold">Your Dashboard</h2>

        <main class="mt-6 flex justify-evenly">
            <div class="bg-csi-neutral-900 flex w-3/7 flex-col gap-y-2.5 rounded-2xl p-6">
                <h2 class="text-csi-blue text-3xl font-bold">Signature Sheet</h2>

                {#each signatureSheet as section}
                    <div>
                        <div class="flex justify-between">
                            <h3 class="text-csi-white">{section.name}</h3>
                            <p class="text-csi-white">{section.progress}</p>
                        </div>
                        <div class="mt-1 h-6 w-full overflow-hidden rounded-full bg-gray-700">
                            <div
                                class="{section.color} h-full"
                                style="width: {calculatePercentage(section.progress)}%"
                            ></div>
                        </div>
                    </div>
                {/each}
            </div>

            <div class="bg-csi-neutral-900 flex w-3/7 flex-col gap-y-4 rounded-2xl p-6">
                <h2 class="text-csi-blue text-3xl font-bold">Constitution Quiz</h2>
                <div class="flex justify-between">
                    <h3 class="text-csi-white">Progress</h3>
                    <p class="text-csi-white">{quizProgress}</p>
                </div>
                <div class="mt-1 h-4 w-full overflow-hidden rounded-full bg-gray-700">
                    <div class="h-full bg-cyan-400" style="width: {calculatePercentage(quizProgress)}%"></div>
                </div>
                <p class="text-csi-white">The quiz will close in # days and # hours</p>
                <p class="text-csi-white">Constitution quiz mechanics</p>
                <a
                    href="./consti-quiz"
                    class="bg-csi-blue w-1/6 self-center rounded-3xl py-2 text-center font-bold text-[#161619]"
                    >Continue</a
                >
            </div>
        </main>
    </div>
{:else}
    <div
        class="font-inter flex min-h-screen w-full flex-col items-center justify-center gap-4 border text-center dark:bg-[#161619]"
    >
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

            <h1 class="dark:text-csi-white text-3xl font-extrabold">Welcome to the CSI App!</h1>

            <a href="/login" class="text-csi-blue text-base font-bold underline">Go to Login page</a>
        </main>
    </div>
{/if}

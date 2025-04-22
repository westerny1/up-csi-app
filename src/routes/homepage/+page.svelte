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
        return (num / denom) * 100;
    }
</script>

<div class="font-inter h-screen bg-[#161619] p-6">
    <h1 class="text-csi-white text-5xl font-bold">Your Dashboard</h1>

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
                class="bg-csi-blue w-1/6 self-center rounded-3xl py-2 text-center font-bold text-[#161619]">Continue</a
            >
        </div>
    </main>
</div>

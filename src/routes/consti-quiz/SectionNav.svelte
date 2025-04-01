<script lang="ts">
    let openSection: number | null = null;

    const sections = [
        {
            title: 'Section 1',
            subItems: ['Section 1 sub item 1', 'Section 1 sub item 2', 'Section 1 sub item 3', 'Section 1 sub item 4'],
        },
        {
            title: 'Section 2',
            subItems: [],
        },
        {
            title: 'Section 3',
            subItems: [],
        },
        {
            title: 'Section 4',
            subItems: [],
        },
    ];

    function toggleSection(index: number) {
        if (sections[index]!.subItems.length === 0) return;
        openSection = openSection === index ? null : index;
    }
</script>

<div class="rounded-lg bg-[#262629] p-6">
    <h2 class="mb-6 text-2xl font-bold text-white">Quiz Navigation</h2>
    {#each sections as section, index (index)}
        <div class="mb-2">
            <div
                on:click={() => toggleSection(index)}
                class="flex items-center justify-between rounded p-4 text-lg text-[#00C6D7]
				       {section.subItems.length > 0 ? 'cursor-pointer hover:bg-[#2C2C2F]' : 'cursor-default'} 
				       transition-colors duration-200"
            >
                <span>{section.title}</span>
                {#if section.subItems.length > 0}
                    {#if openSection === index}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="m18 15-6-6-6 6" />
                        </svg>
                    {:else}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    {/if}
                {/if}
            </div>

            {#if section.subItems.length > 0 && openSection === index}
                <div class="mt-2 ml-6 space-y-2">
                    {#each section.subItems as subItem (subItem)}
                        <a
                            href="#"
                            class="block rounded px-4 py-3 text-lg text-gray-300 transition-colors duration-200 hover:bg-[#2C2C2F] hover:text-white"
                        >
                            {subItem}
                        </a>
                    {/each}
                </div>
            {/if}
        </div>
    {/each}
</div>

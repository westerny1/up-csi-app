<script lang="ts">
    // Define each section’s title and matching href (id from +page)
    const sections = [
        { title: 'UP CSI Preamble [5 points]', href: '#up-csi-preamble' },
        { title: 'Mission, Vision and Purpose [17 points]', href: '#mission-vision-purpose' },
        { title: 'Executive Board and Committees [28 points]', href: '#executive-board-committees' },
        { title: 'True or False [18 points]', href: '#true-or-false' },
        { title: 'Multiple Choice [12 points]', href: '#multiple-choice' },
        { title: 'Bonus [12 points]', href: '#bonus' },
    ];
</script>

<div class="rounded-lg bg-[#262629] p-6">
    <h2 class="mb-6 text-2xl font-bold text-white">Quiz Navigation</h2>
    {#each sections as { title, href }}
        <a
            {href}
            class="mb-2 block rounded p-4 text-lg text-[#00C6D7] transition-colors duration-200 hover:bg-[#2C2C2F]"
        >
            {title}
        </a>
    {/each}
</div>

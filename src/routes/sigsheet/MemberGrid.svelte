<script lang="ts">
    import { fade } from 'svelte/transition';

    import { type mem, members } from './members';

    import MemberCard from './MemberCard.svelte';
    import Modal from './Modal.svelte';

    const categories = ['Exec', 'M&I', 'Service', 'Innov', 'Engg', 'Exte', 'B&C'];

    const categoryColors: Record<string, string> = {
        Exec: 'var(--color-csi-blue)',
        'M&I': 'var(--color-mni-pink)',
        Service: 'var(--color-service-yellow)',
        Innov: 'var(--color-innov-orange)',
        Engg: 'var(--color-engg-blue)',
        Exte: 'var(--color-exte-blue)',
        'B&C': 'var(--color-bnc-green)',
    };

    const categoryHeaders: Record<string, string> = {
        Exec: 'Executive Committee',
        'M&I': 'Membership & Internals Committee',
        Service: 'Service Committee',
        Innov: 'Innovation Committee',
        Engg: 'Engineering Committee',
        Exte: 'External Relations Committee',
        'B&C': 'Branding & Creatives Committee',
    };

    let activeCategory = $state('Exec');
    let selectedMember = $state(members[0]);
    let showModal = $state(false);

    function openModal(member: mem) {
        showModal = true;
        selectedMember = member;
    }

    function closeModal() {
        showModal = false;
    }
</script>

<div class="mx-[3vw] mt-12 items-start justify-between" id="content">
    <h1 class="text-csi-white mb-[1.5rem] w-[75vw] text-5xl font-bold">{categoryHeaders[activeCategory]}</h1>

    <div class="flex flex-row">
        <div class="grid flex-1 grid-cols-1 gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-4">
            {#each members.filter(member => member.category === activeCategory) as member (member.name)}
                <div in:fade={{ duration: 1300 }}>
                    <button onclick={() => openModal(member)} class="cursor-pointer">
                        <MemberCard {member} />
                    </button>
                </div>
            {/each}
        </div>

        <div class="ml-8 flex flex-col gap-4">
            {#each categories as category}
                <button
                    class="border-csi-black text-csi-white bg-csi-grey flex w-fit cursor-pointer gap-2 rounded-full border-2 px-[0.9rem] py-2 text-base font-bold opacity-50 transition-colors duration-300"
                    class:opacity-100={activeCategory === category}
                    class:bg-transparent={activeCategory === category}
                    style:border-color={activeCategory === category ? categoryColors[category] : '#2C2C2E'}
                    onclick={() => (activeCategory = category)}
                >
                    <span
                        class="bg-mni-pink aspect-square w-[1.5rem] flex-shrink-0 rounded-full"
                        style:background-color={categoryColors[category]}
                    ></span>
                    {category}
                </button>
            {/each}
        </div>
    </div>
    {#if showModal}
        <div class="flex-center fixed inset-0 justify-center bg-black/50">
            <Modal name={selectedMember?.name} role={selectedMember?.role} {closeModal} {activeCategory}></Modal>
        </div>
    {/if}
</div>

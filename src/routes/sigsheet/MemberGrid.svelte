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

<p class="header-text {showModal ? 'opacity-50' : 'opacity-100'}" id="header-text">{categoryHeaders[activeCategory]}</p>
<div class="content {showModal ? 'opacity-50' : 'opacity-100'}" id="content">
    <div class="member-grid">
        {#each members.filter(member => member.category === activeCategory) as member (member.name)}
            <div in:fade={{ duration: 1300 }}>
                <button onclick={() => openModal(member)} class="cursor-pointer">
                    <MemberCard {member} />
                </button>
            </div>
        {/each}
    </div>

    <div class="button-group">
        {#each categories as category}
            <button
                class="category-button"
                class:active-category={activeCategory === category}
                style:border-color={activeCategory === category ? categoryColors[category] : '#2C2C2E'}
                onclick={() => (activeCategory = category)}
            >
                <span class="category-circle" style:background-color={categoryColors[category]}></span>
                {category}
            </button>
        {/each}
    </div>
</div>
{#if showModal}
    <div class="flex-center fixed inset-0 justify-center">
        <Modal name={selectedMember?.name} role={selectedMember?.role} {closeModal} {activeCategory}></Modal>
    </div>
{/if}

<style>
    .header-text {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: var(--color-csi-white);
        position: relative;
        top: 1em;
        left: 1.5em;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 5rem;
        margin-left: 4.5em;
        margin-right: 4.5em;
    }

    .member-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
        flex: 1; /*grow and shirnk factor*/
    }

    /* @media reorganize and resize when windoinw shrks*/
    @media (min-width: 640px) {
        .member-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1024px) {
        .member-grid {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    .button-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-left: 2rem;
    }

    .category-button {
        opacity: 0.5;
        display: flex;
        gap: 0.5rem; /* Gap between circle and text */
        padding: 0.5rem 0.9rem; /* Adjust padding for consistent spacing */
        width: fit-content; /* Dynamically adjust button width to fit content */
        border-radius: 9999px;
        border: 2px solid var(--color-csi-black); /* Default border */

        /* Text */
        color: var(--color-csi-white);
        font-size: 1rem;
        font-family: Inter, sans-serif;
        font-weight: 700;

        background: var(--color-csi-grey); /* Button background color */
        cursor: pointer; /* Change cursor on hover */
        transition:
            border-color 0.3s ease,
            background-color 0.3s ease;
    }

    .category-button.active-category {
        opacity: 100;
        border-color: var(--csi-blue); /* Highlight border for active category */
        background-color: transparent; /* Transparent background for active */
    }

    .category-circle {
        width: 1.5rem; /* Adjust circle size */
        aspect-ratio: 1; /* Same width and height*/
        border-radius: 9999px;
        flex-shrink: 0;
        background: var(--color-mni-pink); /* Circle background color */
    }
</style>

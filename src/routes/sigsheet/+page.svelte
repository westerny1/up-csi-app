<script lang="ts">
    import MemberGrid from './MemberGrid.svelte';
    import Modal from './Modal.svelte';
</script>

<p class="header-text">Executive Committee</p>

<MemberGrid />

<Modal />

<style>
    :global(body) {
        background-color: #161619;
    }

    .header-text {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: var(--color-csi-white);
        position: relative;
        top: 1em;
        left: 1.5em;
    }
</style>

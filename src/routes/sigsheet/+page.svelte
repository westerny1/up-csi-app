<script lang="ts">
    import MemberGrid from './MemberGrid.svelte';
    import { onMount } from 'svelte';

    async function fetchDriveFiles() {
        const response = await fetch('/api/upload', {
            method: 'POST',
        });

        if (response.ok) {
            // const data = await response.json();
            // console.log('Files from Google Drive:', data);
        } else {
            // console.error('Error:', response.status);
        }
    }

    onMount(() => {
        fetchDriveFiles();
        // console.log('test');
    });
</script>

<main class="bg-[#161619]">
    <MemberGrid />
</main>

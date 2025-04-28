<script lang="ts">
    import './app.css';
    import NavBar from './NavBar.svelte';
    import { page } from '$app/state';
    const { children } = $props();
</script>

<div class="flex w-full flex-row bg-[#161619]">
    {#if page.url.pathname !== '/login/'}
        <div class="flex w-1/6">
            <NavBar />
        </div>
    {/if}

    <div class="flex {page.url.pathname === '/login/' ? 'w-full' : 'w-5/6'}">
        {@render children()}
    </div>
</div>

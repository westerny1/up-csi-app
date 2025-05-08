<script lang="ts">
    import './app.css';
    import NavBar from '$lib/NavBar.svelte';
    import { page } from '$app/state';

    import { invalidate } from '$app/navigation';
    import { onMount } from 'svelte';
    const { data, children } = $props();
    const { session, supabase } = $derived(data);
    onMount(() => {
        const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });
        return () => data.subscription.unsubscribe();
    });
</script>

{#if !data.session}
    {@render children()}
{:else}
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
{/if}

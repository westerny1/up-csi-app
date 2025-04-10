<script lang="ts">
    import './app.css';
    import NavBar from './NavBar.svelte';
    const { children } = $props();
</script>

<header>
    <NavBar />
</header>

{@render children()}

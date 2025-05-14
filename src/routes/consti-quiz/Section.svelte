<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        id: string;
        children?: Snippet;
    };

    const { id, children }: Props = $props();
</script>

<div {id}>
    {@render children?.()}
</div>

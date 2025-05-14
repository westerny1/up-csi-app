<script lang="ts">
    import type { Snippet } from 'svelte';

    /**
     * an optional string property displayed as the title
     * formatted as a second level heading `<h2>`
     * mutually exclusive with the `header` property
     */
    interface Title {
        title?: string;
        header?: never;
    }

    /**
     * an optional string property rendered as the header
     * mutually exclusive with the `title` property
     */
    interface Header {
        title?: never;
        header?: Snippet;
    }

    type HeaderOrTitle = Header | Title;

    type Props = HeaderOrTitle & {
        children?: Snippet;
    };

    const { title, header, children }: Props = $props();
</script>

<!--
@component
A base component for all question components.
-->
<div class="bg-csi-neutral-900 mb-5 rounded-md p-5">
    <!-- TODO: find better implementation for
               mutually exclusive properties
    -->
    {#if title}
        <header class="mb-5">
            <h2 class="text-xl font-bold">
                {title}
            </h2>
        </header>
    {:else if header}
        <header class="mb-5">
            {@render header?.()}
        </header>
    {/if}
    {@render children?.()}
</div>

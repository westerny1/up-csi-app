<script lang="ts">
    import Question from './Question.svelte';

    interface Item {
        id: number;
        value: string;
        label?: string;
    }

    interface Props {
        title: string;
        name: string;
        value: string;
        items: Item[];
        other?: boolean;
    }

    export let title: string;
    export let name: string;
    export let value: string;
    export let items: Item[];
    export let other = false;
</script>

<Question {title}>
    {#each items as item (item.id)}
        <label class="flex items-center space-x-3">
            <input type="radio" {name} bind:group={value} value={item.value} class="form-radio h-5 w-5" />
            <span class="text-md">{item.label ?? item.value}</span>
        </label>
    {/each}
    {#if other}
        <label class="flex items-center space-x-3">
            <input type="radio" {name} bind:group={value} value="other" class="form-radio h-5 w-5" />
            <span class="text-md">Other:</span>
            <input type="text" placeholder="Enter response..." />
        </label>
    {/if}
</Question>

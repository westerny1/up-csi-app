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
        bound: string;
        items: Item[];
        other?: boolean;
    }

    const { title, name, bound, items, other = false }: Props = $props();

    let group: string = $state(bound);
</script>

<Question {title}>
    {#each items as item (item.id)}
        <label class="flex items-center space-x-3">
            <input type="radio" {name} bind:group={group} value={item.value} class="form-radio h-5 w-5" />
            <span class="text-md">{item.label ?? item.value}</span>
        </label>
    {/each}
    {#if other}
        <label class="flex items-center space-x-3">
            <input type="radio" {name} value="other" class="form-radio h-5 w-5" />
            <span class="text-md">Other:</span>
            <input type="text" placeholder="Enter response..." />
        </label>
    {/if}
    <button type="reset" class="text-csi-blue italic">Clear selection</button>
</Question>

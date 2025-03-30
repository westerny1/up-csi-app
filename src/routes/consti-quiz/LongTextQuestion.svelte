<script lang="ts">
    import Question from "./Question.svelte"

    interface Props {
        title: string;
        bound: string;
        placeholder?: string;
        rows?: number;
    }

    const { title, bound, placeholder = "", rows = 2 }: Props = $props();

    let value: string = $state(bound)
</script>

<Question {title}>
    <textarea
        bind:value={value}
        {placeholder}
        {rows}
        class="w-full rounded border-none focus:ring-2 focus:outline-none"
    ></textarea>
</Question>

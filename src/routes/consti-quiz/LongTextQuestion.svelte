<script lang="ts">
    import Question from './Question.svelte';

    interface Props {
        title: string;
        value: string;
        placeholder?: string;
        rows?: number;
    }

    const { title, value = $bindable(), placeholder = '', rows = 2 }: Props = $props();

    let input: string = $state(value);
</script>

<Question {title}>
    <textarea bind:value={input} {placeholder} {rows} class="w-full rounded border-none focus:ring-2 focus:outline-none"
    ></textarea>
</Question>

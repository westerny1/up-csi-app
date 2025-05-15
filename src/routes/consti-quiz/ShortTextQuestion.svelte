<script lang="ts">
    import Question from './Question.svelte';

    interface Props {
        title: string;
        value: string;
        placeholder?: string;
    }

    const { title, value = $bindable(), placeholder = '' }: Props = $props();

    let input: string = $state(value);
</script>

<Question {title}>
    <input
        type="text"
        bind:value={input}
        {placeholder}
        class="w-full rounded border-none focus:ring-2 focus:outline-none"
    />
</Question>

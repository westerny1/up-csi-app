<script>
    import Question from './Question.svelte';
</script>

<div class="m-2 border border-black p-2">
    <p>An empty <code>Question</code> component.</p>

    <Question />

    <p>A <code>Question</code> component with child elements.</p>

    <Question>
        <p>Consti Quiz</p>
    </Question>

    <p>Using the <code>title</code> property</p>

    <Question title="Question with title property">
        <p>Question body</p>
    </Question>

    <p>Using the <code>header</code> property</p>

    {#snippet header()}
        <h2 class="text-2xl font-extrabold">
            <span> Question with <code>header</code> property</span>
        </h2>
    {/snippet}

    <Question {header}>
        <p>Question body</p>
    </Question>
</div>

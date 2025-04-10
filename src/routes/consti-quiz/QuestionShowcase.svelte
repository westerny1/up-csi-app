<script lang="ts">
    import CheckboxQuestion from './CheckboxQuestion.svelte';
    import Question from './Question.svelte';
    import RadioQuestion from './RadioQuestion.svelte';

    let radio1: string = $state('');
    let checkbox1: string[] = $state([]);
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

<div class="m-2 border border-black p-2">
    <form>
        <RadioQuestion
            title="This is a multiple choice question."
            name="test1"
            bind:value={radio1}
            items={[
                { id: 0, value: 'this' },
                { id: 1, value: 'that' },
            ]}
            other
        />
        <CheckboxQuestion
            title="This is a checkbox question."
            name="test2"
            bind:value={checkbox1}
            items={[
                { id: 0, value: 'this' },
                { id: 1, value: 'that' },
            ]}
            other
        />
        <button>Submit</button>
    </form>
</div>

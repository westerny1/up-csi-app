<script>
    let { member = $bindable() } = $props();
</script>

<main class="member-card">
    <div class="image-container">
        <img src={member.photo} class="member-photo" alt={member.name} />
    </div>

    <div>
        <h2 class="member-name">{member.name}</h2>
        <h3 class="member-role">{member.role}</h3>
    </div>
</main>

<style>
    .member-card {
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column; /* Vertical position*/
        gap: 0.01rem; /* Gap between image and text */
        border-radius: 1rem;
        padding: 0rem 1rem 1rem; /* padding: top left&right bottom*/
        background-color: #262629;
        text-align: center;
        width: 250px;
        transition:
            background-color 0.3s ease,
            transform 0.3s ease; /* Add smooth transition for transform */
    }

    .member-card:hover {
        background-color: #333336; /* Slightly lighter background on hover */
        transform: scale(1.05); /* Slightly enlarge the card */
    }

    .image-container {
        margin-bottom: 1rem;
        width: 250px;
        align-self: center;
    }

    .member-photo {
        border-radius: 1rem;
    }

    .member-name {
        color: var(--color-csi-white);
        font-size: 1.125rem;
        font-weight: bold;
        text-align: left;
    }

    .member-role {
        color: var(--color-csi-white);
        font-size: 0.875rem;
        text-align: left;
    }
</style>

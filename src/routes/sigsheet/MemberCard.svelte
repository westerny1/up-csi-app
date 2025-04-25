<script>
    let { member } = $props();
</script>

<main class="font-[Inter, sans-serif] flex flex-col gap-[0.01rem] rounded-2xl pt-0 px-4 pb-4 bg-[#262629] text-center w-[14vw] hover:bg-[#333336] hover:scale-105 transition-all duration-300 ease-in-out">
    <div class="mb-[1rem] w-[14vw] self-center">
        <img src={member.photo} class="rounded-2xl" alt={member.name} />
    </div>

    <div>
        <h2 class="text-csi-white text-lg font-bold text-left">{member.name}</h2>
        <h3 class="text-csi-white text-sm text-left">{member.role}</h3>
    </div>
</main>


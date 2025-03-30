<script>
  import MemberCard from './MemberCard.svelte';

  let members = [
    { name: "Victor Reyes", role: "President & Director for Engineering"},
    { name: "BMae Amurao", role: "Director for Membership and Internals"},
    { name: "Don Chavez", role: "Co-Director for Service"},
    { name: "Bryan Uy", role: "Co-Director for Service"},
    { name: "Benj Lazaro", role: "Director for Innovation"},
    { name: "Sean Tolentino", role: "Director for External Relations"},
    { name: "Isay Bucu", role: "Director for Branding and Creatives"},
  ];
</script>

<div class="min-h-screen p-6 dark:bg-[#2f2f32]">
  <h1 class="dark:text-csi-white text-5xl font-bold mb-4">Executive Committee</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {#each members as member (member.name)}
      <MemberCard
        name={member.name}
        role={member.role}
      />
    {/each}
  </div>
</div>

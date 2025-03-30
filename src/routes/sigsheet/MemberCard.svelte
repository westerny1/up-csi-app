<script>
  import logo from "$lib/icons/upcsi.svg";
  export let name = "Default Name";
  export let role = "Default role";
  export let photo = logo;
</script>

<button 
  onclick={() => {}}
  class="dark:bg-csi-neutral-900 shadow-md rounded-lg p-4 flex flex-col w-48 h-60 
          transition transform hover:scale-105 hover:shadow-lg"
>
  <img src={photo} alt={name} class="w-32 h-32 object-cover mb-3" />
  <h2 class="text-lg font-bold text-left text-csi-white">{name}</h2>
  <p class="text-sm text-csi-neutral-200 text-left ">{role}</p>
</button>

<script>
    import { BookCheck, LayoutDashboard, LogOut, NotebookPen } from '@lucide/svelte';
    import CSI_Logo from '$lib/icons/upcsi.svg';
    import { page } from '$app/state';
    const options = ['Dashboard', 'Signature Sheet', 'Constitution Quiz'];
    const filenames = ['/', '/sigsheet/', '/consti-quiz/'];
    const icon_class = 'h-6 w-6';
</script>

<div class="bg-csi-black fixed h-screen flex-initial pt-8 pr-8 pl-7">
    <div class="relative h-full">
        <div class="mb-8 flex w-full p-4">
            <img src={CSI_Logo} alt="UP CSI Logo" class="mr-6 w-6" />
            <div class="text-csi-blue w-3/4 align-middle text-2xl font-semibold">UP CSI</div>
        </div>

        {#each options as option, i (option)}
            <a class="my-2 flex w-full" href={filenames[i]}>
                <div
                    class="text-csi-white flex w-full items-center p-3 font-medium
                        {page.url.pathname !== filenames[i]
                        ? 'hover:bg-csi-neutral-100 hover:text-csi-black rounded-3xl opacity-50 ease-in-out hover:opacity-100 hover:duration-300'
                        : 'font-bold'}"
                >
                    <!-- Options -->
                    {#if option === 'Dashboard'}
                        <LayoutDashboard class={icon_class} />
                    {:else if option === 'Signature Sheet'}
                        <NotebookPen class={icon_class} />
                    {:else}
                        <BookCheck class={icon_class} />
                    {/if}
                    <div class="ml-4 w-3/4">{option}</div>
                </div>
            </a>
        {/each}

        <form class="absolute bottom-0 mb-10 ml-2 w-full" action="/logout" method="POST">
            <div
                class="text-csi-white hover:bg-csi-neutral-100 hover:text-csi-black flex w-full gap-2 rounded-full p-3 font-medium
                        opacity-50 ease-in-out hover:font-medium hover:opacity-100 hover:duration-100"
            >
                <LogOut class={icon_class} />
                <button type="submit" class="ml-4 w-3/4">Log Out</button>
            </div>
        </form>
    </div>
</div>

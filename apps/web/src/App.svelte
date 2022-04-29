<script lang="ts">
import { onMount } from 'svelte';
import { userStore } from './store/user.store';

let { email, fullName } = userStore;

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

onMount(async () => {
    await timeout(3000);
    await userStore.login('admin@admin.com', '123456');
});
</script>

<main class="main">
    {$email}
    {$fullName}
</main>

<style lang="scss">
    .main{
        margin: 0;
        padding: 0;
    }
</style>

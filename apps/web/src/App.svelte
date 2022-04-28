<script lang="ts">
import { onMount } from 'svelte';
import { Api } from './api';

onMount(async () => {
    const res = await Api.auth.login({
        email: '',
        password: '',
    });

    console.log('ok');
});
</script>

<main class="main">
</main>

<style lang="scss">
    .main{
        margin: 0;
        padding: 0;
    }
</style>

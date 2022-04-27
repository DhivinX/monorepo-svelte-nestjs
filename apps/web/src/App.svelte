<script lang="ts">
import { onMount } from 'svelte';
import { Api } from './api';
import { UserLoginDto } from '@monorepo-starter/dto';

onMount(async () => {
    const loginData: UserLoginDto = {
        email: 'admin@admin.com',
        password: '123456',
    };

    await Api.auth.login(loginData);
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

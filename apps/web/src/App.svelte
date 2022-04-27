<script lang="ts">
import { UserLoginDto } from '@monorepo-starter/dto';
import { transformAndValidate } from 'class-transformer-validator';
import { onMount } from 'svelte';

onMount(async () => {
    const loginData: UserLoginDto = {
        email: '',
        password: '',
    };

    try {
        await transformAndValidate(UserLoginDto, loginData);
    } catch (err) {
        console.log(err);
    }
});
</script>

<style lang="scss">
    .main{
        margin: 0;
        padding: 0;
    }
</style>

<main class="main">
    
</main>

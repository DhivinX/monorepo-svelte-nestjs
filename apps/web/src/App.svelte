<script lang="ts">
import { UserResponse, UsersResponse } from "@monorepo-starter/interfaces";
import { onMount } from "svelte";
import { getUsers } from "./api";

let users: UserResponse[];

onMount(async () => {
    let data: UsersResponse = await getUsers();
    users = data.users;
});
</script>

<style lang="scss">
    .main{
        margin: 0;
        padding: 0;
    }
</style>

<main class="main">
    {JSON.stringify(users)}
</main>

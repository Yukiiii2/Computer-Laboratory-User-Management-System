<template>
    <div>
        <navbar/>
    </div>

    <div class="main">

    </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const newScreen = (nscr) => {
    router.push(nscr)
};
</script>

<style>

</style>
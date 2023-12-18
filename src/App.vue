<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

onBeforeMount(() => 
    {router.push('/Login')}
);
</script>

<template>
    <div>
        <router-view></router-view>  
    </div>
</template>

<style>

</style>
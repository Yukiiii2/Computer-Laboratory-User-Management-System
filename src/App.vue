<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios'
const router = useRouter();

onBeforeMount(() => 
    {router.push('/Login')}
);

const fetch = async () => {
    
    try { 
        const response = await axios.get('http://127.0.0.1:8000/api/student');
        console.log(response.data) //Return  val
    } catch (error) {
        console.error('Error Message:', error);
    } finally {        
    }
};

fetch()
</script>

<template>
    <div>
        <router-view></router-view>  
    </div>
</template>

<style>

</style>


<template>
 <navbar/>
</template>

<script>
  import navbar from "../components2/navbar.vue";
  import { useRouter } from 'vue-router';
  
  export default {
    components: {
      navbar,
    },
    setup() {
      const router = useRouter();
  
      const newScreen = (nscr) => {
        router.push(nscr);
      };
  
      return {
        newScreen,
      };
    },
  };
</script>

<style>
    *{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
</style>
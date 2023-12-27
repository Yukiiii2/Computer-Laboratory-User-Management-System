<template>
    <div>
      <navbar />
    </div>
  
    <div class="main">
      <div class="wrapper">
        <p class="name">MARC COSTILLAS</p>
        <p class="section">BSIT - 2A</p>
        <p class="subject">CC112</p>
      </div>
        
      
      <div class="Title">
          <h2>ACCOUNT INFORMATION</h2>
      </div>

      <div class="info">
          <h3>First Name:</h3>
          <h3>Last Name:</h3>
      </div>

      <div class="info1">
          <h3>Subject Name:</h3>
          <h3>Subject ID:</h3>
      </div>

      <div class="info2">
          <h3>ID Number:</h3>
          <h3>Password:</h3>
      </div>
     


    </div>
  </template>
  
  <script>
  import navbar from "../components/navbar.vue";
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
html {
    height: 100%;
    width: 100%
}
.wrapper{
    box-shadow: 5px 5px 6px #000000;
    background-color:rgb(254, 254, 254);
    height: 200px;
    width: 1450px;
    position: fixed;
    top: 50px;
    margin-left: 400px;
    border-radius: 15px;
}

.main .wrapper .name{
    position: relative;
    left: -480px;
    top: -25px;
    font-weight: bolder;
    font-size: 45px;
}

.main .wrapper .section{
    position: relative;
    left: -612px;
    top: -10px;
    font-weight: 400;
    font-size: 35px;
}

.main .wrapper .subject{
    position: relative;
    left: 580px;
    top: -210px;
    font-weight: 400;
    font-size: 45px;
}

.Title {
    position: relative;
    top: 300px;
    left: 400px;
    width: 76%;
    background-color: #FB0664;
    padding: 10px;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: flex-start; 
}

.info {
    padding: 10px;
    position: relative;
    top: 300px;
    left: -350px;
    line-height: 90px;
}

.info1{
    padding: 10px;
    position: relative;
    top: 300px;
    left: -350px;
    line-height: 90px;
}

.info2{
    padding: 10px;
    position: relative;
    top: -135px;
    line-height: 90px;
}

h3 {
    margin: 5px 0;
}


</style>
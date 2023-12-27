<template>
<div>
    <div class="background-container">
      <!-- Your background image here -->
      <img src="../assets/bg.jpg" alt="Background Image" class="background-image" />
    </div>
    
    <div class="login">
        <div class="input">
            <input type="text" placeholder="ISSUE:" class="issue">
            <input type="text" placeholder="Unit Number" class="no">

        </div>

            <Button @click="newScreen('/Login')">SEND</Button>

    </div>

        <div class="logo">
            <img src="../assets/logo.png" alt="">
        </div>
</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const newScreen = (nscr) => {
router.push(nscr)
};
</script>

<style>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: hidden;
}

.background-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 120%;
  height: 120%;
  z-index: -1;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


*{
font-family: Verdana, Geneva, Tahoma, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
}


.login{
position: relative;
left: 700px;
width: 560px;
height: 450px;
margin-top: 270px;
border: 2px solid #E0115F;
background-color: #e0d7d9;
border-radius: 25px;
}


.input{
margin-top: 150px;
}

.login .issue{
width: 400px;
height: 100px;
padding-left: 5px;
display: block;
margin-right: auto;
margin-left: auto;
border: 2px solid #E0115F;
-webkit-transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-ms-transition: all 0.3s ease;
transition: all 0.3s ease;
}

.login .no{
    margin-top: 20px;
}
.login .issue:active{
border-radius: 20px;
}

.login button{
cursor: pointer;
padding: 15px 32px;
margin-top: 50px;
background-color: #f7beca;
border: 2px solid #E0115F;
font-weight: bold;
-webkit-transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-ms-transition: all 0.3s ease;
transition: all 0.3s ease;
overflow: hidden;
}

.login button:hover{
padding: 20px 40px;
}

.link a{
margin-top: 10px;
display: block;
color: #E0115F;
text-decoration: none;
font-weight: bold;
-webkit-transition: all 0.3s ease;
-moz-transition: all 0.3s ease;
-ms-transition: all 0.3s ease;
transition: all 0.3s ease;
}

.link a:hover{

color: #f7669d;
}
.link{
margin-top: 30px;
}

.logo img{
width: 220px;
position: relative;
bottom: 550px;
left: 30px;
}
</style>
<template>


        <div class="login">




            <div class="input">
                <input type="text" size="large" placeholder="USERNAME" required/>
                <input type="password" size="large" placeholder="PASSWORD" required/>
            </div>

                <Button @click="newScreen('/navbar')">LOGIN</Button>
                    
            
            <div class="link">
                <a href="">Forgot Password</a>
                <a href="">Open a Support Ticket</a>
            </div>

        </div>

            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>

/*    background-image: url("../assets/bg.jpg"); */
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const newScreen = (nscr) => {
    router.push(nscr)
};

</script>

<style>
html {
    height: 100%;
    width: 100%
}
*{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body{
    background-repeat: no-repeat;
    background-size: cover;
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

.login input{
    width: 400px;
    height: 40px;
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
.login input:active{
    border-radius: 50px;
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
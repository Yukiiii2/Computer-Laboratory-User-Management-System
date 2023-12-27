<template>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <div class="sidenav">

            <img src="../assets/navlogo.png" alt="" class="navlogo1">

            <div class="box">
                <Button @click="newScreen('/attendance')" >Attendance<i class='bx bx-group'></i></Button>
            </div>
    
            <div class="box">
                <Button @click="newScreen('/account')" >Account<i class='bx bx-user' ></i></Button>
            </div>

            <div class="box">
                <Button @click="newScreen('/records')" >Records<i class='bx bx-receipt'></i></Button>
            </div>

            <div class="box">
                <Button @click="newScreen('/reports')" >Reports<i class='bx bxs-report' ></i></Button>
            </div>
    
            <div class="box">
                <Button @click="newScreen('/Login')" class="logout">Logout<i class='bx bx-log-out-circle' ></i></Button>
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
    html {
        height: 100%;
        width: 100%
    }
    
    button{
        background: none;
        border: none;
        padding: 0;
    }
    i{
        margin-left: 30px;
    }

    *{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    }
    
    .sidenav {
      height: 100%;
      width: 330px;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      background-color:#FB0664;
      overflow-x: hidden;
      padding-top: 170px;
    }
    
    .sidenav button {
      padding: 25px 12px 25px 32px;
      text-decoration: none;
      font-size: 30px;
      color: white;
      display: block;
      font-weight: bolder;
      margin-top: 20px;
    }
    
    button:hover{
        color: #FB0664E0;
    }
    
    .box{
        width: 350px;
        margin-left: 30px;
        border-bottom: 2px solid white;
        -webkit-transition: all 0.5s ease;
        -moz-transition: all 0.5s ease;
        -ms-transition: all 0.5s ease;
        transition: all 0.5s ease;
    }
    
    .box:hover{
        border-radius: 60px;
        background-color: white;
    }
    
    .navlogo1{
        position: relative;
        top: -100px;
        width: 150px;
        filter: brightness(0) invert(1);
    }

    @media screen and (max-height: 450px) {
      .sidenav {padding-top: 15px;}
      .sidenav a {font-size: 18px;}
    }
    </style>
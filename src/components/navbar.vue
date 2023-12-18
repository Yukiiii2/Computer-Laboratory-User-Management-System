<template>

<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div class="sidenav">
        <div class="box">
            <Button @click="newScreen('/Page1')" >Attendance<i class='bx bx-group'></i></Button>
            
        </div>

        <div class="box">
            <Button @click="newScreen('/Page2')" >Account<i class='bx bx-user' ></i></Button>
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
  margin-top: 50px;
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



@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
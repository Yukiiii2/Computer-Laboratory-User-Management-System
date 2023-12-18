<template>
    <div>
        <navbar/>
    </div>

    <div class="main">
        <div class="wrapper">
            <p class="name">MARC COSTILLAS</p>
            <p class="section">BSIT - 2A</p>
            <p class="subject">CC112</p>
        </div>

        <div class="data-table">
            <div class="colro">
                <table style="width:100%">
                    <tr class="header">
                        <th>ID Number</th>
                        <th>Student</th>
                        <th>Log In Time</th>
                        <th>Log Out Time</th>
                        <th>Attendance</th>
                    </tr>
                    <tr>
                        <td>220000001254</td>
                        <td>Capangpangan</td>
                        <td>9:00 AM</td>
                        <td>11:56 AM</td>
                        <td class="Present">Present</td>
                    </tr>
                    <tr>
                        <td>220000001454</td>
                        <td>Carbonilas</td>
                        <td>------</td>
                        <td>------</td>
                        <td class="Absent">Absent</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</template>

<script setup>
import navbar from "../components/navbar.vue";
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

.main .data-table{
    width: 1450px;
    height: 660px;
    position: relative;
    left: 400px;
    top: 280px;
    background-color: #f8f8ff;
    border-radius: 25px;
    box-shadow: 10px 10px 10px black ;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-weight: bold;
}

.main .data-table .colro{
    width: 1375px;
    height: 600px;
    position: relative;
    left: 40px;
    top: 28px;
    box-shadow: 2px 2px 2px black;
    background-color: #FB0664;
    border-radius: 25px;
}

.main .data-table .colro table{
    position: relative;
    left: -45px;
    top: 10px;

}

.main .data-table .colro .Present{
    background-color: #86D63D;
    border-radius: 30px;
}

.main .data-table .colro .Absent{
    background-color: #F70202;
    border-radius: 30px;
}

tr
{
    line-height:50px;
}






@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
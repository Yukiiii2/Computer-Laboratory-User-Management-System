<template>
    <div>
        <navbar/>
    </div>

    <div class="main">
        <div class="wrapper">
            <p class="name">MARC COSTILLAS</p>
            <p class="section">BSIT - 2A</p>
        </div>

        <div class="data-table">
            <div class="colro">
                <table style="width:100%">
                    <tr class="header">
                        <th>Student ID</th>
                        <th>Student LN</th>
                        <th>PC_ID</th>
                        <th>Lab_Room</th>
                        <th>Subject_ID</th>
                        <th>Login_Time</th>
                        <th>Logout_Time</th>
                        <th>
                            <div class="dropdown">
                                Status<i class='bx bx-chevron-down'></i>
                                    <div class="dropdown-content">
                                        <a href="#" class="Present">Present</a>
                                        <a href="#" class="Absent">Absent</a>
                                        <a href="#" class="Excused">Excused</a>
                                    </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>220000000000</td>
                        <td>Costillas</td>
                        <td>L202_01</td>
                        <td>202</td>
                        <td>CC112</td>
                        <td>9:00 AM</td>
                        <td>12:00 PM</td>
                        <td class="Present">Present</td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class=""></td>
                    </tr>      
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="P"></td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class="P"></td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class=""></td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class=""></td>
                    </tr>           
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class=""></td>
                    </tr> 
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td class=""></td>
                    </tr> 
                </table>
            </div>
        </div>
    </div>

</template>

<script setup>
import navbar from "../components2/navbar.vue";
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

table, td, th {  
  border: 1px solid #FB0664E0;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
  color: black;
}
th{
    background-color: #FB0664E0;
    border-right: 1px solid white;
    border-left: 1px solid white;
}

.wrapper{
    box-shadow: 5px 5px 5px 6px #000000;
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
    height: 70px;
    position: relative;
    left: 400px;
    top: 270px;
    background-color: none;
    border-radius: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-weight: bold;
}

.main .data-table .colro table{
    position: relative;
    left: 5px;
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

.main .data-table .colro .Excused{
    background-color: #726363;
    border-radius: 30px;
}

.dropbtn {
    
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: white;
    font-weight: bold;
    border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
    background-color: white;
    border: 1px solid black;
    border-radius: 15px;
    display: none;
    position: absolute;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
    position: relative;
    left: 25px;
    width: 150px;
    color: black;
    padding: 12px 10px;
    text-decoration: none;
    display: block;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.dropdown-content a:hover {
    padding: 15px 13px;
    border: 1px solid black;

}

.dropdown:hover .dropdown-content {display: block;}

i{
    position: relative;
    left: -15px;
}

i{
    position: relative;
    left: -15px;
}







@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
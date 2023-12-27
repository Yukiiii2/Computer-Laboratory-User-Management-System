<template>
<navbar/>
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <div class="main">
      <div class="wrapper">
        <p class="name">MARC COSTILLAS</p>
        <p class="section">BSIT - 2A</p>
      </div>

      <div class="outer">
        <div class="records">RECORDS<input type="text" class="search"><i class='bx bx-search-alt-2'></i></div>
        
        <div class="input">
          <input type="text" placeholder="Students ID" class="newStud">
          <input type="text" placeholder="Student FN,LN" class="newStud">
          <input type="text" placeholder="PC ID" class="newStud">
          <input type="text" placeholder="Lab Room" class="newStud">
        </div>

        <button class="addStud">ADD STUDENT</button>


                  <table style="width:90%">
                    <tr class="header">
                        <th></th>
                        <th>Student ID</th>
                        <th>Student FN,LN</th>
                        <th>PC ID</th>
                        <th>Lab Room</th>
                        <th>Subject ID</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>  
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                                  
                  </table>


      </div>
    </div>



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

.outer{
  position: relative;
  top: 300px;
  left: 100px;
  margin-left: 350px;
  width: 1330px;
  height: 600px;
  border: 1px solid #FB0664;
  box-shadow: 5px 5px 3px #000000;
}

.records{
  color: white;
  background-color: #FB0664;
  display: flex;
  justify-content: flex-start; 
  font-size: 55px;
}
.search{
  height: 25px;
  position: relative;
  left: 750px;
  top: 20px;
}
i{
  position: relative;
  left: 730px;
  top: 20px;
  font-size: 30px;
}

.newStud{
  border: 2px solid #FB0664;
  position: relative;
  top: -120px;
  width: 250px;
  height: 40px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.newStud:hover{
  background-color: gray;
}

.addStud{
  width: 120px;
  height: 50px;
  color: #FB0664;
  font-weight: bold;
  border: 2px solid #FB0664;
  position: relative;
  top: -100px;
  left: 500px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.addStud:hover{
  width: 130px;
  height: 70px;
}

table {
  border-collapse: collapse;
  width: 100%;
  position: relative;
  top: -80px;
  left: 70px;
}

th{
  padding: 15px;
  color: WHITE;
}
th{
    background-color: #FB0664E0;
    border-right: 1px solid #FB0664E0;
    border-left: 1px solid #FB0664E0;
}

</style>
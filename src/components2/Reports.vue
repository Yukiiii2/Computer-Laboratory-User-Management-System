<template>
    <navbar/>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        <div class="main">
          <div class="wrapper">
            <p class="name">MARC COSTILLAS</p>
            <p class="section">BSIT - 2A</p>
          </div>
    
          <div class="outer">
            <div class="records">REPORTS</div>
    
            <div class="bgm">
                    <div class="information">
                        <div class="unit">
                            <h2>PC #14/ L202</h2>
                        </div>
                        <div class="date">
                            <h2>12/31/23</h2>
                        </div>
                    </div>
                        
                    <div class="problem">
                            <p>The ethernet cable of this Computer Unit is not connected</p>
                    </div>

                    <div class="check">
                            <button><i class='bx bx-check-circle'></i></button> <button><i class='bx bx-x-circle' ></i></button>
                    </div>
            </div>

            <div class="bgm">
                    <div class="information">
                        <div class="unit">
                            <h2>PC #09/ L203</h2>
                        </div>
                        <div class="date">
                            <h2>08/06/23</h2>
                        </div>
                    </div>
                        
                    <div class="problem">
                            <p>The Monitor is missing</p>
                    </div>

                    <div class="check">
                            <button><i class='bx bx-check-circle'></i></button> <button><i class='bx bx-x-circle' ></i></button>
                    </div>
            </div>

                        <div class="bgm">
                    <div class="information">
                        <div class="unit">
                            <h2>PC #123/ L201</h2>
                        </div>
                        <div class="date">
                            <h2>09/19/23</h2>
                        </div>
                    </div>
                        
                    <div class="problem">
                            <p>The Monitor has a Bluescreen Display</p>
                    </div>

                    <div class="check">
                            <button><i class='bx bx-check-circle'></i></button> <button><i class='bx bx-x-circle' ></i></button>
                    </div>
            </div>
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
      border: 2px solid #FB0664;
      box-shadow: 5px 5px 3px #000000;
    }
    
    .records{
      color: white;
      background-color: #FB0664;
      display: flex;
      justify-content: flex-start; 
      font-size: 55px;
    }

    .information{
        position: relative;
        left: -480px;
    }

    h2{
        font-weight: bold;
        color: #FB0664;
    }

    .problem{
        position: relative;
        top: -60px;
    }

    p{
        font-weight: bold;

    }

    .check{
        position: relative;
        top: -120px;
        left: -180px;
    }

    .bgm{
        margin-top: 15px;
        position: relative;
        top: 10px;
        height: 120px;
        border: 2px solid #FB0664;
        border-style: solid none;
    }
    </style>
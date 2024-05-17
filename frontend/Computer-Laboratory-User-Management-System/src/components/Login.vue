<template>
  <div>
    <div class="background-container">
      <!-- Your background image here -->
      <img src="../assets/bg.jpg" alt="Background Image" class="background-image" />
    </div>

    <div class="login">
      <img class="logo-pic" src="../assets/logo.png" alt="Logo" />
      <div class="input">
        <input type="text" size="20" placeholder="USERNAME" id="username" name="username" v-model="username" required />
        <input type="password" size="20" placeholder="PASSWORD" id="password" name="password"  v-model="password" required />
      </div>
      <div class="error"  v-if="errorMessage" :class="{ 'show-error': showError }">{{ errorMessage }}</div>
      <button @click="attemptLogin">LOGIN</button>

      <div class="link">
        <Router-link to="/register"><a>Forgot Password</a></Router-link>
        <Router-link to="/report"><a>Report PC Issue</a></Router-link>
      </div>
    </div>
  </div>           
</template>

Kobe C. NaktanNagsisilos
<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      showError: false
    };
  },
  methods: {
    attemptLogin() {
      if (!this.username) {
        this.errorMessage = "Empty Username";
        this.showError = true;
        this.hideErrorAfterDelay();
        return;
      }

      const formData = new FormData();
      formData.append('username', this.username);
      formData.append('password', this.password);

      // Attempt teacher login
      axios.post('http://127.0.0.1:8000/api/teacher/login/', formData)
        .then(teacherResponse => {
          if (teacherResponse.data) {
            console.log("Teacher Login Success");
            this.$router.push('/page1');
          } else {
            // If teacher login fails, attempt admin login
            this.attemptAdminLogin(formData);
          }
        })
        .catch(teacherError => {
          console.error("Teacher Login Error:", teacherError);
          // If teacher login fails, attempt admin login
          this.attemptAdminLogin(formData);
        });
    },
    attemptAdminLogin(formData) {
      axios.post('http://127.0.0.1:8000/api/admin/login/', formData)
        .then(adminResponse => {
          if (adminResponse.data) {
            console.log("Admin Login Success");
            this.$router.push('/account');
          } else {
            this.errorMessage = "Invalid credentials. Please try again.";
            this.showError = true;
            this.hideErrorAfterDelay();
            console.log("Invalid credentials for both teacher and admin");
          }
        })
        .catch(adminError => {
          console.error("Admin Login Error:", adminError);
          this.errorMessage = "Account Doesn't Exist";
          this.showError = true;
          this.hideErrorAfterDelay();
        });
    },
    hideErrorAfterDelay() {
      setTimeout(() => {
        this.showError = false;
        this.errorMessage = '';
      }, 3000); // Adjust the delay time (in milliseconds) as needed
    }
  }
};
</script>

<style >
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
    background-color: rgba(224, 215, 217, 0.6);
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

.logo-pic{
    width: 200px;
    position: fixed;
    left: 880px;
    top: 180px;
}

.logo img{
width: 220px;
position: relative;
bottom: 550px;
left: 30px;
}

.error {
  width: 50%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  animation: fadeInOut 3s ease-in-out;
  background-color: #ffcccc;
  color: #cc0000;
  border: 2px solid #cc0000;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto; /* Centering the error message horizontally */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%; /* Centering the error message vertically */
  left: 50%;
  transform: translate(-50%, -50%);
}

.show-error {
  opacity: 1;
}

@keyframes fadeInOut {
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
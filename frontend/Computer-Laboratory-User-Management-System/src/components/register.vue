<template>
  <div>
    <div class="background-container">
      <!-- Your background image here -->
      <img src="../assets/bg.jpg" alt="Background Image" class="background-image" />
    </div>

    <div class="login">
      <img class="logo-pic" src="../assets/logo.png" alt="Logo" />
      <div class="input">
        <input type="text" size="large" v-model="userId" placeholder="STUDENT ID" required/>
        <input type="password" size="large" v-model="password" placeholder="NEW PASSWORD" required/>
        <input type="password" size="large" v-model="confirmPassword" placeholder="CONFIRM PASSWORD" required/>
      </div>

      <Button @click.prevent="submitForm">UPDATE PASSWORD</Button>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const router = useRouter();
    const userId = ref('');
    const password = ref('');
    const confirmPassword = ref('');

    const newScreen = (nscr) => {
      router.push(nscr);
    };

    const submitForm = async () => {
      try {
        if (password.value !== confirmPassword.value) {
          throw new Error('New passwords do not match');
        }

        const requestData = {
          new_password: password.value,
          confirm_password: confirmPassword.value
        };

        const response = await axios.put(`http://127.0.0.1:8000/api/change_password/${userId.value}`, requestData);

        console.log('Form submitted successfully:', response.data);

        window.alert('Password updated successfully!');
        newScreen('/login');

      } catch (error) {
        console.error('Error submitting form:', error);
        if (error.response) {
          window.alert(error.response.data.detail);
        } else {
          window.alert('An error occurred while updating the password.');
        }
      }
    };

    return {
      userId,
      password,
      confirmPassword,
      submitForm
    };
  }
};
</script>



<style scoped>
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
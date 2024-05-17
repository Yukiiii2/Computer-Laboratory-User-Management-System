<template>
  <div>
    <div class="background-container">
      <!-- Your background image here -->
      <img src="../assets/bg.jpg" alt="Background Image" class="background-image" />
    </div>
    
    <div class="login">
      <img class="logo-pic" src="../assets/logo.png" alt="Logo" />
      <div class="input">
        <select name="language" id="language" @change="showTextBox()">
          <option value="0" disabled selected>Select Computer Issues</option>
          <option value="Internet Connection Issues">Internet Connection Issues</option>
          <option value="Hardware Malfunctions">Hardware Malfunctions</option>
          <option value="Software Crashes">Software Crashes</option>
          <option value="Low Disk Space">Low Disk Space</option>
          <option value="Printer Problems">Printer Problems</option>
          <option value="others">Others</option>
        </select>
        
        <div class="others" id="otherLanguage" style="display: none;">
          <input type="text" id="otherLanguageInput" name="otherLanguageInput" placeholder="Describe Other Issue">
        </div>

        <input type="text" id="unit_number" placeholder="Unit Number" class="no">
      </div>
      <button @click="submitForm">SEND</button>
    </div>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();

const newScreen = (nscr) => {
  router.push(nscr);
};

const showTextBox = () => {
  const select = document.getElementById("language");
  const otherLanguageInput = document.getElementById("otherLanguageInput");
  const otherLanguageDiv = document.getElementById("otherLanguage");

  if (select.value === "others") {
    otherLanguageDiv.style.display = "block";
    otherLanguageInput.required = true; // Make the text box required
  } else {
    otherLanguageDiv.style.display = "none";
    otherLanguageInput.required = false; // Remove the required attribute
  }
};

const submitForm = async () => {
  try {
    const selectedIssue = document.getElementById("language").value;
    const unitNumber = document.getElementById("unit_number").value;
    const otherIssue = document.getElementById("otherLanguageInput").value;

    const formData = new FormData();
    formData.append('issue', selectedIssue === 'others' ? otherIssue : selectedIssue);
    formData.append('unit_number', unitNumber);

    const response = await axios.post('http://127.0.0.1:8000/api/report/create', formData);

    console.log('Form submitted successfully:', response.data);
    
    window.alert('Report submitted successfully!');
    newScreen('/login');

  } catch (error) {
    console.error('Error submitting form:', error);
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


select{
  border:none;
  padding: 10px 0.1px;
  border-radius:5px;
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

.others{
  margin-top: 20px;
}

.logo img{
width: 220px;
position: relative;
bottom: 550px;
left: 30px;
}
</style>
<template>
    <div>
      <navbar />
    </div>
  
    <div class="main">
      <div class="wrapper">
        <p class="name">{{ username }}</p>
        <!-- Dropdown for section -->
        <div class="dropdown">
          <button class="dropbtn" @click="toggleDropdown">BSIT - {{ selectedSection }}</button>
          <div class="dropdown-content" v-show="dropdownOpen">
            <a @click="selectSection('2A')">2A</a>
            <a @click="selectSection('2B')">2B</a>
            <!-- Add more options here if needed -->
          </div>
        </div>
      </div>
        
      
      <div class="Title">
          <h2>ACCOUNT INFORMATION</h2>
      </div>

      <div class="info">
          <h3>First Name:</h3>
          <h3>Last Name:</h3>
      </div>

      <div class="info1">
          <h3>Subject Name:</h3>
          <h3>Subject ID:</h3>
      </div>

      <div class="info2">
          <h3>ID Number:</h3>
          <h3>Password:</h3>
      </div>
     


    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import axios from 'axios';
  import navbar from "../components/navbar.vue";
  
  const selectedSection = ref('Pick Section'); // Default section
  const dropdownOpen = ref(false);
  const username = ref('');
  
  const router = useRouter();
  
  const newScreen = (nscr) => {
    router.push(nscr);
  };
  
  const fetchTeacherLogin = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/teacher_login/');
      // Assuming the response data is an array of objects containing first_name and last_name
      if (response.data.length > 0) {
        const { first_name, last_name } = response.data[0]; // Assuming you want data from the first record
        username.value = `${first_name} ${last_name}`;
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const selectSection = (section) => {
    selectedSection.value = section;
    fetchAttendance(section); // Fetch attendance data for the selected section
  };
  
  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  };
  
  onMounted(() => {
    fetchTeacherLogin();
  });
  </script>

<style scoped>
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

.main .wrapper .name {
  position: absolute;
  left: 20px; /* Adjust the left position as needed */
  top: 20px; /* Adjust the top position as needed */
  font-weight: bolder;
  font-size: 45px;
  max-width: calc(100% - 40px); /* Adjust the max-width as needed */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis for text overflow */
  white-space: nowrap; /* Prevent line break */
}

.main .wrapper .section {
    position: relative;
    left: -612px;
    top: -10px;
    font-weight: 400;
    font-size: 35px;
}

.Title {
    position: relative;
    top: 300px;
    left: 400px;
    width: 76%;
    background-color: #FB0664;
    padding: 10px;
    font-size: 20px;
    color: white;
    display: flex;
    justify-content: flex-start; 
}

.info {
    padding: 10px;
    position: relative;
    top: 300px;
    left: -350px;
    line-height: 90px;
}

.info1{
    padding: 10px;
    position: relative;
    top: 300px;
    left: -350px;
    line-height: 90px;
}

.info2{
    padding: 10px;
    position: relative;
    top: -135px;
    line-height: 90px;
}

h3 {
    margin: 5px 0;
}

.dropbtn {
  background-color: #FB0664; /* Green */
  color: Black;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  top: 180px;
  z-index: 1; /* Ensure it's above the dropdown content */

}

/* Adjust the position */
.dropdown {
    position: relative;
    top: -45px; /* Move 10 pixels down */
    left: -580px; /* Move 5 pixels to the right */
    display: inline-block;
}
.dropbtn:hover {
    background-color: #FB0664; /* Darker green */
}

.dropdown-content {
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  display: none;
  position: absolute;
  top: 220px;
  min-width: 213px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  max-height: calc(100vh - 100px); /* Adjust the max-height as needed */
  overflow-y: hidden;
  overflow-x: hidden;
}

.dropdown-content a {
  position: relative;
  left: 5px;
  top: 2px;
  width: 200px;
  color: black;
  padding: 10px 7px;
  text-decoration: none;
  display: block;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
  font-weight: 200;
}

.dropdown-content a:hover {
  padding: 12px 10px;
  background-color: #FB0664;
  border-radius: 15px;
  margin-bottom: 3%;
  font-weight: bold;
}

.dropdown:hover .dropdown-content {display: block;}
</style>
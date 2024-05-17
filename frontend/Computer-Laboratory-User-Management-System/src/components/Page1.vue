<template>
  <div>
    <navbar/>
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

      <!-- Input fields for adding a new student -->

      <div class="data-table">
        <div class="colro">

          <div class="input-section">
            <input type="text" v-model="newStudent.student_id" placeholder="Student ID">
            <input type="text" v-model="newStudent.student_name" placeholder="Student Name">
            <input type="text" v-model="newStudent.pc_number" placeholder="PC Number">
            <input type="text" v-model="newStudent.lab_room" placeholder="Lab Room">
            <input type="text" v-model="newStudent.subject_id" placeholder="Subject ID">
            <input type="text" v-model="newStudent.section" placeholder="Section">
            <button class="add-student-btn" @click="addStudent">Add Student</button>
          </div>
          
          <div class="table-container">
            <table>
              <thead>
                <tr class="header">
                  <th>Student ID</th>
                  <th>Student Name</th>
                  <th>PC Number</th>
                  <th>Lab Room</th>
                  <th>Subject ID</th>
                  <th>Section</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(student, index) in attendance" :key="index">
                  <td>{{ student.student_id }}</td>
                  <td>{{ student.student_name }}</td>
                  <td>{{ student.PC_Number }}</td>
                  <td>{{ student.Lab_Room }}</td>
                  <td>{{ student.Subject_ID }}</td>
                  <td>{{ student.Section }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import navbar from "../components/navbar.vue";

const attendance = ref([]);
const selectedSection = ref('Pick Section'); // Default section
const dropdownOpen = ref(false);
const username = ref('');
const newStudent = ref({
  student_id: '',
  student_name: '',
  pc_number: '',
  lab_room: '',
  subject_id: '',
  section: ''
});

const fetchAttendance = async (section) => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/Admin/`);
    attendance.value = response.data;
  } catch (error) {
    console.error(error);
  }
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

const addStudent = async () => {
  try {
    const formData = new FormData();
    formData.append('student_id', newStudent.value.student_id);
    formData.append('student_name', newStudent.value.student_name);
    formData.append('pc_number', newStudent.value.pc_number);
    formData.append('lab_room', newStudent.value.lab_room);
    formData.append('subject_id', newStudent.value.subject_id);
    formData.append('section', newStudent.value.section);

    const response = await axios.post('http://127.0.0.1:8000/api/admin/create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (response.data.message === 'Student Has been Added Successfully') {
      fetchAttendance(selectedSection.value); // Refresh attendance list for the selected section
      clearNewStudent(); // Clear input fields

      console.log('New student added:', response.data);
    } else {
      console.error('Error adding student:', response.data.message);
    }
  } catch (error) {
    console.error('Error adding student:', error);
  }
};

const clearNewStudent = () => {
  newStudent.value = {
    student_id: '',
    student_name: '',
    pc_number: '',
    lab_room: '',
    subject_id: '',
    section: ''
  };
};

onMounted(() => {
  fetchAttendance(selectedSection.value); // Fetch attendance data for the default section
  fetchTeacherLogin();
});
</script>



<style scoped>
html {
    height: 100%;
    width: 100%
}

.data-table {
  margin-top: 100px; /* Add margin to push the table down */
}

.data-table table {
  width: 100%; /* Adjust the width as needed */
}

table, td, th {  
  border: 1px solid #FB0664E0;
  border-right: 1px solid #FB0664E0;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 15px;
}

th {
  background-color: #FB0664E0;
  border-right: 1px solid white;
  border-left: 1px solid white;
  position: sticky;
  top: 0;
  z-index: 1;
}

.wrapper {
  box-shadow: 5px 5px 6px #000000;
  background-color: rgb(254, 254, 254);
  height: 200px;
  width: 1400px;
  position: fixed;
  top: 50px;
  margin-left: 400px;
  border-radius: 15px;
}

.main .wrapper .name {
  position: absolute;
  left: 20px;
  top: 20px;
  font-weight: bolder;
  font-size: 45px;
  max-width: calc(100% - 40px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.main .wrapper .section {
  position: relative;
  left: -612px;
  top: -10px;
  font-weight: 400;
  font-size: 35px;
}

.main .data-table {
  width: 1400px;
  height: 70px;
  position: relative;
  left: 400px;
  top: 270px;
  background-color: none;
  border-radius: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: black;
  font-weight: bold;
}

.main .data-table .colro table {
  position: relative;
  left: 5px;
  top: 10px;
}

.main .data-table .colro .Present {
  background-color: #86D63D;
  border-radius: 30px;
}

.main .data-table .colro .Absent {
  background-color: #F70202;
  border-radius: 30px;
}

.main .data-table .colro .Excused {
  background-color: #726363;
  border-radius: 30px;
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

i {
  position: relative;
  left: -15px;
}

.table-container {
  width: 100%;
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.input-section {
  display: flex;
  align-items: center;
  justify-content: center; /* Align input section in the middle */
  margin-top: 20px; /* Add some margin from the records section */
  position: fixed;
  top: 300px;
  left: 430px;
}

.input-section input {
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.add-student-btn {
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>

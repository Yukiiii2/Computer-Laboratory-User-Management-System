<template>
  <navbar/>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
  <div class="main">
    <div class="wrapper">
      <div class="info-section">
        <p class="name">{{ adminName }}</p> <!-- Display admin's name here -->
        <p class="datetime">{{ currentDateTime }}</p> <!-- Display current date and time here -->
      </div>
    </div>

    <div class="outer">
      <div class="records">
        RECORDS
        <input type="text" class="search" v-model="searchQuery" @keyup.enter="filterAttendance" placeholder="Search Name/ID/Subject ID">
      </div>
      <div class="input-section">
        <input type="text" v-model="newStudent.student_name" placeholder="Student Name">
        <input type="text" v-model="newStudent.pc_number" placeholder="PC Number">
        <input type="text" v-model="newStudent.lab_room" placeholder="Lab Room">
        <input type="text" v-model="newStudent.subject_id" placeholder="Subject ID">
        <input type="text" v-model="newStudent.section" placeholder="Section">
        <input type="text" v-model="newStudent.username" placeholder="Student Username">
        <input type="text" v-model="newStudent.password" placeholder="Default password">
        <button class="add-student-btn" @click="addStudent">Add</button>
      </div>

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
          <tr v-for="(student, index) in filteredAttendance" :key="index">
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
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import navbar from "../components2/navbar.vue";

export default {
  components: {
    navbar,
  },
  setup() {
    const router = useRouter();
    const attendance = ref([]);
    const searchQuery = ref('');
    const adminName = ref('');
    const currentDateTime = ref('');
    const newStudent = ref({
      student_name: '',
      pc_number: '',
      lab_room: '',
      subject_id: '',
      section: '',
      username:'',
      password: ''
    });

    const fetchAttendance = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/Admin/");
        attendance.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const addStudent = async () => {
      try {
        const formData = new FormData();
        formData.append('student_name', newStudent.value.student_name);
        formData.append('pc_number', newStudent.value.pc_number);
        formData.append('lab_room', newStudent.value.lab_room);
        formData.append('subject_id', newStudent.value.subject_id);
        formData.append('section', newStudent.value.section);
        formData.append('username', newStudent.value.username);
        formData.append('password', newStudent.value.password);

        const response = await axios.post('http://127.0.0.1:8000/api/admin/create', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        if (response.data.message === 'Student Has been Added Successfully') {
          fetchAttendance(); // Refresh attendance list
          clearNewStudent(); // Clear input fields
        } else {
          console.error('Error adding student:', response.data.message);
        }
      } catch (error) {
        console.error('Error adding student:', error);
      }
    };

    const clearNewStudent = () => {
      newStudent.value = {
        student_name: '',
        pc_number: '',
        lab_room: '',
        subject_id: '',
        section: ''
      };
    };

    onMounted(() => {
      fetchAttendance();
      fetchAdminName();
      updateDateTime();
      setInterval(updateDateTime, 1000); // Update the time every second
    });

    const filteredAttendance = computed(() => {
      if (!searchQuery.value) {
        return attendance.value;
      }
      const query = searchQuery.value.toLowerCase();
      return attendance.value.filter(student => {
        return (
          student.student_name.toLowerCase().includes(query) ||
          student.Subject_ID.toLowerCase().includes(query)
        );
      });
    });

    const fetchAdminName = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin_login/');
        if (response.data.length > 0) {
          const { first_name, last_name } = response.data[0]; // Assuming you want data from the first record
          adminName.value = `${first_name} ${last_name}`;
        }
      } catch (error) {
        console.error(error);
      }
    };

    const updateDateTime = () => {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      currentDateTime.value = now.toLocaleDateString('en-US', options);
    };

    return {
      attendance,
      searchQuery,
      newStudent,
      addStudent,
      adminName,
      currentDateTime,
      filteredAttendance,
    };
  },
};
</script>

<style scoped>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main {
  position: absolute;
  left: 150px;
  top: 0;
  width: 100%;
}

.wrapper {
  box-shadow: 5px 5px 6px #000000;
  background-color: rgb(254, 254, 254);
  height: 200px;
  width: 1400px;
  position: fixed;
  top: 50px;
  left: 57.6%;
  transform: translateX(-50%);
  border-radius: 15px;
}

.info-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}

.name {
  font-weight: bolder;
  font-size: 45px;
  margin: 0;
}

.datetime {
  font-size: 40px;
  margin-top: 30px;
  font-weight: 300;
}

.section {
  font-weight: 400;
  font-size: 35px;
  margin: 10px 0 0 0;
}

.outer {
  position: relative;
  top: 300px;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 1400px;
  max-height: 600px; /* Set a fixed height to enable scrolling */
  border: 1px solid #FB0664;
  box-shadow: 5px 5px 3px #000000;
  overflow-y: auto; /* Enable vertical scrolling */
}

.records {
  color: white;
  background-color: #FB0664;
  display: flex;
  justify-content: flex-start; 
  font-size: 55px;
  padding: 10px;
}

.search {
  height: 25px;
  margin-left: auto;
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
}

th, td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.header th {
  background-color: #FB0664;
  color: white;
}

.input-section {
  display: flex;
  align-items: center;
  justify-content: center; /* Align input section in the middle */
  margin-top: 20px; /* Add some margin from the records section */
}

.input-section input {
  width: 150px;
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

.add-student-btn:hover {
  background-color: #45a049;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}
</style>
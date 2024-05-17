<template>
  <div>
    <navbar/>
    <div class="main">
      <div class="wrapper">
        <div class="info-section">
          <p class="name">{{ adminName }}</p>
          <p class="datetime">{{ currentDateTime }}</p>
        </div>
      </div>

      <div class="data-table">
        <div class="colro">
          <table>
            <colgroup>
              <col style="width: 20%;" />
              <col style="width: 20%;" />
              <col style="width: 40%;" />
              <col style="width: 20%;" />
            </colgroup>
            <thead>
              <tr class="header">
                <th>Report ID</th>
                <th>Unit Number</th>
                <th>Issue</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(report, index) in reports" :key="index">
                <td>{{ report.report_id }}</td>
                <td>{{ report.unit_number }}</td>
                <td>{{ report.issue }}</td>
                <td>
                  <button @click="showConfirmation(report)" class="approve-button">
                    <i class='bx bx-check-circle'></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <p>Are you sure you want to approve this report?</p>
        <button @click="approveReport">Yes</button>
        <button @click="hideConfirmation">No</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import navbar from "../components2/navbar.vue";

const reports = ref([]);
const showPopup = ref(false);
const selectedReport = ref(null);

const fetchReports = async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/report/");
    reports.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const showConfirmation = (report) => {
  selectedReport.value = report;
  showPopup.value = true;
};

const hideConfirmation = () => {
  showPopup.value = false;
  selectedReport.value = null;
};

const approveReport = async () => {
  try {
    const reportId = selectedReport.value.report_id;
    await axios.delete(`http://127.0.0.1:8000/api/report/${reportId}`);
    const index = reports.value.findIndex((r) => r === selectedReport.value);
    if (index !== -1) {
      reports.value.splice(index, 1);
    }
    hideConfirmation();
  } catch (error) {
    console.error("Error approving report:", error);
  }
};

const adminName = ref('');
const currentDateTime = ref('');

const fetchAdminName = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/admin_login/');
    if (response.data.length > 0) {
      const { first_name, last_name } = response.data[0];
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

onMounted(() => {
  fetchReports();
  fetchAdminName();
  updateDateTime();
  setInterval(updateDateTime, 1000);
});
</script>

<style scoped>
html {
  height: 100%;
  width: 100%;
}

* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.wrapper {
  box-shadow: 5px 5px 5px 6px #000000;
  background-color: rgb(254, 254, 254);
  height: 200px;
  width: 1450px;
  position: fixed;
  top: 50px;
  margin-left: 400px;
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

.main .wrapper .section {
  position: relative;
  left: -612px;
  top: -10px;
  font-weight: 400;
  font-size: 35px;
}

.outer {
  position: relative;
  top: 300px;
  left: 100px;
  margin-left: 350px;
  width: 1330px;
  height: 600px;
  border: 2px solid #FB0664;
  box-shadow: 5px 5px 3px #000000;
}

.records {
  color: white;
  background-color: #FB0664;
  display: flex;
  justify-content: flex-start;
  font-size: 55px;
}

.information {
  position: relative;
  left: -480px;
}

h2 {
  font-weight: bold;
  color: #FB0664;
}

.problem {
  position: relative;
  top: -60px;
}

p {
  font-weight: bold;
}

.check {
  position: relative;
  top: -120px;
  left: -180px;
}

.bgm {
  margin-top: 15px;
  position: relative;
  top: 10px;
  height: 120px;
  border: 2px solid #FB0664;
  border-style: solid none;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
}

.popup button {
  margin: 5px;
}

.approve-button {
  color: green;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 25px;
}

.approve-button:hover {
  color: darkgreen;
}

.data-table {
  position: fixed;
  left: 400px;
  width: 1450px;
  margin-top: 320px; /* Adjust as needed to avoid overlap with the wrapper */
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th, .data-table td {
  border: 1px solid #FB0664;
  padding: 10px;
  text-align: center;
}

.data-table th {
  background-color: #FB0664;
  color: white;
}

.data-table tr:nth-child(even) {
  background-color: #ffe6ec;
}

.data-table tr:hover {
  background-color: #ffccd4;
}
</style>

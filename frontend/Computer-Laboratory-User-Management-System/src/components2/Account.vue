<template>
  <div>
    <navbar />
    <div class="main">
      <div class="wrapper">
        <div class="info-section">
          <p class="name">{{ adminName }}</p>
          <p class="datetime">{{ currentDateTime }}</p>
        </div>
      </div>
      
      <div class="Title">
          <h2>ACCOUNT INFORMATION</h2>
      </div>

      <div class="info">
          <h3>First Name: {{ labincharge.first_name }}</h3>
          <h3>Last Name: {{ labincharge.last_name }}</h3>
      </div>

      <div class="info2">
          <h3>ID Number: {{ labincharge.labincharge_id }}</h3>
          <h3>Password: {{ labincharge.password }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import navbar from "../components2/navbar.vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const newScreen = (nscr) => {
  router.push(nscr);
};

const adminName = ref('');
const currentDateTime = ref('');
const labincharge = ref({
  first_name: '',
  last_name: '',
  labincharge_id: '',
  password: ''
});

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

const fetchLabincharge = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/labincharge/');
    if (response.data.length > 0) {
      const { first_name, last_name, labincharge_id, password } = response.data[0];
      labincharge.value = { first_name, last_name, labincharge_id, password };
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
  fetchAdminName();
  fetchLabincharge();
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

.info2 {
    padding: 10px;
    position: relative;
    top: 90px;
    left: 290px;
    line-height: 90px;
}

h3 {
    margin: 5px 0;
}
</style>

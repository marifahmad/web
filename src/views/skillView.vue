<template>
  <div class="bg">
  <div class="skill-view">
    <h2><i class="fas fa-tools"></i></h2>
    <ul>
      <li v-for="(skill, index) in skills" :key="index">
        <span class="skill-name">{{ skill.name }}</span>
        <div class="skill-bar">
          <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 50 },
        { name: 'Vue.js', level: 50 }
      ]
    };
  }
};
</script>

<style scoped>
.bg{
background:url(/src/assets/portfolio-5.jpg);
}
.skill-view {
  font-family: Arial, sans-serif;
  max-width: 450px;
  padding: 10px;
  margin: auto; /* Menjadikan div tengah secara horizontal */
  margin-top: 200px;
  display: flex; /* Menggunakan flexbox */
  justify-content: center; /* Memusatkan secara horizontal */
  align-items: center; /* Memusatkan secara vertikal */
  background-color: rgba(255, 255, 255, 0); /* Warna latar belakang dengan transparansi */
  backdrop-filter: blur(10px);
}


ul {
  list-style-type: none;
  padding: 0;
}

.skill-name {
  display: inline-block;
  width: 100px;
}

.skill-bar {
  width: 300px;
  height: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin-left: 10px;
  display: inline-block;
}

.skill-progress {
  height: 100%;
  border-radius: 10px;
  background-color: #007bff;
}
</style>



  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  
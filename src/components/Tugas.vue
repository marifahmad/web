<!-- src/components/Tugas.vue -->
<template>
    <div class="tugas-container">
      <h2>List of Tugas</h2>
      <ul>
        <li @click="goToUrl('https://ahmad-projectcv.netlify.app')">Tugas 1</li>
        <li @click="goToUrl('https://example2.netlify.app')">Tugas 2</li>
        <li @click="goToUrl('https://marifahmad.netlify.app')">Tugas 3</li>
        <li @click="goToUrl('https://marifahmad-223510434-prapbk.netlify.app')">Tugas 4</li>
        <li @click="goToUrl('https://marifahmad-223510434-ppbk-t5-landingp.netlify.app')">Tugas 5</li>
        <li @click="goToUrl('https://marifahmadnasution-223510434-t6-inapi.netlify.app')">Tugas 6</li>
        <li @click="goToUrl('https://marifahmadnasution-223510434-t7-pinia.netlify.app')">Tugas 7</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tugas',
    methods: {
      goToUrl(url) {
        window.location.href = url;
      }
    },
    mounted() {
      const previousRoute = localStorage.getItem('previousRoute')
      if (performance.navigation.type === 1 && previousRoute) {
        // Page was refreshed, navigate back to the previous route
        this.$router.push(previousRoute)
      }
    }
  }
  </script>
  
  <style scoped>
  .tugas-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .tugas-container:hover {
    transform: translateY(-5px);
  }
  
  h2 {
    text-align: center;
    color: #333;
    font-family: 'Arial', sans-serif;
    margin-bottom: 20px;
    font-size: 24px;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    background-color: #007BFF;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
    font-family: 'Arial', sans-serif;
    font-size: 18px;
  }
  
  li:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  </style>
  
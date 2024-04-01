<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Buttonc from './components/Buttonc.vue'
</script>

<template>
  <header>
    <div class="profil">
     <img src="/src/assets/profile-picture.jpg" alt="" width="200px" height="200px"  srcset=""> 
    </div>
    <div class="wrapper">
      <HelloWorld msg="M.Arif Ahmad" />
      
      <nav>
        <RouterLink to="/">Home</RouterLink><br>
        <RouterLink to="/about">About</RouterLink><br>
        <RouterLink to="/biodata">Biodata</RouterLink><br>
        <RouterLink to="/skill">Skill</RouterLink><br>
        <RouterLink to="/pengalaman">Pengalaman</RouterLink>
        
      </nav>
    </div>
  </header>
  <!-- <div class="kontent">
    
  </div> -->

  <RouterView />
</template>

<style scoped>
.kontent{
background-color: green;
background-image: url(/src/assets/hero-bg.jpg);
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;

}
header {
  line-height: 1.5;
  height: 600px;
  background-color: rgb(88, 120, 110);
  color: white;
  
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .profil{
    margin-right: 20px;
  }
  .profil img {
  border: 2px solid green; /* Border warna hijau */
  border-radius: 50%; /* Border radius untuk membuat gambar lingkaran */
  padding: 2px;
  margin-left: 20px;
}


  header .wrapper {
    
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>


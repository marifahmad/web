<template>
    <button @click="redirectToInstagram" class="button">{{ buttonText }}</button>
  </template>
  
  <script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter()
  
    const props = defineProps({
      buttonText: {
        type: String,
        required: true
      },
      igUsername: {
        type: String,
        required: true
      }
    })
  
    const redirectToInstagram = () => {
        window.open(`https://www.instagram.com/marifahmad635/?next=%2F`, '_blank')
    }
  </script>
  
  <style scoped>
  button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
  }
  
  </style>
  
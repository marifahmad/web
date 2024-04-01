<template>
  <div class="bg">
  <div class="biodata-container">
    <div class="biodata-content">
      <h2 class="title">{{ biodata.name }}</h2>
      <p class="text">Umur: {{ biodata.age }}</p>
      <p class="text">Alamat: {{ biodata.address }}</p>
      <p class="text">Pekerjaan: {{ biodata.occupation }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      biodata: {
        name: 'M. Arif Ahmad Nasution',
        age: 20,
        address: 'Jl. Sri Sejahtera, Riau',
        occupation: 'Programmer'
      }
    };
  }
};
</script>

<style scoped>
.bg{
  background: url(/src/assets/portfolio-8.jpg);
}
.biodata-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: url(portfolio-8.jpg);
  background-size: cover; /* Menambahkan properti untuk mengatur ukuran latar belakang */
}

.biodata-content {
  text-align: center;
  color: black;
  background-color: rgba(255, 255, 255, 0.265); /* Warna latar belakang dengan transparansi */
  backdrop-filter: blur(10px);
  padding: 20px; /* Mengubah padding agar lebih konsisten */
}

.title {
  text-shadow: 2px 2px 4px rgba(241, 232, 232, 0.066); /* Mengatur bayangan teks dengan warna yang sesuai */
  margin-bottom: 10px; /* Menambahkan margin bawah untuk judul */
}

.text {
  text-shadow: 1px 1px 2px rgba(202, 191, 191, 0.107); /* Mengatur bayangan teks dengan warna yang sesuai */
}
</style>

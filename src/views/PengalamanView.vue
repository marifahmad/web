<template>
  
  <div class="pengalaman-view">
    <h1>{{ judul }}</h1>
    <div v-if="pengalaman.length === 0">
      <p class="empty-message">Tidak ada pengalaman yang ditambahkan</p>
    </div>
    <div v-else>
      <ul class="pengalaman-list">
        <li v-for="(item, index) in pengalaman" :key="index" class="pengalaman-item">
          <div>
            <h3>{{ item.judul }}</h3>
            <p>{{ item.deskripsi }}</p>
            <p class="date-range">Dari {{ item.tanggalMulai }} hingga {{ item.tanggalSelesai }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'PengalamanView',
  data() {
    return {
      judul: 'Pengalaman',
      pengalaman: [
        
        {
          judul: 'Magang di Pt Tensai Nsteknologi Indonesia',
          deskripsi: 'belajar dasar dasar web waktu smk',
          tanggalMulai: 'Agustus 2021',
          tanggalSelesai: 'Desember 2021'
        },{
          judul: 'Pernah Bekerja di Perusahaan Tensai Nsteknologi Indonesia',
          deskripsi: 'Mengelola administrasi kantor',
          tanggalMulai: 'Januari 2022',
          tanggalSelesai: 'Desember 2023'
        }
        // Tambahkan pengalaman lain jika perlu
      ]
    };
  }
};
</script>

<style scoped>

.pengalaman-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.empty-message {
  font-style: italic;
  color: #888;
}

.pengalaman-list {
  list-style: none;
  padding: 0;
}

.pengalaman-item {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.pengalaman-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

h3 {
  margin-bottom: 5px;
  color: #333;
}

.date-range {
  color: #777;
  font-size: 14px;
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

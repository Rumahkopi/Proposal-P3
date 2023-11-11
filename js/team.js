document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/syahid.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-syahid");
      const kelasElement = document.getElementById("kelas-syahid");
      const npmElement = document.getElementById("npm-syahid");
      const kontakElement = document.getElementById("kontak-syahid");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
  });

document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch('../json/gilar.json'); // Mengambil file userData.json
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const userData = await response.json();
  
      // Select elements by their IDs
      const namaElement = document.getElementById("nama-gilar");
      const kelasElement = document.getElementById("kelas-gilar");
      const npmElement = document.getElementById("npm-gilar");
      const kontakElement = document.getElementById("kontak-gilar");

  
      // Populate HTML elements with user data
      namaElement.textContent = userData.Nama;
      kelasElement.textContent = userData.Kelas;
      npmElement.textContent = userData.NPM;
      kontakElement.textContent = userData.Kontak;

    } catch (error) {
      console.error('Error:', error);
    }
});
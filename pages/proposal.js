// script.js
// Fungsi untuk memuat dan menampilkan data JSON
function displayJSONData(data) {
    var jsonContent = document.getElementById('jsonContent');
    var htmlContent = '<h2>Tujuan Bisnis:</h2><ol>';

    data.coffeeShop.businessGoals.forEach(function (goal) {
        htmlContent += '<li>' + goal + '</li>';
    });

    htmlContent += '</ol><h2>Konsep Kafe:</h2><ul>';

    data.coffeeShop.cafeConcept.decorAndAmbiance.styles.forEach(function (style) {
        htmlContent += '<li>' + style + '</li>';
    });

    htmlContent += '</ul><h2>Target Pasar:</h2><ol>';

    data.coffeeShop.targetMarket.forEach(function (target) {
        htmlContent += '<li>' + target + '</li>';
    });

    htmlContent += '</ol><h2>Strategi Pemasaran:</h2><ul>';

    data.coffeeShop.marketingStrategy.socialMedia.forEach(function (strategy) {
        htmlContent += '<li>' + strategy + '</li>';
    });

    htmlContent += '</ul><h2>Website Pembelian:</h2><p>' + data.coffeeShop.onlinePurchase.website + '</p><h2>Rencana Keuangan:</h2><ol>';

    data.coffeeShop.financialPlan.revenue.forEach(function (source) {
        htmlContent += '<li>' + source + '</li>';
    });

    htmlContent += '</ol><h2>Proyeksi Keuntungan:</h2><p>' + data.coffeeShop.profitProjection + '</p><h2>Penutup:</h2><p>' + data.coffeeShop.closure + '</p>';

    // Menetapkan HTML ke dalam elemen
    jsonContent.innerHTML = htmlContent;
}

// Memuat data JSON dari file
fetch('data.json')
    .then(response => response.json())
    .then(data => displayJSONData(data))
    .catch(error => console.error('Error loading JSON:', error));

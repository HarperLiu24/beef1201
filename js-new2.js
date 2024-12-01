document.addEventListener('DOMContentLoaded', function () {
    // 為每個元素指定正確的 id
    const reservationButton = document.getElementById('reservation');
    const addressButton = document.getElementById('address');
    const recruitmentButton = document.getElementById('recruitment');

    if (reservationButton) {
        reservationButton.addEventListener('click', function () {
            alert('網頁還在施工中');
        });
    }

    if (addressButton) {
        addressButton.addEventListener('click', function () {
            alert('網頁還在施工中');
        });
    }

    if (recruitmentButton) {
        recruitmentButton.addEventListener('click', function () {
            alert('網頁還在施工中');
        });
    }
});

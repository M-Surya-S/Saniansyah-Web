/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/// Game Gunting-Batu-Kertas
// Pilihan yang tersedia
const choices = ["Batu", "Kertas", "Gunting"];

// Mendapatkan elemen teks untuk pilihan komputer dan pengguna
const computerChoiceText = document.getElementById("computer-choice");
const playerChoiceText = document.getElementById("player-choice");
const resultText = document.getElementById("result");

// Fungsi untuk menghasilkan pilihan acak komputer
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Fungsi untuk menentukan hasil permainan
function playGame(playerChoice) {
    const computer = computerChoice();

    // Menampilkan pilihan komputer dan pengguna
    computerChoiceText.textContent = computer;
    playerChoiceText.textContent = playerChoice;

    // Logika untuk menentukan pemenang
    if (playerChoice === computer) {
        resultText.textContent = "Seri!";
    } else if (
        (playerChoice === "Batu" && computer === "Gunting") ||
        (playerChoice === "Kertas" && computer === "Batu") ||
        (playerChoice === "Gunting" && computer === "Kertas")
    ) {
        resultText.textContent = "Anda Menang!";
    } else {
        resultText.textContent = "Komputer Menang!";
    }
}

// Mendapatkan elemen tombol
const batuButton = document.getElementById("Batu");
const kertasButton = document.getElementById("Kertas");
const guntingButton = document.getElementById("Gunting");

// Menambahkan event listener ke setiap tombol
batuButton.addEventListener("click", () => {
    playGame("Batu");
});

kertasButton.addEventListener("click", () => {
    playGame("Kertas");
});

guntingButton.addEventListener("click", () => {
    playGame("Gunting");
});


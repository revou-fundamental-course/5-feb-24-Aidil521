// Part navigation start
const navLinks = document.querySelector('.nav-link');
const icon = document.querySelector('.bar');
var toggleRumus = document.getElementById('rumus');
var toggleKalkulasi = document.getElementById('cara-kalkulasi');
var displayImage1 = document.getElementById('displayImage1');
var displayImage2 = document.getElementById('displayImage2');

function toggleNavbar() {
    navLinks.classList.toggle('show');
}

toggleRumus.addEventListener('click', function() {
    displayImage2.style.display = (displayImage2.style.display === 'none') ? 'block' : 'none';
});

toggleKalkulasi.addEventListener('click', function() {
    displayImage1.style.display = (displayImage1.style.display === 'none') ? 'block' : 'none';
});

// Menambahkan event listener ke gambar untuk mencegah penyebaran event ke atas
displayImage1.addEventListener('click', function(event) {
    event.stopPropagation();
});

displayImage2.addEventListener('click', function(event) {
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    let isImageClick1 = event.target === displayImage1;
    let isImageClick2 = event.target === displayImage2;
    let isToggleButtonClick1 = event.target === toggleKalkulasi;
    let isToggleButtonClick2 = event.target === toggleRumus;

    if (!navLinks.contains(event.target) && !icon.contains(event.target)) {
        navLinks.classList.remove('show');
    }
    if (!isImageClick1 && !isToggleButtonClick1) {
        displayImage1.style.display = 'none';
    }
    if (!isImageClick2 && !isToggleButtonClick2) {
        displayImage2.style.display = 'none';
    }
});
// Part navigation end

// Part main content start
var val = false;

function reverseDisplay() { // reverse label value temperature
    let valTemp = ['Fahrenheit (&deg;F):', 'Celcius (&deg;C):'];
    (!val) ? val = true : val = false;
    document.getElementById('input-label').innerHTML = valTemp[1 - val];
    document.getElementById('output-label').innerHTML = valTemp[0 + val];
    document.getElementById('output-value').value = '';
    document.getElementById('output-kalkulasi').innerHTML = '';
}

function calculateDisplay() { // calculate convert value temperature
    let output, outputCalculated;
    let inputValue = document.getElementById('input-value').value;
    if (inputValue !== '') {
        if(!val) { // convert celcius to fahrenheit
            output = inputValue * (9/5) + 32;
            outputCalculated = '(' + parseFloat(inputValue) + '&deg;C * (9/5)) + 32 = ' + parseFloat(output.toFixed(2)) + '&deg;F';
        }
        else {     // convert fahrenheit to celsius
            output = (inputValue - 32) * (5/9);
            outputCalculated = '(' + parseFloat(inputValue) + '&deg;F - 32) * (5/9) = ' + parseFloat(output.toFixed(2)) + '&deg;C';
        }
    }
    document.getElementById('output-value').value = parseFloat(output.toFixed(2));
    document.getElementById('output-kalkulasi').innerHTML = (isNaN(output)) ? outputCalculated = 'NaN' : outputCalculated;
}

function clearDisplay() { // clear or reset value display input and output
    document.getElementById('input-value').value = '';
    document.getElementById('output-value').value = '';
    document.getElementById('output-kalkulasi').innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    let restrictedTextarea = document.getElementById('input-value'); // Mendapatkan elemen textarea

    // Menggunakan event listener untuk membatasi input hanya pada angka
    restrictedTextarea.addEventListener('input', function() {
        // Menghapus karakter non-angka selain (. dan -) dari teks input
        let text = restrictedTextarea.value.replace(/[^0-9\-\.]/g, '');
        let newtext = text.replace(/-+(?=[^\d\.]|$)/g, '-');
        let newtextarea = newtext.replace(/(?<=\d)[^\d\.]+/g, '');
        let resttextarea = newtextarea.replace(/(?<=\D|^)\./g, '0.');
        restrictedTextarea.value = resttextarea;
    });
});
// Part main content end
var val = false;

function toggleNavbar() {
    const navLinks = document.querySelector('.nav-link');
    navLinks.classList.toggle('show');
}

function clearDisplay() {
    document.getElementById('input-value').value = '';
    document.getElementById('output-value').value = '';
    document.getElementById('output-kalkulasi').innerHTML = '';
}

function reverseDisplay() {
    if (!val) {
        document.getElementById('input-label').innerHTML = 'Fahrenheit (&deg;F):';
        document.getElementById('output-label').innerHTML = 'Celcius (&deg;C):';
        val = true;
    }
    else {
        document.getElementById('input-label').innerHTML = 'Celcius (&deg;C):';
        document.getElementById('output-label').innerHTML = 'Fahrenheit (&deg;F):';
        val = false;
    }
    document.getElementById('output-value').value = '';
    document.getElementById('output-kalkulasi').innerHTML = '';
}

function calculateDisplay() {
    let inputValue = document.getElementById('input-value').value;
    if(!val) {
        if (inputValue !== '') {
            let output = inputValue * (9/5) + 32;
            document.getElementById('output-value').value = parseFloat(output.toFixed(2));
            if (isNaN(output)) {
                document.getElementById('output-kalkulasi').innerHTML = 'NaN';
            }
            else {
                document.getElementById('output-kalkulasi').innerHTML = '(' + parseFloat(inputValue) + '&deg;C' + ' * (9/5)) + 32 = ' + parseFloat(output.toFixed(2)) + '&deg;F';
            }
        }
    }
    else {
        if (inputValue !== '') {
            let output = (inputValue - 32) * (5/9);
            document.getElementById('output-value').value = parseFloat(output.toFixed(2));
            if (isNaN(output)) {
                document.getElementById('output-kalkulasi').innerHTML = 'NaN';
            }
            else {
                document.getElementById('output-kalkulasi').innerHTML = '(' + parseFloat(inputValue) + '&deg;F' +' - 32) * (5/9) = '+ parseFloat(output.toFixed(2)) + '&deg;C';
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Mendapatkan elemen textarea
    let restrictedTextarea = document.getElementById('input-value');

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

var toggleRumus = document.getElementById('rumus');
var toggleKalkulasi = document.getElementById('cara-kalkulasi');
var displayImage1 = document.getElementById('displayImage1');
var displayImage2 = document.getElementById('displayImage2');

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-link');
    const icon = document.querySelector('.bar');

    if (!navLinks.contains(event.target) && !icon.contains(event.target)) {
        navLinks.classList.remove('show');
    }

    let isImageClick1 = event.target === displayImage1;
    let isImageClick2 = event.target === displayImage2;

    let isToggleButtonClick1 = event.target === toggleRumus;
    let isToggleButtonClick2 = event.target === toggleKalkulasi;

    if (!isImageClick1 && !isToggleButtonClick1) {
        displayImage1.style.display = 'none';
    }
    if (!isImageClick2 &&!isToggleButtonClick2) {
        displayImage2.style.display = 'none';
    }
});

// Menambahkan event listener ke gambar untuk mencegah penyebaran event ke atas
displayImage1.addEventListener('click', function(event) {
    event.stopPropagation();
});

displayImage2.addEventListener('click', function(event) {
    event.stopPropagation();
});

toggleRumus.addEventListener('click', function() {
    displayImage1.style.display = (displayImage1.style.display === 'none') ? 'block' : 'none';
});

toggleKalkulasi.addEventListener('click', function() {
    displayImage2.style.display = (displayImage2.style.display === 'none') ? 'block' : 'none';
});
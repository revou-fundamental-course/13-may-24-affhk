document.addEventListener('DOMContentLoaded', () => {
    // Elements for switching views
    const switchKelilingBtn = document.getElementById('switch-keliling');
    const switchLuasBtn = document.getElementById('switch-luas');
    const areaSection = document.getElementById('area-section');
    const circumferenceSection = document.getElementById('circumference-section');

    // Switch ke Keliling
    switchKelilingBtn.addEventListener('click', () => {
        areaSection.style.display = 'none';
        circumferenceSection.style.display = 'block';
    });

    // Switch ke Luas
    switchLuasBtn.addEventListener('click', () => {
        circumferenceSection.style.display = 'none';
        areaSection.style.display = 'block';
    });

     // Hitung Luas
     const calcAreaBtn = document.getElementById('calc-btn');
     const alasInput = document.getElementById('alasInput');
     const tinggiInput = document.getElementById('tinggiInput');
     const areaResult = document.getElementById('area-result');
 
     calcAreaBtn.addEventListener('click', () => {
         const alas = parseFloat(alasInput.value);
         const tinggi = parseFloat(tinggiInput.value);
 
         if (isNaN(alas) || isNaN(tinggi)) {
             alert('Masukkan angka!');
         } else {
             const luas = 0.5 * alas * tinggi;
             areaResult.innerText = luas.toFixed(1);
         }
     });
 
     // Hitung Keliling
     const calcCircumferenceBtn = document.getElementById('calcCircumferenceBtn');
     const sisiAInput = document.getElementById('sisiAInput');
     const sisiBInput = document.getElementById('sisiBInput');
     const sisiCInput = document.getElementById('sisiCInput');
     const circumferenceResult = document.getElementById('circumference-result');
 
     calcCircumferenceBtn.addEventListener('click', () => {
         const sisiA = parseFloat(sisiAInput.value);
         const sisiB = parseFloat(sisiBInput.value);
         const sisiC = parseFloat(sisiCInput.value);
 
         if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC)) {
             alert('Masukkan angka!');
         } else {
             const keliling = sisiA + sisiB + sisiC;
             circumferenceResult.innerText = keliling.toFixed(1);
         }
     });
});
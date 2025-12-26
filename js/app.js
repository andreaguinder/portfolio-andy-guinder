// 1. FUNCIONES GLOBALES (Fuera del DOMContent para que el HTML las vea si las llaman por onclick)
// 1. FUNCIONES GLOBALES
function cambiarClaseMenu() {
    var siteNav = document.getElementById("site__nav");
    var menuAbierto = document.getElementById("menu-toggle");
    
    if (siteNav && menuAbierto) {
        siteNav.classList.toggle("site__navAbrir");
        menuAbierto.classList.toggle("menu-abierto");
        
        // Accesibilidad: Avisamos al lector de pantalla si el menú se expandió
        var estaAbierto = menuAbierto.classList.contains("menu-abierto");
        menuAbierto.setAttribute("aria-expanded", estaAbierto);
    }
}

// 2. VINCULACIÓN DE EVENTOS (Cuando carga el DOM)
document.addEventListener("DOMContentLoaded", function() {
    var botonMenu = document.getElementById("menu-toggle");
    if (botonMenu) {
        botonMenu.addEventListener("click", cambiarClaseMenu);
    }
    
    // Acá podés llamar a la función de los proyectos que hicimos antes
});

// 2. PREFERENCIA DE SISTEMA (Inmediato para evitar el "flash" blanco en modo oscuro)
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
} else if (systemPrefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
}

// 3. LÓGICA QUE DEPENDE DEL HTML (DOM)
document.addEventListener('DOMContentLoaded', () => {

    // --- LIGHT / DARK MODE ---
    const checkbox = document.getElementById('theme-checkbox');
    if (checkbox) {
        checkbox.checked = document.documentElement.getAttribute('data-theme') === 'dark';
        checkbox.addEventListener('change', () => {
            const newTheme = checkbox.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- CARDS DEL INICIO (CON SWIPER) ---
    // Usamos el código original que te funcionaba
    document.querySelectorAll('.btn-ver-mas').forEach(boton => {
        boton.addEventListener('click', function() {
            const card = this.closest('.card');
            const wrapper = card.querySelector('.expandible-wrapper');
            const estaAbriendo = !wrapper.classList.contains('abierto');
            
            if (estaAbriendo) {
                wrapper.style.maxHeight = wrapper.scrollHeight + "px";
                wrapper.classList.add('abierto');
                card.classList.add('card-abierta');
                this.innerHTML = `<i class="fa-solid fa-minus"></i>`;
            } else {
                wrapper.style.maxHeight = "0px";
                wrapper.classList.remove('abierto');
                card.classList.remove('card-abierta');
                this.innerHTML = `<i class="fa-solid fa-plus"></i>`;
            }

            // Sincronización Swiper
            let startTime = Date.now();
            const duration = 600;

            function syncHeight() {
                const elapsed = Date.now() - startTime;
                if (typeof swiperReferenciasIndex !== 'undefined') {
                    swiperReferenciasIndex.updateAutoHeight(0);
                }
                if (elapsed < duration) {
                    requestAnimationFrame(syncHeight);
                } else if (typeof swiperReferenciasIndex !== 'undefined') {
                    swiperReferenciasIndex.updateAutoHeight(200);
                }
            }
            requestAnimationFrame(syncHeight);
        });
    });

});
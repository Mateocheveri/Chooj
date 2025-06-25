// Funcionalidad dinámica para el sidebar de noticias
document.addEventListener('DOMContentLoaded', function() {
            
    // Obtener referencias a los elementos
    const btnPublicaciones = document.getElementById('btnPublicaciones');
    const btnRevistas = document.getElementById('btnRevistas');
    const contenedorPublicaciones = document.getElementById('contenedorPublicaciones');
    const contenedorRevistas = document.getElementById('contenedorRevistas');

    // Función para mostrar publicaciones
    function mostrarPublicaciones() {
        contenedorPublicaciones.style.display = 'flex';
        contenedorRevistas.style.display = 'none';
        
        // Actualizar estilos de los botones
        btnPublicaciones.classList.add('active');
        btnRevistas.classList.remove('active');
    }

    // Función para mostrar revistas
    function mostrarRevistas() {
        contenedorPublicaciones.style.display = 'none';
        contenedorRevistas.style.display = 'block';
        
        // Actualizar estilos de los botones
        btnRevistas.classList.add('active');
        btnPublicaciones.classList.remove('active');
    }

    // Event listeners para los botones principales
    btnPublicaciones.addEventListener('click', function(e) {
        // Si el botón ya está activo, solo manejar el collapse
        if (!btnPublicaciones.classList.contains('active')) {
            mostrarPublicaciones();
        }
    });

    btnRevistas.addEventListener('click', function(e) {
        // Si el botón ya está activo, solo manejar el collapse
        if (!btnRevistas.classList.contains('active')) {
            mostrarRevistas();
        }
    });

    // Event listeners para los enlaces de la lista de publicaciones
    const enlacesPublicaciones = document.querySelectorAll('#listaPublicaciones a');
    enlacesPublicaciones.forEach((enlace) => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mostrar publicaciones si no están visibles
            if (contenedorPublicaciones.style.display === 'none') {
                mostrarPublicaciones();
            }
            
            // Obtener el modal correspondiente del atributo data-modal
            const modalId = this.getAttribute('data-modal');
            if (modalId) {
                // Cerrar el collapse del sidebar
                const collapse = bootstrap.Collapse.getInstance(document.getElementById('listaPublicaciones'));
                if (collapse) {
                    collapse.hide();
                }
                
                // Abrir el modal correspondiente
                const modal = new bootstrap.Modal(document.getElementById(modalId));
                modal.show();
                
                console.log(`Abriendo modal: ${modalId} para el artículo: ${this.textContent}`);
            }
        });
    });

    // Event listeners para los enlaces de la lista de revistas
    const enlacesRevistas = document.querySelectorAll('#listaRevistas a');
    enlacesRevistas.forEach((enlace, index) => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Mostrar revistas si no están visibles
            if (contenedorRevistas.style.display === 'none') {
                mostrarRevistas();
            }
            
            console.log(`Clic en revista: ${this.textContent} (índice: ${index})`);
            
            // Opcional: cerrar el collapse después del clic
            const collapse = bootstrap.Collapse.getInstance(document.getElementById('listaRevistas'));
            if (collapse) {
                collapse.hide();
            }
        });
    });

    // Mostrar publicaciones por defecto al cargar la página
    mostrarPublicaciones();
});
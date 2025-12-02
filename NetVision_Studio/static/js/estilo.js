
    // ELEMENTOS PRINCIPALES
    const divInterfaces = document.getElementById('interfaces');
    const divVlans = document.getElementById('vlans');
    
        
    // Elementos de la sección de Interfaces
    const menuInterfaces = document.getElementById('interface-type-menu');


    // Elementos de la sección de VLANs
    const menuVlans = document.getElementById('vlan-type-menu');
    const btnCrearVlan = document.getElementById('btn-crear-vlan');
    const btnEliminarVlan = document.getElementById('btn-eliminar-vlan');
    const configCrearVlan = document.getElementById('config-crear-vlan');
    const configEliminarVlan = document.getElementById('config-eliminar-vlan');
    
    // Muestra la configuración CREAR VLAN
    btnCrearVlan.addEventListener('click', () => {
        menuVlans.classList.add('hidden');
        configEliminarVlan.classList.add('hidden');
        configCrearVlan.classList.remove('hidden');
    });

    // Muestra la configuración ELIMINAR VLAN
    btnEliminarVlan.addEventListener('click', () => {
        menuVlans.classList.add('hidden');
        configCrearVlan.classList.add('hidden');
        configEliminarVlan.classList.remove('hidden');
    });

    // Acción para botones "REGRESAR" de VLANs (Vuelve al menú Crear/Eliminar)
    document.querySelectorAll('.btn-vlan-regresar').forEach(btn => {
        btn.addEventListener('click', () => {
            configCrearVlan.classList.add('hidden');
            configEliminarVlan.classList.add('hidden');
            menuVlans.classList.remove('hidden'); // Vuelve a mostrar el menú Crear/Eliminar
        });
    });

    // Asegúrate de que las IDs de estos botones estén configuradas en tu HTML principal
    const btnShowVlans = document.getElementById('btn-show-vlans');

    btnShowVlans.addEventListener('click', () => {
        console.log('Mostrar vlans menu');
        divVlans.classList.remove('hidden');
        // Asegura que las sub-secciones internas empiecen en el menú de selección
        configCrearVlan.classList.add('hidden');
        configEliminarVlan.classList.add('hidden');
        menuVlans.classList.remove('hidden');
    });




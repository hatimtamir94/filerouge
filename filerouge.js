// Sélectionner les éléments du DOM
const  hamburgermenu= document.getElementById('hamburger');
const hiddenMenu= document.getElementById('hidden-menu');

// Ajouter un événement "click" pour ouvrir/fermer le menu
hamburgermenu.addEventListener('click', () => {
hiddenMenu.style.display = hiddenMenu.style.display === 'block' ? 'none' : 'block';
});




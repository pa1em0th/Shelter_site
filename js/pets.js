document.querySelectorAll('.sort-button').forEach(button => {
    button.addEventListener('click', function() {
        const sortType = this.getAttribute('data-sort');
        const pets = Array.from(document.querySelectorAll('#petsList li'));
        let filteredPets;

        if (sortType === 'cat') {
            filteredPets = pets.filter(pet => pet.dataset.type === 'кошка');
        } else if (sortType === 'dog') {
            filteredPets = pets.filter(pet => pet.dataset.type === 'собака');
        } else if (sortType === 'female') {
            filteredPets = pets.filter(pet => pet.dataset.gender === 'женский');
        } else if (sortType === 'male') {
            filteredPets = pets.filter(pet => pet.dataset.gender === 'мужской');
        } else {
            filteredPets = pets;
        }

        if (sortType === 'age') {
            filteredPets.sort(function(a, b) {
                return parseInt(a.dataset.age) - parseInt(b.dataset.age);
            });
        }

        const petsList = document.getElementById('petsList');
        petsList.innerHTML = '';
        filteredPets.forEach(pet => petsList.appendChild(pet));
    });
});

document.querySelector('.reset-button').addEventListener('click', function() {
    const petsList = document.getElementById('petsList');
    petsList.innerHTML = '';
    Array.from(document.querySelectorAll('#petsList li')).forEach(pet => petsList.appendChild(pet));
});
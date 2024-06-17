document.addEventListener('DOMContentLoaded', function() {
    const petsList = document.getElementById('petsList');
    const sortButtons = document.querySelectorAll('.sort-button');
    const resetButton = document.querySelector('.reset-button');

    // Функция для сортировки кошек
    function sortPets(criteria) {
        const pets = Array.from(petsList.children).map(li => {
            return {
                gender: li.getAttribute('data-gender'),
                age: parseInt(li.getAttribute('data-age')),
                element: li
            };
        });

        pets.sort((a, b) => {
            if (criteria === 'gender') {
                return a.gender.localeCompare(b.gender);
            } else if (criteria === 'age') {
                return a.age - b.age;
            }
            return 0;
        });

        pets.forEach(pet => petsList.appendChild(pet.element));
    }

    // Обработчик для кнопок сортировки
    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            sortPets(this.getAttribute('data-sort'));
        });
    });

    // Обработчик для кнопки сброса
    resetButton.addEventListener('click', function() {
        petsList.innerHTML = '';
        Array.from(petsList.children).forEach(li => petsList.appendChild(li));
    });
});
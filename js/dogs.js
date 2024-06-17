document.addEventListener('DOMContentLoaded', function() {
    const sortButtons = document.querySelectorAll('.sort-button');
    const resetButton = document.querySelector('.reset-button');
    const petsList = document.getElementById('petsList');

    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sortBy = this.getAttribute('data-sort');
            sortPets(sortBy);
        });
    });

    resetButton.addEventListener('click', function() {
        resetPetsOrder();
    });

    function sortPets(sortBy) {
        const pets = Array.from(petsList.children);
        pets.sort((a, b) => {
            const aData = a.getAttribute(sortBy);
            const bData = b.getAttribute(sortBy);
            return aData - bData;
        });

        pets.forEach(pet => petsList.appendChild(pet));
    }

    function resetPetsOrder() {
        // Восстанавливаем исходный порядок карточек
        const originalOrder = Array.from(petsList.children);
        originalOrder.forEach(pet => petsList.appendChild(pet));
    }
});
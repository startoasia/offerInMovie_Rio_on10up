const checkbox = document.querySelectorAll('.checkbox-container');
const checkmark = document.querySelectorAll('.checkmark');

checkbox.forEach((item, ind) => {
    item.addEventListener('click', () => {
        checkmark.forEach((show, showInd) => {
            if (ind === showInd) {
                show.classList.toggle("checkShow")
            }
        })
    })
})
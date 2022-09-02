let range = document.querySelector('#range');
let rangeNumber = document.querySelector('#rangeNumber'); 
let container = document.querySelector('.main-section .grid-container');
let size = 16;

range.addEventListener('change', e => {
    e.preventDefault();
    rangeNumber.innerHTML = `${range.value}x${range.value}`;
    size = parseInt(range.value);
    container.setAttribute('style', `grid-template-columns: repeat(${size}, auto);`);
    console.log(range.value);
    container.innerHTML = '';
    for(let i = 1; i <= size*size; i++) {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseenter', e => {
            e.preventDefault();

            let colorPicker = document.querySelector('#colorPicker').value;
            div.style.backgroundColor = `${colorPicker}`;
        })
        container.appendChild(div);
    }
})

for(let i = 1; i <= size*size; i++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}

let gridItems = document.querySelectorAll('.main-section .grid-container .grid-item');

gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseenter', e => {
        e.preventDefault();

        let colorPicker = document.querySelector('#colorPicker').value;
        gridItem.style.backgroundColor = `${colorPicker}`;
    });
});
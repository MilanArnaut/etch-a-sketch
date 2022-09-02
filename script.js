const range = document.querySelector('#range');
const rangeNumber = document.querySelector('#rangeNumber'); 
const container = document.querySelector('.main-section .grid-container');
const eraseButton = document.querySelector('#eraseButton');
const rainbowButton = document.querySelector('#rainbowButton');
const clearButton = document.querySelector('#clearButton');
const colorButton = document.querySelector('#colorButton');
let size = 16;

//First load to make grid items
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

//changing grid items
range.addEventListener('change', e => {
    e.preventDefault();
    rangeNumber.innerHTML = `${range.value}x${range.value}`;
    size = parseInt(range.value);
    container.setAttribute('style', `grid-template-columns: repeat(${size}, auto);`);
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

//clearing grid
clearButton.addEventListener('click', e => {
    e.preventDefault();

    let gridItems = document.querySelectorAll('.main-section .grid-container .grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
});


//erase pixels
eraseButton.addEventListener('click', e => {
    e.preventDefault();

    let gridItems =document.querySelectorAll('.main-section .grid-container .grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', e => {
            e.preventDefault();

            item.style.backgroundColor = 'white';
        });
    });
});

//back to color mode
colorButton.addEventListener('click', e => {
    e.preventDefault();

    let gridItems = document.querySelectorAll('.main-section .grid-container .grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', e => {
            e.preventDefault();

            let colorPicker = document.querySelector('#colorPicker').value;
            item.style.backgroundColor = `${colorPicker}`;
        });
    });
});

//rainbow mode 
rainbowButton.addEventListener('click', e => {
    e.preventDefault();

    let gridItems = document.querySelectorAll('.main-section .grid-container .grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', e => {
            e.preventDefault();

            let R = Math.floor(Math.random()*256);
            let G = Math.floor(Math.random()*256);
            let B = Math.floor(Math.random()*256);

            item.style.backgroundColor = `rgb(${R},${G},${B})`;
        });
    });
})
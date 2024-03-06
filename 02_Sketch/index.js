let promptAnswer = prompt("Grid Size?", "4")
gridSize = parseInt(promptAnswer)

while (isNaN(gridSize)) {
    promptAnswer = prompt("Not a valid value. Grid Size?", "4")
    gridSize = parseInt(promptAnswer)
}

const grid = document.querySelector('#grid');


for (let i=0; i<gridSize; i++) 
{
    const row = document.createElement('div');
    row.classList.add('grid-row');

    for (let j=0; j<gridSize; j++) 
    {
        const item = document.createElement('div');
        item.classList.add('grid-item');
        row.appendChild(item);

        item.addEventListener('mouseover', ()=>{
            item.style.backgroundColor = "#bbbbbb";
        })
    }

    grid.appendChild(row)
}
const parent = document.createElement('div')

const div = document.createElement('div')
div.className = 'Container'
div.style.display = 'flex'
div.style.width = '960px'
div.style.height = '500px'
div.style.flexDirection = 'column'

const clear_button = document.createElement('button')
clear_button.textContent = 'Clear'
clear_button.style.margin ='20px'

const grid_size_button = document.createElement('button')
grid_size_button.textContent = 'Change Grid Size'


div.style.flexDirection = 'column'
let i,j =0
//const divs_array = []
document.body.appendChild(div)
document.body.appendChild(clear_button)
document.body.appendChild(grid_size_button)

function generate_grid(grid_size){
    let new_div
    for(i=0;i<grid_size;i++){
        let row = document.createElement('div')
        row.className = 'row'
        row.style.display = 'flex'
        row.style.flexDirection = 'row'
        row.style.flex = 1
        

        for(j=0;j<grid_size;j++){
            new_div = document.createElement('div')
            //new_div.style.height = '10px'
            new_div.style.border = '1px solid black'
            new_div.style.background = 'white'
            new_div.style.flex = 1
            new_div.className = 'cell'
            row.appendChild(new_div)
        }
        div.appendChild(row)

}
}
function clear(){
    let cells = document.querySelectorAll(".cell")

    cells.forEach(cell=>{
        cell.style.backgroundColor = 'white'
    })
}



div.addEventListener('mouseover',function(e){
    target = e.target

    if (target.className == 'cell'){
        target.style.backgroundColor = 'black'
    }
})


clear_button.addEventListener('click',clear)

grid_size_button.addEventListener('click',function(e){
    let size = prompt('please enter size')
    let rows = document.querySelectorAll('.row')
    rows.forEach(row=>{
        div.removeChild(row)
    })
    generate_grid(size)
})

generate_grid(16)

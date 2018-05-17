const form = document.querySelector('form')
const listArray = []

form.addEventListener('submit',(e)=>{    
    e.preventDefault()
    itemName = e.target.item.value
    listArray.push(itemName)

    const listItem = document.createElement('li')
    listItem.textContent = itemName
    createDeleteBtn(listItem)

    const list = document.querySelector("#list")
    list.appendChild(listItem)

    console.log(listArray)
    e.target.reset()
    e.target.item.focus()
})

function createDeleteBtn(listItem){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click',()=>{
        const index = [...listItem.parentNode.childNodes].indexOf(listItem);
        listItem.parentNode.removeChild(listItem)
        listArray.splice(index,1)
        console.log(listArray)
    })
    listItem.appendChild(deleteBtn)
}
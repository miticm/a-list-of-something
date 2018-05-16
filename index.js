const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    f = e.target
    console.log(f.item.value);
})

const list = document.createElement('ul');

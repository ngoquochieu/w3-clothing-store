const jsSubItem = document.querySelector('.js-sub-items');
const jsItem = document.querySelector('.js-item');



jsItem.addEventListener('click', () => {
    // jsSubItem.classList.contains('open') || "" ? jsSubItem.classList.remove('open') :jsSubItem.classList.add('open')
     Object.values(jsSubItem.classList).includes('open') || "" ? jsSubItem.classList.remove('open') :jsSubItem.classList.add('open');   
})


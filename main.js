// alert('to działa!');


const removeTask = (e) => {
    e.target.remove();
    console.log(e.target.textContent);
}



document.querySelectorAll('li').forEach(item => item.addEventListener('click', removeTask))

let list = document.querySelectorAll('ul li')
let pic = document.querySelector('.fa-picture-o')
let ps = document.querySelectorAll('.ps')
let gear = document.querySelector('.gear')
let set = document.querySelector('.settings-div')
let gears = document.querySelectorAll('.langue')
let imgg = document.querySelectorAll('.imgg')
let empty = document.querySelectorAll('.geen')

let themeButtons = document.querySelectorAll('.theme-button');

for (let themeButton of themeButtons) {
    themeButton.addEventListener('click', function(){
      document.querySelector('.theme-list .active').classList.remove('active');
      themeButton.classList.add('active');
      document.documentElement.dataset['theme'] = themeButton.dataset.settingValue;
    });
  }

function active(){
}
gear.onclick = function(){
    set.style.display = 'block'
    gear.classList.add('active')
    document.querySelector('.ps').id = 'active'
}
document.querySelector('.krest').onclick = function(){
    set.style.display = 'none'
    gear.classList.remove('active')
}
list.forEach((item) =>
    item.addEventListener('click', active)
)
document.querySelectorAll('.img-container img').forEach(img =>{
    img.onclick = () => {
        document.querySelector('.pop-up').style.display = 'block';
        document.querySelector('.pop-up img').src = img.getAttribute('src');
    }
})

//початок вiддiлу для перекладу
    document.querySelector('.ua').onclick = function(){
    document.querySelector('.ps1').innerHTML = 'Головна'
    document.querySelector('.ps2').innerHTML = 'Мої Роботи'
    document.querySelector('.ps3').innerHTML = 'Налаштування'
    document.querySelector('.lnga').innerHTML = 'Портфолiо'
    document.querySelector('p').style.fontFamily =' Ysabeau, sans-serif'
    document.querySelector('p').style.fontSize = '24px'
    for(let geen of empty){
        geen.innerHTML = "тут може бути ваш веб-сайт"
    }
    }
    document.querySelector('.eng').onclick = function(){
        location.reload()
    }
//кiнець вiддiлу для перекладу
document.querySelector('.pop-up').onclick = () =>{
    document.querySelector('.pop-up').style.display = 'none';
}
//Теми
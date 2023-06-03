
let list = document.querySelectorAll('ul li')
let pic = document.querySelector('.fa-picture-o')
let ps = document.querySelectorAll('.ps')
let $gear = $('.gear')
let $set = $('.settings-div')
let gears = document.querySelectorAll('.langue')
let imgg = document.querySelectorAll('.imgg')
let empty = document.querySelectorAll('.geen')

let $sort = $(".sort");
let $sort2 = $(".sort2")

let themeButtons = document.querySelectorAll('.theme-button');

let $mainelem = $(".MainElement")
$sort.on('click', function(){
    $mainelem.removeClass('standart')
    $mainelem.addClass('row')
})
$sort2.on('click', function(){
    $mainelem.addClass('standart')
    $mainelem.removeClass('row')
})

for(let themeButton of themeButtons) {
    themeButton.addEventListener('click', function(){
      document.querySelector('.theme-list .active').classList.remove('active');
      themeButton.classList.add('active');
      document.documentElement.dataset['theme'] = themeButton.dataset.settingValue;
    });
  }
function active(){
}
$gear.on('click', function(){
    $set.css('display', 'block')
    $gear.addClass('active')
    document.querySelector('.ps').id = 'active'
    $set.addClass('set-anim')
})

let $krest = $('.krest')
$krest.on('click', function(){
    $set.css('display', 'none')
    $gear.removeClass('active')
})
$('.port').on('click', function(){
    window.scrollTo(0,0)
})
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
    // document.querySelector('.ps1').innerHTML = 'Головна'
    // document.querySelector('.ps2').innerHTML = 'Мої Роботи'
    $('.ps3').text('Налаштування')
    $('.lnga').text('Портфолiо')
    $('.par3').html('з 2019 року і вже зробив 5 великих проектів<br> і більше 100 міні-проектів. Володію 4 мовами, а саме російською,<br> українською, англійською та голландською.')
    $('.para').html('Мене звати Артем Шунда, мені 15 років, початківець веб-розробник з України. <br> Я вивчаю розробку в ')
    $('.socs').css('margin-left', '275px')
    $('.lngaa').text('Про мене')
    $('.socs').html('ШКМ')
    $('p').css('font-family', 'Ysabeau, sans-serif')
    $('.para').css('font-size', '30px')
    $('.par3').css('font-size', '30px')
    $('.par2').text('Поки ви знаходитесь на нашому сайті, ми використовуємо ваші файли cookie. Ми дуже сподіваємося, що ви не проти.')
     for(let geen of empty){
         geen.innerHTML = "тут може бути ваш веб-сайт"
     }
     if(window.innerWidth < 421){
        $('.para').css('font-size', '15px')
        $('.para3').css('font-size', '15px')
        $('.par3').css('font-size', '15px')
     }
     else if(window.innerWidth < 1281){
        $('.para').css('font-size', '30px')
        $('.para3').css('font-size', '30px')
        $('.par3').css('font-size', '30px')
     }
    }
    document.querySelector('.eng').onclick = function(){
        location.reload()
    }
   $('.ned').on('click', function(){
     $('.ps3').text('Instellingen')
     $('.lnga').text('Portefeuille')
     $('.par3').html('sinds 2019 en heeft al 5 grote projecten en<br> meer dan 100 mini-projecten gedaan. Ik spreek 4 talen, namelijk Russisch,<br> Oekraïens, Engels en Nederlands.')
     $('.socs').css('margin-left', '-90px')
     $('.lngaa').text('Over mij')
     $('.para').html('Mijn naam is Artem Shunda, ik ben 15 jaar oud, een beginnende <br> webontwikkelaar uit Oekraïne. Ik studeer ontwikkeling in ')
     $('.par2').text('Terwijl u op onze site bent, gebruiken wij uw cookies. We hopen echt dat je het niet erg vindt.')
     for(let geen of empty){
        geen.innerHTML = "Dit kan uw website zijn"
    }
   })
let $pop = $('.pop-up')
$pop.on('click', function(){
    $pop.css('display', 'none')
})

let $upButton = $('.up-button')
window.onscroll = function(){
    if(window.pageYOffset > 100){
        $upButton.addClass('shown')
    }
    else{
        $upButton.removeClass('shown')
    }
}

$upButton.on('click', function(){
    window.scrollTo(0,0)
})

let pidd = document.querySelector('.pidd')
let pid = document.querySelectorAll('.pid')
let closBut = document.querySelector('.closed')
let inf = document.querySelector('.inf')

for(let but of pid){
    but.addEventListener('click', function(){
        pidd.classList.remove('visually-hidden')
        inf.innerText = but.dataset.info
    })
    closBut.onclick = function(){
        pidd.classList.add('visually-hidden')
    }
}

let $button = $('.button')
let $cookie = $('.cookies-agreement')
$button.on('click', function(){
    $cookie.addClass('cookies-agreement-closed')
})
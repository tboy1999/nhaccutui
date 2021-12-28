const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const imgss = $$('.slider-item-img img')
const left = $(".slider-icon__left")
const right = $(".slider-icon__right")
const listImg = $(".slider-list-img")


currentIndex = 0
imgs.forEach((img, index) => {
    currentIndex = index
})  

right.addEventListener('click', (e) => {
    currentIndex++
})

const imgs = [
    {   
        id:1,
        src:'./img/1610356004043_org.jpg'
    },
    {   
        id:2,
        src:'./img/1615460135754_org.jpg'
    },
    {
        id:3,
        src:'./img/1631500414107_org.jpg'
    },
    {
        id:4,
        src:'./img/1634801803471_org.jpg'
    },
    {
        id:5,
        src:'./img/1636095251577_org.jpg'
    },
]

let html = ''

imgs.map((img, index) => {
    html += `
        <div class="slider-item-img ">
            <img src="${img.src}" alt="">
        </div>
    `
})

console.log(html);

listImg.innerHTML = html
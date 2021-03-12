// const par1 = document.getElementsByClassName('par1')
// const sth = Array.from(par1)
// console.log(sth)
// console.log(typeof par1)
// for(let i = 0; i < par1.length; i++) {
//     console.log(par1[i])
//     par1[i].style.color = 'red'
// }


// const parid2 = document.getElementsByClassName('parid2')
// const smh2 = Array.from(parid2)
// console.log(smh2)
// console.log(typeof parid2)
// for(let i = 0; i < parid2.length; i++) {
//     console.log(parid2[i])
//     parid2[i].style.color = 'blue'
// }


// const par2 = document.getElementsByClassName('par2')
// const sth2 = Array.from(par2)
// console.log(sth2)
// console.log(typeof par2)
// for(let i = 0; i < par2.length; i++) {
//     console.log(par2[i])
//     par2[i].style.color = 'yellow'
// }


// const parID = document.getElementById('parid1')
// console.log(parID)
// parID.style.backgroundColor = 'lime'

// parID.innerHTML = '<button>spam</button>'

// const input1 = document.querySelector('input[type="button"]')
// console.log(input1)

// const allType = document.querySelectorAll('input[type="button"]')
// console.log(allType)
// const xd = Array.from(allType)
// console.log(xd)

// allType.forEach(item => {
//     item.value = 'dziala'
// })
// console.log(allType)

// // console.log(par1[i].classList.add('duze'))
// // par1[i].classList.add('duze')

// for(let i = 0; i < par1.length; i++) {
//     console.log(par1[i].classList.add('duze'))
//     par1[i].classList.add('duze')
//     par1[i].classList.remove('xd')
// }

// const tagA = document.getElementById('tagA')

// tagA.setAttribute('href', 'https://www.wp.pl/')

const paragraf = document.createElement('p')
paragraf.setAttribute('class', 'duze')
paragraf.innerText = "niedlugo do domu"
const app = document.getElementById('app')
app.appendChild(paragraf)

const span = document.createElement('span')
span.setAttribute('class', 'duze')
span.innerText = "span taki o"
app.appendChild(span)

const button = document.createElement('button')
button.setAttribute('class', 'duze margin aqua')
button.innerText = "button taki o"
app.appendChild(button)

const gridContainer = document.createElement('div')
gridContainer.setAttribute('class', 'spaning')
app.appendChild(gridContainer)


const nowygrid = document.createElement('div')
nowygrid.setAttribute('class', 'grid-item')
const spaning = document.getElementsByClassName('spaning')
nowygrid.innerText = "grid taki o ez"
gridContainer.appendChild(nowygrid)

const nowygrid1 = document.createElement('div')
nowygrid1.setAttribute('class', 'grid-item')
nowygrid1.innerText = "grid taki o gg"
gridContainer.appendChild(nowygrid1)

const nowygrid2 = document.createElement('div')
nowygrid2.setAttribute('class', 'grid-item')
nowygrid2.innerText = "grid taki o"
gridContainer.appendChild(nowygrid2)
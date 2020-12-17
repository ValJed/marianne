const face = document.querySelector('.face')
const faceHeight = face.offsetHeight

const tears = face.querySelectorAll('img')

const maxTop = 120
const minTop = 30

tears[0].style.top = `-${Math.floor(Math.random() * (maxTop - minTop + 1) + minTop)}px`
tears[1].style.top = `-${Math.floor(Math.random() * (maxTop - minTop + 1) + minTop)}px`

// tears[0].style.top = `-30px`
// tears[1].style.top = `-100px`
// tears[2].style.top = `-70px`
// tears[3].style.top = `-130px`

setInterval(() => {
  tears.forEach((tear) => {
    const tearTop = parseInt(tear.style.top, 10)

    if (tearTop > faceHeight) {
      const randomHeight = Math.floor(Math.random() * (maxTop - minTop + 1) + minTop);

      console.log('randomHeight ===> ', randomHeight)
      tear.style.top = `-${randomHeight}px`
    } else {
      tear.style.top = `${tearTop + 2}px`
    }
  })
}, 30);

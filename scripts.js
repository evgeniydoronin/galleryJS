const sliderImages = Array.from(document.querySelectorAll('.gallery img'))
const sliderCount = sliderImages.length
const lastSlide = sliderCount - 1


const close = (elem) => {
    const popup = document.querySelector('.modal')
    popup.addEventListener('click', e => {
        if (e.srcElement.className == 'closeBtn' || e.srcElement.className == 'modal') {
            document.body.removeChild(popup)
        }
    })

    document.body.addEventListener('keydown', el => {
        // console.log(el)
        if (el.key === "Escape") {
            popup.remove(popup)
        }
    })

}


const navWalker = (index) => {
    const nextBtn = document.querySelector('.next')
    const prevBtn = document.querySelector('.prev')
    
    nextBtn.addEventListener('click', () => {
        if (index != lastSlide) {
            document.querySelector('.slider').innerHTML = `<span class="prev">prev</span><img src="${sliderImages[index + 1].src}"><span class="next">next</span><span class="closeBtn">close</span>`
            navWalker(index + 1)
        }
    })
    
    prevBtn.addEventListener('click', () => {
        if (index != 0) {
            document.querySelector('.slider').innerHTML = `<span class="prev">prev</span><img src="${sliderImages[index - 1].src}"><span class="next">next</span><span class="closeBtn">close</span>`
            navWalker(index - 1)
        }
    })


    // document.body.addEventListener('keydown', el => {
    //     // console.log(el)
    //     if (el.key === 'ArrowDown' && index != lastSlide || el.key === 'ArrowRight' && index != lastSlide) {
    //         document.querySelector('.slider').innerHTML = `<span class="prev">prev</span><img src="${sliderImages[index++ + 1].src}"><span class="next">next</span><span class="closeBtn">close</span>`
    //         console.log(index + 1)
    //     } 
    // })

    // document.body.addEventListener('keydown', el => {
    //     // console.log(el)
    //     if (el.key === 'ArrowUp' && index != 0 || el.key === 'ArrowLeft' && index != 0) {
    //         document.querySelector('.slider').innerHTML = `<span class="prev">prev</span><img src="${sliderImages[index-- - 1].src}"><span class="next">next</span><span class="closeBtn">close</span>`
    //     }
    // })

}

const displayPopupSlide = (slide, index) => {
    // create modal wrapper
    const modal = document.createElement('div')
    const slider = document.createElement('div')

    modal.className = 'modal'
    slider.className = 'slider'

    slider.innerHTML = `<span class="prev">prev</span><img src="${slide.src}"><span class="next">next</span><span class="closeBtn">close</span>`
    
    modal.insertBefore(slider, null)
    document.body.insertBefore(modal, document.body.firstChild)
    document.body.style.overflow = 'hidden'
    
    navWalker(index)
    close()
}

sliderImages.forEach((slide, index) => {
    slide.addEventListener('click', () => displayPopupSlide(slide, index))
})

const carrousel = document.querySelector('.carrousell')
const firstImg = document.querySelectorAll('img')[0]
const arrowIcons = document.querySelectorAll('.wrapper svg')

let isDragStart = false, isDragging = false,prevPageX, prevScrollLeft,positionDiff

const showHideIcons = () => {
    let scrollWidth = carrousel.scrollWidth - carrousel.clientWidth
    arrowIcons[0].style.display = carrousel.scrollLeft == 0 ? "none" : "block"
    arrowIcons[1].style.display = carrousel.scrollLeft == scrollWidth ? "none" : "block"
}

arrowIcons.forEach(icon =>{
    icon.addEventListener('click', ()=>{
        let firstImgWidth = firstImg.clientWidth + 14
        console.log(firstImgWidth);
        carrousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
        setTimeout(()=> showHideIcons(), 60)
    })
})

const autoSlide= () =>{

    if(carrousel.scrollLeft == (carrousel.scrollWidth - carrousel.clientWidth)) return

    positionDiff = Math.abs(positionDiff)
    let firstImgWidth = firstImg.clientWidth + 14
    let valDifference = firstImgWidth - positionDiff

    if(carrousel.scrollLeft > prevScrollLeft){
        return carrousel.scrollLeft += positionDiff > firstImgWidth/3 ? valDifference : -positionDiff
    }

    carrousel.scrollLeft -= positionDiff > firstImgWidth/3 ? valDifference : -positionDiff
}

const dragstart = (e)=>{
    isDragStart = true
    prevPageX = e.pageX || e.touches[0].pageX
    prevScrollLeft = carrousel.scrollLeft
}

const dragging = (e) =>{
    if(!isDragStart) return
    e.preventDefault()
    isDragging = true
    carrousel.classList.add('dragging')
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
    carrousel.scrollLeft = prevScrollLeft - positionDiff
    showHideIcons()
}

const dragstop = () => {
    isDragStart = false
    carrousel.classList.remove('dragging')

    if(!isDragging) return
    isDragging=false

    autoSlide()
}

carrousel.addEventListener('mousedown', dragstart)
carrousel.addEventListener('touchstart', dragstart)

carrousel.addEventListener('mousemove', dragging)
carrousel.addEventListener('touchmove', dragging)

carrousel.addEventListener('mouseup', dragstop)
carrousel.addEventListener('mouseleave', dragstop)
carrousel.addEventListener('touchleave', dragstop)
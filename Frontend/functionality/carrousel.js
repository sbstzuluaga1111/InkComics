const carrousel = document.querySelectorAll('.carrousell')
const firstImg = document.querySelectorAll('img')[0]
const arrowIcons = document.querySelectorAll('.wrapper svg')

carrousel.forEach(section =>{
    
    let isDragStart = false, isDragging = false,prevPageX, prevScrollLeft,positionDiff
    
    const showHideIcons = () => {
        let scrollWidth = section.scrollWidth - section.clientWidth
        arrowIcons[0].style.display = section.scrollLeft == 0 ? "none" : "block"
        arrowIcons[1].style.display = section.scrollLeft == scrollWidth ? "none" : "block"
    }
    
    arrowIcons.forEach(icon =>{
        icon.addEventListener('click', ()=>{
            let firstImgWidth = firstImg.clientWidth + 14
            section.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
            setTimeout(()=> showHideIcons(), 60)
        })
    })
    
    const autoSlide= () =>{
    
        if(section.scrollLeft == (section.scrollWidth - section.clientWidth)) return
    
        positionDiff = Math.abs(positionDiff)
        let firstImgWidth = firstImg.clientWidth + 14
        let valDifference = firstImgWidth - positionDiff
    
        if(section.scrollLeft > prevScrollLeft){
            return section.scrollLeft += positionDiff > firstImgWidth/3 ? valDifference : -positionDiff
        }
    
        section.scrollLeft -= positionDiff > firstImgWidth/3 ? valDifference : -positionDiff
    }
    
    const dragstart = (e)=>{
        isDragStart = true
        prevPageX = e.pageX || e.touches[0].pageX
        prevScrollLeft = section.scrollLeft
    }
    
    const dragging = (e) =>{
        if(!isDragStart) return
        e.preventDefault()
        isDragging = true
        section.classList.add('dragging')
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX
        section.scrollLeft = prevScrollLeft - positionDiff
        showHideIcons()
    }
    
    const dragstop = () => {
        isDragStart = false
        section.classList.remove('dragging')
    
        if(!isDragging) return
        isDragging=false
    
        autoSlide()
    }
    
    section.addEventListener('mousedown', dragstart)
    section.addEventListener('touchstart', dragstart)
    
    section.addEventListener('mousemove', dragging)
    section.addEventListener('touchmove', dragging)
    
    section.addEventListener('mouseup', dragstop)
    section.addEventListener('mouseleave', dragstop)
    section.addEventListener('touchleave', dragstop)
})

// header
const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
headerBurger.addEventListener('click', (e) => {
    headerMenu.classList.toggle('active')
    headerBurger.classList.toggle('active')
})


//отображение страницы при полной загрузке страницы
const body = document.body
window.addEventListener('DOMContentLoaded', (e) => {
    body.style.display = 'block';
})


//Прокрутка к блокам
if(!document.body.classList.contains('thanks')) {

    const aboutCompanyBlock = document.querySelector('.aboutcompany')
    const aboutLink = document.querySelector('.header__link.about')
    const advantagesBlock = document.querySelector('.secondscreen__container h2')
    const advantagesLink = document.querySelector('.header__link.advantages')
    const productBlock = document.querySelector('.thirdscreen')
    const productLink  = document.querySelector('.header__link.product')
    const catalogBlock = document.querySelector('.form__body')
    const catalogLink  = document.querySelector('.header__link.catalog')
    const businessBlock = document.querySelector('.sixthscreen')
    const businessLink  = document.querySelector('.header__link.business')
    const sertificateBlock = document.querySelector('.fourthscreen')
    const sertificateLink  = document.querySelector('.header__link.sertificate')
    const missionBlock = document.querySelector('.sevenscreen')
    const missionLink  = document.querySelector('.header__link.mission')
    const contactBlock = document.querySelector('.eighthscreen')
    const contactLink  = document.querySelector('.header__link.contact')
    const allHeaderLinks = document.querySelectorAll('.header__link')
    function scrollToElement(e, block) {
        e.preventDefault()
        if(window.pageXOffset < 768) {
            headerMenu.classList.remove('active')
            headerBurger.classList.remove('active')
        }
        allHeaderLinks.forEach(link => link.classList.remove('active'))
        e.target.classList.add('active')
        const goToBlock = block.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: goToBlock,
            behavior: "smooth"
        })
    }
    aboutLink.addEventListener('click', (e) => scrollToElement(e, aboutCompanyBlock))
    advantagesLink.addEventListener('click', (e) => scrollToElement(e, advantagesBlock))
    productLink.addEventListener('click', (e) => scrollToElement(e, productBlock))
    catalogLink.addEventListener('click', (e) => {
        e.preventDefault()
        if(window.pageXOffset < 768) {
            headerMenu.classList.remove('active')
            headerBurger.classList.remove('active')
        }
        allHeaderLinks.forEach(link => link.classList.remove('active'))
        catalogLink.classList.add('active')
        let goToBlock;
        if(window.innerWidth < 1000) {
            goToBlock = catalogBlock.getBoundingClientRect().top + pageYOffset - 190;
        } else {
            goToBlock = catalogBlock.getBoundingClientRect().top + pageYOffset - 100;
        }
        window.scrollTo({
            top: goToBlock,
            behavior: "smooth"
        })
    })
    businessLink.addEventListener('click', (e) => scrollToElement(e, businessBlock))
    sertificateLink.addEventListener('click', (e) => scrollToElement(e, sertificateBlock))
    missionLink.addEventListener('click', (e) => scrollToElement(e, missionBlock))
    contactLink.addEventListener('click', (e) => scrollToElement(e, contactBlock))




    //Скролл c footer
    const footerLinks = document.querySelectorAll('.footer__link')
    if(footerLinks.length > 0) {
        footerLinks[3].addEventListener('click' , (e) => {
            e.preventDefault()
            allHeaderLinks.forEach(link => link.classList.remove('active'))
            allHeaderLinks[3].classList.add('active')
            if(window.pageXOffset < 768) {
                headerMenu.classList.remove('active')
                headerBurger.classList.remove('active')
            }
            let goToBlock;
            if(window.innerWidth < 1000) {
                goToBlock = catalogBlock.getBoundingClientRect().top + pageYOffset - 190;
            } else {
                goToBlock = catalogBlock.getBoundingClientRect().top + pageYOffset - 100;
            }
            window.scrollTo({
                top: goToBlock,
                behavior: "smooth"
            })
        })
        footerLinks[0].addEventListener('click' , (e) => { scrollToBlockAtFooter(e, 0, aboutCompanyBlock) })
        footerLinks[1].addEventListener('click' , (e) => { scrollToBlockAtFooter(e, 1, advantagesBlock) })
        footerLinks[2].addEventListener('click' , (e) => { scrollToBlockAtFooter(e, 2, productBlock) })
        footerLinks[4].addEventListener('click' , (e) => { scrollToBlockAtFooter(e, 4, businessBlock) })
        footerLinks[5].addEventListener('click' , (e) => { scrollToBlockAtFooter(e, 5, sertificateBlock) })
        footerLinks[6].addEventListener('click' , (e) => { scrollToBlockAtFooter(e, 6, missionBlock) })
        footerLinks[7].addEventListener('click' , (e) => { scrollToBlockAtFooter(e, 7, contactBlock) })
    }
    function scrollToBlockAtFooter(e, index, block) {
        e.preventDefault()
        allHeaderLinks.forEach(link => link.classList.remove('active'))
        allHeaderLinks[index].classList.add('active')
        if(window.pageXOffset < 768) {
            headerMenu.classList.remove('active')
            headerBurger.classList.remove('active')
        }
        const goToBlock = block.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: goToBlock,
            behavior: "smooth"
        })
    }



    //Переход на форму
    const callReverseBtns = document.querySelectorAll('.call-reverse-btn')
    if(callReverseBtns.length > 0 && !document.body.classList.contains('thanks')) {
        callReverseBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault()
                const goToForm = catalogBlock.getBoundingClientRect().top + pageYOffset - 100;
                window.scrollTo({
                    top: goToForm,
                    behavior: "smooth"
                })
            })
        })
    }
}




//Кнопка вверх
const upBtn = document.querySelector('.up')
if(upBtn) {
    window.addEventListener('scroll', (e)=> {
        if(window.pageYOffset > 400) upBtn.style.bottom = '10px';
        else {upBtn.style.bottom = '-50px'}
    })
    upBtn.addEventListener('click', (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}





//Анимация при скролле
const animItems = document.querySelectorAll('.anim__items');
if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll () {
        for(let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offSet(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;  
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active') ;
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active') 
                }
            }
        }
    }
    function offSet(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {  top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(()=> {
        animOnScroll ()
    }, 1000)
}




//Замена картинок на экранах уже чем 767px
const sevenscreenImages = document.querySelectorAll('.sevenscreen__item img')
if(sevenscreenImages.length > 0 && window.innerWidth < 768) {
    sevenscreenImages[0].setAttribute('src', 'images/seven-screen/Targetmin.png')
    sevenscreenImages[1].setAttribute('src', 'images/seven-screen/Rocketmin.png')
}









//Отправка формы
$(document).ready(function() {
    $(".form__body").submit(function() { 
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", 
            data: th.serialize()
        }).done(function() {
            window.location.href = 'thanks.html';
        });
        return false;
    });
});
/*         Toggle icon navbar       */
let menuIcon=document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}
// scroll section
let sections =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top< offset + height)
        {
            navlinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active')
            
            });
        };
    });

    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.screenY>100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.homecontent, heading',{ origin:'top'});
ScrollReveal().reveal('.home-img,.about-img, .contanier,.card, .contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-contact h1,  .education, .container',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content, .skills',{origin:'right'});





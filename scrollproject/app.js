const date = document.getElementById('date');
date.textContent = new Date().getUTCFullYear();

const links_container = document.querySelector('.links-container');
const links = document.querySelector('.links');
const btn_toggle = document.querySelector('.nav-toggle');

const navbar = document.getElementById('nav');
const top_link = document.querySelector('.top-link');

btn_toggle.addEventListener('click', () => {
    const links_container_height = links_container.getBoundingClientRect().height;
    const links_height = links.getBoundingClientRect().height;
    
    if(links_container_height === 0){
        links_container.style.height = `${links_height}px`;
    }
    else{
        links_container.style.height = 0;
    }
});

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset; // equal to scrollY
    const navbar_height = navbar.getBoundingClientRect().height;

    if(scrollHeight > navbar_height){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav');
    }

    if(scrollHeight > 500){
        top_link.classList.add('show-link');
    }else{
        top_link.classList.remove('show-link');
    }
});

const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(links => {
    links.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);

        let fixed_navbar = navbar.classList.contains('fixed-nav');
        const navbar_height = navbar.getBoundingClientRect().height;
        const linksContainerHeight = links_container.getBoundingClientRect().height;


        let position = element.offsetTop - navbar_height;


        if(!fixed_navbar){
            position = position - navbar_height;
        }

        if(navbar_height > 82){
            position = position + linksContainerHeight;
        }

        
        window.scrollTo({
            left:0,
            top:position
        })
        links_container.style.height = 0;
    })  
})
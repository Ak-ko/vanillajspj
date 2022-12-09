const sideBarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

sideBarToggle.addEventListener('click', function() {
    const sideClasses = sidebar.classList;
    // if(!sideClasses.contains('show-sidebar')){        
    //     sideClasses.add('show-sidebar');    
    // }    
    sideClasses.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function() {
    const sideClasses = sidebar.classList;
    // if(sideClasses.contains('show-sidebar')){        
    //     sideClasses.remove('show-sidebar');    
    // }    
    sideClasses.toggle('show-sidebar');
});
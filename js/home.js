document.addEventListener('DOMContentLoaded', function() {
    // Charger les projets récents
    const projectsContainer = document.querySelector('.projects-grid');
    if (projectsContainer) {
        loadProjects(projectsContainer, 3);
    }
    
    // Animation au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(20px)';
        project.style.transition = 'all 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
});
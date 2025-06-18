document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "SUPERCAR",
            description: "Site web dynamique pour réserver des essais de voitures de luxe avec système de réservation en temps réel.",
            tags: ["web"],
            technologies: ["HTML", "CSS", "PHP", "JavaScript", "Bootstrap", "MySQL"],
            year: "2024",
            link: "#",
            image: "assets/supercar.png"
        },
        {
            title: "PHARMAGEST",
            description: "Application back-office complète pour la gestion de stock et de clients d'une pharmacie.",
            tags: ["web"],
            technologies: ["JAVA", "FXML", "PostgreSQL", "UML"],
            year: "2023",
            link: "#",
            image: "assets/pharmagest.png"
        },
        {
            title: "Astek Library",
            description: "Plateforme de gestion de projets internes avec suivi des tâches et collaboration d'équipe.",
            tags: ["web"],
            technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            year: "2024",
            link: "#",
            image: "assets/astek.png"
        },
        {
            title: "Migration ORM",
            description: "Refonte et migration d'une application existante vers la nouvelle bibliothèque Sequelize.",
            tags: ["web"],
            technologies: ["JavaScript", "Node.js", "Sequelize"],
            year: "2023",
            link: "#",
            image: "assets/sicorax.png"
        },
        {
            title: "Portfolio WIX",
            description: "Création d'un portfolio et site e-commerce avec le CMS WIX.",
            tags: ["web", "design"],
            technologies: ["WIX", "CMS"],
            year: "2022",
            link: "#",
            image: "assets/portfolio.png"
        },
        {
            title: "Comparateur CV",
            description: "Outil d'analyse et de comparaison de CV avec des descriptions de poste utilisant le NLP.",
            tags: ["web"],
            technologies: ["Python", "NLTK", "spaCy", "pandas"],
            year: "2024",
            link: "#",
            image: "assets/comparateur.png"
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Afficher tous les projets
    displayProjects(projects);

    // Filtrage des projets
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            if (filter === 'all') {
                displayProjects(projects);
            } else {
                const filteredProjects = projects.filter(project => 
                    project.tags.includes(filter)
                );
                displayProjects(filteredProjects);
            }
        });
    });

    function displayProjects(projectsToShow) {
        projectsGrid.innerHTML = '';
        
        projectsToShow.forEach(project => {
            const projectEl = document.createElement('div');
            projectEl.className = `project-item ${project.tags.join(' ')}`;
            projectEl.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <span class="project-tag">${project.tags[0] === 'web' ? 'Développement Web' : 'Design'}</span>
                </div>
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.technologies.map(tech => `<span class="tag">#${tech}</span>`).join('')}
                    </div>
                    <div class="project-meta">
                        <span>${project.year}</span>
                    </div>
                </div>
            `;
            projectsGrid.appendChild(projectEl);
        });
    }
});
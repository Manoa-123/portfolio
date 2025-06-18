document.addEventListener('DOMContentLoaded', function() {
    // Données des expériences professionnelles
    const experiences = [
        {
            title: "Consultante en Personal Branding",
            company: "Freelance",
            period: "En cours",
            description: [
                "Conception de sites web optimisés SEO",
                "Stratégies LinkedIn (profil, contenu, réseau)",
                "Stratégie digitale et visibilité en ligne"
            ],
            icon: "fas fa-briefcase"
        },
        {
            title: "Stage en développement web",
            company: "Astek Mauritius Ebène",
            period: "Janvier-février 2024",
            description: [
                "Astek Library: conception d'un site web de gestion de projet en interne",
                "Technologies: HTML, CSS, JavaScript, PHP, MySQL",
                "Analyse et gestion de projet: MCD, Microsoft Teams, GitLab, méthode Agile"
            ],
            icon: "fas fa-laptop-code"
        },
        {
            title: "Stage en développement informatique",
            company: "Uniconsults LTD Curepipe",
            period: "Juin-juillet 2023",
            description: [
                "Migration d'une application pour l'adapter à la nouvelle bibliothèque de l'ORM Sequelize",
                "Technologies: JavaScript, Node.js, Sequelize",
                "Gestion du projet: Google Drive, Google Sheet, Google Docs, Gogs"
            ],
            icon: "fas fa-database"
        }
    ];

    // Fonction pour afficher les expériences
    function displayExperiences() {
        const timeline = document.querySelector('.timeline');
        
        if (timeline) {
            let html = '';
            
            experiences.forEach(exp => {
                html += `
                <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="${exp.icon}"></i>
                    </div>
                    <div class="timeline-content">
                        <h3>${exp.title} <span>${exp.company}</span></h3>
                        <p class="timeline-period">${exp.period}</p>
                        <ul class="timeline-description">
                            ${exp.description.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                `;
            });
            
            timeline.innerHTML = html;
        }
    }

    // Appel de la fonction
    displayExperiences();

    // Animation de la timeline
    const animateTimeline = () => {
        const items = document.querySelectorAll('.timeline-item');
        
        items.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (itemPosition < screenPosition) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    };

    // animation
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'all 0.5s ease';
    });

    window.addEventListener('scroll', animateTimeline);
    animateTimeline(); 
});
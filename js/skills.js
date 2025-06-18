document.addEventListener('DOMContentLoaded', function() {
    // Données des compétences
    const skillsData = {
        technical: {
            languages: [
                { name: "HTML", icon: "fab fa-html5", level: 90 },
                { name: "CSS", icon: "fab fa-css3-alt", level: 85 },
                { name: "JavaScript", icon: "fab fa-js", level: 80 },
                { name: "PHP", icon: "fab fa-php", level: 75 },
                { name: "Python", icon: "fab fa-python", level: 70 },
                { name: "Java", icon: "fab fa-java", level: 65 }
            ],
            design: [
                { name: "UI/UX Design", icon: "fas fa-pencil-ruler", level: 80 },
                { name: "Canva", icon: "fas fa-palette", level: 85 },
                { name: "Bootstrap", icon: "fab fa-bootstrap", level: 75 },
                { name: "WIX", icon: "fas fa-desktop", level: 90 }
            ],
            tools: [
                { name: "VS Code", icon: "fas fa-code", level: 95 },
                { name: "Git", icon: "fab fa-git-alt", level: 80 },
                { name: "MySQL", icon: "fas fa-database", level: 75 },
                { name: "PostgreSQL", icon: "fas fa-database", level: 70 },
                { name: "Office", icon: "fas fa-file-word", level: 85 },
                { name: "Google Suite", icon: "fab fa-google", level: 90 }
            ]
        },
        languages: [
            { name: "Français", level: 100, certification: "DALF C1" },
            { name: "Anglais", level: 70, certification: "B1" },
            { name: "Allemand", level: 30, certification: "A1" }
        ],
        soft: [
            { name: "Autonomie", icon: "fas fa-user-clock", description: "Capacité à travailler efficacement en solo" },
            { name: "Sérieux", icon: "fas fa-medal", description: "Approche rigoureuse et professionnelle" },
            { name: "Apprentissage rapide", icon: "fas fa-brain", description: "Adaptabilité et assimilation rapide" },
            { name: "Polyvalence", icon: "fas fa-random", description: "Compétences variées et complémentaires" },
            { name: "Communication", icon: "fas fa-comments", description: "Échanges clairs et efficaces" },
            { name: "Gestion de projet", icon: "fas fa-tasks", description: "Méthodes Agile et organisation" }
        ]
    };

    // Système d'onglets
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Charger immédiatement toutes les compétences au lieu d'attendre le clic
    loadTechnicalSkills();
    loadLanguages();
    loadSoftSkills();

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Gestion des onglets actifs
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Activer le premier onglet par défaut
    tabBtns[0].classList.add('active');
    tabContents[0].classList.add('active');

    function loadTechnicalSkills() {
        const skillsLists = document.querySelectorAll('.skills-list');
        
        // Langages
        let html = '';
        skillsData.technical.languages.forEach(skill => {
            html += `
            <div class="skill-item">
                <div class="skill-info">
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.level}%"></div>
                </div>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            `;
        });
        skillsLists[0].innerHTML = html;
        
        // Design
        html = '';
        skillsData.technical.design.forEach(skill => {
            html += `
            <div class="skill-item">
                <div class="skill-info">
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.level}%"></div>
                </div>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            `;
        });
        skillsLists[1].innerHTML = html;
        
        // Outils
        html = '';
        skillsData.technical.tools.forEach(skill => {
            html += `
            <div class="skill-item">
                <div class="skill-info">
                    <i class="${skill.icon}"></i>
                    <span>${skill.name}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${skill.level}%"></div>
                </div>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            `;
        });
        skillsLists[2].innerHTML = html;
    }

    function loadLanguages() {
        const container = document.querySelector('.languages-container');
        let html = '';
        
        skillsData.languages.forEach(lang => {
            html += `
            <div class="language-item">
                <div class="language-info">
                    <span>${lang.name}</span>
                    <small>${lang.certification}</small>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${lang.level}%"></div>
                </div>
                <span class="language-percent">${lang.level}%</span>
            </div>
            `;
        });
        
        container.innerHTML = html;
    }

    function loadSoftSkills() {
        const container = document.querySelector('.soft-skills-container');
        let html = '<div class="soft-skills-grid">';
        
        skillsData.soft.forEach(skill => {
            html += `
            <div class="soft-skill-card">
                <i class="${skill.icon}"></i>
                <h4>${skill.name}</h4>
                <p>${skill.description}</p>
            </div>
            `;
        });
        
        html += '</div>';
        container.innerHTML = html;
    }
});
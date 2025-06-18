document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
           
            
            // Création du message de succès s'il n'existe pas déjà
            let successMessage = document.querySelector('.success-message');
            if (!successMessage) {
                successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                contactForm.appendChild(successMessage);
            }
            
            // Affichage du message
            successMessage.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <p>Merci ${name}, votre message a bien été envoyé ! Je vous répondrai dès que possible.</p>
            `;
            successMessage.style.display = 'block';
            
            // Réinitialisation du formulaire
            contactForm.reset();
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        });
    }
    
    // Animation des éléments de contact
    const contactItems = document.querySelectorAll('.info-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});
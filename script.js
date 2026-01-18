document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('.email-link');
    
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            // Optional: Prevent default mailto behavior if you prefer copy-only
            // e.preventDefault();
            
            const email = emailLink.textContent;
            navigator.clipboard.writeText(email).then(() => {
                const originalText = emailLink.textContent;
                
                // Visual feedback
                emailLink.textContent = "Copied to clipboard";
                emailLink.style.textDecorationColor = "#000";
                
                // Revert after 2 seconds
                setTimeout(() => {
                    emailLink.textContent = originalText;
                    emailLink.style.textDecorationColor = "#ccc";
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    }

    // Optional: Add hover effect for projects if they become clickable links later
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.opacity = '1';
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    /* --------------------------
       Dark Mode Logic
    --------------------------- */
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check local storage or system preference on load
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = 'light';
            
            // If currently no theme (default) or light, switch to dark
            if (!document.documentElement.hasAttribute('data-theme') || 
                 document.documentElement.getAttribute('data-theme') === 'light') {
                theme = 'dark';
            }
            
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }


    /* --------------------------
       Email Copy Logic (Existing)
    --------------------------- */
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
                emailLink.style.textDecorationColor = "var(--text-primary)"; // Updated to var
                
                // Revert after 2 seconds
                setTimeout(() => {
                    emailLink.textContent = originalText;
                    emailLink.style.textDecorationColor = "var(--link-decoration)"; // Updated to var
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy email:', err);
            });
        });
    }

    /* --------------------------
       Hover Effects (Existing)
    --------------------------- */
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.opacity = '1';
        });
    });
});
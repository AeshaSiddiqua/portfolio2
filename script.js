// Animate skill bars on scroll
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    const skillsSection = document.getElementById('skills');
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.offsetHeight;
    const windowHeight = window.innerHeight;

    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        
        if (barTop < windowHeight - 100) {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        }
    });
}

// Run on initial load and scroll
window.addEventListener('load', animateSkillBars);
window.addEventListener('scroll', animateSkillBars);

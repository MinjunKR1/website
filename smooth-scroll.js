document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.scroll-link');

    const topbarHeight = document.querySelector('.topbar').offsetHeight;

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const targetPosition = targetElement.offsetTop - topbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});
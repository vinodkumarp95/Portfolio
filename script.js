// Example of potential interactivity, such as changing the opacity of the video on scroll
window.addEventListener('scroll', () => {
    const video = document.getElementById('bg-video');
    const opacity = Math.max(0.5, 1 - window.scrollY / 600);
    video.style.opacity = opacity;
});

document.getElementById('revealButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const image = imageContainer.querySelector('img');
    imageContainer.classList.remove('hidden');
    setTimeout(() => {
        image.classList.add('visible');
    }, 100); // Slight delay to trigger the opacity transition
});

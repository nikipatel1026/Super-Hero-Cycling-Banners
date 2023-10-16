let currentIndex = 0;
const images = document.getElementById("banner-images").children;
const totalImages = images.length;

function showImage(index) {
    for (let i = 0; i < totalImages; i++) {
        images[i].style.display = "none";
    }
    images[index].style.display = "block";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Initially, show the first image
showImage(currentIndex);

// Auto-cycle the banner every 2 seconds
setInterval(nextImage, 2000);


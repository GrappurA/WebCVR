//image hover animation
const galleryImages = document.querySelectorAll("#gallery img");
galleryImages.forEach(img => {
    img.className += " transition-transform duration-350 hover:scale-150 border-4";

});

//image click enlargement
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

galleryImages.forEach(image => {
    if (image.id != "up_img") {
        image.onclick = () => {
            overlayImg.src = image.src;
            overlayImg.classList.add("mx-auto");
            overlayImg.classList.add("mt-[2%]");
            overlay.classList.remove("hidden");
        };
    }
});

overlay.onclick = () => {
    overlay.classList.add("hidden");
    overlayImg.src = "leave.png";
};

//esc press => escape image enlargement
document.body.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
        overlay.classList.add("hidden");
        overlayImg.src = "leave.png";
    }
});


const ytButton = document.getElementById("youtube-button");
const galleryButton = document.getElementById("gallery-button");
const containerDiv = document.getElementById("gallery");

const galleryHTML = `<img src="img/photo_10_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_11_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_2022-11-13_14-05-38.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_13_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_1_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">

            <img src="img/photo_2_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_5_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_3_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_4_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_7_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_8_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_9_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_6_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_12_2025-10-16_16-18-04.jpg" alt="runa's image" id="gallery-image" class="gallery-image">
            <img src="img/photo_2024-02-27_23-59-52.jpg" alt="runa's image" id="gallery-image" class="gallery-image">


            <button id="scroll-btn" class="inline"><img src="img/top.png" id="up_img" alt="up-button"
                    class="w-[22%] h-auto ml-[313%] rounded-full border-2 transition-transform duration-350 hover:scale-110"></button>
            <script src="gallery.js"></script>`;
const ytHTML = `<div class='sk-ww-youtube-channel-videos' data-embed-id='25613893'></div><script src='https://widgets.sociablekit.com/youtube-channel-videos/widget.js' defer></script>`;

let state = 0;
ytButton.onclick = () => {
    containerDiv.innerHTML = "";
    state = 1;
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/youtube-channel-videos/widget.js";
    script.defer = true;

    containerDiv.appendChild(script);
    containerDiv.innerHTML+= ` <button id="scroll-btn" class="inline"><img src="img/top.png" id="up_img" alt="up-button"
                    class="w-[22%] h-auto ml-[313%] rounded-full border-2 transition-transform duration-350 hover:scale-110"></button>
        `;
    changeDiv();
}
galleryButton.onclick = () => {
    state = 0;
    changeDiv();
}

function changeDiv() {
    containerDiv.innerHTML = "";
    if (state === 0) {
        containerDiv.innerHTML = galleryHTML;
    }
    else {
        containerDiv.innerHTML = ytHTML;
    }
}
changeDiv();

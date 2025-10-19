const btn = document.getElementById("scroll-btn");

window.onscroll = scrollFunction;
btn.onclick = topFunction;

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {        
        btn.style.display = "inline";
    }
    else {
        btn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

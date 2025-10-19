const element = document.getElementById("gallery");

for (const child of element.children) {
    if (child.tagName == "IMG") {
        child.className+=" transition-transform duration-350 hover:scale-160 border-4";
    }
}
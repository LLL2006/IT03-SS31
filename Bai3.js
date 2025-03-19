document.querySelectorAll(".color-box").forEach(box => {
    box.addEventListener("click", () => {
        document.body.style.backgroundColor = box.style.backgroundColor;
    })
})
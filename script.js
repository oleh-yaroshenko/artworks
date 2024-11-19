const images = document.querySelectorAll(".gallery-wrapper-img");

images.forEach((img) => {
    img.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = img.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const rotateX = -(y / height) * 30;
        const rotateY = (x / width) * 30;
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
});
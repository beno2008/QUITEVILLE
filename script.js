document.addEventListener("DOMContentLoaded", function () {

    const tvButton = document.getElementById("tvButton");
    const birdieCard = document.getElementById("birdieCard");

    const birdieImg = document.querySelector("#birdie img");
    const loonyImg = document.querySelector("#loony img");
    const toonyImg = document.querySelector("#toony img");

    const page = document.body.dataset.page;

    if (!tvButton) return;

    // ==========================
    // الضغط على كارد بيردي (الهوم)
    // ==========================
    if (birdieCard) {

        birdieCard.addEventListener("click", function (e) {

            e.preventDefault();

            const isOff = document.body.classList.contains("tv-off");

            document.body.style.opacity = "0";

            setTimeout(() => {

                if (isOff) {
                    window.location.href = "characters/birdie-off.html";
                } else {
                    window.location.href = "characters/birdie.html";
                }

            }, 400);

        });

    }

    tvButton.addEventListener("click", function () {

        if (page === "birdie") {

            document.body.style.opacity = "0.2";

            setTimeout(() => {
            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");
                window.location.href = "birdie-off.html";
            }, 400);

            return;
        }

        if (page === "birdie-off") {

            document.body.style.opacity = "0.2";

            setTimeout(() => {
                window.location.href = "birdie.html";
            }, 400);

            return;
        }

        document.body.style.opacity = "0.2";

        setTimeout(() => {

            document.body.classList.toggle("tv-off");
            tvButton.classList.toggle("active");

            const isOff = document.body.classList.contains("tv-off");

            const stateText = tvButton.querySelector(".tv-state");

            if (stateText) {
                stateText.textContent = isOff ? "OFF" : "ON";
            }

            if (birdieImg) {
                birdieImg.src = isOff
                    ? "images/birdie-off.png"
                    : "images/birdieheart.png";
            }

            if (loonyImg) {
                loonyImg.src = isOff
                    ? "images/loony-off.png"
                    : "images/loony.png";
            }

            if (toonyImg) {
                toonyImg.src = isOff
                    ? "images/toony-off.png"
                    : "images/toony.png";
            }

            document.body.style.opacity = "1";

        }, 200);

    });

});

function changeImage(img) {
    document.getElementById("mainImg").src = img.src;
}

function downloadFile(filePath) {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
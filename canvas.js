window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    const clearBtn = document.querySelector("#clear-btn");
    const blueBtn = document.querySelector("#blue-btn");
    const redBtn = document.querySelector("#red-btn");
    const greyBtn = document.querySelector("#grey-btn");
    const blackBtn = document.querySelector("#black-btn");
    canvas.height = 800;
    canvas.width = 800;
    ctx.lineWidth = 10;

    //variables
    let painting = false;

    var slider = document.getElementById("myRange");
    var output = document.getElementById("output");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        ctx.lineWidth = this.value;
    }

    function startPosition(e) {
        draw(e);
        painting = true;
    }
    function endPosition(e) {
        painting = false;
        ctx.beginPath();
    }
    function clearC() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    clearBtn.addEventListener("click", clearC);
    blueBtn.addEventListener("click", changeColour);
    redBtn.addEventListener("click", changeColour);
    greyBtn.addEventListener("click", changeColour);
    blackBtn.addEventListener("click", changeColour);
    function changeColour(e) {
        console.log(this.attributes["data-colour"].value);
        ctx.strokeStyle = this.attributes["data-colour"].value;
        if (document.querySelector('.active')) {
            document.querySelector(".active").classList.remove("active");
        }
        this.classList.add('active');
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineCap = "round";
        ctx.lineTo(e.layerX, e.layerY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.layerX, e.layerY);
    }
    canvas.addEventListener("mousedown", () => {
        startPosition();
    })
    canvas.addEventListener("mouseup", () => {
        endPosition();
    })
    canvas.addEventListener("mousemove", draw);

})
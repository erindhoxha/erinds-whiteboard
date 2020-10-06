window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = 800;
    canvas.width = 800;

    //variables
    let painting = false;

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
    document.querySelector("#clear-btn").addEventListener("click", clearC);

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
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
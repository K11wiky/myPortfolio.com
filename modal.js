// modal.js

// Assuming you have an array of SVG paths corresponding to each image
var svgPaths = {

    '/Graphic/nike.png': '/Graphic/nike1.svg',
    '/Graphic/japan.png': '/Graphic/nike2.svg',
    '/Graphic/nikeposter2.png': '/Graphic/nike3.svg',
    '/Graphic/nikepostrt3.1.png': '/Graphic/nike4.svg'
};
function openModal(imagePath) {
    var modal = document.getElementById("myModal");
    var modalImageContainer = document.getElementById("modalImage");

    // Clear previous content
    modalImageContainer.innerHTML = "";

    // Get the corresponding SVG path based on the clicked image
    var svgPath = svgPaths[imagePath];

    // Create an <object> element to load the SVG file
    var svgObject = document.createElement("object");
    svgObject.setAttribute("type", "image/svg+xml");
    svgObject.setAttribute("data", svgPath);

    // Append the <object> element to the container
    modalImageContainer.appendChild(svgObject);

    // Display the modal
    modal.style.display = "block";

    // Add event listener for closing the modal (if it doesn't already exist)
    if (!modal.closeModalListenerAdded) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        modal.closeModalListenerAdded = true;
    }
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

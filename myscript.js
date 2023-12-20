function openNav() {
    console.log('Open Nav function called');
    document.getElementById("mySidenav").style.right = "0";
    document.getElementById("centered").style.marginRight = "250px";
}

function closeNav() {
    console.log('Close Nav function called');
    document.getElementById("mySidenav").style.right = "-250px";
    document.getElementById("centered").style.marginRight = "0";
}

document.getElementById("centered").addEventListener("click", openNav);

//slider for gnereal navigation
function togglePortfolio() {
    var portfolioContent = document.querySelector('.portfolio-content');
    portfolioContent.classList.toggle('show');
}

// Add this script if you want to close the dropdown when clicking outside of it
document.addEventListener("click", function (e) {
    if (!e.target.matches('.portfolio-button')) {
        var dropdowns = document.getElementsByClassName("portfolio-content");
        for (var d = 0; d < dropdowns.length; d++) {
            var openDropdown = dropdowns[d];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});


// Open the modal with the clicked image
function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageSrc;
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}



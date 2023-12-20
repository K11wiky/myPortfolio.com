
//modal 18

 // Get the modal element
 var modal = document.getElementById("yourExistingModal");

 // Get the images in the gallery
 var galleryImages = document.querySelectorAll(".image-gallery18 img");

 // Get the modal image element
 var modalImg = document.getElementById("yourExistingModalImg");

 // Get the close button element
 var closeBtn = document.querySelector(".yourExistingClose");

 // Function to open the modal with the selected image
 function openModal(imgSrc) {
   modal.style.display = "block";
   modalImg.src = imgSrc;
 }

 // Add click event listeners to each gallery image
 galleryImages.forEach(function (img) {
   img.addEventListener("click", function () {
     openModal(img.src);
   });
 });

 // Close the modal when the close button is clicked
 closeBtn.addEventListener("click", function () {
   modal.style.display = "none";
 });

 // Close the modal when clicking outside the modal content
 window.addEventListener("click", function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 });

 // click me slide 
 
  function toggleSlide() {
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.style.transform = slideContainer.style.transform === 'translateX(0)' ? 'translateX(-100%)' : 'translateX(0)';
  }
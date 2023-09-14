const imagestenp = [
  'url("./public/images/TenPuru/Card1.png")',
  'url("./public/images/TenPuru/Card2.png")',
  'url("./public/images/TenPuru/Card3.png")',
  'url("./public/images/TenPuru/Card4.png")',
  'url("./public/images/TenPuru/Card5.png")',
];

const cardtenp = document.getElementById("cardtenp");
let currentIndextenp = 0; // Initialize the index

// Function to change the background image by incrementing the index
function changeBgtenp() {
  currentIndextenp = (currentIndextenp + 1) % imagestenp.length; // Increment the index
  const bg = imagestenp[currentIndextenp];
  cardtenp.style.backgroundImage = bg;
}

// Event listener for mouseenter
cardtenp.addEventListener("mouseenter", () => {
  changeBgtenp(); // Change the background immediately on hover
  intervalIdtenp = setInterval(changeBgtenp, 2000); // Change every 2 seconds while hovering
});

// Event listener for mouseleave
cardtenp.addEventListener("mouseleave", () => {
  clearInterval(intervalIdtenp); // Stop changing the background when mouse leaves
  resetBackgroundImagetenp(); // Reset the background image
});

// Function to reset the background image
function resetBackgroundImagetenp() {
  currentIndextenp = 0; // Reset the index to 0
  cardtenp.style.backgroundImage = imagestenp[currentIndextenp]; // Set the background to the first image
}

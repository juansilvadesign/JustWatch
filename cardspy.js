const imagesspy = [
  'url("./public/images/SpyxFamily/Card1.png")',
  'url("./public/images/SpyxFamily/Card2.png")',
  'url("./public/images/SpyxFamily/Card3.png")',
  'url("./public/images/SpyxFamily/Card4.png")',
  'url("./public/images/SpyxFamily/Card5.png")',
  'url("./public/images/SpyxFamily/Card6.png")',
  'url("./public/images/SpyxFamily/Card7.png")',
  'url("./public/images/SpyxFamily/Card8.png")',
  'url("./public/images/SpyxFamily/Card9.png")',
  'url("./public/images/SpyxFamily/Card10.png")',
  'url("./public/images/SpyxFamily/Card11.png")',
];

const cardspy = document.getElementById("cardspy");
let currentIndexspy = 0; // Initialize the index

// Function to change the background image by incrementing the index
function changeBgspy() {
  currentIndexspy = (currentIndexspy + 1) % imagesspy.length; // Increment the index
  const bg = imagesspy[currentIndexspy];
  cardspy.style.backgroundImage = bg;
}

// Event listener for mouseenter
cardspy.addEventListener("mouseenter", () => {
  changeBgspy(); // Change the background immediately on hover
  intervalIdspy = setInterval(changeBgspy, 2000); // Change every 2 seconds while hovering
});

// Event listener for mouseleave
cardspy.addEventListener("mouseleave", () => {
  clearInterval(intervalIdspy); // Stop changing the background when mouse leaves
  resetBackgroundImagespy(); // Reset the background image
});

// Function to reset the background image
function resetBackgroundImagespy() {
  currentIndexspy = 0; // Reset the index to 0
  cardspy.style.backgroundImage = imagesspy[currentIndexspy]; // Set the background to the first image
}

const imageston = [
  'url("./public/images/Tonikaku/Card1.png")',
  'url("./public/images/Tonikaku/Card2.png")',
  'url("./public/images/Tonikaku/Card3.png")',
  'url("./public/images/Tonikaku/Card4.png")',
  'url("./public/images/Tonikaku/Card5.png")',
  'url("./public/images/Tonikaku/Card6.png")',
  'url("./public/images/Tonikaku/Card7.png")',
];

const cardton = document.getElementById("cardton");
let currentIndexton = 0; // Initialize the index

// Function to change the background image by incrementing the index
function changeBgton() {
  currentIndexton = (currentIndexton + 1) % imageston.length; // Increment the index
  const bg = imageston[currentIndexton];
  cardton.style.backgroundImage = bg;
}

// Event listener for mouseenter
cardton.addEventListener("mouseenter", () => {
  changeBgton(); // Change the background immediately on hover
  intervalIdton = setInterval(changeBgton, 2000); // Change every 2 seconds while hovering
});

// Event listener for mouseleave
cardton.addEventListener("mouseleave", () => {
  clearInterval(intervalIdton); // Stop changing the background when mouse leaves
  resetBackgroundImageton(); // Reset the background image
});

// Function to reset the background image
function resetBackgroundImageton() {
  currentIndexton = 0; // Reset the index to 0
  cardton.style.backgroundImage = imageston[currentIndexton]; // Set the background to the first image
}

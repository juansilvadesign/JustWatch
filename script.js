/* V2

function setProgress(percent) {
  const progress = document.querySelector('.progress');
  progress.style.width = percent + '%';
}

// Example usage: setProgress(50);

*/


// ToolTip Interaction - Does not work
/*
const infoDiv = document.querySelector('.card');
const tooltip = document.querySelector('.tooltip');

infoDiv.addEventListener('mouseenter', (e) => {
  tooltip.style.display = 'block';
  updateTooltipPosition(e);
});

infoDiv.addEventListener('mousemove', (e) => {
  updateTooltipPosition(e);
});

infoDiv.addEventListener('mouseleave', () => {
  tooltip.style.display = 'none';
});

function updateTooltipPosition(e) {
  tooltip.style.left = e.clientX + 10 + 'px';
  tooltip.style.top = e.clientY + 10 + 'px';
}
*/
let petData = {
  hunger: 50
};

function loadPetData() {
  const savedData = localStorage.getItem('tamagotchiData');
  if (savedData) {
    petData = JSON.parse(savedData);
  }
}

function updateUI() {
  const hungerDisplay = document.getElementById('hunger-val');
  if (hungerDisplay) {
    hungerDisplay.innerText = petData.hunger;
  }
  localStorage.setItem('tamagotchiData', JSON.stringify(petData));
}

window.addEventListener('DOMContentLoaded', () => {
  loadPetData();
  updateUI();

  const feedBtn = document.getElementById('feed-btn');
  if (feedBtn) {
    feedBtn.addEventListener('click', () => {
      petData.hunger = Math.min(100, petData.hunger + 10);
      updateUI();
    });
  }
});

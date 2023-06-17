const fleeButton = document.getElementById('fleeButton');
let mouseX = 0;
let mouseY = 0;

// Função para atualizar a posição do botão de acordo com o movimento do mouse
function updateButtonPosition() {
  const buttonWidth = fleeButton.offsetWidth;
  const buttonHeight = fleeButton.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  const maxPosX = windowWidth - buttonWidth;
  const maxPosY = windowHeight - buttonHeight;
  
  const distanceX = mouseX - fleeButton.offsetLeft + (buttonWidth / 2);
  const distanceY = mouseY - fleeButton.offsetTop + (buttonHeight / 2);
  
  const displacementX = (maxPosX / 2 - distanceX) / 10;
  const displacementY = (maxPosY / 2 - distanceY) / 10;
  
  let newX = fleeButton.offsetLeft + displacementX;
  let newY = fleeButton.offsetTop + displacementY;
  
  if (newX < 0) newX = 0;
  if (newX > maxPosX) newX = maxPosX;
  if (newY < 0) newY = 0;
  if (newY > maxPosY) newY = maxPosY;
  
  fleeButton.style.left = `${newX}px`;
  fleeButton.style.top = `${newY}px`;
}

// Atualiza as coordenadas do mouse sempre que ele se move
document.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

// Adiciona o evento de movimento do mouse ao botão
document.addEventListener('mousemove', updateButtonPosition);

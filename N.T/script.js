function changeName() {
  const nameElement = document.getElementById('name');
  const newName = prompt("Ismingizni kiriting:");
  if (newName && newName.trim() !== "") {
    nameElement.textContent = newName.trim();
  }
}

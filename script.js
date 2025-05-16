function changeContent() {
  const description = document.getElementById('description');
  description.textContent = "The content has been changed dynamically!";
  description.style.color = "green";
  description.style.fontWeight = "bold";
}

function addElement() {
  const container = document.getElementById('dynamic-container');
  const newElement = document.createElement('p');
  newElement.textContent = "This is a new paragraph!";
  newElement.classList.add("new-paragraph");
  container.appendChild(newElement);
}

function removeElement() {
  const container = document.getElementById('dynamic-container');
  if (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

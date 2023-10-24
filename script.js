const container = document.getElementById("container");
const images = document.getElementsByClassName("image");

		  function onDragStart(event) {
  // event.target represents the dragged element
  event.dataTransfer.setData("drag", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  // event.target => on which we drop some element
  const sourceId = event.dataTransfer.getData("drag");
  const sourceElement = document.getElementById(sourceId);
  const destElement = event.target;

  const sourceNextElement = sourceElement.nextElementSibling;
  const destNextElement = destElement.nextElementSibling;

  // adding destElement in front of sourceNextElement
  container.insertBefore(destElement, sourceNextElement);

  // adding sourceElement in front of destNextElement
  container.insertBefore(sourceElement, destNextElement);
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("dragstart", onDragStart);
  images[i].addEventListener("dragover", onDragOver);
  images[i].addEventListener("drop", onDrop);
}

// To-Do List Functionality with Edit and Delete Icons
function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");

  // Create a span for task text
  let taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  // Create container for icons
  let iconsDiv = document.createElement("span");
  iconsDiv.className = "task-icons";

  // Edit icon
  let editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen-to-square edit-icon";
  editIcon.title = "Edit task";
  editIcon.style.cursor = "pointer";
  editIcon.onclick = () => editTask(taskSpan);

  // Delete icon
  let deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash delete-icon";
  deleteIcon.title = "Delete task";
  deleteIcon.style.cursor = "pointer";
  deleteIcon.onclick = () => li.remove();

  iconsDiv.appendChild(editIcon);
  iconsDiv.appendChild(deleteIcon);

  li.appendChild(iconsDiv);

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Edit task helper functions
function editTask(taskSpan) {
  const currentText = taskSpan.textContent;
  const input = document.createElement("input");
  input.type = "text";
  input.value = currentText;
  input.style.fontSize = "1rem";
  input.style.width = "70%";

  taskSpan.replaceWith(input);
  input.focus();

  input.onblur = () => finishEditing(input, taskSpan);
  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      input.blur();
    }
  };
}

function finishEditing(input, oldSpan) {
  const newValue = input.value.trim();
  if (newValue === "") {
    alert("Task cannot be empty.");
    input.focus();
    return;
  }
  oldSpan.textContent = newValue;
  input.replaceWith(oldSpan);
}

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you! Your message has been sent.";
  formMessage.style.color = "green";

  // Clear the form (optional)
  document.getElementById("contactForm").reset();
});

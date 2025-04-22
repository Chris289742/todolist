document.querySelector("#push").onclick = () => {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a task!");
  } else {
    document.querySelector("#tasks").innerHTML += `
        <div class='task'>
            <span id='taskname'>
                ${document.querySelector("#newtask input").value}
            </span>
            <button class="delete">
              <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
    `;
  }
  // register event Lister to every .delete elems and wait for clicking to remove .task elem
  document.querySelectorAll(".delete").forEach((btn) => {
    btn.onclick = () => btn.parentNode.remove();
  });

  // register event Lister to every .task elements
  document.querySelectorAll(".task").forEach((task) => {
    task.onclick = () => task.classList.toggle("completed"); // if exists, then remove. otherwise, add.
  });

  document.querySelector("#newtask input").value = ""; // after input, clear the input field.
};

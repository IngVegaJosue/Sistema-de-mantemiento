document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("maintenance-form");
  const maintenanceList = document.getElementById("maintenance-list");

  // Manejar envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;

    addMaintenance(type, description, date);
    form.reset();
  });

  // Función para agregar mantenimiento
  function addMaintenance(type, description, date) {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${type}</td>
      <td>${description}</td>
      <td>${date}</td>
      <td><button class="delete">Eliminar</button></td>
    `;

    // Agregar evento para eliminar tarea
    row.querySelector(".delete").addEventListener("click", () => {
      row.remove();
    });

    maintenanceList.appendChild(row);
  }
});

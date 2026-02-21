const fleet = [
  { unidad: "CAM-101", conductor: "Ana López", ruta: "Ruta Norte", estado: "ok", pos: [20, 28], updated: "08:14" },
  { unidad: "CAM-203", conductor: "Luis Díaz", ruta: "Ruta Centro", estado: "warn", pos: [42, 64], updated: "08:15" },
  { unidad: "CAM-309", conductor: "María Ríos", ruta: "Ruta Sur", estado: "alert", pos: [74, 38], updated: "08:16" },
  { unidad: "CAM-404", conductor: "Carlos Mena", ruta: "Ruta Industrial", estado: "ok", pos: [60, 20], updated: "08:15" },
];

const alerts = [
  "CAM-309 fuera de ruta (>150m) por 6 minutos en Zona Sur.",
  "CAM-203 parada no planificada detectada en Ruta Centro.",
];

const kpis = [
  { label: "Unidades activas", value: "4" },
  { label: "Cumplimiento de ruta", value: "91%" },
  { label: "Desvíos detectados", value: "2" },
  { label: "Tiempo promedio/ruta", value: "47 min" },
];

function estadoTexto(status) {
  if (status === "ok") return "En ruta";
  if (status === "warn") return "Detenido";
  return "Desviado";
}

function renderMap() {
  const map = document.getElementById("map-grid");
  fleet.forEach((truck) => {
    const dot = document.createElement("div");
    dot.className = `truck-dot ${truck.estado}`;
    dot.style.left = `${truck.pos[0]}%`;
    dot.style.top = `${truck.pos[1]}%`;
    dot.title = `${truck.unidad} · ${estadoTexto(truck.estado)}`;
    map.appendChild(dot);
  });
}

function renderAlerts() {
  const list = document.getElementById("alerts-list");
  alerts.forEach((message) => {
    const li = document.createElement("li");
    li.className = "alert-item";
    li.textContent = message;
    list.appendChild(li);
  });
}

function renderKpis() {
  const grid = document.getElementById("kpi-grid");
  kpis.forEach((item) => {
    const card = document.createElement("article");
    card.className = "kpi";
    card.innerHTML = `<h3>${item.label}</h3><div class="value">${item.value}</div>`;
    grid.appendChild(card);
  });
}

function renderFleetTable() {
  const tbody = document.getElementById("fleet-body");
  fleet.forEach((truck) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${truck.unidad}</td>
      <td>${truck.conductor}</td>
      <td>${truck.ruta}</td>
      <td><span class="badge ${truck.estado}">${estadoTexto(truck.estado)}</span></td>
      <td>${truck.updated}</td>
    `;
    tbody.appendChild(row);
  });
}

renderMap();
renderAlerts();
renderKpis();
renderFleetTable();

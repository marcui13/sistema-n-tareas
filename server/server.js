const express = require('express');
const app = express();
const puerto = 3000;

app.use(express.json());

// Lista de tareas (simulación de una base de datos en memoria)
let tareas = [
  { id: 1, nombre: 'Hacer la compra', completada: false },
  { id: 2, nombre: 'Estudiar para el examen', completada: true },
  { id: 3, nombre: 'Lavar el coche', completada: false }
];

// Obtener todas las tareas
app.get('/tareas', (req, res) => {
  res.json(tareas);
});

// Obtener una tarea por ID
app.get('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tarea = tareas.find((t) => t.id === tareaId);

  if (!tarea) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  res.json(tarea);
});

// Agregar una nueva tarea
app.post('/tareas', (req, res) => {
  const nuevaTarea = req.body;
  nuevaTarea.id = tareas.length + 1;
  tareas.push(nuevaTarea);
  res.status(201).json({ mensaje: 'Tarea creada con éxito', tarea: nuevaTarea });
});

// Actualizar una tarea por ID
app.put('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex((t) => t.id === tareaId);

  if (tareaIndex === -1) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  const nuevaTarea = req.body;
  tareas[tareaIndex] = { ...tareas[tareaIndex], ...nuevaTarea };
  res.json({ mensaje: 'Tarea actualizada con éxito', tarea: tareas[tareaIndex] });
});

// Eliminar una tarea por ID
app.delete('/tareas/:id', (req, res) => {
  const tareaId = parseInt(req.params.id);
  const tareaIndex = tareas.findIndex((t) => t.id === tareaId);

  if (tareaIndex === -1) {
    return res.status(404).json({ mensaje: 'Tarea no encontrada' });
  }

  tareas.splice(tareaIndex, 1);
  res.json({ mensaje: 'Tarea eliminada con éxito' });
});

app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en http://localhost:${puerto}`);
});

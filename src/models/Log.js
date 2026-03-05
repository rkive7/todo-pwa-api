import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Asumiendo que tu modelo de usuarios se llama "User"
    required: true,
  },
  action: {
    type: String,
    required: true,
    enum: ["CREADA", "EDITADA", "COMPLETADA", "ELIMINADA", "SINCRONIZADA"], // Los eventos que pidió tu profe
  },
  taskTitle: {
    type: String,
    required: true, // Guardamos el nombre de la tarea para saber a qué le movieron
  },
  details: {
    type: String, // Opcional: para guardar cosas como "Cambió de Pendiente a Completada"
  }
}, {
  timestamps: true // Esto automáticamente crea los campos createdAt y updatedAt
});

export default mongoose.model("Activity", activitySchema);
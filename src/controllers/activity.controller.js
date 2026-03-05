// controllers/activity.controller.js
import Activity from "../models/Log.js"; 

export async function getHistory(req, res) {
  try {
    // Buscamos los logs del usuario logueado y los ordenamos por fecha (el -1 es para que el más reciente salga primero)
    const logs = await Activity.find({ user: req.userId }).sort({ createdAt: -1 });
    
    res.json({ logs });
  } catch (error) {
    console.error("Error al obtener el historial:", error);
    res.status(500).json({ message: "Error al obtener el historial de actividad" });
  }
}
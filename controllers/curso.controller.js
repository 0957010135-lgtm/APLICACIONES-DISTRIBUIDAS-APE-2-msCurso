const db = require('../db');
const axios = require('axios');

exports.createCurso = async (req, res) => {
  const { nombre, teacher_id, fecha } = req.body;

  try {
    // Validar instructor
    await axios.get(
      `${process.env.TEACHER_SERVICE_URL}/teachers/${teacher_id}`
    );

    // Crear curso
    await db.query(
      'INSERT INTO cursos (nombre, teacher_id, fecha) VALUES (?, ?, ?)',
      [nombre, teacher_id, fecha]
    );

    res.status(201).json({
      mensaje: 'Curso creado correctamente'
    });
  } catch (error) {
    res.status(400).json({
      error: 'No se pudo crear el curso. Instructor inválido'
    });
  }
};

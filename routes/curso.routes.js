const express = require('express');
const router = express.Router();
const controller = require('../controllers/curso.controller');

router.post('/cursos', controller.createCurso);

module.exports = router;

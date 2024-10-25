const express = require('express');
const router = express.Router();
const  userController = require('../Controllers/userController');
const verifyToken = require('../middleware/authMiddleware')


router.get('/master',verifyToken(),userController.getmaster);

router.get('/principal',verifyToken(['master']),userController.getPrincipal);
router.post('/principal',verifyToken(['master']),userController.postPrincipal);
router.get('/principal/:id',verifyToken(['master','principal']),userController.getPrincipalById);
router.put('/principal/:id',verifyToken(['master']),userController.updatePrincipal);
router.delete('/principal/:id',verifyToken(['master']),userController.deletePrincipal);

router.get('/faculty',verifyToken(['master','principal']),userController.getFaculties);
router.post('/faculty',verifyToken(['master','principal']),userController.postFaculty);
router.get('/faculty/:id',verifyToken(['master','principal','faculty']),userController.getFacultyById);
router.put('/faculty/:id',verifyToken(['master','principal']),userController.updateFaculty);
router.delete('/faculty/:id',verifyToken(['master','principal']),userController.deleteFaculty);

router.get('/student',verifyToken(['master','principal','faculty']),userController.getStudents);
router.post('/student',verifyToken(['master','principal','faculty']),userController.postStudent);
router.get('/student/:id',verifyToken(['master','principal','faculty','student']),userController.getStudentById);
router.put('/student/:id',verifyToken(['master','principal','faculty']),userController.updateStudent);
router.delete('/student/:id',verifyToken(['master','principal','faculty']),userController.deleteStudent);


module.exports = router;

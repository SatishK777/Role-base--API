const User = require('../Model/userModel');
const Principal = require('../Model/principalModel');
const Faculty = require('../Model/facultyModel');
const Student = require('../Model/studentModel');

// masterController
exports.getmaster=(req,res)=>{
      res.json("welcome master");
}


// principaController
exports.getPrincipal=async(req,res)=>{

      try {
            const principals = await Principal.find();
            res.status(200).json(principals);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching principals', error });
        }
}

exports.postPrincipal=async(req,res)=>{
      try {
            const { fname, lname, email, mobile } = req.body;
    
            const newPrincipal = new Principal({ fname, lname, email, mobile });
            const savedPrincipal = await newPrincipal.save();
    
            res.status(201).json(savedPrincipal);
        } catch (error) {
            res.status(500).json({ message: 'Error creating principal', error });
        }
};

exports.getPrincipalById = async (req, res) => {
      try {
          const principal = await Principal.findById(req.params.id);
          if (!principal) {
              return res.status(404).json({ message: 'Principal not found' });
          }
          res.status(200).json(principal);
      } catch (error) {
          res.status(500).json({ message: 'Error fetching principal', error });
      }
  };
  
  
  exports.updatePrincipal = async (req, res) => {
      try {
          const { fname, lname, email, mobile } = req.body;
          const updatedPrincipal = await Principal.findByIdAndUpdate(
              req.params.id,
              { fname, lname, email, mobile },
              { new: true } // Return the updated document
          );
          if (!updatedPrincipal) {
              return res.status(404).json({ message: 'Principal not found' });
          }
          res.status(200).json(updatedPrincipal);
      } catch (error) {
          res.status(500).json({ message: 'Error updating principal', error });
      }
  };
  
  
  exports.deletePrincipal = async (req, res) => {
      try {
          const deletedPrincipal = await Principal.findByIdAndDelete(req.params.id);
          if (!deletedPrincipal) {
              return res.status(404).json({ message: 'Principal not found' });
          }
          res.status(200).json({ message: 'Principal deleted successfully' });
      } catch (error) {
          res.status(500).json({ message: 'Error deleting principal', error });
      }
  };


//   facultyController

exports.postFaculty = async (req, res) => {
      try {
          const { fname, lname, email, mobile } = req.body;
  
          const newFaculty = new Faculty({ fname, lname, email, mobile });
          const savedFaculty = await newFaculty.save();
  
          res.status(201).json(savedFaculty);
      } catch (error) {
          res.status(500).json({ message: 'Error creating faculty', error });
      }
  };
  
exports.getFaculties = async (req, res) => {
      try {
          const faculties = await Faculty.find();
          res.status(200).json(faculties);
      } catch (error) {
          res.status(500).json({ message: 'Error fetching faculties', error });
      }
  };
  exports.getFacultyById = async (req, res) => {
      try {
          const faculty = await Faculty.findById(req.params.id);
          if (!faculty) {
              return res.status(404).json({ message: 'Faculty not found' });
          }
          res.status(200).json(faculty);
      } catch (error) {
          res.status(500).json({ message: 'Error fetching faculty', error });
      }
  };
  
exports.updateFaculty = async (req, res) => {
      try {
          const { fname, lname, email, mobile } = req.body;
          const updatedFaculty = await Faculty.findByIdAndUpdate(
              req.params.id,
              { fname, lname, email, mobile },
              { new: true }
          );
          if (!updatedFaculty) {
              return res.status(404).json({ message: 'Faculty not found' });
          }
          res.status(200).json(updatedFaculty);
      } catch (error) {
          res.status(500).json({ message: 'Error updating faculty', error });
      }
  };
  

exports.deleteFaculty = async (req, res) => {
      try {
          const deletedFaculty = await Faculty.findByIdAndDelete(req.params.id);
          if (!deletedFaculty) {
              return res.status(404).json({ message: 'Faculty not found' });
          }
          res.status(200).json({ message: 'Faculty deleted successfully' });
      } catch (error) {
          res.status(500).json({ message: 'Error deleting faculty', error });
      }
  };



// studentController

exports.postStudent = async (req, res) => {
      try {
          const { fname, lname, roll_no, email, mobile } = req.body;
          
          const newStudent = new Student({ fname, lname, roll_no, email, mobile });
  
          const savedStudent = await newStudent.save();
  
          res.status(201).json(savedStudent);
      } catch (error) {
          res.status(500).json({ message: 'Error creating student', error });
      }
  };
  
  
exports.getStudents = async (req, res) => {
      try {
          const students = await Student.find();
          res.status(200).json(students);
      } catch (error) {
          res.status(500).json({ message: 'Error fetching students', error });
      }
  };
  
  
exports.getStudentById = async (req, res) => {
      try {
          const student = await Student.findById(req.params.id);
          if (!student) {
              return res.status(404).json({ message: 'Student not found' });
          }
          res.status(200).json(student);
      } catch (error) {
          res.status(500).json({ message: 'Error fetching student', error });
      }
  };
  

exports.updateStudent = async (req, res) => {
      try {
          const { fname, lname, roll_no, email, mobile } = req.body;
  
          
          const updatedStudent = await Student.findByIdAndUpdate(
              req.params.id,
              { fname, lname, roll_no, email, mobile },
              { new: true } 
          );
  
          if (!updatedStudent) {
              return res.status(404).json({ message: 'Student not found' });
          }
  
          res.status(200).json(updatedStudent);
      } catch (error) {
          res.status(500).json({ message: 'Error updating student', error });
      }
  };
  

  exports.deleteStudent = async (req, res) => {
      try {
          const deletedStudent = await Student.findByIdAndDelete(req.params.id);
          if (!deletedStudent) {
              return res.status(404).json({ message: 'Student not found' });
          }
          res.status(200).json({ message: 'Student deleted successfully' });
      } catch (error) {
          res.status(500).json({ message: 'Error deleting student', error });
      }
  };
const router = require('express').Router();
const { Campus, Student } = require('../../db/models');

//Get all students 
router.get('/', (req, res, next) => {
    Student.findAll({ include: [{ all: true }] })
    .then(students => res.json(students))
    .catch(next);
})

// Get a student by ID
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    Student.findById(id)
    .then(student => res.json(student))
    .catch(next);
})

//Post new student
router.post('/', (req, res, next) => {
    Student.create(req.body)
    .then(student => res.json(student))
    .catch(next)
})

//Put updated student info for one student
router.put('/', (req,res,next) => {

})

//Delete a student
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;

    Student.destroy({ where: { id } })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = router 
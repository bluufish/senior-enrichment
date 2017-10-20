const router = require('express').Router();
const { Campus, Student } = require('../../db/models');

//Get all students 
router.get('/', (req, res, next) => {
    Student.findAll()
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
router.post('/add', (req, res, next) => {
    Student.create(req.body)
    .then(newStudent => Student.findById(newStudent.id))
    .then(foundStudent => res.json(foundStudent))
    .catch(next)
})

//Put updated student info for one student
router.put('/:id', (req, res, next) => {
    Student.update(req.body, {where: {id: req.params.id}})
    .then( _ => Student.findOne({ where: { id: req.params.id }})
    .then(foundStudent => res.json(foundStudent))
    .catch(next)
)})

//Delete a student
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;

    Student.destroy({ where: { id } })
        .then(() => res.status(204).end())
        .catch(next);
});

module.exports = router 
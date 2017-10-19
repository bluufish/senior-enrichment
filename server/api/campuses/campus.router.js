const router = require('express').Router();
const { Campus, Student } = require('../../db/models')

//Get all campus
router.get('/', (req, res, next) => {
    Campus.findAll()
        .then(campuses => res.json(campuses))
        .catch(next)
})

//Get a campus by ID
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    Campus.findById({ id })
        .then(campus => res.json(campus))
        .catch(next)
})

//Post new campus
router.post('/add', (req, res, next) => {
    Campus.create(req.body)
        .then(campus => res.json(campus))
        .catch(next)
})

//Put updated campus info for one campus
router.put('/', (req, res, next) => {

})

//Delete a campus
router.delete('/:id', function (req, res, next) {
    const id = req.params.id;

    Campus.destroy({ where: { id } })
        .then(() => res.status(204).end())
        .catch(next);
});

module.exports = router





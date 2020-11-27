const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Busan HighSchool e-haksa'
    })
})

module.exports = router

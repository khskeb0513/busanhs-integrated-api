const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'BusanHighSchool e-haksa'
    })
})

module.exports = router

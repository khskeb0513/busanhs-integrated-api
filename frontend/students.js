const express = require('express')
const router = express.Router()
const InternalService = require('../services/InternalService')

router.get('/by-name', async (req, res, next) => {
    const query = {name: req.query['name']}
    if (query.name) {
        res.render('students/by-name/searchResult', {
            title: 'by-name student result page',
            result: await InternalService.Search(query.name)
        })
    } else {
        await res.render('students/by-name/searchPage', {
            title: 'by-name student search page'
        })
    }
})

router.get('/by-class', async (req, res) => {
    const query = {
        class: req.query['grade'],
        ban: req.query['class'],
        state: 'y'
    }
    if (query.class && query.ban) {
        res.render('students/by-class/selectResult', {
            result: await InternalService.List(query),
            title: 'by-class student result page'
        })
    } else {
        await res.render('students/by-class/selectPage', {
            title: 'by-class student select page'
        })
    }
})

module.exports = router

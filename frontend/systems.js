const express = require('express')
const router = express.Router()
const InternalService = require('../services/InternalService')

router.get('/schooltime', (req, res, next) => {
    InternalService.SchoolTime((e, result) => {
        e ? next(e) : res.render('systems/schooltime', {
            result, title: 'SchoolTime'
        })
    })
})

module.exports = router

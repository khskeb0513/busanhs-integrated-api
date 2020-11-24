const express = require('express')
const router = express.Router()
const InternalService = require('../../services/InternalService')
const CheckStudentIdentification = require('../middlewares/CheckStudentIdentification')

router.get('/schooltime', (req, res) => {
    InternalService.SchoolTime((e, r) => {
        if (e) {
            console.error(e)
        } else {
            res.json(r)
        }
    })
})

router.post(
    '/personalData',
    (req, res, next) => {
        const where = {
            st_id: req.body['StudentNo'],
            name: req.body['Name'],
            class: req.body['Grade'],
            ban: req.body['Ban'],
            num: req.body['Num']
        }
        CheckStudentIdentification.Where(where, (e) => {
            if (e) {
                res.json({
                    Merit: "학생정보를 찾을 수 없습니다."
                })
            } else {
                next()
            }
        })
    },
    (req, res) => {
        const where = {
            st_id: req.body['StudentNo']
        }
        InternalService.PersonalData(where, (e, r) => {
            if (e) {
                console.error(e)
            } else {
                res.json({
                    Merit: r
                })
            }
        })
    }
)

module.exports = router

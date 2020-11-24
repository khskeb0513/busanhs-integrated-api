const {student} = require('../../models')

module.exports = {
    Where: (where, callback) => {
        student.findOne({where}).then(r => {
            r ? callback(null) : callback({MERIT: '학생정보가 없습니다.'})
        }).catch(e => {
            callback(e)
        })
    }
}

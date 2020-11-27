const {schooltime, merit, teacher, student} = require('../models/index')
const moment = require('moment')

const string6ToTime = (string6) => {
    return `${string6[0]}${string6[1]}:${string6[2]}${string6[3]}:${string6[4]}${string6[5]}`
}

const parseIntToString = (int) => {
    return int < 0 ? int : `+${int}`
}

module.exports = {
    SchoolTime: (callback) => {
        schooltime.findAll({
            where: {
                DayGubun: moment().day() + 1
            }
        }).then(r => {
            r[0]['FirstINTime'] = string6ToTime(r[0]['FirstINTime'])
            r[0]['SecondINTime'] = string6ToTime(r[0]['SecondINTime'])
            r[0]['OutTime'] = string6ToTime(r[0]['OutTime'])
            callback(null, r[0])
        }).catch(e => {
            callback(e)
        })
    }, PersonalData: async (where, callback) => {
        const teachers = await teacher.findAll()
        const teacher_with_no = {}
        await teachers.forEach(data => {
            teacher_with_no[data['key_num']] = data['t_name']
        })
        await merit.findAll({where}).then(async r => {
            const string_array = await r.map(data => {
                return `${moment(data['m_date']).format('YYYY-MM-DD')} ${string6ToTime(data['m_time'])} ${teacher_with_no[data['t_id']] ? teacher_with_no[data['t_id']] + ' 선생님' : '자동화기기'}\n` +
                    `${parseIntToString(data['merit_point'])}, ${data['merit_text']}`
            }).join('\n\n')
            callback(null, string_array)
        }).catch(e => {
            callback(e)
        })
    }, Search: async (name) => {
        return await student.findAll({
            where: {
                name
            }
        })
    }, List: async (where) => {
        return await student.findAll({
            where, order: [
                ['num', 'asc']
            ]
        })
    }
}

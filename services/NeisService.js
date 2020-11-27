const got = require('got')
const moment = require('moment')

const nullObj = {
    ATPT_OFCDC_SC_CODE: "",
    ATPT_OFCDC_SC_NM: "",
    SD_SCHUL_CODE: "",
    SCHUL_NM: "",
    MMEAL_SC_CODE: "",
    MMEAL_SC_NM: "",
    MLSV_YMD: "",
    MLSV_FGR: "",
    DDISH_NM: "",
    ORPLC_INFO: "",
    CAL_INFO: "",
    NTR_INFO: "",
    MLSV_FROM_YMD: "",
    MLSV_TO_YMD: ""
}

let fullNullObj = {
    today1: nullObj,
    today2: nullObj,
    today3: nullObj,
    tomorrow1: nullObj,
    tomorrow2: nullObj,
    tomorrow3: nullObj
}

module.exports = {
    Gongsi: async () => {
        const response = await got.get('https://open.neis.go.kr/hub/schoolInfo', {
            searchParams: {
                KEY: 'b89cb58a6f0c431faa0686db9e63adcc',
                Type: 'json',
                SCHUL_NM: '부산고등학교',
                pIndex: 1,
                pSize: 1
            }
        })
        return JSON.parse(response.body)['schoolInfo'][1]['row'][0]
    }, Meal: async () => {
        const todayDate = moment().format('YYYYMMDD')
        const tomorrowDate = moment().add(1, 'days').format('YYYYMMDD')
        const params = (date, code) => {
            return {
                searchParams: {
                    KEY: 'b89cb58a6f0c431faa0686db9e63adcc',
                    Type: 'json',
                    pIndex: 1,
                    pSize: 1,
                    ATPT_OFCDC_SC_CODE: 'C10',
                    SD_SCHUL_CODE: 7150100,
                    MLSV_YMD: date,
                    MMEAL_SC_CODE: code
                }
            }
        }
        const getMeal = async (options) => {
            const body = JSON.parse((await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', options)).body)
            const result = body['RESULT']
            return result ? nullObj : body['mealServiceDietInfo'][1]['row'][0]
        }
        return {
            today1: await getMeal(params(todayDate, 1)),
            today2: await getMeal(params(todayDate, 2)),
            today3: await getMeal(params(todayDate, 3)),
            tomorrow1: await getMeal(params(tomorrowDate, 1)),
            tomorrow2: await getMeal(params(tomorrowDate, 2)),
            tomorrow3: await getMeal(params(tomorrowDate, 3))
        }
    }, Meal2: async () => {
        const todayDate = moment().format('YYYYMMDD')
        const tomorrowDate = moment().add(1, 'days').format('YYYYMMDD')
        const params = {
            searchParams: {
                KEY: 'b89cb58a6f0c431faa0686db9e63adcc',
                Type: 'json',
                pIndex: 1,
                pSize: 1,
                ATPT_OFCDC_SC_CODE: 'C10',
                SD_SCHUL_CODE: 7150100,
                MLSV_FROM_YMD: todayDate,
                MLSV_TO_YMD: tomorrowDate
            }
        }
        const body = JSON.parse((await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', params)).body)
        if (body['RESULT']) {
            return fullNullObj
        } else {
            const rows = body['mealServiceDietInfo'][1]['row']
            return {
                today1: await rows.filter(data => {
                    return data['MLSV_YMD'] === todayDate && data['MMEAL_SC_CODE'] === '1'
                })[0] || nullObj,
                today2: await rows.filter(data => {
                    return data['MLSV_YMD'] === todayDate && data['MMEAL_SC_CODE'] === '2'
                })[0] || nullObj,
                today3: await rows.filter(data => {
                    return data['MLSV_YMD'] === todayDate && data['MMEAL_SC_CODE'] === '3'
                })[0] || nullObj,
                tomorrow1: await rows.filter(data => {
                    return data['MLSV_YMD'] === tomorrowDate && data['MMEAL_SC_CODE'] === '1'
                })[0] || nullObj,
                tomorrow2: await rows.filter(data => {
                    return data['MLSV_YMD'] === tomorrowDate && data['MMEAL_SC_CODE'] === '2'
                })[0] || nullObj,
                tomorrow3: await rows.filter(data => {
                    return data['MLSV_YMD'] === tomorrowDate && data['MMEAL_SC_CODE'] === '3'
                })[0] || nullObj
            }
        }
    }
}

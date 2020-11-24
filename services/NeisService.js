const got = require('got')
const moment = require('moment')

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
    },
    Meal: async () => {
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
        const today1 = await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', params(todayDate, 1))
        const today2 = await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', params(todayDate, 2))
        const today3 = await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', params(todayDate, 3))
        const tomorrow1 = await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', params(tomorrowDate, 1))
        const tomorrow2 = await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', params(tomorrowDate, 2))
        const tomorrow3 = await got.get('https://open.neis.go.kr/hub/mealServiceDietInfo', params(tomorrowDate, 3))
        return {
            today1: JSON.parse(today1.body)['RESULT'] ? nullObj : JSON.parse(today1.body)['mealServiceDietInfo'][1]['row'][0],
            today2: JSON.parse(today2.body)['RESULT'] ? nullObj : JSON.parse(today2.body)['mealServiceDietInfo'][1]['row'][0],
            today3: JSON.parse(today3.body)['RESULT'] ? nullObj : JSON.parse(today3.body)['mealServiceDietInfo'][1]['row'][0],
            tomorrow1: JSON.parse(tomorrow1.body)['RESULT'] ? nullObj : JSON.parse(tomorrow1.body)['mealServiceDietInfo'][1]['row'][0],
            tomorrow2: JSON.parse(tomorrow2.body)['RESULT'] ? nullObj : JSON.parse(tomorrow2.body)['mealServiceDietInfo'][1]['row'][0],
            tomorrow3: JSON.parse(tomorrow3.body)['RESULT'] ? nullObj : JSON.parse(tomorrow3.body)['mealServiceDietInfo'][1]['row'][0]
        }
    }
}

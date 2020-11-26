const express = require('express');
const router = express.Router();
const NeisService = require('../../services/NeisService')

router.get('/about', async (req, res) => {
    const body = await NeisService.Gongsi()
    await res.json(body || {
        "ATPT_OFCDC_SC_CODE": "",
        "ATPT_OFCDC_SC_NM": "",
        "SD_SCHUL_CODE": "",
        "SCHUL_NM": "",
        "ENG_SCHUL_NM": "",
        "SCHUL_KND_SC_NM": "",
        "LCTN_SC_NM": "",
        "JU_ORG_NM": "",
        "FOND_SC_NM": "",
        "ORG_RDNZC": " ",
        "ORG_RDNMA": "",
        "ORG_RDNDA": "",
        "ORG_TELNO": "",
        "HMPG_ADRES": "",
        "COEDU_SC_NM": "",
        "ORG_FAXNO": "",
        "HS_SC_NM": "",
        "INDST_SPECL_CCCCL_EXST_YN": "",
        "HS_GNRL_BUSNS_SC_NM": "",
        "SPCLY_PURPS_HS_ORD_NM": "",
        "ENE_BFE_SEHF_SC_NM": "",
        "DGHT_SC_NM": "",
        "FOND_YMD": "",
        "FOAS_MEMRD": "",
        "LOAD_DTM": ""
    })
});

router.get('/meal', async (req, res) => {
    const body = await NeisService.Meal2()
    await res.json(body)
})

module.exports = router;

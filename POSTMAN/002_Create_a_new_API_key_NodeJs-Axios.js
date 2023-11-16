var axios = require('axios');
var data = JSON.stringify({"label":"string","permissions":["btcpay.store.canmodifystoresettings"]});

var config = {
  method: 'post',
  url: 'https://btcpay.bitcoin-tx.com/api/v1/api-keys',
  headers: { 
    'Authorization': 'Basic eWFubmNhcmxpZXJAZ21haWwuY29tOmVSQ3NMVUxaeHFvQXIhMTI=', 
    'Content-Type': 'application/json', 
    'Cookie': '.AspNetCore.Identity.Application=CfDJ8DNip_UNeZxGocV1cMO06wAaoTMEDaYs5T101tB89F4oCB-B2UwD2ODhli1Q1Pr3ZWjFo7PoKuWk0ap_QVkPTHifDZAKMdgClTmCDfCbGv9lSYKjmaYHGNRgNHk8Ym_4aoa5h3eLOlkb0-uODxjOqFW_V6Ie7FFOyEJ0WdqVPHGQuzNusHP_k8gevqW6em5676C-2CJOYvH9LH9cnwWi7c7MDFVdoIyjh7S8qMiJ467LbcRwjTT5RRKNbjhwcWnl56yO4yHEHYe2YdqNDohlS_3L55TyBHkOPdH7tspT8jd5kkEQ9Dcf-qDSuxIn52PMRoHHJczXB9aQVp2bMcmNkcQeH0C1dt4DIYE1_iyJgwT8ja5PCwMK8SfvFnS_906gUWbP987r4t1t_uzjgFvMkRDtzTN__5q1Lb9QbxAJBjr3Peb_rB93i44rto0F1gwVLb4Mbuq1MTW8RZsrMEAtbaTk0UEpIHpprkmQ4TdhIrAAd7eYhDy8te3YDu90Ex_gFhWLOtSvTGPeyg8E_TCALaK76skw5Ugxe3iWTKDEF1IPsIaJ27p-i9qXAEAIXfOjjEOj6tkhQ9DUuLmB5FTqrf8IG0Oo1Z0gGe0d3PImwUZNRH1lJVC2zDx1GVD3ADVclhKYawVZ01WcqNE3VlAs2z2-CpWNyKqgKhSMabQIQm2EM2GmRETFV0-_Kt8QrquAuTl2Q3p2CW6FeVRlCVKJD5oj9ANiZSV0ybjc7th96zYrizVg-DelJElyUYftrzeaiaSCV36QodtM4RjGq8JLi_8'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

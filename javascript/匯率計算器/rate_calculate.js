// 資料可從網路(呼叫API1000次/月)也可從本機讀取，只缺存取資料庫的銜接
$.ajax({
        dataType: 'json',
        url: 'http://openexchangerates.org/api/latest.json',
        data: {'app_id': '3b41851f00ed40c09b222abe22316faf'},
        success: function(data){
            rate = data.rates;
  console.log(rate);
        }
    });

 // var rate = {AED: 3.673367,
 //                AFN: 57.71765,
 //                ALL: 129.6751,
 //                AMD: 480.650002,
 //                ANG: 1.78952,
 //                AOA: 106.588126,
 //                ARS: 8.760494,
 //                AUD: 1.309799,
 //                AWG: 1.7925,
 //                AZN: 1.0494,
 //                BAM: 1.808915,
 //                BBD: 2,
 //                BDT: 78.05353,
 //                BGN: 1.813696,
 //                BHD: 0.377074,
 //                BIF: 1575.175033,
 //                BMD: 1,
 //                BND: 1.384653,
 //                BOB: 6.923897,
 //                BRL: 3.127874,
 //                BSD: 1,
 //                BTC: 0.003433658,
 //                BTN: 62.677225,
 //                BWP: 9.953535,
 //                BYR: 14996.633333,
 //                BZD: 2.003317,
 //                CAD: 1.263705,
 //                CDF: 928.34,
 //                CHF: 0.991783,
 //                CLF: 0.0249,
 //                CLP: 628.038699,
 //                CNY: 6.24174,
 //                COP: 2592.411663,
 //                CRC: 536.437805,
 //                CUC: 1,
 //                CUP: 1.002225,
 //                CVE: 101.889501,
 //                CZK: 25.27591,
 //                DJF: 177.7694,
 //                DKK: 6.909837,
 //                DOP: 44.86861,
 //                DZD: 96.32655,
 //                EEK: 14.46725,
 //                EGP: 7.629165,
 //                ERN: 15.155825,
 //                ETB: 20.42551,
 //                EUR: 0.928822,
 //                FJD: 2.059217,
 //                FKP: 0.664211,
 //                GBP: 0.664211,
 //                GEL: 1.7655,
 //                GGP: 0.664211,
 //                GHS: 3.567256,
 //                GIP: 0.664211,
 //                GMD: 42.96245,
 //                GNF: 7281.205,
 //                GTQ: 7.638925,
 //                GYD: 207.194002,
 //                HKD: 7.758932,
 //                HNL: 21.20599,
 //                HRK: 7.063988,
 //                HTG: 46.80722,
 //                HUF: 283.161202,
 //                IDR: 13093.95,
 //                ILS: 4.017363,
 //                IMP: 0.664211,
 //                INR: 62.72058,
 //                IQD: 1182.578301,
 //                IRR: 27809.666667,
 //                ISK: 137.293001,
 //                JEP: 0.664211,
 //                JMD: 115.606999,
 //                JOD: 0.708756,
 //                JPY: 121.668101,
 //                KES: 91.41877,
 //                KGS: 61.448275,
 //                KHR: 4086.777335,
 //                KMF: 454.947436,
 //                KPW: 900,
 //                KRW: 1119.898348,
 //                KWD: 0.298669,
 //                KYD: 0.830125,
 //                KZT: 185.951099,
 //                LAK: 8138.955065,
 //                LBP: 1509.865,
 //                LKR: 133.499401,
 //                LRD: 84.6767,
 //                LSL: 12.1498,
 //                LTL: 2.933667,
 //                LVL: 0.650071,
 //                LYD: 1.369796,
 //                MAD: 9.927421,
 //                MDL: 18.38455,
 //                MGA: 2958.07835,
 //                MKD: 56.97473,
 //                MMK: 1039.735,
 //                MNT: 1984.5,
 //                MOP: 8.021818,
 //                MRO: 291.544996,
 //                MTL: 0.683602,
 //                MUR: 35.20597,
 //                MVR: 15.26765,
 //                MWK: 438.546997,
 //                MXN: 15.52646,
 //                MYR: 3.697865,
 //                MZN: 33.938275,
 //                NAD: 12.1498,
 //                NGN: 199.660399,
 //                NIO: 26.73212,
 //                NOK: 7.991146,
 //                NPR: 100.501761,
 //                NZD: 1.373519,
 //                OMR: 0.385022,
 //                PAB: 1,
 //                PEN: 3.102783,
 //                PGK: 2.652274,
 //                PHP: 44.28542,
 //                PKR: 102.2586,
 //                PLN: 3.820373,
 //                PYG: 4696.178281,
 //                QAR: 3.641133,
 //                RON: 4.118334,
 //                RSD: 112.0474,
 //                RUB: 60.49645,
 //                RWF: 695.1186,
 //                SAR: 3.750327,
 //                SBD: 7.752155,
 //                SCR: 13.69945,
 //                SDG: 5.996778,
 //                SEK: 8.513691,
 //                SGD: 1.385611,
 //                SHP: 0.664211,
 //                SLL: 4388.833333,
 //                SOS: 704.555002,
 //                SRD: 3.2825,
 //                STD: 22548.1414,
 //                SVC: 8.786397,
 //                SYP: 188.914501,
 //                SZL: 12.15148,
 //                THB: 32.67898,
 //                TJS: 5.462375,
 //                TMT: 3.5,
 //                TND: 1.98543,
 //                TOP: 2.014868,
 //                TRY: 2.616054,
 //                TTD: 6.357038,
 //                TWD: 31.58915,
 //                TZS: 1834.339992,
 //                UAH: 22.91073,
 //                UGX: 2988.681667,
 //                USD: 1,
 //                UYU: 24.8487,
 //                UZS: 2468.393363,
 //                VEF: 6.321399,
 //                VND: 21375.233333,
 //                VUV: 106.765,
 //                WST: 2.505685,
 //                XAF: 606.414445,
 //                XAG: 0.06363494,
 //                XAU: 0.00086378,
 //                XCD: 2.70154,
 //                XDR: 0.721808,
 //                XOF: 606.412445,
 //                XPF: 110.22523,
 //                YER: 215.0618,
 //                ZAR: 12.17752,
 //                ZMK: 5253.075255,
 //                ZMW: 7.105534,
 //                ZWL: 322.355006};
  //console.log(rate);

function Cvalue(FromRate, ToRate)
    {
        //Get Currencies
        var FromCurrency = document.calcForm.from.options[document.calcForm.from.selectedIndex].value;
        var ToCurrency = document.calcForm.from.options[document.calcForm.to.selectedIndex].value;

        //Parse Currency Amount
        var FromValue = document.calcForm.inV.value;

        if (IsNumeric(FromValue) == false) {
            alert("Amount to multiply is not a number\n\nYou can only use\n\n1234567890 and . (dot)");
        }

        //Convert the Value
        var ToValue = FromValue * ( ToRate / FromRate );

        //Display Code
        //This logic also seems unnecessary, but I didn't want to break any special cases that may be depending on it
        //Legacy Comment: 6 Relevant Digits Only, or Integer
        if ((ToValue == parseInt(ToValue)) || (ToValue > 99999))
        {
            //Legacy Comment: Mostly Integer
            ToValue = parseInt(ToValue);
        }
        else
        {
            if (ToValue > 1)
            {
                ToValue = ToValue.toString();
                ToValue = ToValue.substring(0,7);
            }
            else
            {
                ToValue = ToValue.toString();
                ToValue = ToValue.substring(0,8);
            }
        }
        document.calcForm.outV.value = "   " + comma(ToValue) + " " + ToCurrency;
    }

    function comma(num)
    {
        var n = Math.floor(num);
        var myNum = num + "";
        var myDec = "";

        if (myNum.indexOf('.',0) > -1){
            myDec = myNum.substring(myNum.indexOf('.',0),myNum.length);
        }
        var arr=new Array('0'), i=0;
        while (n>0)
        {arr[i]=''+n%1000; n=Math.floor(n/1000); i++;}
        arr=arr.reverse();
        for (var i in arr) if (i>0) //padding zeros
            while (arr[i].length<3) arr[i]='0'+arr[i];
        return arr.join() + myDec;
    }

    function IsNumeric(strString)
    {
        var strValidChars = "0123456789.";
        var strChar;
        var blnResult = true;

        for (i = 0; i < strString.length && blnResult == true; i++)
        {
            strChar = strString.charAt(i);
            if (strValidChars.indexOf(strChar) == -1)
            {
                blnResult = false;
            }
        }
        return blnResult;
    }

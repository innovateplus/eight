// 进入全屏
function requestFullScreen() {
    element = document.getElementById("iframe-one");
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

// 清空
function empty7() {
    $("#floatBin").val("");
    $("#floatDec").val("");
    $("#floatHex").val("");
}

// 清空
function empty6() {
    $("#float8Bin").val("");
    $("#float8Dec").val("");
    $("#float8Hex").val("");
}

// 清空
function empty5() {
    $("#crystal").val("12");
    $("#TMOD").val("1");
    $("#countValue").val("");
    $("#countInitValue").val("");
    $("#countInitValueHex").val("");
}

// 清空
function empty4() {
    $("#bcd").val("");
    $("#bcd2dec").val("");
    $("#bcd2oct").val("");
    $("#bcd2hex").val("");
}

// 清空
function empty3() {
    $("#Addend").val("");
    $("#Addend2").val("");
    $("#AddRes").val("");
    $("#Subtraction").val("");
    $("#Subtraction2").val("");
    $("#SubRes").val("");
}

// 清空
function empty2() {
    $("#scaleNum").val("2");
    $("#sNum").val("");
    $("#Decimal").val("");
    $("#Binary").val("");
    $("#Hexadecimal").val("");
    $("#Octonary").val("");
}

// 清空
function empty1() {
    $("#Decimal0").removeClass("is-invalid");
    $("#Decimal0").val("");
    $("#Original").val("");
    $("#Complement").val("");
    $("#Inverse").val("");
    $("#Decimal1").val("");
    $("#OriginalToHex").val("");
    $("#ComplementToHex").val("");
    $("#InverseToHex").val("");
}

// 小数转换
function floatChange(source) {
    let floatBin = $("#floatBin").val();
    let floatDec = $("#floatDec").val();
    let floatHex = $("#floatHex").val();
    switch (source) {
        case 2:
            $("#floatDec").val(vXtoY(2, floatBin, 10));
            $("#floatHex").val(vXtoY(2, floatBin, 16).toUpperCase());
            break;
        case 10:
            $("#floatBin").val(vXtoY(10, floatDec, 2));
            $("#floatHex").val(vXtoY(10, floatDec, 16).toUpperCase());
            break;
        case 16:
            $("#floatBin").val(vXtoY(16, floatHex, 2));
            $("#floatDec").val(vXtoY(16, floatHex, 10));
            break;
    }
}

// 浮点转换
function float8Change(source) {
    let float8Bin = $("#float8Bin").val();
    let float8Dec = $("#float8Dec").val();
    let float8Hex = $("#float8Hex").val();
    switch (source) {
        case 10:
            float8Dec = vXtoY(10, float8Dec, 2);
            console.log(float8Dec);
            let S = float8Dec.split("."); // 尾码
            let Sf = 0;
            let P = 0; // 阶码
            let Pf = 0;
            if (S.length > 2) {
                $("#float8Bin").val("");
                $("#float8Hex").val("");
                return;
            }
            S[0] = "000" + S[0];
            if (S.length == 1) {
                S[1] = "";
            }
            S[1] = S[1] + "000";
            while (parseInt(S[0]) != 0) {
                P += 1;
                S[1] = S[0].substr(-1) + S[1];
                S[0] = S[0].slice(0, S[0].length - 1);
            }
            while ((parseInt(S[1]) != 0) && (parseInt(S[1].substr(0, 1)) != 1)) {
                //if(parseInt(S[0]) != 0){
                P -= 1;
                S[1] = S[1].slice(1, S[1].length);
            }
            if (P > 0) {
                Pf = 0;
                P = parseInt(P, 10).toString(2);
            } else {
                Pf = 1;
                P = parseInt(-P, 10).toString(2);
            }
            if (P.length < 3) {
                P = ("000" + P);
            }
            P = P.substr(-3);
            S[1] = S[1].slice(0, 3);
            float8Bin = Pf + P + Sf + S[1];
            float8Hex = parseInt(float8Hex, 2).toString(16);
            console.log(S);
            console.log(P);
            $("#float8Bin").val(insertSpace(float8Bin));
            $("#float8Hex").val(float8Hex);


    }
}

// 把n进制的sNum转成2、8、10、16进制
function changeNum(scaleNum, sNum) {
    let scale_2 = parseInt(sNum, scaleNum).toString(2);
    let scale_8 = parseInt(sNum, scaleNum).toString(8);
    let scale_10 = parseInt(sNum, scaleNum);
    let scale_16 = parseInt(sNum, scaleNum).toString(16);

    $("#Binary").val(insertSpace(scale_2));
    $("#Octonary").val(scale_8);
    $("#Decimal").val(scale_10);
    $("#Hexadecimal").val(scale_16.toUpperCase());
}

// 检查进制是否合法
function numValid(sNum, scaleNum, obj) {
    if (scaleNum == 0) {
        scaleNum = parseInt($("#scaleNum").val());
    }
    switch (scaleNum) {
        case 2:
            if (/[^01]+/.test(sNum)) {
                obj.value = obj.value.replace(/[^01]+/gi, "")
            }
            break;
        case 8:
            if (/[^0-7]+/.test(sNum)) {
                obj.value = obj.value.replace(/[^0-7]+/gi, "")
            }
            break;
        case 10:
            if (/\D+/.test(sNum)) {
                obj.value = obj.value.replace(/\D+/gi, "")
            }
            break;
        case 16:
            if (/[^0-9a-fA-F]+/.test(sNum)) {
                obj.value = obj.value.replace(/[^0-9a-fA-F]+/gi, "")
            }
            break;
    }
}

// 每4位加空格
function insertSpace(value) {
    if (value.length % 4 != 0) {
        // 需要补位
        var newLength = 4 * (Math.ceil(value.length / 4));
        value = (Array(newLength).join('0') + value).slice(-newLength);
    }
    //去掉所有空格
    var nospace = value.replace(/\s/g, '');
    //重新插入空格
    return nospace.replace(/(\d{4})/g, "$1 ").trim();
}

// 二进制加法
function binAdd() {
    var x = $("#Addend").val();
    var y = $("#Addend2").val();
    if ((/[^0-1]/g.test(x)) || x == "") {
        //输入有效二进制数
        return 0;
    } else if ((/[^0-1]/g.test(y)) || y == "") {
        //输入有效二进制数
        return 0;
    } else {
        var outputValue = 0;
        for (i = x.length - 1; i >= 0; i -= 1) {
            outputValue += eval(x.charAt(i)) * Math.pow(2, x.length - i - 1);
        }
        var b1 = parseInt(outputValue);
        outputValue = 0;
        for (i = y.length - 1; i >= 0; i -= 1) {
            outputValue += eval(y.charAt(i)) * Math.pow(2, y.length - i - 1);
        }
        var b2 = parseInt(outputValue);
        var res = b1 + b2;

        res = res.toString(2);
        console.log(res.length);
        if (res.length <= 8) {
            var arr = Array(8).join("0") + res;
            res = arr.slice(-8);
        } else {
            var arr = Array(12).join("0") + res;
            res = arr.slice(-12);
        }
        $("#AddRes").val(insertSpace(res));
    }
}

// 二进制减法
function binSub() {
    var x = $("#Subtraction").val();
    var y = $("#Subtraction2").val();
    if ((/[^0-1]/g.test(x)) || x == "") {
        //输入有效二进制数
        return 0;
    } else if ((/[^0-1]/g.test(y)) || y == "") {
        //输入有效二进制数
        return 0;
    } else {
        var outputValue = 0;
        for (i = x.length - 1; i >= 0; i -= 1) {
            outputValue += eval(x.charAt(i)) * Math.pow(2, x.length - i - 1);
        }
        var b1 = parseInt(outputValue);
        outputValue = 0;
        for (i = y.length - 1; i >= 0; i -= 1) {
            outputValue += eval(y.charAt(i)) * Math.pow(2, y.length - i - 1);
        }
        var b2 = parseInt(outputValue);
        if (b1 > b2) {
            var res = b1 - b2;
            res = res.toString(2);
            console.log(res.length);
            if (res.length <= 8) {
                var arr = Array(8).join("0") + res;
                res = arr.slice(-8);
            } else {
                var arr = Array(12).join("0") + res;
                res = arr.slice(-12);
            }
            $("#SubRes").val(insertSpace(res));
        } else {
            $("#SubRes").val("暂时无法计算");
        }
    }
}

// 十进制转bcd
function bcd(num1) {
    if (num1 == 0)
        return "0000";
    else if (num1 == 1)
        return "0001";
    else if (num1 == 2)
        return "0010";
    else if (num1 == 3)
        return "0011";
    else if (num1 == 4)
        return "0100";
    else if (num1 == 5)
        return "0101";
    else if (num1 == 6)
        return "0110";
    else if (num1 == 7)
        return "0111";
    else if (num1 == 8)
        return "1000";
    else if (num1 == 9)
        return "1001";
}

// bcd转十进制
function decimal(num1) {
    //alert(num1);
    if (num1 == '0' || num1 == '00' || num1 == '000' || num1 == '0000')
        return 0;
    else if (num1 == '1' || num1 == '01' || num1 == '001' || num1 == '0001')
        return 1;
    else if (num1 == '10' || num1 == '010' || num1 == '0010')
        return 2;
    else if (num1 == '11' || num1 == '011' || num1 == '0011')
        return 3;
    else if (num1 == '100' || num1 == '0100')
        return 4;
    else if (num1 == '101' || num1 == '0101')
        return 5;
    else if (num1 == '110' || num1 == '0110')
        return 6;
    else if (num1 == '111' || num1 == '0111')
        return 7;
    else if (num1 == 1000)
        return 8;
    else if (num1 == 1001)
        return 9;
    else
        return false;
}

// 定时器初值计算
function getInitValue() {
    $("#countValue").val($("#countValue").val().replace(/\D/gi, ""));

    var crystal = $("#crystal").val();
    var TMOD = $("#TMOD").val();
    var countValue = $("#countValue").val();
    var countInitValue = 0;

    var step = 12 / crystal;
    switch (TMOD) {
        case '0':
            // 方式0 13位
            countInitValue = 8192 - countValue / step;
            break;
        case '1':
            //方式1 16位
            countInitValue = 65536 - countValue / step;
            break;
        case '2':
            // 方式2 8位
            countInitValue = 256 - countValue / step;
            break;
    }
    $("#countInitValue").val(countInitValue);
    $("#countInitValueHex").val(parseInt(countInitValue).toString(16).toUpperCase());
}

// 小数转换用
ss = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_@";

// 十进制数m转n进制
function v10toX(n, m) {
    m = String(m).replace(/ /gi, "");
    if (m == "") {
        return ""
    }
    var a = ss.substr(0, 10);
    var b = a + ".";
    if (eval("m.replace(/[" + b + "]/gi,'')") != "") {
        M("请输入有效的进制数！");
        return ""
    }
    m = m.split(".");
    if (m.length > 2) {
        M("请输入有效的进制数！");
        return ""
    }
    var a = ss.substr(0, n);
    if (m.length == 1) {
        m = m[0];
        var t = "";
        while (m != 0) {
            var b = m % n;
            t = a.charAt(b) + t;
            m = (m - b) / n
        }
        return t
    } else {
        var m0 = m[0];
        var t = "";
        while (m0 != 0) {
            var b = m0 % n;
            t = a.charAt(b) + t;
            m0 = (m0 - b) / n
        }
        var cnt = 18;
        var m1 = m[1];
        m1 = parseFloat("0." + m1);
        var d = "",
            b = 0;
        while (m1 != 0 && cnt > 0) {
            m1 = m1 * n;
            b = parseInt(m1);
            d = d + a.charAt(b);
            m1 = m1 - b;
            cnt--
        }
        return t + "." + d
    }
}

// n进制数m转10进制
function vXto10(n, m) {
    m = String(m).replace(/ /gi, "");
    if (m == "") {
        return ""
    }
    var a = ss.substr(0, n);
    var b = a + ".";
    if (eval("m.replace(/[" + b + "]/gi,'')") != "") {
        M("请输入有效的" + n + "进制数！");
        return ""
    }
    m = m.split(".");
    if (m.length > 2) {
        M("请输入有效的" + n + "进制数！");
        return ""
    }
    if (m.length == 1) {
        m = m[0];
        var t = 0,
            c = 1;
        for (var x = m.length - 1; x > -1; x--) {
            t += c * (a.indexOf(m.charAt(x)));
            c *= n
        }
        return t
    } else {
        var m0 = m[0];
        var t = 0,
            c = 1;
        for (var x = m0.length - 1; x > -1; x--) {
            t += c * (a.indexOf(m0.charAt(x)));
            c *= n
        }
        var m1 = m[1];
        var d = 0,
            c = 1 / n;
        for (var x = 0; x < m1.length; x++) {
            d += c * (a.indexOf(m1.charAt(x)));
            c /= n
        }
        return t + d
    }
}

// d进制的数b转c进制并返回，可包含小数
function vXtoY(d, b, c) {
    a = vXto10(d * 1, b);
    if (a == "") {
        return ""
    }
    a = v10toX(c, a);
    return a
}

$(document).ready(function () {
    // 码制转换 10转二原补反
    $('#Decimal0').bind("input propertychange", function () {
        let ini_number = parseInt($(this).val());   // 十进制数字
        let true_form = 0; // 原码
        let com_rep = 0; // 补码
        let inverse_code = 0; // 反码
        let selectedBit = 8; // 8位
        if ($(this).val() == "") {
            $(this).removeClass("is-invalid");
            empty1();
            return;
        } else if (!(ini_number >= -128 && ini_number <= 127)) {
            $(this).addClass("is-invalid");
            $("#msg1").text("请确保输入在-128至127之间");
            $("#Original").val("");
            $("#Complement").val("");
            $("#Inverse").val("");
            return;
        } else {
            $(this).removeClass("is-invalid");
        }

        /*if (dec.substr(dec.length - 1, 1) < '0' || dec.substr(dec.length - 1, 1) > '9') {
            dec = dec.substring(0, dec.length - 1);
        }
        $(this).val(dec);*/
        if (ini_number > 0) {
            true_form = inverse_code = com_rep = (Array(selectedBit)
                .join("0") + ini_number.toString(2)).slice(0 - selectedBit);
        } else if (ini_number === 0) {
            true_form = "+0原码: 00000000  -0原码: 10000000";
            inverse_code = "+0反码: 00000000  -0反码: 11111111";
            com_rep = "+0补码: 00000000  -0补码: 00000000";
        } else {
            if (selectedBit === 8 && ini_number === -128 ||
                selectedBit === 16 && ini_number === -32768 ||
                selectedBit === 32 && ini_number === -2147483648) {
                true_form = "超出表示范围";
                inverse_code = "超出表示范围";
            } else {
                true_form = "1" + (Array(selectedBit).join("0") +
                    ini_number.toString(2)).slice(1 - selectedBit).replace('-', 0);
                inverse_code = "1" + (Array(selectedBit).join("0") +
                    ini_number.toString(2))
                    .slice(1 - selectedBit)
                    .replace('-', 0)
                    .split('')
                    .map(bit => bit == '0' ? '1' : '0')
                    .join('');
            }
            let fsfm_plus1 = parseInt(
                (Array(selectedBit).join("0") + ini_number.toString(2))
                    .slice(1 - selectedBit)
                    .replace('-', 0)
                    .split('')
                    .map(bit => bit == '0' ? '1' : '0')
                    .join(''), 2) + 1;
            com_rep = "1" + (Array(selectedBit).join("0") +
                fsfm_plus1.toString(2)).slice(1 - selectedBit).replace('-', 0);
        }
        $("#Decimal1").val(parseInt(true_form, 2));

        $("#Original").val(insertSpace(true_form));
        $("#Complement").val(insertSpace(com_rep));
        $("#Inverse").val(insertSpace(inverse_code));

        $("#OriginalToHex").val(parseInt(true_form, 2).toString(16).toUpperCase());
        $("#ComplementToHex").val(parseInt(com_rep, 2).toString(16).toUpperCase());
        $("#InverseToHex").val(parseInt(inverse_code, 2).toString(16).toUpperCase());
    });
    // 码制转换 原码转十进制、补码、反码
    $("#Original").bind("input propertychange", function () {
        let ini_number = 0;   // 十进制数字
        let true_form = $(this).val(); // 原码
        let com_rep = 0; // 补码
        let inverse_code = 0; // 反码

        if (true_form.length < 8) {
            ini_number = parseInt(true_form, 2);
            com_rep = true_form;
            inverse_code = true_form;
        } else if (true_form.length == 8) {
            if (true_form == '10000000') {
                ini_number = 0;
                com_rep = inverse_code = Array(8).join('0');
            } else if (true_form.charAt(0) == "0") {
                // 正数
                ini_number = parseInt(true_form, 2);
                com_rep = true_form;
                inverse_code = true_form;
            } else {
                // 负数
                ini_number = "-" + parseInt(true_form.slice(-7), 2);
                inverse_code = "1" + true_form.slice(-7).split('')
                    .map(bit => bit == '0' ? '1' : '0')
                    .join('');
                com_rep = "1" +
                    (Array(8).join('0') + (parseInt(inverse_code.slice(-7), 2) + 1).toString(2)).slice(-7);
            }
        }

        $("#Decimal0").val(ini_number);
        $("#Decimal1").val(parseInt(true_form, 2));
        $("#Complement").val(insertSpace(com_rep));
        $("#Inverse").val(insertSpace(inverse_code));

        $("#OriginalToHex").val(parseInt(true_form, 2).toString(16).toUpperCase());
        $("#ComplementToHex").val(parseInt(com_rep, 2).toString(16).toUpperCase());
        $("#InverseToHex").val(parseInt(inverse_code, 2).toString(16).toUpperCase());
    });
    // 码制转换 补码转十进制、原码、反码
    $("#Complement").bind("input propertychange", function () {
        let ini_number = 0;   // 十进制数字
        let true_form = 0;// 原码
        let com_rep = $(this).val(); // 补码
        let inverse_code = 0; // 反码

        if (com_rep.length < 8) {
            // 正数
            ini_number = parseInt(com_rep, 2);
            inverse_code = true_form = com_rep;
        } else if (com_rep.length == 8) {
            if (com_rep == '00000000') {
                ini_number = 0;
                com_rep = true_form = Array(8).join('0');
            } else if (com_rep.charAt(0) == "0") {
                // 正数
                ini_number = parseInt(com_rep, 2);
                inverse_code = true_form = com_rep;
            } else {
                // 负数
                com_rep.slice(-7)
                inverse_code = "1" +
                    (Array(8).join('0') + (parseInt(com_rep.slice(-7), 2) - 1).toString(2)).slice(-7);
                true_form = "1" + inverse_code.slice(-7)
                    .split('')
                    .map(bit => bit == '0' ? '1' : '0')
                    .join('');

                ini_number = "-" + parseInt(true_form.slice(-7), 2);
            }
        }

        $("#Decimal0").val(ini_number);
        $("#Decimal1").val(parseInt(true_form, 2));
        $("#Original").val(insertSpace(true_form));
        $("#Inverse").val(insertSpace(inverse_code));

        $("#OriginalToHex").val(parseInt(true_form, 2).toString(16).toUpperCase());
        $("#ComplementToHex").val(parseInt(com_rep, 2).toString(16).toUpperCase());
        $("#InverseToHex").val(parseInt(inverse_code, 2).toString(16).toUpperCase());
    });
    // 码制转换 反码转十进制、原码、补码
    $("#Inverse").bind("input propertychange", function () {
        let ini_number = 0;   // 十进制数字
        let true_form = 0; // 原码
        let com_rep = 0; // 补码
        let inverse_code = $(this).val(); // 反码

        if (inverse_code.length < 8) {
            ini_number = parseInt(inverse_code, 2);
            true_form = com_rep = inverse_code;
        } else if (inverse_code.length == 8) {
            if (inverse_code == '11111111') {
                ini_number = 0;
                com_rep = true_form = Array(9).join('0');
            } else if (inverse_code.charAt(0) == "0") {
                // 正数
                ini_number = parseInt(inverse_code, 2);
                true_form = com_rep = inverse_code;
            } else {
                // 负数
                true_form = "1" + inverse_code.slice(-7).split('')
                    .map(bit => bit == '0' ? '1' : '0')
                    .join('');
                ini_number = "-" + parseInt(true_form.slice(-7), 2);

                com_rep = "1" +
                    (Array(8).join('0') + (parseInt(inverse_code.slice(-7), 2) + 1).toString(2)).slice(-7);
            }
        }

        $("#Decimal0").val(ini_number);
        $("#Decimal1").val(parseInt(true_form, 2));
        $("#Original").val(insertSpace(true_form));
        $("#Complement").val(insertSpace(com_rep));

        $("#OriginalToHex").val(parseInt(true_form, 2).toString(16).toUpperCase());
        $("#ComplementToHex").val(parseInt(com_rep, 2).toString(16).toUpperCase());
        $("#InverseToHex").val(parseInt(inverse_code, 2).toString(16).toUpperCase());
    });

    // 进制转换 10进制转2、8、16进制
    $('#sNum').bind("input propertychange", function () {
        let sNum = $("#sNum").val();
        let scaleNum = $("#scaleNum").val();
        let scale_2 = parseInt(sNum, scaleNum).toString(2);
        let scale_8 = parseInt(sNum, scaleNum).toString(8);
        let scale_10 = parseInt(sNum, scaleNum);
        let scale_16 = parseInt(sNum, scaleNum).toString(16);

        $("#Binary").val(insertSpace(scale_2));
        $("#Octonary").val(scale_8);
        $("#Decimal").val(scale_10);
        $("#Hexadecimal").val(scale_16.toUpperCase());
    });
    // 进制转换 10进制转2、8、16进制
    $('#scaleNum').bind("input propertychange", function () {
        $("#sNum").val("");
        $("#Decimal").val("");
        $("#Binary").val("");
        $("#Hexadecimal").val("");
        $("#Octonary").val("");
        $("#sNum").focus();
    });

    // 二进制加法被加数
    $('#Addend').bind("input propertychange", function () {
        binAdd();
    });
    // 二进制加法加数
    $('#Addend2').bind("input propertychange", function () {
        binAdd();
    });
    // 二进制加法被加数
    $('#Subtraction').bind("input propertychange", function () {
        binSub();
    });
    // 二进制加法加数
    $('#Subtraction2').bind("input propertychange", function () {
        binSub();
    });
    // BCD转8、10、16进制
    $('#bcd').bind("input propertychange", function () {
        x = $("#bcd").val();
        var outputValue = '';
        var prev = x.charAt(0);
        for (var i = x.length - 1; i >= 0;) {
            var str = '';
            for (var j = 0; j < 4 && i >= 0; j++, i--)
                str = x.charAt(i) + '' + str;
            var v1 = decimal(str);
            if (v1 === false) {
                outputValue = "存在非BCD码";
                break;
            }
            outputValue = v1 + '' + outputValue;
        }
        $("#bcd2dec").val(outputValue);

        let scale_8 = parseInt(x, 2).toString(8);
        let scale_16 = parseInt(x, 2).toString(16);

        $("#bcd2oct").val(scale_8);
        $("#bcd2hex").val(scale_16.toUpperCase());
    });
    // 10进制转BCD
    $('#bcd2dec').bind("input propertychange", function () {
        x = $("#bcd2dec").val();
        var outputValue = '';
        for (var i = 0; i < x.length; i++) {
            outputValue += bcd(eval(x.charAt(i)));
        }
        $("#bcd").val(insertSpace(outputValue));

        let scale_8 = parseInt(outputValue, 2).toString(8);
        let scale_16 = parseInt(outputValue, 2).toString(16);

        $("#bcd2oct").val(scale_8);
        $("#bcd2hex").val(scale_16.toUpperCase());
    });

    // 快捷键
    $(document).keydown(function (event) {
        if (event.keyCode == "81") {
            // Q
            empty1();
            empty2();
            empty3();
            empty4();
            empty5();
            empty6();
            empty7();
        }/* else if (event.keyCode == "66") {
                // B
                $("#scaleNum").val("2");
                $("#sNum").focus();
            } else if (event.keyCode == "68") {
                // D
                $("#scaleNum").val("10");
                $("#sNum").focus();
            } else if (event.keyCode == "72") {
                // H
                $("#scaleNum").val("16");
                $("#sNum").focus();
            } else if (event.keyCode == "79") {
                // O
                $("#scaleNum").val("8");
                $("#sNum").focus();
            }*/

    });
});
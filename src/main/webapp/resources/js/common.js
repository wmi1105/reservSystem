/**
 * 
 */

// 이메일 체크
function ckItemEmail(frm) {
	var return_msg = '';
	if (frm == '') {
		returm_msg = ''
		// alert("이메일을 입력해 주십시오.")
		// return false;
	}

	var ch_ck = 'NN'

	for (i = 0; i < frm.length; i++) {
		var ch = frm.charAt(i);
		if (ch == '@') {
			ch_ck = 'YN'
		}
		if (ch_ck == 'YN' && ch == '.') {
			ch_ck = 'YY'
		}
	}

	if (ch_ck != 'YY') {
		return_msg = 'Email format is invalid.';
		alert("이메일 주소를 잘못 입력하셨습니다.");
		return false;
	}
}

// 숫자 체크
function ckItemNum(temp) {
	if(isNaN(temp) == true) {
//		console.log("입력된 값 : " + temp + " / 문자");
		return "str";
	} else {
//		console.log("입력된 값 : " + temp + " / 숫자");
		return "num";
	}
}


//전화번호 문자(-)
function chkItemPhone(temp) {
	var number = temp.replace(/[^0-9]/g, "");
	var phone = "";

	if (number.length < 4) {
		return number;
	} else if (number.length < 7) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3);
	} else if (number.length < 11) {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 3);
		phone += "-";
		phone += number.substr(6);
	} else {
		phone += number.substr(0, 3);
		phone += "-";
		phone += number.substr(3, 4);
		phone += "-";
		phone += number.substr(7);
	}

	return phone;
}


//숫자에 콤마(,) 제거
function numberFormat(data) {
	if (!/[^0-9]/.test(data)) {
		data = "" + data;
		var ret = [];
		var len = data.length;
		var ind = len - (parseInt(len / 3) * 3) || 3;
		for (var i = 0; i < len; i++) {
			ret.push(data.charAt(i));
			ind--;
			if (ind <= 0) {
				ret.push(",");
				ind = 3;
			}
		}
		return ret.join("").replace(/(^,|,$)/g, "");
	} else {
		return data;
	}
}

//숫자에 콤마(,) 표시
function numberComma(val) {
	var tmp = val.split('.');
	var minus = false;
	var str = new Array();

	if (tmp[0].indexOf('-') >= 0) {
		minus = true;
		tmp[0] = tmp[0].substring(1, tmp[0].length);
	}

	var v = tmp[0].replace(/,/gi, '');
	for (var i = 0; i <= v.length; i++) {
		str[str.length] = v.charAt(v.length - i);
		if (i % 3 == 0 && i != 0 && i != v.length) {
			str[str.length] = '.';
		}
	}
	str = str.reverse().join('').replace(/\./gi, ',');
	if (minus)
		str = '-' + str;

	return (tmp.length == 2) ? str + '.' + tmp[1] : str;
}


//쿠키저장
function setCookie(name, values){
		
	var expire = new Date();
    expire.setDate(expire.getDate());
    cookies = name + ' =' + escape(values) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
		
}

//쿠키 가져오기
function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}


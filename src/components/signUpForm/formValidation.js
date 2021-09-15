export const validateEmail = (elementValue) => {
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(elementValue);
};

const regexObj = {
	regexSeven: '[2-9]{1}[0-9]{2}–[0-9]{4}',
	regexTen: '[2-9]{1}[0-9]{2}–[0-9]{3}–[0-9]{4}',
	regexEleven: `[1]{1}–[2-9]{1}[0-9]{2}–[0-9]{3}–[0-9]{4}`,
};

export const formatPhone = (digit) => {
	if (digit) {
		let prefix;
		let areaCode;
		let first;
		let last;
		let phone = '';
		const digitString = digit.toString();
		const digitLength = digit.toString().length;

		if (digitLength <= 7) {
			first = digitString.substring(0, 3);
			last = digitString.substring(3, 7);
			phone = { number: first + '–' + last, regex: regexObj.regexSeven };
		} else if (digitLength >= 8 && digitLength <= 10) {
			areaCode = digitString.substring(0, 3);
			first = digitString.substring(3, 6);
			last = digitString.substring(6, 10);
			phone = {
				number: areaCode + '–' + first + '–' + last,
				regex: regexObj.regexTen,
			};
		} else if (digitLength === 11) {
			prefix = digitString.substring(0, 1);
			areaCode = digitString.substring(1, 4);
			first = digitString.substring(4, 7);
			last = digitString.substring(7, 11);
			phone = {
				number: prefix + '–' + areaCode + '–' + first + '–' + last,
				regex: regexObj.regexEleven,
			};
		} else phone = { digit, regex: regexObj.regexSeven };
		return phone;
	}
};

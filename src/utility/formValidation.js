export const validateEmail = (elementValue) => {
	const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return EMAIL_PATTERN.test(elementValue);
};
export const validatePhoneNumber = (elementValue) => {
	const PHONE_PATTERN =
		/^([1]{1})?[-]?([2-9]{1}\d{2})[-]?([2-9]{1}\d{2})[-]?(\d{4})$/;
	return PHONE_PATTERN.test(elementValue);
};

//* AUTO-FORMAT INPUT NUMBER WITH DASHES
export const formatPhoneNumber = (digit) => {
	if (digit) {
		const digitString = digit.toString();
		const digitLength = digit.toString().length;
		if (digitLength === 10) {
			const phone =
				digitString.substring(0, 3) +
				'-' +
				digitString.substring(3, 6) +
				'-' +
				digitString.substring(6, 10);
			return phone;
		} else if (digitLength === 11) {
			const phone =
				digitString.substring(0, 1) +
				'-' +
				digitString.substring(1, 4) +
				'-' +
				digitString.substring(4, 7) +
				'-' +
				digitString.substring(7, 11);
			return phone;
		} else {
			const phone = digit;
			return phone;
		}
	}
};

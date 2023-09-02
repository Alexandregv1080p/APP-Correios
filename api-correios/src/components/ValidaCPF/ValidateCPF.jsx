const validateCPF = (rawCpf) => {
    const numericCpf = rawCpf.replace(/\D/g, '');

    if (numericCpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(numericCpf)) {
        return false;
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(numericCpf.charAt(i)) * (10 - i);
    }
    let remainder = 11 - (sum % 11);
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(numericCpf.charAt(9))) {
        return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += parseInt(numericCpf.charAt(i)) * (11 - i);
    }
    remainder = 11 - (sum % 11);
    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }
    if (remainder !== parseInt(numericCpf.charAt(10))) {
        return false;
    }

    return true;
};

export default validateCPF
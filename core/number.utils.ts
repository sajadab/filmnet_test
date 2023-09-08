export const toPersianNumber = (num: number): string => {
    let en_number = num;
    let persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    let persianMap = persianDigits.split('');
    return en_number.toString().replace(/\d/g, function (m) {
        return persianMap[parseInt(m)];
    });
};
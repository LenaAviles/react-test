const getNoun = (number, one, two, five) => {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
        return five;
    }
    number %= 10;
    if (number === 1) {
        return one;
    }
    if (number >= 2 && number <= 4) {
        return two;
    }
    return five;
} 

const getYearNoun = (age) => {    
    return getNoun(age, 'год', 'года', 'лет');
}

export {
    getNoun,
    getYearNoun,
};
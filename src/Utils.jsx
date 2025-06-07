function farenheitCelsiusConvert(value, unit) {
    if(unit == 'C'){
        let farenheit = (value*9)/5 + 32;
        return farenheit;
    }
    else if (unit == 'F'){
        let celsius = (value - 32) * (9/5);
        return celsius;
    }
}

export default farenheitCelsiusConvert;
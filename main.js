const largerInteger = (firstInteger, secondInteger) => {
    if (firstInteger > secondInteger) {
        return firstInteger;
    } else if (firstInteger < secondInteger) {
        return secondInteger;
    } else {
        return 'Looks like the integers are equal';
    }
}

console.log(largerInteger(7, 77));
function addNumber(Num1, Num2) {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = Num1 + Num2;
    return result;
}
const sum = addNumber(23, 12, 50, 100);
console.log(sum);


function getFullName(firstName, lastName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Omuk', 'Songket', 'bin', 'Hanif', 'Songket', 'bin', 'Tomuk', 'Songket', 'bin', 'Kumuk', 'Songket');
console.log(name);
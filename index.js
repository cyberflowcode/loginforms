function formatStudentId(inputField) {
    const inputValue = inputField.value;
    let formattedValue = '';
    for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (i === 2) {
            formattedValue += '-';
        }
        if (!isNaN(char) && formattedValue.length < 7) {
            formattedValue += char;
        }
    }
    inputField.value = formattedValue;
}

function ageStudent(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    if (input.value.length > 2) {
        input.value = input.value.slice(0, 2);
    }
    const age = Number(input.value);
    if (age < 1) {
        input.value = '';
    } else if (age > 99) {
        input.value = '99';
    }
    if (input.value.length === 1 && age < 1) {
        input.value = '';
    }
}


function validateText(inputField) {
    inputField.value = inputField.value.replace(/[^a-zA-Z\s]/g, '');
    inputField.value = inputField.value
        .toLowerCase()
        .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
}

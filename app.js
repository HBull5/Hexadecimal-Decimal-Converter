var input = document.querySelector('#userInput');
var button = document.querySelector('button');
var output = document.querySelector('#output');
var radio = document.getElementsByName('type');

input.addEventListener('focus', () => {
    input.setAttribute('placeholder', '');
});

input.addEventListener('blur', () => {
    input.setAttribute('placeholder', 'Enter Numerical Value');
});

button.addEventListener('click', () => {
    let checked = '';
    for(let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            checked = radio[i].value;
        }
    }
    if(checked === '') {
        output.innerHTML = 'Please Select Conversion';
    } else if(input.value === '') {
        output.innerHTML = 'Please Enter a Number';
    } else if(checked === 'dec') {
        // decimal to hex
        let value = Number(input.value);
        let remainders = [];
        let hex = '';
        while(value > 0) {
            remainders.push(value % 16);
            value = parseInt(value) / 16;
            value = parseInt(value);
        }
        for(let i = (remainders.length - 1); i >= 0; i--) {
            hex += remainders[i];
        }
        hex = hex.replace("10", "A");
        hex = hex.replace("11", "B");
        hex = hex.replace("12", "C");
        hex = hex.replace("13", "D");
        hex = hex.replace("14", "E");
        hex = hex.replace("15", "F");
        output.innerHTML = hex;
    } else {
        // hex to decimal
        let value = input.value;
        value = value.toUpperCase();
        let inputs = [];
        let sum = [];
        let total = 0;
        for(let i = 0; i < value.length; i++) {
            inputs.unshift(value[i]);
        }
        for(let i = 0; i < inputs.length; i++) {
            inputs[i] = inputs[i].replace("A", "10");
            inputs[i] = inputs[i].replace("B", "11");
            inputs[i] = inputs[i].replace("C", "12");
            inputs[i] = inputs[i].replace("D", "13");
            inputs[i] = inputs[i].replace("E", "14");
            inputs[i] = inputs[i].replace("F", "15");
        }
        for(let i = 0; i < inputs.length; i++) {
            sum.push((Number(inputs[i])) * (Math.pow(16, i)));
        }
        for(let i = 0; i < sum.length; i++) {
            total += sum[i];
        }
        output.innerHTML = total;
    }
});
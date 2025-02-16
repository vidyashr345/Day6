function showAlert(){
    alert('Alert')
}

function changeText(){
    let telement = document.getElementById('text');
    telement.innerHTML = "Txt After";
    telement.style.color="red";
    telement.style.fontSize="25px"
}

function handleClick(){
    document.getElementById('clickMsg').innerHTML = "Button Clicked"
}

function validation(){
    let name = document.getElementById('name').value;

    if(name == ''){
        alert('please enter your name.');
        return false;
    }
    return true;
}

function displayArrayItem(){
    let items = ['Apple', 'Banana', 'Cherry', 'Date'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = items[index] || 'Invaild index';

    document.getElementById('arrayResult').innerHTML = result;
}

function checkAge(){
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18){
        document.getElementById('ageResult').innerHTML = 'you are an adult';
    }
    else{
        document.getElementById('ageResult').innerHTML = 'you are still a child'
    }
}
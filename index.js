const form = document.getElementById("form");
const numberInput = document.getElementById("numberInput");
const textInput = document.getElementById("textInput");
const btn = document.getElementById("btn");
const mediaResult = document.getElementById("mediaResult");
const finalResult = document.getElementById("finalResult");

let grade;
let activity;
let media;
let cont = 0;
let sum = 0;

form.addEventListener('submit', (a) => {
    
    // Prevents the form to get its values erased
    a.preventDefault();

    // declares some necessary variables and count how many times the form was submited
    cont++;
    let grade = numberInput.value;
    grade = Number(grade);
    let activity = textInput.value;
    let img;
    
    // Atributes the correct value to the <img> tag deppending of the grade 
    if(grade>=6){
        img = `<img src="images/aprovado.png">`;
    }
    else{
        img = `<img src="images/reprovado.png">`;
    }
    
    // Add a new row to the table 
    let row = '<tr>';
    row+= `<td>${activity}</td>`;
    row+= `<td>${grade.toFixed(1)}</td>`;
    row+= `<td>${img}</td>`;
    row+= '</tr>';
    console.log(row);
    
    document.querySelector("tbody").innerHTML += row;
    // Calculates the media
    sum=sum + grade;
    media=sum/cont;

    // Changes the final result deppending of the student media 
    mediaResult.textContent = `${media.toFixed(1)}`
    if(media<6){
        finalResult.textContent = "Failed";
        finalResult.classList.add('failed');
        finalResult.classList.remove('passed');
    }
    if(media>=6){
        finalResult.textContent = "Passed";
        finalResult.classList.add('passed');
        finalResult.classList.remove('failed');
    }
})
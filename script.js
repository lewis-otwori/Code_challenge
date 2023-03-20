let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput;
// write Code For the Code challenge
let outputGrade;
 

  if (inputGrade>=79 && inputGrade<100){// if input grade is above 79 and below 100 GRADE A
  outputGrade = "GRADE IS A"
  }
  else if(inputGrade>=60 && inputGrade<79){// if input grade is above 60 and below 79 GRADE B
  outputGrade = "GRADE IS: B"
  }
  else if (inputGrade>=49 && inputGrade<59){// if input grade is above 49 and below 59 GRADE A
  outputGrade = "GRADE IS: C"
  }
  else if (inputGrade>=40 && inputGrade<49){// if input grade is above 79 and below 49 GRADE A
  outputGrade= "GRADE IS: D"
  }
  else if(inputGrade<40 && inputGrade>=0){
  outputGrade = "GRADE IS: E"// if input grade is below 40 GRADE E
  }
  else{
  outputGrade= "input a valid value"}

  console.log(finalOutput);
  // Display the output on the web page
 

 finalOutput = outputGrade;
   document.getElementById('marks-id').append(finalOutput)
}
)
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge
let outputMessage ;// declare a variable outputMessage
if (inputSpeed <= 70) {//if inputSpeed is below 70 display OK
  outputMessage="Ok";
} else {
  let demeritPoints = Math.floor((inputSpeed - 70) / 5);// declare a variable demetritpoints and use method math.floor to make it a whole number.
                                                        //it subtracts 70 and divides 5 from the answer to get the demeritpoints.
  if (demeritPoints >= 12) {//
    outputMessage ="License suspended";//if demeritPoints i greater or equall to 12 your licence is suspended
  } else {
    outputMessage=`Points: ${demeritPoints}`;
  }
}


finalOutput=outputMessage
    document.getElementById('speed-id').append(finalOutput)

})

salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge
function findNetSalary(tPay) {
  let taxableIncome = tPay - 2400; // remove personal relief of 2400 per month
  let paye = 0;           // initialize PAYE to 0
  let nssf = tPay * 0.06;         // NSSSF is 6% of the tPay
  let nhif = 0;           // initialize NHIF to 0
  // compute PAYE based on taxable income
  if (taxableIncome <= 24000) {
      paye = taxableIncome * 0.1
  } else if (taxableIncome >= 24001 && taxableIncome <= 32333) {
      paye = taxableIncome * 0.25
  } else if (taxableIncome > 32333) {
      paye = taxableIncome * 0.3
  }
  // compute NHIF based on TPay
  if (tPay <= 5999) {
      nhif = 150
  } else if (tPay <= 7999) {
      nhif = 300
  } else if (tPay <= 11999) {
      nhif = 400
  } else if (tPay <= 14999) {
      nhif = 500
  } else if (tPay <= 19999) {
      nhif = 600
  } else if (tPay <= 24999) {
      nhif = 750
  } else if (tPay <= 29999) {
      nhif = 850
  } else if (tPay <= 34999) {
      nhif = 900
  } else if (tPay <= 39999) {
      nhif = 950
  } else if (tPay <= 44999) {
      nhif = 1000
  } else if (tPay <= 49999) {
      nhif = 1100
  } else if (tPay <= 59999) {
      nhif = 1200
  } else if (tPay <= 69999) {
      nhif = 1300
  } else if (tPay <= 79999) {
      nhif = 1400
  } else if (tPay <= 89999) {
      nhif = 1500
  } else if (tPay <= 99999) {
      nhif = 1600
  } else if (tPay > 100000) {
      nhif = 1700
  }
  // calculate the netPay
  let netPay = tPay - paye - nssf - nhif;
  return netPay
}


finalOutput = findNetSalary(inputSalary)
document.getElementById('salary-id').append(finalOutput)
        
})
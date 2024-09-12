function addTwoNumber(num1) {
  if (!num1) console.log("Number is undefiend")
  console.log(`${num1} this is our number`)
  console.log("\n")
}

addTwoNumber();
//this is a edge case during interview 

// we can also give provide same default value of parmater

function addTwoNumber1(num1 = "5") {
  if (!num1) {
    console.log("Number is undefiend")
    return;
  }
  console.log(`${num1} this is our number`)
  return;
}

addTwoNumber1();
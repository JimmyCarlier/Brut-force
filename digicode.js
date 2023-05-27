let digicode = [];
let crack = []

for (let i = 0; i < 3; i++) {
  digicode.push(Math.floor(Math.random()*10));
}

for(let i=0; i < 3; i++){
  for(let j = 0; j <=9 ; j++){
    if(digicode[i] == j){
      crack.push(j);
      break;
    }
  }
  console.log("crack " + crack + " digicode " + digicode)
}

// if while

let digicode = [];
let crack = [];

for (let i = 0; i < 3; i++) {
  digicode.push(Math.floor(Math.random() * 10));
}

let i = 0;
while (i < 3) {
  let j = 0;
  while (j <= 9) {
    if (digicode[i] == j) {
      crack.push(j);
      break;
    }
    j++;
  }
  i++;
  console.log("crack " + crack + " digicode " + digicode);
}

let digicode = [];
let crack = [];

for (let i = 0; i < 3; i++) {
  digicode.push(Math.floor(Math.random() * 10));
}

let i = 0;
while (i < 3) {
  for (let j = 0; j <= 9; j++) {
    if (digicode[i] == j) {
      crack.push(j);
      break;
    }
  }
  i++;
  console.log("crack " + crack + " digicode " + digicode);
}

let crack = []
let code = []

for (i=0;i<=2;i++){
    code[i] =+ Math.floor(Math.random()*10)
}

let j=0;
while (j<3){
    for (i=0; i<=9;i++){
        if (code[j]===i){
            crack.push(i)
        }
    }
    console.log("crack "+crack+"code "+code)
    j++
}
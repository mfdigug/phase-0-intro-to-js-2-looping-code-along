

function writeCards(name, event) {
    let message = []; 
    for (let i = 0; i < name.length; i++) { 
    message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
      return message;
    }
        
    writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown() {
    let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--);
}
}

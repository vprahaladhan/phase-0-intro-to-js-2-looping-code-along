// Code your solutions in this file
const writeCards = (names, message) => {
  let messages = [];
  names.forEach(name => {
    messages.push(`Thank you, ${name}, for the wonderful ${message} gift!`)
  });
  return messages;
}

const countDown = number => {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}
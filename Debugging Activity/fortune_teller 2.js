
var fortune = 2

  if((fortune >= 0) && (fortune <= 3))
response = "Oh no! You selected a low Fortune!"
  if ((fortune > 3) && (fortune <= 7))
response = "You selected an average fortune"
  if ((fortune > 7) && (fortune <=10))
response = "Congratulations! You selected a good fortune"
  if ((fortune > 10))
response = "It was hard to determine your fortune, try again!"

    

console.log('Fortune selected:',fortune);
console.log(response)

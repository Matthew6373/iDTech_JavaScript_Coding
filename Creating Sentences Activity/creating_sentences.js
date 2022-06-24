var words = ['This', 'is', 'JavaScript', 'Coding!']

var sentence = ''

function createSentence(){
for(var i=0 ;i<words.length; i=i+1)
{
    sentence = sentence + ' ' + words[i]
} 
return sentence
}
console.log(createSentence())


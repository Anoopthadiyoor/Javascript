let text = "one two one two one";
let words = text.split(" ");
console.log(words);

wordcount={}

words.map(word=>word in wordcount ? wordcount[word]+=1 : wordcount[word]=1)
console.log(wordcount)

var cartona=``
quote1={
  name:"-- Oscar Wilde",
   txt:"“Be yourself; everyone else is already taken.”"
   
}
quote2={
  name:"-- Marilyn Monroe",
  txt:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"
}
quote3={
  name:"-- Albert Einstein",
  txt:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
}
quote4={
  name:"-- Frank Zappa",
  txt:"“So many books, so little time.”"
}
quote5={
  name:"-- Marcus Tullius Cicero",
  txt:"“A room without books is like a body without a soul.”"
}
quote6={
  name:"-- Mae West",
  txt:"“You only live once, but if you do it right, once is enough.”"
}



var quoteArr=[quote1,quote2,quote3,quote4,quote5,quote6];
var lastQuoteIndex=-1;

function addQuote(){

  var i;
  do{
    var i = Math.floor(Math.random() * quoteArr.length);
   }
    while(i==lastQuoteIndex);

  cartona=`
  <p>${quoteArr[i].name}</p>
  <p>${quoteArr[i].txt}</p>
  `
  document.getElementById("Quote").innerHTML=cartona;
  lastQuoteIndex=i;
  
  
}





















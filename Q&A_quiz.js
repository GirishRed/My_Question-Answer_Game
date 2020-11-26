var readlineSync = require('readline-sync');

var userName = readlineSync.question('Please Enter Your Name to Play A Game : \n');
console.log('What A Sweet Name You Have.. ');
console.log('Welcome '+userName+'\n');
var score=0;

function Game(ques,ans)
{
  var userAns = readlineSync.question(ques);

  if(userAns.toUpperCase() === ans.toUpperCase())
  {
      console.log('Correct Answer..!');
      score++;
     
  }
  else if(userAns==="a"||"b"||"c"||"d")
  {
    console.log('Wrong Answer :( ');

  }
  else{
    console.log('Invalid input '+userName+' your score for this question is 0');
  }
   console.log('Your score is : '+score);
   console.log('---------------------\n')
}

Game('1.What is My Name? \na.Manjunath\nb.Girish\nc.Pankaj\nd.Kartik\n','b');
Game('2.My fav food is ?\n a.boiled egg\n b.Paneer\n c.Shawarma\n','c');
Game('3.Do I sweat More\na.yes\nb.no\n','a');
Game('4.My dog name was\na.Pintu\nb.Lucky\nc.roxy\n','a' );

   console.log(userName+' Your final score is : '+score);

   console.log("End of the Game, stop here and send a screen shot to Girish.")
   


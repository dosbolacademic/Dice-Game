function solution(){

  var RandomNumber1 = Math.floor(Math.random() *6)+1;

  var FileName= 'dice'+RandomNumber1+'.png'

  var FolderName = "images/"+FileName

  var document1 = document.querySelectorAll('img')[0];

  document1.setAttribute('src', FolderName);



  var RandomNumber2 = Math.floor(Math.random() *6)+1;

  var FileName2 = 'dice'+RandomNumber2+'.png'

  var FolderName2 = 'images/'+FileName2

  var Document2 = document.querySelectorAll('img')[1];

  Document2.setAttribute('src',FolderName2)


  if (RandomNumber1>RandomNumber2){
    $('h1').text("Player 1 Wins!");}

  else if (RandomNumber2>RandomNumber1){
    $('h1').text("Player 2 Wins!");}
  else{
    $('h1').text("⭐️Draw⭐️")}



}



solution()

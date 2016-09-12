console.log('sourced');
$(function(){
  console.log('jquery is working');
  var displayArray=[];

  //create a local array to get jokes


function ajaxCall(joke) {
  $.ajax({
    type:'POST',
    url:'/',
    data:joke,
    success:function (data) {
      console.log('in ajax call', data);
    displayJokes();
    for (var i = 0; i < data.length; i++) {
      displayArray.push(data[i]);
    }//for loop
  }//success

  });//ajaxobject
}//ajax function


//onclick sets up data for ajax call
$('#jokeButton').on('click', function(){
  var objectToSend={
    whoseJoke: $('#nameIn').val(),
    jokeQuestion: $('#setupIn').val(),
    punchLine: $('#punchlineIn').val()
  };//objectToSend

  console.log('objectToSend',objectToSend);
});//jokeButton onclick






ajaxCall();

var displayJokes= function(){

  $('#outputDiv').html(displayArray);

};//displayjokes
displayJokes();
});// docready

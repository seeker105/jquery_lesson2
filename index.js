$(document).ready(function(){
  console.log($('input[type=checkbox]'));

// Exercise part 3
  // $('.died').next().addClass('green')
  // $('.one-term').addClass('red')
  // $('.selected:checked').parent().addClass('blue')
  // $('input:not(:checked)').parent().siblings().addClass('yellow')
  //   // OR
  // $(':checkbox:not(:checked)').parent().siblings().addClass('yellow')



  // Exercise Part 4
  // $('.federalist').text() //this returns the text,
  //                       //if you pass a string it changes the text
  // $('.federalist').html() //this returns html
  //                       //if you pass in a param it replaces the
  //                       //found html with the param
  // $('.died').children('.term').append(' <span class="died">(Died)</span>')
  // $('.number').prepend("<input name='fun' type='radio'> ")


// Event binding using jQuery
// $(":checkbox").on("click", function(){
//   $(this).parent().addClass('blue');
// })

// $(":checkbox").on("click", function(){
//   $(this).parent().toggleClass('blue');
// }) //here the toggleClass lets us turn 'blue' on and off


// $(":checkbox").on("click", toggleBlue)
//
// function toggleBlue(){
//   $(this).parent().toggleClass("blue");
// }
// here we have created a function to turn 'blue' on or off
// and we're activating the function when the event fires.
// Note that if we put the parens on the function call
// as in $(":checkbox").on("click", toggleBlue() )
// we would be getting the return value of the function on click,
// rather than simply firing the function

// Exercise Part 5
$(":checkbox(:checked)").on('click', function(){
  $(this).parents('tr').toggleClass('yellow');
})

$("td").on('click', function(){
  $(this).toggleClass('red')
})

$(":checkbox(:checked)").on('click', function(){
  var pres = $(this).parent().siblings('.name').text();
  //don't forget the parens '()' on a function call, even if there are
  //no parameters
  $('body').append('<div>' + pres + '</div>');
})


});

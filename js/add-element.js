/*
 * Practice on Elements
 * Evaliable methods
 * - hasClass()
 * - removeClass()
 * - addClass()
 */

// get all the hot class elements - change them to cool class
$('#four').addClass('hot');
$('.hot').each(tocool);
function tocool(){
  $(this).removeClass('hot');
  $(this).addClass('cool');
}


// traverse the elements
$('#two').next().next().text("Cheese");
$('#two').prev().text("Water");

// add a new element by clicking the plus sign
// $('#todo').append('<li class="cool">Meat</li>');
$('#todo').append('<li class="cool"> meat </li>');
$('#add').click(addElement);

// before and after are for siblings
// append and prepend are for parent

function addElement() {
  // add a new element
  $('#todo').append('<input type="text">');
  $('input').blur(convertLi);
  $('#save').text("Your changes need to be saved.");
  $('li').click(changeStyle);
}

function convertLi() {
  var userInput = $(this).val();
  console.log(userInput);
  $('#todo').append('<li class="cool">' + userInput + '</li>');
  $('input').remove();
  $('li').click(changeStyle);
}

// bind click with the event handler

//  click the li element will change the changeStyle

//  three style : complete, cool, hot

// When using the hasClass(), addClass(), or removeClass() methods, a dot is not required when referincing a class
$('li').click(changeStyle);
function changeStyle() {
  if($(this).hasClass('cool')){
    $(this).removeClass('cool');
    $(this).addClass('complete');
  }else if($(this).hasClass('complete')){
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
  $('#save').text("Need save to database");
}
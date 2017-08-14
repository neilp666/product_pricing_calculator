$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop()

  if (pixelsFromTop < 200) {
    $('section').css('background-color', '#fff0f0')
  } else if (pixelsFromTop < 1100) {
    $('section').css('background-color', '#F9FFD0')
  } else if (pixelsFromTop < 1300) {
    $('section').css('background-color', '#F1FFD0') 
  } else if (pixelsFromTop < 3000) {
    $('section').css('background-color', '#fff0f0')
  } else {
    $('section').css('background-color', '#cdccc7')
  }

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixelsFromTop / difference

  $('.bar').css('width', percentage + '%')

})









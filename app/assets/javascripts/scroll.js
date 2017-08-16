$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop()

  if (pixelsFromTop < 600) {
    $('section').css('background-color', '#fff0f0')
  } else if (pixelsFromTop < 1200) {
    $('section').css('background-color', '#F9FFD0')
  } else if (pixelsFromTop < 1600) {
    $('section').css('background-color', '#F6FFFF') 
  } else {
    $('section').css('background-color', '#cdccc7')
  }

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixelsFromTop / difference

  $('.bar').css('width', percentage + '%')

})

$('#navbarSupportedContent ul li').on('mouseover', function () {
  if ($(this)[0] === $('li.dropdown')[0]) {
    return
  }
  $(this).children('a').addClass('active')
  $(this).siblings().children('a').removeClass('active')
})
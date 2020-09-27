import Swiper from 'swiper'
import '../less/index.less'
import $ from 'jquery'

let flag = false

$(function ($) {
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
  console.log(swiper)
  $('.nav-wrapper').on('click', 'a', function (event) {
    $('.nav-wrapper a').removeClass('active')
    $(this).addClass('active')
    const index = $(this).data('index')
    $('#page-sections .section').hide()
    $('#page-sections .section').eq(index).show()
    if (index === 2 && !flag) {
      flag = true
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
      console.log(swiper)
    }
  })

  $('.fixedbtn').css('opacity', '1')

  $('.fixedbtn').click(function (e) {
    $('#videoid').show().addClass('zoomIn')
    var video45 = document.getElementById('video45')
    var video45src = document.getElementById('video45src')
    video45src.src = '//yun.xiaoxizhu.com/app/10S.mp4'
    video45.load()
    $('.fixedbtn').hide()
  })
  $('.close').click(function (e) {
    $('.fixedbtn').show()
    $('#videoid').removeClass('zoomIn').hide()
    var video45 = document.getElementById('video45')
    video45.pause()
  })
})

$(document).ready(function(){




	var count = 1;
	var price = 10;
	$('#minus').on('click', function(){
		if(count == 1 && price == 10){
			$('#count').html(1);
			$('#current-price').html("$" + 10);
		}
		else{
			count--;
			price-=10;
			$('#count').html(count);
			$('#current-price').html("$" + price);
		}
	});

	$('#plus').on('click', function(){
		count++;
		price+=10;
		$('#count').html(count);
		$('#current-price').html("$" + price);		
	});



	$(window).on('resize', function() {
    windowSize();
	});
	function windowSize(){
		if($(window).width() < 768){
			$('.date').addClass('order-4');
			$('.mylogo').addClass('order-2');
			$('.myadres').addClass('order-4');
			$('.mymail').addClass('order-2');
		}
		else if($(window).width() > 768){
			$('.date').removeClass('order-4');
			$('.mylogo').removeClass('order-2');
			$('.myadres').removeClass('order-4');
			$('.mymail').removeClass('order-2');
		}
	}
	windowSize();
	

	$("#menu-toggle").click(function() {
		$(this).next().slideToggle("slow");
  		$(this).toggleClass('open');
	});



	//Плавный скролл до блока
	$(".scroll-button").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
     
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });





	$('#contact_form .submit-button').on('click', function() {
            //берем путь php обработчика
            order_url = $('#contact_form').attr('action');
            //посылаем асинхронный запрос на сервер и передаем все данные формы
            $.post(order_url,{
                name: $('#contact_form input[name=name]').val(),
                tel: $('#contact_form input[name=phone]').val(),
                email: $('#contact_form input[name=email]').val(),
                lisence_count: $('#contact_form #count').text(),
                price: $('#contact_form #current-price').text(),
                send: "1"
            }, "html");
            $('#contact_form #count').text("1");
            $('#contact_form #current-price').text("$10");
            $('#contact_form #name').val("");
            $('#contact_form #phone').val("");
            $('#contact_form #email').val("");
        return false;
    });



});
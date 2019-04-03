//фунция, котрая склоняет метры
function num2str(n, text_forms) {  
    n = Math.abs(n) % 100; var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

//функция которая ставить пробелы разделители в сумме
var thousandSeparator = function(str) {
    var parts = (str + '').split('.'),
        main = parts[0],
        len = main.length,
        output = '',
        i = len - 1;
    
    while(i >= 0) {
        output = main.charAt(i) + output;
        if ((len - i) % 3 === 0 && i > 0) {
            output = ' ' + output;
        }
        --i;
    }

    if (parts.length > 1) {
        output += '.' + parts[1];
    }
    return output;
};


//проверка готовности JQvery
$(document).ready(function(){
	// $('#material').selectmenu({
	// });
	$summOrder = 0;
	$('#summ').text(0);
	//$width = null;
	//height = null;
	


//вызов функции склонения метров
	$('#width').on('change',function(){
	val = num2str($(this).val(), ['метр', 'метра', 'метров']);
	$('.width-word').text(val);
});
	$('#height').on('change',function(){
	val = num2str($(this).val(), ['метр', 'метра', 'метров']);
	$('.height-word').text(val);
});

//функция отлавливает изменения первой формы
	$('.form_one').on('change', function() {
	
	$width = $('#width').val();
	$height = $('#height').val();
	$material_prise = $('#material-select option:selected').attr('data-price');
	$material = $('#material-select option:selected').attr('data-material');
	$installation = $('input[name=installation]:checked').attr('data-install');

//находим общую сумму без учета монтажа
	$summ = $width * $height * $material_prise;
	$square = $width * $height;

//условие делает проверку заполнено ли поле длина забора и ставить зеленую галочку
	// function checkWidth(){
	if($width.length > 0) {
		$('#width-checkmark').addClass('checkmark-active').removeClass('checkmark');
		$('#width').removeClass('form_input-error');
		$('.width_error').fadeOut();
		}
		else {$('#width-checkmark').removeClass('checkmark-active').addClass('checkmark');}
		

	// $('#width').on('change', function(){
	// 	checkWidth();
	// });
//условие делает проверку заполнено ли поле высота забора и ставить зеленую галочку
	if($height.length > 0) {
		$('#height-checkmark').addClass('checkmark-active').removeClass('checkmark');
		$('#height').removeClass('form_input-error');
		$('.height_error').fadeOut();
		} else {$('#height-checkmark').removeClass('checkmark-active').addClass('checkmark');}

//условие делает проверку заполнено ли поле материал и ставить зеленую галочку
	if($material_prise > 0) {
		$('#material-checkmark').addClass('checkmark-select').removeClass('checkmark');
		$('#material_select').removeClass('form_select-error');
		$('.select_error').fadeOut();
	} else {$('#material-checkmark').removeClass('checkmark-select').addClass('checkmark');}

//условие проверяет заполнены ли все три поля и делает кнопку отправки активной
	if(($width.length > 0) && ($height.length > 0) && ($material_prise.length > 0)){
		$("#form_submit").prop('disabled', false);
		$('.form_submit').addClass('blue');
		} else {
			$("#form_submit").prop('disabled', true);
			$('.form_submit').removeClass('blue');}

//условие проверяет стоит ли галочка монтаж
	if($installation) {
		$summOrder = $summ + $square * 200
	} else {$summOrder = $summ}

//вызов функции разделителя числа пробелом
	$summOrder = thousandSeparator($summOrder);
	
//вывод переменных на экран
	$('#summ').text($summOrder);
	$('#widthForm').text($width);
	$('#heightForm').text($height);
	$('#summForm').text($summOrder + ' ₽');
	$('#material').text($material);
	});

//функция отлавливает клик по кнопке Далее
	$('#form_submit').on('click', function(e) {
		e.preventDefault();

//если значение меньше или равно нулю, то в поле длинна забора выдается ошибка
		if( $width <= 0){
			$('#width').addClass('form_input-error');
			$('.width_error').fadeIn();
			 }

//если значение меньше или равно нулю, то в поле высота забора выдается ошибка
		else if( $height <= 0){
			$('#height').addClass('form_input-error');
			$('.height_error').fadeIn();
			}

//если значение меньше или равно нулю, то в поле материал забора выдается ошибка
		else if( $material_prise <= 0){
			$('#material-select').addClass('form_select-error');
			$('.select_error').fadeIn();
			}

//если значение в трех полях больше нуля, то скрывается первая форма и показывается вторая
		else if(($width > 0) && ($height > 0) && ($material_prise > 0)) {
			$('.form_two').fadeIn();
			$('.form_one').fadeOut();
			}
	});

//функция отлавливает клик по ссылке, и открывает первую форму и скрывает вторую
	$('.link-return').on('click', function() {
		$('.form_two').fadeOut();
		$('.form_one').fadeIn();
	});

//функция отлавливает изменения второй формы
	$('.form_two').on('change', function() {

//переменная для проверки email на валидность
	$pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

	$username = $('#username').val();
	$email = $('#email').val();
	$phone = $('#phone').val();
	$num = 2563;

//условие делает проверку заполнено ли поле имя забора и ставить зеленую галочку
	if($username) {
		$('#username-checkmark').addClass('checkmark-active').removeClass('checkmark');
	} else {$('#username-checkmark').removeClass('checkmark-active').addClass('checkmark');}

//условие делает проверку заполнено ли поле телефон забора и ставить зеленую галочку
	if($phone.length > 0) {
		$('#phone-checkmark').addClass('checkmark-active').removeClass('checkmark');
	} else {$('#phone-checkmark').removeClass('checkmark-active').addClass('checkmark');}

//условие делает проверку заполнено ли поле email забора и ставить зеленую галочку
	if($pattern.test($email)) {
		$('#email-checkmark').addClass('checkmark-active').removeClass('checkmark');
	} else {$('#email-checkmark').removeClass('checkmark-active').addClass('checkmark');}

//условие проверяет заполнены ли все три поля и делает кнопку отправки активной
	if(($username.length > 0) && ($email.length > 0) && ($phone.length > 0)){
	$("#form_two_submit").prop('disabled', false);
	$('.form_two_submit').addClass('blue_two');
	$('.form_text').addClass('form_text-active');
	}
		else {
			$("#form_two_submit").prop('disabled', true);
			$('.form_two_submit').removeClass('blue_two');
		}

//вывод переменных на экран
	$('#popupName').text($username + ',');
	$('#popupNum').text('№ ' + $num);
	$('#popupEmail').text($email);
	$('#popupPhone').text($phone);
		
	});

//функция отлавливает клик по конке Отправить, и показывает попап отправки и скрывает вторую форму
	$('.form_two_submit').on('click', function() {
		$('.form_two').fadeOut();
		$('.popup_wrapper').fadeIn();
	});

//функция отлавливает клик по ссылке, и закрывает попап
	$('.popup_close').on('click', function(e) {
		e.preventDefault();
		$('.popup_wrapper').fadeOut();
	});

});

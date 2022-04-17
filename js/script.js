$('.header__menu-icon').click(function(){
	$('.header__list').toggleClass('active');
	$('.header__logo').toggleClass('active');
	$('.header__menu-icon').toggleClass('active');
	$('body').toggleClass('lock');
})
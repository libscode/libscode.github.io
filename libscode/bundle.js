$(document).ready(function()
{
	$('.ui.form')
	.form({
	    on: 'blur',
	    inline: true,
	    keyboardShortcuts: false,
		onSuccess: function() {
			$('.ui.left.aligned.segment').addClass('loading');
		},
		onFailure: function() {
			return false;
		},
	    fields: {
			login: {
				identifier: 'login',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			email: {
				identifier: 'email',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'email',
					prompt: 'E-mail must be a valid e-mail'
				}
				]
			},
			username: {
				identifier: 'username',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^([-a-z0-9_-])+$/i]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			password: {
				identifier: 'password',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			confirm_password: {
				identifier: 'confirm_password',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			captcha: {
				identifier: 'captcha',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			recaptcha_response_field: {
				identifier: 'recaptcha_response_field',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			title_pkg: {
				identifier: 'title_pkg',
				rules: [
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			website_pkg: {
				identifier: 'website_pkg',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			deadline: {
				identifier: 'deadline',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			payment_method: {
				identifier: 'payment_method',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			privacy_package: {
				identifier: 'privacy_package',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			demo_with: {
				identifier: 'demo_with',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			synopsis_pkg: {
				identifier: 'synopsis_pkg',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			title_ticket: {
				identifier: 'title_ticket',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			content_ticket: {
				identifier: 'content_ticket',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			department_id: {
				identifier: 'department_id',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			priority: {
				identifier: 'priority',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			name: {
				identifier: 'name',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			title: {
				identifier: 'title',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			message: {
				identifier: 'message',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			content_feedback: {
				identifier: 'content_feedback',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			type_careers: {
				identifier: 'type_careers',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			content_testimonial: {
				identifier: 'content_testimonial',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			old_password: {
				identifier: 'old_password',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			new_password: {
				identifier: 'new_password',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			confirm_new_password: {
				identifier: 'confirm_new_password',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			package_name: {
				identifier: 'package_name',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			type_package: {
				identifier: 'type_package',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			about_package: {
				identifier: 'about_package',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			status_pkg: {
				identifier: 'status_pkg',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			category_id: {
				identifier: 'category_id',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			description: {
				identifier: 'description',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			content: {
				identifier: 'content',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			reply_message: {
				identifier: 'reply_message',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			skill_name: {
				identifier: 'skill_name',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			skill_percent: {
				identifier: 'skill_percent',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			skill_color: {
				identifier: 'skill_color',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			name_category: {
				identifier: 'name_category',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			name_payment: {
				identifier: 'name_payment',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			no_payment: {
				identifier: 'no_payment',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			atas_nama: {
				identifier: 'atas_nama',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			type_name: {
				identifier: 'type_name',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			region_name: {
				identifier: 'region_name',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'regExp[/^[a-zA-Z0-9 ]+$/]',
					prompt: 'Enter a valid value for this field'
				}
				]
			},
			ban_reason: {
				identifier: 'ban_reason',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
		}
	});
	$('.ui.form.reply')
	  .form({
	    on: 'blur',
	    inline: true,
	    keyboardShortcuts: false,
		onSuccess: function() {
			$('.ui.form.reply').addClass('loading');
		},
		onFailure: function() {
			return false;
		},
	    fields: {
			comment: {
				identifier: 'comment',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			content_ticket_comments: {
				identifier: 'content_ticket_comments',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
			status_ticket: {
				identifier: 'status_ticket',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				}
				]
			},
		}
	});

	$('.ui.dropdown')
	.dropdown(
	{
		on: 'click',
		transition: 'vertical flip',
	});

	$('.popup')
	  .popup();
	$('.popup-t-c')
	.popup(
	{
		position: 'top center',
		transition: 'vertical flip',
	});
	$('.popup-t-r')
	.popup(
	{
	    position: 'top right',
	    transition: 'vertical flip',
	});
	$('.popup-t-l')
	.popup(
	{
		position: 'top left',
	    transition: 'vertical flip',
	});
	$('.popup-r-c')
	  .popup(
	  {
	    position: 'right center',
	    transition: 'vertical flip',
	  });
	$('.popup-l-c')
	.popup(
	{
	    position: 'left center',
	    transition: 'vertical flip',
	});
	$('.popup-b-c')
	.popup(
	{
	    position: 'bottom center',
	    transition: 'vertical flip',
	});
	$('.popup-b-r')
	.popup(
	{
	    position: 'bottom right',
	    transition: 'vertical flip',
	});
	$('.popup-b-l')
	.popup(
	{
	    position: 'bottom left',
	    transition: 'vertical flip',
	});

	$('.popup-custom')
	.popup(
	{
	  	inline: true,
	    position: 'bottom right',
	    transition: 'vertical flip',
	});

	// popup_click
	$('.popup_click')
	.popup(
	{
	  	on: 'click',
	});
	$('.popup_click-t-c')
	.popup(
	{
	    position: 'top center',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	$('.popup_click-t-r')
	.popup(
	{
	    position: 'top right',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	$('.popup_click-t-l')
	.popup(
	{
	    position: 'top left',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	$('.popup_click-r-c')
	.popup(
	{
	    position: 'right center',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	$('.popup_click-l-c')
	.popup(
	{
	    position: 'left center',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	$('.popup_click-b-c')
	.popup(
	{
	    position: 'bottom center',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	$('.popup_click-b-r')
	.popup(
	{
	    position: 'bottom right',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	$('.popup_click-b-l')
	.popup(
	{
	    position: 'bottom left',
	    transition: 'horizontal flip',
	    on: 'click',
	});
	// popup_click

	$('.ui.accordion')
	  .accordion();

	$('.message .close').on('click', function()
	{
		$(this).closest('.message').fadeOut();
	});

	$('a[href*="#"]').smoothScroll({
		speed: 1000,
	});

	$("input[name='search']").click(function(event) {
	  event.preventDefault();
	  $.smoothScroll({
	    scrollTarget: ".box-searching",
	    speed: 1000,
	  });
	});

	current_uri = document.location.href;
	$(".jsAmenu a").each(function()
	{
	  var looping_uri = $(this).attr("href");
	  if(looping_uri === current_uri) {
	    var uri_string = $(this).attr("href");
	    $('.jsAmenu a[href="'+uri_string+'"]').addClass('teal active');
	  }
	});

	"console" in window && console.log("%cHi developer\nif you find anything unusual please report on the following page %chttps://libscode.com/security\n%cwe give you the opportunity to career %chttps://libscode.com/careers",
		"color: #F58634; font-size: 17px; line-height: 2",
		"color: #00BAFF; font-size: 17px; line-height: 2; font-style: normal",
		"color: #F58634; font-size: 17px; line-height: 2",
		"color: #00BAFF; font-size: 17px; line-height: 2; font-style: normal");

	$('.ui.form.subscribe')
	.form({
		on: 'blur',
		inline: true,
		keyboardShortcuts: false,
		onSuccess: function(LCsubscribe) {
			LCsubscribe.preventDefault();
			$('.ui.segment.subscribe').addClass('loading');
			$.ajax({
				url: "/subscribe/submit",
				type: "post",
				data: $(".subscribe").serialize(),
				cache: false,
				success: function() {
					$("#subscribe").delay(1000).fadeOut("slow");
				},
				error: function(jqXHR, textStatus, errorThrown, xhr, error) {
				  if (jqXHR.status === 0) {
				  	return false;
				  } else {
				  	return false;
				  }
				}
			});
		},
		onFailure: function() {
			return false;
		},
		fields: {
			email_subscribe: {
				identifier: 'email_subscribe',
				rules:
				[
				{
					type: 'empty',
					prompt: 'Please enter a field'
				},
				{
					type: 'email',
					prompt: 'Field must be a valid e-mail'
				}
				]
			},
		}
	});

});
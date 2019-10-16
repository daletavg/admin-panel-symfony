$(document).ready(function (e) {
	$(document).on('click', '.image-actions .delete-image-btn', function (e) {
		if (confirm('Удалить фото?')) {
			$image = $(this).parent().find('.deleteable')[0];
			console.log($image);
			deletePhoto($image);
		}
	});
	$(document).on('click', '.image-actions .get-crop-btn', function (e) {
		$image = $(this).parent().find('.croppable')[0];
		getEditPhotoForCrop($image);
	});
//
	$('[data-flatpickr-type="datetime_local"]').flatpickr({
		enableTime: true,
		dateFormat: "Y-m-d H:i",
	});
	$('[data-flatpickr-type="default"]').flatpickr();
	//
	const $fancy = $("a.fancy");
	if ($fancy.length) {
		$fancy.fancybox();
	}

	//
	const $changeSelector = '[data-send-only-changed]';
	const $changedSelector = $changeSelector + ' input, ' + $changeSelector + ' textarea, ' + $changeSelector + ' select';
	$(document).on('submit', $changeSelector, function (e) {
		const $this = $(this);
		// if ($this.find('.was-changed').length === 0) {
		// 	e.preventDefault();
		// 	message('Данные не изменены, нечего обновлять', 'warning');
		// } else {
			const $except = ':not(.was-changed):not([type="hidden"]):not([data-send-no-disable])';
			$formFields = $this.find('input' + $except + ', select' + $except + ', textarea' + $except);
			$formFields.prop('disabled', true);
		// }
	});
	$(document).on('change input', $changedSelector, function (e) {
		if (!$(this).hasClass('was-changed')) {
			$(this).toggleClass('was-changed');
		}
	});

	$(document).on('submit', '.formDeleteConfirm', function (e) {
		if (!confirm('Delete this record?')) {
			e.preventDefault();
		}
	});
	$(document).on('submit', '[data-form-confirm]', function (e) {
		if (!confirm('Are you sure?')) {
			e.preventDefault();
		}
	});
});

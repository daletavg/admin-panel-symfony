$(document).ready(function (e) {
	$croppable = $('.croppable.deleteable');
	if($croppable.length){
		$.each($croppable, function ($key, $image) {
			$crop = '<span class="get-crop-btn" title="Редактировать"><i class="fa fa-edit fa-2x"></i></span>';
			$delete = '<span class="delete-image-btn" title="Удалить"><i class="fa fa-times fa-2x"></i></span>';
			$wrap = '<div class="img-popup-container">' + '</div>';
			$($image).wrap($wrap);
			$($image).parents('[data-image-actions]').append($delete + $crop);
		})
	}
})
$(document).ready(function (e) {
	$(document).on('click', '[data-additional-field]', function (e) {
		e.preventDefault();
		$findParent = $(this).parents('[data-cloneable-row]');
		$findParent.clone().insertAfter( $findParent );
	});
	//
	$(document).on('click', '[data-remove-suffix]', function (e) {
		e.preventDefault();
		$findParent = $(this).parents('[data-cloneable-row]');
		if(confirm('Удалить запись?')) $findParent.remove();
	});
})
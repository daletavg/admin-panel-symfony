function saveCroppedPhoto($image) {
    if (!$image) return false;
    // $image = $($image);
    $id = $image.data('image-id') || '';
    $table = $image.data('image-table') || '';
    $base64 = $image.inBase64 || '';
    $primaryId = $image.data('primary-id') || false;
    $query = 'id=' + $id + '&table=' + $table + '&base64=' + $base64;
    if ($primaryId) $query += '&primary_id=' + $primaryId;
    $.ajax({
        url: appUrl('/admin/photos/edit'),
        data: $query,
        dataType: "json",
        cache: false,
        method: 'post',
        success: function ($data) {
            messageResponse($data);
            if ($data.status) {
                $updatePhotos = $('[data-image-id="' + $id + '"]');
				updateImageUrl($updatePhotos, $data.image);
				if ($updatePhotos.length) {
                	console.log($updatePhotos)
                    $('#cropWrapperModal').modal('hide');
                    $.each($updatePhotos, function ($key, $image) {
                        $src = $($image).attr('src');
                        $src = $src.split('?')[0];
                        $src = $src + '?' + time();
                        $($image).attr('src',  $src);
                    })
                }
            }
        }
    });
}

function updateImageUrl($image, $url) {
    if ($url){
		$image.attr('src', $url);
    }
}

function getEditPhotoForCrop($image) {
    if (!$image) return false;
    $image = $($image);
    $cropWrapperModal = $('.cropWrapperModal');
    if (!$cropWrapperModal.length) $('body').append('<div class="cropWrapperModal"></div>');
    else $cropWrapperModal.html('');

    $id = $image.data('image-id') || '';
    $table = $image.data('image-table') || '';
    $primaryId = $image.data('primary-id') || false;
    $query = 'id=' + $id + '&table=' + $table;
    if ($primaryId) $query += '&primary_id=' + $primaryId;
    $.ajax({
        url: appUrl('/admin/photos/get-cropper'),
        data: $query,
        dataType: "json",
        cache: false,
        method: 'post',
        success: function ($data) {
            messageResponse($data);
            $('.cropWrapperModal').html($data.content);
            $('#cropWrapperModal').modal();
        }
    });
}

function deletePhoto($image) {
    if (!$image) return false;
    $image = $($image)
    $id = $image.data('image-id') || '';
    $table = $image.data('image-table') || '';
    $primaryId = $image.data('primary-id') || false;
    $query = 'id=' + $id + '&table=' + $table;
    if ($primaryId) $query += '&primary_id=' + $primaryId;
    $.ajax({
        url: appUrl('/admin/photos/delete'),
        data: $query,
        dataType: "json",
        cache: false,
        method: 'post',
        success: function ($data) {
            messageResponse($data);
            if ($data.status === 'success') {
                $image.parents('.image-actions').remove();
            }
        }
    });
}

function messageResponse(res) {
    if (res.status === 'error') {
        res.status = 'danger';
    }
    if (typeof res.message !== 'undefined') {
        message(res.message, res.status);
    }
}

sort = {
	getInstance : function () {
		return Object.assign({}, this);
	},
    'container': '[data-sortable-container]',
    'handle': '.handle',
    'draggable': '.draggable',
    'single': '[data-sort]',
    'url': '/admin/ajax/sort',
    'init': function () {
        $this = this;
        $sortable = document.querySelectorAll(this.container);
        if (!$sortable.length) return false;
        $sortable.forEach(function ($container) {
            Sortable.create($container, {
                draggable: $this.draggable,
                handle: $this.handle,
                onUpdate: $this.onUpdateSort
            });

        });
    },
    'onUpdateSort':function (e) {
		$sortArray = [];
		$wrapper = $(e.target);
		$table = $wrapper.data('table');
		$rows = $wrapper.find($this.single);
		$.each($rows, function ($key, $row) {
			$id = $($row).data('id');
			$sortArray[$key] = $id;
		});
		if ($sortArray && $table) {
			$this.update($table, $sortArray);
		}
	},
    'update': function ($table, $sortArray) {
        $this = this;
        if (!$table || !$sortArray) return false;
        let $query = '';
        $sortArray = JSON.stringify($sortArray);
        $query = 'sort=' + $sortArray + '&' + 'table=' + $table;
        $.post({
            url: $this.url,
            data: $query,
            dataType: "json",
            cache: false,
            success: function (res) {
                if (res.status === 'success') {
                    $this.onUpdateSuccess(res);
                }
            }
        });
    },
    'onUpdateSuccess': function (data) {
        messageResponse(data);
    }
};

function deleteItem($item) {
    if (!confirm('Delete?')) {
        return false;
    }
    const $this = $($item);
    const $id = $this.data('id');
    const $table = $this.data('table');
    const $data = {
        'id': $id,
        'table': $table
    };
    const $url = APP_URL + '/admin/ajax/delete';
    if ($table && $id) {
        $.post($url, $data)
            .done(function (data) {
                if (data.status === 'success') {
                    $this.parents('[data-deleteable-row]').remove();
                }
            })
            .always(function (data) {
                messageResponse(data)
            });
    }
}

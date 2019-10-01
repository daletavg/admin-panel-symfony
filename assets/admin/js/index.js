$('[data-img-delete]').on('click', function () {

    let sendData = {
        imageId: $(this).attr('data-id'),
        editId:$(this).attr('data-edit-id')
    };
    console.log(sendData);
    let imageName=$(this).attr('data-name');
    let thisItem = $(this);

    $.ajax('/admin/ajax/delete-image', {
        type: 'POST',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        data: sendData,
        success: function () {
            $('#'+imageName).attr('src',window.origin+'/img/header-logo.svg');
            thisItem.remove();
            alert('Изображение успешно удалено!')
        },
        error: function () {
            alert('Что-то пошло не так')
        }
    });
});

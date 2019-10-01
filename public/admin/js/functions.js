function time() {
    return Math.round((new Date()).getTime() / 1000);
}

function appUrl($url) {
    return APP_URL + $url;
}

function langUrl($url) {
    if ($locale.length) $url = '/' + $locale + $url;
    return $url;
}

function bootstrapAlert($text, $type = 'info') {
    if ($type === 'error'){
        $type = 'danger';
    }
    return '<div class="alert alert-' + $type + '">' + $text + '</div>';
}

function message($text, $type) {
    if (typeof $type === 'undefined') $type = 'info';
    $.notify($text, {type: $type});
}

function copyClickBoard($elm) {
    $elm = $($elm);
    let $originVal = $elm.val();
    let $text = '';
    let $prep = $elm.attr('data-prepend');
    if (typeof $prep !== 'undefined') {
        $text = $prep;
    }
    $text += $originVal;
    let $append = $elm.attr('data-append');
    if (typeof $append !== 'undefined') {
        $text += $append;
    }
    $elm.val($text);

    /* Select the text field */
    $elm.focus();
    $elm.select();

    /* Copy the text inside the text field */
    if (document.execCommand("copy")) {
        message('Содержимое скопировано в буфер обмена');
    }

    if ($text !== $originVal) {
        $elm.val($originVal);
    }

}

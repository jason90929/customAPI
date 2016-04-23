/**
 * 以 BootBox 方式顯示成功訊息
 */
showSuccessBootBox = function(callBack) {
    showSuccessBootBoxCustom("操作成功", callBack);
};

/**
 * 以 BootBox 方式顯示成功訊息, 並傳入自訂義訊息
 */
showSuccessBootBoxCustom = function(successMsg, callBack) {
    var $successDiv = $('div[id="successBootBox"]');
    $('span[id="msgSpan"]', $successDiv).empty().html(successMsg);

    bootbox.alert({
        closeButton: false,
        message: $successDiv.html(),
        callback: callBack || function () { /* your callback code */
        }
    });
};

/**
 * 以 BootBox 方式顯示成功警示訊息
 */
showSuccessWithWarringBootBox = function(successMsg, warringMsg, callBack) {
    var $containerDiv = $('div[id="successWithWarringBootBox"]');
    successMsg = successMsg || '操作成功';
    warringMsg = warringMsg || '提示訊息';

    $('span#msgSuccessSpan', $containerDiv).empty().html(successMsg);
    $('span#msgWarringSpan', $containerDiv).empty().html(warringMsg);

    bootbox.alert({
        closeButton: false,
        message: $containerDiv.html(),
        callback: callBack || function () { /* your callback code */
        }
    });
};

/**
 * 以 BootBox 方式顯示警示訊息
 */
showWarringBootBox = function(warringMsg, callBack) {
    var $warringDiv = $('div[id="warringBootBox"]');
    $('span[id="msgSpan"]', $warringDiv).empty().html(warringMsg);

    bootbox.alert({
        closeButton: false,
        message: $warringDiv.html(),
        callback: callBack || function () { /* your callback code */
        }
    });
};

/**
 * 以 BootBox 方式顯示失敗訊息
 */
showErrorBootBox = function (errorMsg, callBack) {
    $('span[id="msgSpan"]').empty().html(errorMsg);

    var $failDiv = $('div[id="failBootBox"]');

    bootbox.alert({
        closeButton: false,
        message: $failDiv.html(),
        callback: callBack || function () { /* your callback code */
        }
    });
};
/*
 * Email驗證
 * email: Email信箱
 */
function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

/*
 * Date驗證
 * date: yyyy/mm/dd 或 yyyy-mm-dd
 */
function isValidDate(date) {
    var matches = /^(\d{4})[-\/](\d{2})[-\/](\d{2})$/.exec(date);
    if (matches == null) return false;
    var y = matches[1];
    var m = matches[2] - 1;
    var d = matches[3];
    var composedDate = new Date(y, m, d);
    return composedDate.getDate() == d && composedDate.getMonth() == m && composedDate.getFullYear() == y;
}
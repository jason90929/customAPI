/*
 * 上傳圖片後抓取base64設定最大長寬，並再轉base64(壓縮圖片)
 */
var fu = document.getElementById("postImage"); // grab the file browser
var f = fu.files[0]; // grab the file
var fr = new FileReader(); // create a new file reader
fr.readAsDataURL(f); // base 64 it
fr.onload = function() {
    var tempImage = new Image();
    tempImage.src = fr.result; // to get the base64 result
    setTimeout(function() { // adding a .2 second delay because of some strange timing problems on ios
        var height = tempImage.height;
        var width = tempImage.width;
        if (height > 900) { // max height for our purposes is 900 pixels
            width = width / (height / 900);
            height = 900;
        }
        if (width > 1200) { // max width for our purposes is 1200 pixels
            height = height / (width / 1200);
            width = 1200;
        }
        var c = document.createElement('canvas');
        c.width = width;
        c.height = height;
        var ctx = c.getContext("2d");
        ctx.drawImage(tempImage, 0, 0, width, height);
        var b64str = c.toDataURL("image/jpeg"); // grab a base64 copy of the resized image as a jpeg
    }, 200);
};

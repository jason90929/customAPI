$(function()
{
     /**
     * 字串去除頭尾的空白
     */
     if (!String.prototype.trim)
     {
       String.prototype.trim = function ()
       {
            return this.replace(/^\s+|\s+$/g, '');
       };
     }

     /**
     * 字串不足指定的長度時，自動於左方以指定的字串補足
     *
     * @param padString: 指定的補足字串
     * @param length: 指定的字串長度
     */
     String.prototype.leftPad = function (padString, length)
     {
         var str = this;
         while (str.length < length)
         {
              str = padString + str;
         }

         return str;
     };

     /**
     * 字串不足指定的長度時，自動於右方以指定的字串補足
     *
     * @param padString: 指定的補足字串
     * @param length: 指定的字串長度
     */
     String.prototype.rightPad = function (padString, length)
     {
         var str = this;
         while (str.length < length)
         {
              str += padString;
         }

         return str;
     };

     /**
     * 將字串加入千分位
     */
     String.prototype.addComma = function()
     {
          var n = '';
          for(var i = 0 ; i < this.length ; i++)
          {
               n += this[i];
          }

          n = n.trim();
          if (!/^((-*\d+\.?\d*)|(0))$/.test(n))
          {
               var newValue = /^((-*\d+\.?\d*)|(0))$/.exec(n);

               if(n.match(/^\./)) // TODO 0.123 -> .123 (先不強制歸零)
               {
                    return n;
               }
               else if (newValue != null)
               {
                    if (parseFloat(newValue, 10))
                    {
                         n = newValue;
                    }
                    else
                    {
                         n = '0';
                    }
               }
               else
               {
                    n = '0';
               }
          }

          if (parseFloat(n, 10) == 0)
          {
               if (n.match(/\.$/)) // TODO 避免無法輸入小數點  0.
               {
                    n = '0.';
               }
               else if(n.split('.').length == 2) // 數字含有小數點. ex: 0.0...
               {
                    if(n.split('.')[1].indexOf('0')!= -1) // 小數位數含有0
                    {
                         n = '0.' + n.split('.')[1];
                    }
               }
               else
               {
                    n = '0';
               }
          }
          else
          {
               if(n.match(/\.$/)){ // TODO 避免無法輸入小數點  0.
                    var tag = n.split('.');
                    n = parseFloat(tag[0], 10).toString() + '.';
               }
               else if(n.split('.').length == 2) // 數字含有小數點. ex: 10.0...
               {
                    if(n.split('.')[1].indexOf('0')!= -1) // 小數位數含有0
                    {
                         n = n.split('.')[0] + '.' + n.split('.')[1];
                    }
               }
               else{
                    n = parseFloat(n, 10).toString();
               }
          }

          n += '';
          var arr = n.split('.');
          var re = /(\d{1,3})(?=(\d{3})+$)/g;
          return arr[0].replace(re, '$1,') + (arr.length == 2 ? '.' + arr[1] : '');
     };

     /**
     * 將字串移除千分位
     */
     String.prototype.removeComma = function()
     {
          var n = '';
          for(var i = 0 ; i < this.length ; i++)
          {
               n += this[i];
          }
          return n.replace(/[,]+/g, '');
     };

     /**
     * 字串是否為數字
     */
     String.prototype.isNumeric = function()
     {
          var n = '';
          for(var i = 0 ; i < this.length ; i++)
          {
               n += this[i];
          }

          n = n.trim();

          return /^((-*\d+)|(0))$/.test(n);
     };

});


/**
* 針對數字欄位動態加入千分位
*
* @param input
*/
function dynamicAddComma(input)
{
     var $input = $(input);
     var insertPos = input.selectionEnd; // 新增字元的位置
     var totalLen = $(input).val().length; // 原本字串長度
     var newPos;
     var newVal = $input.val().removeComma(); // removeComma

     $input.val(newVal.addComma()); // addComma

     var newLen = $input.val().length; // 新增後字串長度

     if(totalLen == newLen) // 判斷input游標位置
     {
          newPos = insertPos;
     }
     else
     {
          if(totalLen > newLen)
          {
               newPos = insertPos - 1;
          }
          else
          {
               newPos = insertPos + 1;
          }
     }

     setInputTargetPos(input, newPos);
}

/**
* 綁定input游標位置
*/
function setSelectionRange(input, selectionStart, selectionEnd)
{
       if (input.setSelectionRange) // HTMLInputElement.setSelectionRange
       {
         input.focus();
         input.setSelectionRange(selectionStart, selectionEnd);
       }
       else if (input.createTextRange)  // HTMLInputElement.createTextRange
       {
         var range = input.createTextRange();
         range.collapse(true);
         range.moveEnd('character', selectionEnd);
         range.moveStart('character', selectionStart);
         range.select();
       }
}

/**
* 設定input游標位置
*/
function setInputTargetPos (input, pos)
{
     setSelectionRange(input, pos, pos);
}

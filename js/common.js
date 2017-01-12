var signMethod = {

  // 显示toast
  showToast: function (text) {
    if (text && text.length > 0) {
      var cArray = $(document.body).children('.toastParent');
      if (cArray.length) {
        //当前已创建toast时，不再创建
        if ($('.toastParent').is(':hidden')) {
          //当前隐藏中，重新显示即可
          $('.toastChild').html(text);
          signMethod.fadeInToast();
        }else {
          //显示中的不作处理
          return;
        }
      }else {
        var sdiv = "<div class='toastParent' style='position: fixed; width: 100%; top: 35%; margin: 0px; display:none'><div class='toastChild' style='display: table; margin: 0 auto; max-width: 85%; padding: 10px; text-align: center; background-color: rgba(0, 0, 0, 0.6); border-radius: 4px; line-height: 20px; color: white;'>" + text + "</div></div>"; 
        $(document.body).append(sdiv); 
        signMethod.fadeInToast();
      }
    }
  },

  //淡入toast
  fadeInToast: function () {
    $('.toastParent').fadeIn();
    setTimeout(function(){
      $('.toastParent').fadeOut();
    }, 1500);
  },

  // 获取url入参
  getRequestParams: function () {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
      strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
        }
    }
    return theRequest;
  },

  //制保留2位小数，如：2，会在2后面补上00.即2.00    
  toDecimal2: function (obj) {   
    var i = parseInt(obj);
    if (isNaN(i)) {
      return '0.00';
    }
    var y = Math.abs(i/1000);
    var s = y.toString();   
    var rs = s.indexOf('.');    
    if (rs < 0) {    
        rs = s.length;    
        s += '.';    
    }    
    while (s.length <= rs + 2) {    
        s += '0';    
    }    
    return s;   
  },

  // 添加cookie
  addCookie: function (objName,objValue,objHours){//添加cookie 
    var str = objName + "=" + escape(objValue) + ";path=/;"; 
    if(objHours > 0){//为0时不设定过期时间，浏览器关闭时cookie自动消失 
      var date = new Date(); 
      var ms = objHours*3600*1000; 
      date.setTime(date.getTime() + ms); 
      str += "; expires=" + date.toGMTString(); 
    } 
    document.cookie = str; 
  },

  /* 获取cookie */
  getCookie: function (key) {
    console.log(document.cookie);
       var coo=unescape(document.cookie);//解码
       var arr1=coo.split('; ');//第一次分解后是数组
      for (var i=0;i<arr1.length;i++){//第二次循环拆分数组
          var arr2=arr1[i].split('=');
          if(arr2[0]==key){
              return arr2[1];
          }     
      }
  },

  /* 删除cookie */
  removeCookie: function (key) {
    setCookie(key,'',-1);
  },

  // 是否是可用的字符串
  isValidString: function (obj) { 
    if ((typeof(obj) == 'string') && (obj.constructor == String) && (obj.length > 0)) {
      return true;
    }
    return false;
  },

  // 安全获取字符串
  safeGetStringValue: function (obj) { 
    if (signMethod.isValidString(obj)) {
      return obj;
    }
    return "";
  },
}




 

 







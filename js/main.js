setInterval(function () {
   update();
}, 1000);

function update() {
   var currentdate = new Date();
   var arrTime = [currentdate.getHours(),currentdate.getMinutes(),currentdate.getSeconds()];
   //arrTime = [23,59,59];
   var i = 0;
   var d = 1;
   do{
      lightsOn(d, Math.floor(arrTime[i]/10));
      lightsOn(d+1, arrTime[i] % 10);
      d=d+2;
      i++;
   }
   while(i<arrTime.length);
}

/**
 * 
 * @param digit
 * @param lights
 */
function lightsOn(digit, lights) {
   if (lights) {
      var i = 1;
      do {
         var $el = $(".linearWatch ul:nth-child(" + digit + ") li:nth-child(" + i + ")");
         $el.addClass("active");
         i++;
      }
      while (i<=lights);
   }else{
      $(".linearWatch ul:nth-child(" + digit + ") li").removeClass("active");
   }
}

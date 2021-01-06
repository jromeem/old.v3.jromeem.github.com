var comp = new RegExp(location.host);

$('a').each(function(){
   if(comp.test($(this).attr('href'))){
       // a link that contains the current host           
       $(this).addClass('local');
   }
   else{
       // a link that does not contain the current host
       $(this).addClass('external');
   }
});
$(document).ready(function(){
  var balance;

 // deposits #amount1 to #balance1 but isnt storing
   $('#deposit1').click(function(){
   balance = $('#amount1').val();
   $('#balance1').html(balance);
   //return this.balance;
   debugger;
    })

// // deposits #amount2 to #balance2 but isnt storing
//    $('#deposit2').click(function(){
//    $('#balance2').html($('#amount2').val());
//     balance = $('#amount2');
//    debugger;
//     })

   });
//});





;
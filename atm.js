$(document).ready(function(){
  var balance;
  var withdraw;
  var savBalance;
  var savWithdraw;

 // deposits #amount1 to #balance1 & is stored in var balance
   $('#deposit1').click(function(){
   balance = $('#amount1').val();
   $('#balance1').html(balance);
   //debugger;
   
   //withdraws amount and updates balance
   $('#withdraw1').click(function(){
    withdraw = $('#amount1').val();
    balance = balance - withdraw;
    $('#balance1').html(balance);
    debugger;
   })
    })

   $('#deposit2').click(function(){
   savBalance = $('#amount2').val();
   $('#balance2').html(savBalance);
   //debugger;
   
   //withdraws amount and updates balance
   $('#withdraw2').click(function(){
    savWithdraw = $('#amount2').val();
    savBalance = savBalance - savWithdraw;
    $('#balance2').html(savBalance);
    debugger;
   })
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
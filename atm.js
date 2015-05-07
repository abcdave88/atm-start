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
     })
     //withdraws amount and updates balance
       $('#withdraw1').click(function(){
        withdraw = $('#amount1').val();
        balance = balance - withdraw;
        debugger;
        $('#balance1').html(balance); //takes double from savings, needs another variable.
        if (withdraw > balance) {
          var diff = (withdraw - balance);
          debugger;
          $('#balance2').html(savBalance - diff);
          $('#balance1').html(0);
        debugger;
        }
        
   
 })
       //deposits into savings
       $('#deposit2').click(function(){
       savBalance = $('#amount2').val();
       $('#balance2').html(savBalance);
       //debugger;
       
      })  
       //withdraws amount and updates savings
       $('#withdraw2').click(function(){
        savWithdraw = $('#amount2').val();
        savBalance = savBalance - savWithdraw;
        $('#balance2').html(savBalance);
        //debugger;
  
 })
});






;
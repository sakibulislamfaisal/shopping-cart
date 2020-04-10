const plus1 = document.getElementById("plus-1");
plus1.addEventListener("click",function(){
   
    const input1 = document.getElementById("input-1").value;
    const amount1 = document.getElementById("amount-1").innerText;
    const subTotal = document.getElementById("sub-total").innerText;
    const tax = document.getElementById("tax").innerText;
    const total = document.getElementById("total").innerText;
    if(input1==0){
         document.getElementById("minus-1").disabled = false;
    }
    else{
         //convert FLoat all value
         const inputNumber = parseFloat(input1);
         const amountNumber = parseFloat(amount1);
         const subTotalNumber = parseFloat(subTotal);
         const taxNumber = parseFloat(tax);
         const totalNUmber = parseFloat(total);
         //calculation part of product one
         const increasePlus = inputNumber + 1;
         const increaseAmount = increasePlus * 100 ;
         const increaseTax = (increaseAmount * 15/100) ;
         const increaseTotal = Math.ceil(increaseAmount + increaseTax);
 
         document.getElementById("input-1").value = increasePlus;
         document.getElementById("amount-1").innerText = increaseAmount;
         document.getElementById("sub-total").innerText= increaseAmount;
         document.getElementById("tax").innerText = increaseTax;
         document.getElementById("total").innerText = increaseTotal;
    }
  
})
//minus button event handler 
const minus1 = document.getElementById("minus-1");
minus1.addEventListener("click",function(){
   
     const input2 = document.getElementById("input-1").value;
     const amount2 = document.getElementById("amount-1").innerText;
     const subTotal2 = document.getElementById("sub-total").innerText;
     const tax2 = document.getElementById("tax").innerText;
     const total2 = document.getElementById("total").innerText;

     const input2Number = parseFloat(input2);
     const amount2Number = parseFloat(amount2);
     const subTotal2Number = parseFloat(subTotal2);
     const tax2Number = parseFloat(tax2);
     const total2Number = parseFloat(total2);

     if(input2Number<2){
          document.getElementById("minus-1").disabled = true;
     }

     else{
         //calculation part
        const decreaseInput2Number = input2 - 1 ;
        const decreaseAmount2Number = amount2Number - 100;
        const decreaseTax2Number = (decreaseAmount2Number * 15/100);
        const afterDecreaseTotalIs = decreaseAmount2Number + decreaseTax2Number;
   
        document.getElementById("input-1").value = decreaseInput2Number;
        document.getElementById("amount-1").innerText = decreaseAmount2Number;
        document.getElementById("sub-total").innerText= decreaseAmount2Number;
        document.getElementById("tax").innerText = decreaseTax2Number;
        document.getElementById("total").innerText = afterDecreaseTotalIs;
   
     }
     
})

//Product 2 operation handler  plus button

const plus2 = document.getElementById("plus-2");
plus2.addEventListener("click",function(){
   const input2 = document.getElementById("input-2").value;
   const amount2 = document.getElementById("amount-2").innerText;
   const subTotalAmount2 = document.getElementById("sub-total").innerText;
   const taxRate2 = document.getElementById("tax").innerText;
   const totalAmount2 = document.getElementById("total").innerText;

   if(input2==0){
        document.getElementById("minus-2").disabled = false;
   }
   else{
        const input2Number = parseFloat(input2);
        const amount2Number = parseFloat(amount2);
        const subTotalAmount2Number = parseFloat(subTotalAmount2);
        const taxRate2Number = parseFloat(taxRate2);
        const totalAmount2Number = parseFloat(totalAmount2);

        const increaseInput2 = input2Number + 1 ;
        const increaseAmount2 = increaseInput2 * 59 ;
        const increaseTaxRate2 = (increaseAmount2 * 15 /100);
        const increaseTotalAmount2 = Math.ceil(increaseAmount2 + increaseTaxRate2);

        document.getElementById("input-2").value = increaseInput2;
        document.getElementById("amount-2").innerText = increaseAmount2;
        document.getElementById("sub-total").innerText = increaseAmount2;
        document.getElementById("tax").innerText = increaseTaxRate2;
        document.getElementById("total").innerText = increaseTotalAmount2;

   }
})

//minus-2 button event handler 

const minus2 = document.getElementById("minus-2");
 minus2.addEventListener("click",function(){
      const NegInput2 = document.getElementById("input-2").value;
      const NegAmount2 = document.getElementById("amount-2").innerText;
      const NegSubTotal2 = document.getElementById("sub-total").innerText;
      const NegTax2  = document.getElementById("tax").innerText;
      const NegTotalAmount2 = document.getElementById("total").innerText;

      const NegInput2Number = parseFloat(NegInput2);
      const NegAmount2Number = parseFloat(NegAmount2);
      const NegSubTotal2Number = parseFloat(NegSubTotal2);
      const NegTax2Number = parseFloat(NegTax2);
      const NegTotalAmount2Number = parseFloat(NegTotalAmount2);

      if(NegInput2 < 2){
           document.getElementById("minus-2").disabled = true;

      }
      else{
          

           //calculation part of product 2
           const decreaseNegInput2Number = NegInput2Number - 1;
           const decreaseNegAmount2Number = NegAmount2Number - 59 ;
           const decreaseNegTax2Number = (decreaseNegAmount2Number * 15 /100);
           const decreaseNegTotalAmount2Number = decreaseNegAmount2Number + decreaseNegTax2Number;

           document.getElementById("input-2").value = decreaseNegInput2Number;
           document.getElementById("amount-2").innerText
           = decreaseNegAmount2Number;
           document.getElementById("sub-total").innerText = decreaseNegAmount2Number;
           document.getElementById("tax").innerText = decreaseNegTax2Number;
           document.getElementById("total").innerText = decreaseNegTotalAmount2Number;
      }
})

//Total amount of TK Submit 

// function product2 (){
//     const getTotalTK = document.getElementById("total-amount-tk");
// getTotalTK.addEventListener("click",function(){
//      document.getElementById("cart-body").style.display = "none";
//      document.getElementById("total-cost").innerText =TotalProduct2;
// })
// }

const cart1 = document.getElementById("cart-remove-1");
cart1.addEventListener("click",function(){
     document.getElementById("cart-1").style.display="none";
})
const cart2 = document.getElementById("cart-remove-2");
cart2.addEventListener("click",function(){
     document.getElementById("cart-2").style.display="none";
})
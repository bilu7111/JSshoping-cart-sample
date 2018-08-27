//Referencing to Form with ID//
var cart=document.getElementById("cart");
//Referencing to box that shows the calculated result//
var total=document.getElementById("estimate");
//Referencing to box that shows price for each product//
var rate=document.getElementsByClassName("rate");

//Making the price object constant so it can't be altered externally//
const price=[25,29.99,19,24.99];
//The content is refreshed upon DOM being loaded//
document.addEventListener("DOMContentLoaded",function(){
//Showing the price for each product in it's respective price box//
price.map(function(p,i){
/*Notice I use the index of price object, as the length of price is the same as of rate length
Leaving price for any product may cause an error*/
rate[i].innerHTML="Price:"+p.toFixed(2)+"$";
}
);
//Adding event listener to form//
cart.addEventListener("submit",function(event){
//Make the estimate equal to zero so last calculated result is not included//
let estimate=0;
//Preventing the default browser refresh behaviour of form upon submission//
event.preventDefault();
/*Remember, the whole form element also contains a submit button so that's why
[[i<(cart.length-1)]]*/
for(i=0;i<(cart.length-2);i++){
  let temp=parseFloat(cart[i].value*price[i]);
  estimate=temp+estimate;
}
//Changing the html of total estimation box to calculated result//
total.innerHTML=estimate.toFixed(2)+"$";
});
});

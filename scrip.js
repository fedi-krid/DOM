// console.log(document);
const btnplus = document.getElementsByClassName("plus");
// console.log(btnplus);
const total = document.getElementById("total");
// console.log(total);
const buttons = document.getElementsByTagName("i");
// console.log(buttons);
const plusElement = document.querySelectorAll("#total");
// console.log(plusElement);
const all = document.querySelectorAll("i");
// console.log(all);
const btnPlusArry = document.getElementsByClassName("plus");
const checkboxInputes=document.querySelectorAll("input")
console.log(checkboxInputes)
// console.log(btnPlusArry);
const btnminus= document.getElementsByClassName("minus")
const likeArry=document.getElementsByClassName("like")
// console.log(likeArry)

for (var i = 0; i < btnPlusArry.length; i++) {
btnPlusArry[i].addEventListener("click", increment);
checkboxInputes[i].addEventListener("click",totalPrice)
btnminus[i].addEventListener("click",minus)
likeArry[i].addEventListener("click",lik)

}

function increment(event){
    // console.log(event)
    const btnPlus=event.target
    // console.log(btnPlus)
    const divElt=btnPlus.parentElement
    // console.log(divElt)
    const quantityTag=divElt.querySelector("p")
    // console.log(quantityTag)
    var quantityValue=parseInt(quantityTag.innerHTML)
    quantityValue++
    // console.log(quantityValue)
    quantityTag.innerHTML=quantityValue
    const trElement=divElt.parentElement.parentElement
    // console.log(trElement)
    const unitePriceValue=Number(trElement.querySelector(".unitPrice").innerHTML)
    // console.log(unitePriceValue)
    const priceTag=trElement.querySelector(".price")
    // console.log(priceTag)
    var priceValue=Number(priceTag.innerHTML)
    // console.log(priceValue)
    priceValue=quantityValue*unitePriceValue
    // console.log(priceValue)
    priceTag.innerHTML=priceValue
    

}
function minus(event){
     // console.log(event)
    const btnminus=event.target
     // console.log(btnPlus)
    const divElt=btnminus.parentElement
     // console.log(divElt)
    const quantityTag=divElt.querySelector("p")
     // console.log(quantityTag)
    var quantityValue=parseInt(quantityTag.innerHTML)
    if(quantityValue>0){
        quantityValue--
    }
     // console.log(quantityValue)
    quantityTag.innerHTML=quantityValue
    const trElement=divElt.parentElement.parentElement
     // console.log(trElement)
    const unitePriceValue=Number(trElement.querySelector(".unitPrice").innerHTML)
     // console.log(unitePriceValue)
    const priceTag=trElement.querySelector(".price")
     // console.log(priceTag)
    var priceValue=Number(priceTag.innerHTML)
     // console.log(priceValue)
    priceValue=quantityValue*unitePriceValue
     // console.log(priceValue)
    priceTag.innerHTML=priceValue
    
}

    function lik(e){
        const lk=e.target
        console.log(lk)
    if(lk.style.color =='white'){ lk.style.color = 'red';}
    else{lk.style.color ='white'}   
    }

const deleteArry=document.getElementsByClassName("delete")
console.log(deleteArry)
for(var i=0;i<deleteArry.length;i++){
    deleteArry[i].addEventListener("click", deel)}
    
    function deel(e){
        const del=e.target
        const trElement=del.parentElement.parentElement.parentElement.parentElement
        console.log(trElement)
        trElement.remove();
}
function totalPrice(e){
    const checkboxElement=e.target;
    console.log(checkboxElement);
    const priceValue=Number(checkboxElement.parentElement.parentElement.querySelector(".price").innerHTML)
    // console.log(priceValue)
    var totalTag=document.querySelector("#total")
    var totalValue=parseInt(totalTag.innerHTML)
    console.log(totalValue)
    const btnPlus=checkboxElement.parentElement.parentElement.querySelector(".plus");
    if(checkboxElement.checked==true){
        totalValue+=priceValue
        totalTag.innerHTML=totalValue 
    }else{
        totalValue+=priceValue;
        console.log(totalValue)
        totalTag.innerHTML=totalValue
    }
}

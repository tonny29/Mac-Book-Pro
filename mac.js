// one \\
function property(propertyId,number){
  const propertyInput=document.getElementById(propertyId);
  let propertyNumber=propertyInput.innerText;
  propertyNumber=parseFloat(propertyNumber);
  propertyNumber=number;
  propertyInput.innerText=propertyNumber;
  totalPrice();
}
//one\\
document.getElementById('8GB-memory').addEventListener('click',function(){
    property('memory-add',0);
});
document.getElementById('16GB-memory').addEventListener('click',function(){
    property('memory-add',180);
});
document.getElementById('226GB').addEventListener('click',function(){
    property('storage-add',0);
});
document.getElementById('512GB').addEventListener('click',function(){
    property('storage-add',100);
});
document.getElementById('1TB').addEventListener('click',function(){
    property('storage-add',180);
});
document.getElementById('free-delivery').addEventListener('click',function(){
    property('delivery-add',0);
});
document.getElementById('delivery-charge').addEventListener('click',function(){
    property('delivery-add',20);
});
//two\\
function totalPrice(){
    const memoryCost=document.getElementById('memory-add');
    const memoryCostVlue=parseFloat(memoryCost.innerText);
    const storageCost=document.getElementById('storage-add');
    const storageCostVlue=parseFloat(storageCost.innerText);
    const deliveryCost=document.getElementById('delivery-add');
    const deliveryCostVlue=parseFloat(deliveryCost.innerText);

    const totalAmount=memoryCostVlue+storageCostVlue+deliveryCostVlue+1299;
    const totalPrice=document.getElementById('total-price');
    totalPrice.innerText=totalAmount;

    const discountTotal=document.getElementById('discount-total');
    discountTotal.innerText=totalAmount;
}
//three
function cuponcode(){
    const totalPrice=document.getElementById('total-price');
    const totalValue=parseFloat(totalPrice.innerText);
    const discount=(totalValue/100)*20;
    const discountTotal=document.getElementById('discount-total');
    const cuponInput=document.getElementById('cupon-input');
    const cuponValue=cuponInput.value;
    if(cuponValue.toLowerCase()=='stevekaku'.toLowerCase()){
        discountTotal.innerText=totalValue-discount;
        cuponInput.value='';
    }
}
document.getElementById('cupon-button').addEventListener('click',function(){
    cuponcode();
   
});

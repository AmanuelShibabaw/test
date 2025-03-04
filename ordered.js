 
 generated='';
 products = JSON.parse(localStorage.getItem('products'));
products.forEach((values)=>{
    const html = `
  <div class="main-order-div-container">
   <div class="im-or">
    <img src="${values.image}" alt="">
   </div>
   <div class="or-disc">
    <div class="disc">
        Movie details
    </div>
    <div class="det">
    <div class="details">movie name :<div class="test">${values.name}</div></div>
    <div class="details">purchased date :<div class="test">12-21-2024</div></div>
    <div class="details">price :<div class="test">${values.price}</div></div>
    </div>
   </div>

     </div>
`;
generated += html;
document.querySelector('.main-order-div-container1').innerHTML = generated;
})

 let  products = [
    {
        name:'blacklight 2022 full movie',
        image:'images/Blacklight.2022.jpeg',
        price: 54.00
    }
];
if(!(JSON.parse(localStorage.getItem('products')))){
      products = [
        {
            name:'blacklight 2022 full movie',
            image:'images/Blacklight.2022.jpeg',
            price: 54.00
        }
    ]
}

let generated='';
let userimage='images/jason bourne.jpg';
function addToorder(){
products.push({
    name:'Read notice',
    image:userimage,
    price: 55.00
});
localStorage.setItem('products',JSON.stringify(products));
display();
console.log(products);
}
/*
function tester(){
    const userdata =document.querySelector('#fil').value;
    userimage=userdata;
    console.log(userimage);
    addToorder();
}*/
 function display(){
 products = JSON.parse(localStorage.getItem('products'));
for(let i=0; i<products.length; i++){
    let values= products[i];
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
}console.log(generated);
document.querySelector('.main-order-div-container1').innerHTML = generated;
}
function amanu(){
    document.querySelector('.hh').style.display='flex';
    //const t= document.querySelector('.hh').style.animation-name= 'am';
}
function hid(){
   const ars= document.querySelector('.hh');
   ars.classList.add('ad');
}

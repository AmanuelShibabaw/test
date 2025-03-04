let movies=[
{
    name:'Red notice 2022',
    price:50,
    image_data:'images/Red Notice (2021).jpg',
    id:1,
    classname: 'movie1'
},
{
    name:'jason_bourne',
    price:500,
    image_data:'images/jason bourne.jpg',
    id:2,
    classname: 'movie2'
},
{
    name:'criminal',
    price:150,
    image_data:'images/CRIMINAL.jpg',
    id:3,
    classname: 'movie3'
},
{
    name:'blacknight',
    price:450,
    image_data:'images/Blacklight.2022.jpeg',
    id:4,
    classname: 'movie4'
},
{
    name:'uncharted',
    price:350,
    image_data:'images/Uncharted (2022).jpg',
    id:5,
    classname: 'movie5'
},
{
    name:'Ambulance',
    price:30,
    image_data:'images/Ambulance.2022.jpg',
    id:6,
    classname: 'movie6'
}

];

localStorage.setItem('movies',JSON.stringify(movies));
movies = JSON.parse(localStorage.getItem('movies'));
HTMLgenerator(movies);
function HTMLgenerator(movies){
    document.querySelector('.all-div-container').innerHTML='';
movies.forEach(function generateHtml(movie_details){
      randomn=Math.random(1%10);
      const generatedHTML = `
      <style>
    .common_for_all{
    cursor: context-menu;
    border: none;
    background-color: white;
    box-shadow: -1px 1px 8px rgb(40, 232, 139) ;
    width: 290px;
    padding:10px;
    margin-left: -10px;
    margin-top: 10px;
    font-size: 16px;
    border-radius: 10px;
    display: grid;
    gap: 10px;
    padding-left: 19px;
    transition: 0.3s ease-in-out;
}
      </style>
      <div class="movie-container-admin">
                <div class="image-admin">
                    <img class="img1" src="${movie_details.image_data}" alt="">
                </div>
                <div class="dec-admin"> 
                    <div  class="${movie_details.classname} common_for_all">
                    <div class="m-name">Movie Name : ${movie_details.name}</div>
                     <div class="m-price">Price : $${movie_details.price}</div>
                </div>
                <div class="buttons">
                <button data-id_edit="${movie_details.id}" class="edit-button" onclick=" HTMLgenerator(movies);  find_movie(${movie_details.id},'edit');">Edit</button>
                <button data-id_delete="${movie_details.id}" class="delete-button" onclick="find_movie(${movie_details.id},'delete')">Delete</button>
            </div>
            </div>
            </div>
            `;
      
   document.querySelector('.all-div-container').innerHTML+=generatedHTML;
   //console.log(document.querySelector('.all-div-container').innerHTML);

})
} // nay html genrator function mecheresha



function edit(name_to_edit,price_to_edit,uniq_identifier,clasname){
 let eidted_name;
 //console.log('hh');
 let parameter1_id=uniq_identifier;
 let parameter2_name=clasname+'a';
 let parameter3_price=clasname+'b';
 let confirm_pa=clasname+'c';
 let cancel_pa=clasname+'d';

 eidted_name=`
 <div class="edit-name">
  
             <div class="name-of-m">Movie Name :</div> 
             <input class="${parameter2_name}" type="text" value="${name_to_edit}" placeholder="${name_to_edit}"">
                </div>
                <div class="confirm-abort">
                <div class="edit-price">
                   <div class="pri"> Price :</div> 
                   <input class="${parameter3_price}" type="number" class="input-price" placeholder="${price_to_edit}" value="${price_to_edit}">
                </div>
                <div class="save-edited">
                    <button class="save-edited-data ${confirm_pa}" onclick="save_changes(${uniq_identifier},'${parameter2_name}','${parameter3_price}');">
                    <div class="tool-tip-confirm">
                    save
                    </div>
                    <img src="admin images/icons/check-circle.svg" alt="confirm">
                    </button>
                    <button class="cancel-edited-data" onclick="HTMLgenerator(movies);">
                    <div class="tool-tip-cancel">
                    cancel
                    </div>
                    <img src="admin images/icons/x-circle.svg" alt="cancel">
                    </button>
                </div>
                </div>`;
                document.querySelector(`.${clasname}`).innerHTML=eidted_name;

        }
function save_changes(parameter1_id,parameter2_name,parameter3_price){
       
    let index=-1;
  movies.forEach((detector)=>{
        index++;
   if(detector.id===parameter1_id){
       detector.name=document.querySelector(`.${parameter2_name}`).value;
       detector.price=document.querySelector(`.${parameter3_price}`).value;
       movies[index]={
        name:detector.name,
        price:detector.price,
        image_data:detector.image_data,
        id:detector.id
       };
       
       localStorage.setItem('movies',JSON.stringify(movies));
       movies = JSON.parse(localStorage.getItem('movies'));
       HTMLgenerator(movies);
       // console.log(movies);
   }
  })
}




   const edit_btn=document.querySelector('.edit-button');
   edit_btn.addEventListener('click',()=>{
    const uniq_id = edit_btn.dataset.id_edit;
    //console.log(uniq_id);
    find_movie(uniq_id);
});  
 


function find_movie(movie_id, rol){
    let i=-1;
    movies.forEach((info)=>{
        i++;
       // console.log(info.id);
        if(info.id==movie_id){
            if(rol==='edit'){
            edit(info.name,info.price,info.id,info.classname);
        }
        if(rol==='delete'){
            movies.splice(i,1);
            localStorage.setItem('movies',JSON.stringify(movies));
            HTMLgenerator(movies);
        }
    }

    })
}
fetch('./data.json')
.then((response)=>response.json())
.then((users)=>{
 
    let placeholder = document.querySelector('#ideas');

    let output ="";

    for(let user in users){

          
        let blogs = users[user].blogs;
         
        for(let blog in blogs){

            output +=`
                 <div class="blog">
                    <img src="${blogs[blog].img}" class="pic">
                    <div class="desc1">
                    <p>${blogs[blog].description} </p>
                    

                    </div>
                 </div> 
               `

        }



    }
    placeholder.innerHTML = output;


})
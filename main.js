var form=document.getElementById('my-form');

form.addEventListener('submit',SaveToCrudCrud);

function SaveToCrudCrud(event){
    event.preventDefault();
    const candyname=event.target.candyname.value;
    const description=event.target.description.value;
    const price=event.target.price.value;
    const quant=event.target.quantity.value
    const obj= { 
        candyname,
        description ,
        price,
        quant
    }

    axios.post("https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData",obj)
    .then((response)=>{
        showUserOnScreen(response.data)

    })
    .catch((err)=>{
        document.body.innerHTML+="<h2>Something went Wrong</h2>";
        console.log(err);
    })
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData")
    .then((response)=>{
        // console.log(response.data)
         console.log(response.data)
        for (var i=0;i<response.data.length;i++){
            //  console.log(response.data[i])
             console.log(response.data[i])
            showUserOnScreen(response.data[i])

        }
       
    })
    .catch((err)=>{
        console.log(err);
    })
})
function showUserOnScreen(obj){
    const parentElem=document.getElementById('userlist');
    const childElem=document.createElement('li');
    childElem.textContent=obj.candyname +" - "+ obj.description+" - "+obj.price+" - "+obj.quant;
    const Buy1Button=document.createElement('input');
    Buy1Button.type='button';
    Buy1Button.value='Buy 1';
    Buy1Button.onclick=()=>{
        obj.quant=obj.quant-1;
        axios.put(`https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData/${obj._id}`,{
        candyname: obj.candyname, 
        description: obj.description ,
        price: obj.price,
        quant: obj.quant })
        .then((response)=>{
            parentElem.removeChild(childElem);
            showUserOnScreen(obj);
        })
        .catch((err)=>{
            document.body.innerHTML+="<h2>Something went Wrong</h2>";
            console.log(err);
        })

    }
    const Buy2Button=document.createElement('input');
    Buy2Button.type='button';
    Buy2Button.value='Buy 2';
    Buy2Button.onclick=()=>{
        obj.quant=obj.quant-2;
        axios.put(`https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData/${obj._id}`,{
        candyname: obj.candyname, 
        description: obj.description ,
        price: obj.price,
        quant: obj.quant })
        .then((response)=>{
            parentElem.removeChild(childElem);
            showUserOnScreen(obj);
        })
        .catch((err)=>{
            document.body.innerHTML+="<h2>Something went Wrong</h2>";
            console.log(err);
        })
    }
    const Buy3Button=document.createElement('input');
    Buy3Button.type='button';
    Buy3Button.value='Buy 3';
    Buy3Button.onclick=()=>{
        obj.quant=obj.quant-3;
        axios.put(`https://crudcrud.com/api/d0c762d041a942aca34da32bc53b3c5a/CandyData/${obj._id}`,{
        candyname: obj.candyname, 
        description: obj.description ,
        price: obj.price,
        quant: obj.quant })
        .then((response)=>{
            parentElem.removeChild(childElem);
            showUserOnScreen(obj);
        })
        .catch((err)=>{
            document.body.innerHTML+="<h2>Something went Wrong</h2>";
            console.log(err);
        })
    }
   
    childElem.appendChild(Buy1Button);
    childElem.appendChild(Buy2Button);
    childElem.appendChild(Buy3Button);
    parentElem.appendChild(childElem);
}
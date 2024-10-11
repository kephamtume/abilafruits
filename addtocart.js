const product = [
    {
        id: 0,
        image: 'image/gg-6.png',
        title: 'imported oranges',
        price: 120,
    },
    
    {
        id: 1,
        image: 'image/gg-2.png',
        title: 'crisp red apples',
        price: 25,
    },
    {
        id: 2,
        image: 'image/gg-0.jpg',
        title: 'green apples',
        price: 40,
    },
    {
        id: 3,
        image: 'image/gg-4.jpg',
        title: '2kgs apples',
        price: 230,
    },
    {
        id: 3,
        image: 'image/gg-0.jpg',
        title: '2kgs apples',
        price: 230,
    },
    {
        id: 4,
        image: 'image/gg-8.png',
        title: 'lichi',
        price: 230,
    },
    {
        id: 5,
        image: 'image/gg-8.png',
        title: 'lichi',
        price: 230,
    },
    {
        id: 6,
        image: 'image/gg-9.png',
        title: 'water melon',
        price: 30,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>ksh ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "ksh "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "ksh "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>ksh ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

}

let shoppingCarty = document.querySelector('.sidebar');

document.querySelector('.carty').onclick = () =>{
    shoppingCarty.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

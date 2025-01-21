const kosar = document.getElementById("kosar");
const termekek = document.getElementById("termekek");
const products = [
    {id: 1,
    nev: "Kuka",
    price: 25000,},
    {id: 2,
    nev: "TV",
    price: 50000,},
    {id: 3,
    nev: "DVD",
    price: 4500,}
]
function termekekmegjelenit(){
    let lista = "";
    products.forEach(item => {
        const row = `<div>
                        ${item.nev} Ár: ${item.price}Ft
                        <button onclick="myCart.addProduct(${item.id},1)">Kosárba</button>
                    </div>`
        lista+=row;
    });
    return lista;
}

function kosarmegjelenit(){
    myCart.render();
}

class cart{
    constructor(){
        this.items = []
    }
    render(){
        let tartalom=""
        if(this.items.length===0){
            tartalom = 'A kosár üres';
        }
        else{
            this.items.forEach( item => {
                tartalom +=`${item.product.nev},${item.quantity}db<br>`
            })
        }
        document.getElementById('kosar').innerHTML= tartalom;
    }

    viewCart(){
        const displayItems = this.items.map (item =>{
            return{
             id : item.product.id,
             product : item.product.nev,
             quantity : item.quantity
            }
            })
        console.table(displayItems)
    }
    addProduct(productId, quantity = 1){
        const product = products.find( p => p.id === productId)
        this.items = [...this.items, {product, quantity} ]
        this.render()
        console.log("asd")
    }
    removeProduct(productId){
        const product = products.find( p => p.id === productId)
        this.items.shift(product)
    }
    updateQuantity(productId, quantity){
        this.items = this.items.map( item => item.product.id == productId ? {...item,quantity} : item)
    }
    clearCart(){
        this.items = []
    }
    price(){
        let vegosszeg = 0
        this.items.forEach( item => vegosszeg += (item.product.price)*(item.quantity))
        return(vegosszeg)
    }
    /*kosaram(){
        gomb.addEventListener('click', function(){
            
            let div = document.createElement("div");
            let h4 = document.createElement("h4");
            let span = document.createElement("span");
            let spanOsszeg = document.createElement("span");
            div.style.width = 'auto'
            div.style.height = '250px'
            div.style.border = '1px solid black'
            myCart.addProduct(this)

            div.appendChild(h4, span, spanOsszeg);
            document.body.appendChild(div)
    
        })
        
    }*/
}

const myCart = new cart();
document.getElementById("termekek").innerHTML=termekekmegjelenit()
//myCart.kosaram();



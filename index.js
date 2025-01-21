const kosar = document.getElementById("kosar");
const gomb = document.getElementById("gomb");
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

class cart{
    constructor(){
        this.items = []
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
    kosaram(){
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
        
    }
}

const myCart = new cart();
myCart.kosaram();



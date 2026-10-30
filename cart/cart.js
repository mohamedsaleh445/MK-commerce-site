headHtml()
footerHtml()
nodatatoshow()

function displaycartproduct(element) {
    let html = `
<div class='flex align-middle items-center justify-evenly gap-5 border m-3 '>
<div class='w-1/3 h-32'>
<img src=${element.images[0]} alt=""  class='h-full' />
</div>
<div class='text-left capitalize'>
<h1>${element.title}</h1>
<p class='text-gray-400'> description : ${element.description.slice(0, 20)}</p>
<p class=> category : ${element.category}</p>
<p class='text-blue-800'>  $ price :  ${Math.round(element.price)} </p>
<p> rating : ${element.rating}</p>

</div>
<div>
<button class='px-5 py-2 bg-red-500 rounded-lg hover:bg-red-300' onclick='deleteproduct(${element.id})'>Delete</button>
</div>

</div>
`
    document.querySelector("#displaycart").innerHTML += html
}
function displaytotal() {
    let cart = JSON.parse(localStorage.getItem('product'))

    let totalprices = cart.reduce((sum, item) => {
        return sum + item.price
    }, 0)
    // console.log(totalprices);
    let tax = Math.round(totalprices * .4)
    let total = Math.round(totalprices + tax)
    // console.log(typeof (total));



    let html = `
        <div>
        <h1 class='besttext text-center pb-5'>the total</h1>
        <div class='flex justify-evenly'>
            <div>
                <h1 class='besttext'>price</h1>
                <h1 class='besttext'>tax</h1>
                <hr />
                <h1 class='besttext'>total</h1>
            </div>
            <div>
                <h1 class='besttext'>${Math.round(totalprices)} جم</h1>
                <h1 class='besttext'>${tax} جم</h1>
                <hr />
                <h1 class='besttext'>${total}جم</h1>
            </div>
        </div>
        </div>
    `



    document.querySelector("#displaytotal").innerHTML = html
}

function deleteproduct(id) {
    // console.log(id);
    let cart = JSON.parse(localStorage.getItem("product"))
    cart = cart.filter(item => item.id !== id)
    localStorage.setItem("product", JSON.stringify(cart))
    window.location.reload()
    nodatatoshow()
}
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('product'))
    if (!cart) {
        nodatatoshow()
    } else {

        for (let i = 0; i < cart.length; i++) {
            const element = cart[i];
            displaycartproduct(element)
        }
        displaytotal()
    }
}
function buyconfirm() {
    let buyconfirm = document.querySelector("#buyconfirm")
    buyconfirm.addEventListener('submit', function (e) {
        e.preventDefault()
    })
    $(".confirmed").fadeIn(1800),
        $(".confirmed").fadeOut(700),
        $("#buyconfirm button").fadeOut(400)

}
function nodatatoshow() {
    let cart = JSON.parse(localStorage.getItem('product'))
    //console.log(cart);

    if (!cart) {
        return
    } else if (cart.length === 0) {

        let html = `<h1 class="text-center pt-5 text-blue-400 text-4xl font-bold "> لا توجد بيانات لعرضها</h1>`
        document.querySelector('#displaycart').innerHTML = html
    }
}



displayCart()
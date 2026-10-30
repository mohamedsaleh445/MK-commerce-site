
let data = ''
async function viewSingleProduct() {
    const params = new URLSearchParams(window.location.search)
    let id = params.get('id')
    if (!id) {
        console.log('page not found');
        return
    }
    let imgslide = ''
    const api = await fetch(`https://dummyjson.com/products/${id}`)
    const respo = await api.json()
    const imgslider = respo.images
    data = respo
    //console.log(respo);

    for (let i = 0; i < imgslider.length; i++) {
        const element = imgslider[i];

        imgslide += `<img src="${element}" alt="${element}" class='border  w-40 h-40 cursor-pointer' onclick='showImage(this.src)' />`
    }

    const singleCard = document.querySelector("#singeleCard")
    let html = ` <div class="px-2 py-5">
                <div class="overflow-hidden rounded-xl flex md:flex-row-reverse flex-col  items-center ">
                <div>
                <img  src="${respo.images[0]}" alt="${respo.title}" class="object-contain" id='mainImage'>
                <div id="imgslid" class='flex flex-wrap gap-2  justify-end ml-5 '></div>
                </div>
                    <div class="p-4 text-left items-center ">
                        <span class="text-sm text-orange-500"> ${respo.category} </span>
                        <h1 class="mt-1 text-lg font-bold">${respo.title}</h1>
                        <p class="mt-2 text-sm text-gray-500"> ${respo.description} </p>
                        <span class="text-sm">width : ${respo.dimensions.width} <br>height : ${respo.dimensions.height} <br> depth : ${respo.dimensions.depth}
                        </span>
                        <h3 class="text-sm">warrantyInformation : ${respo.warrantyInformation}  </h3>
                        <h3 class="text-sm">shippingInformation : ${respo.shippingInformation}</h3>
                        <h3 class="text-sm">availabilityStatus : ${respo.availabilityStatus}</h3>
                        <h3 class="text-sm">returnPolicy : ${respo.returnPolicy}</h3>
                        <h3 class="text-sm">stock : ${respo.stock}</h3>
                        <div
                            class="mt-4 flex items-center justify-between">
                            <span>⭐ ${respo.rating} </span>
                            <h3 class="text-xl font-bold"> ${respo.price} </h3>
                        </div>
                        <div class=' text-center '>
                            <button class=' rounded-lg  bg-orange-500 px-16 mt-6 py-3 hover:bg-orange-600 hover:text-white transition' id='addtocartbtn' onclick='addtocart(data)'>اضف الى عربه التسوق</button>
                            <button class=' rounded-lg  bg-white border-orange-500 border px-16 mt-6 py-3 hover:bg-orange-600 hover:text-white transition hidden ' disapled id='alreadyadded'>
                            تم الاضافه الى العربه ... اذهب الى عربه التسوق</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    singleCard.innerHTML = html
    document.querySelector("#imgslid").innerHTML = imgslide

    getProductCategories(respo.category)
    checkifproducexist()

}
function showImage(e) {
    let mainImage = document.querySelector("#mainImage")
    mainImage.src = e

}

async function getProductCategories(e) {
    const param = await fetch(`https://dummyjson.com/products/category/${e}`)
    const respo = await param.json()
    const data = respo.products
    let header = `
        <div class='py-10'>
        <h1 class="text-3xl font-bold">${data[0].category}</h1>
            <p class="text-gray-400">أفضل ماركات ${data[0].category} بأسعار مميزة</p>
            <div class="h-10 flex justify-center items-center gap-3">
                <span class="h-1 w-24 bg-orange-300"></span>
                <span class="h-5 w-5 rounded-full bg-orange-300"></span>
                <span class="h-1 w-24 bg-orange-300"></span>
            </div>
            <div class="cards text-center"  >
            </div>
            </div>
`


    let html = ''
    for (let i = 0; i < data.length; i++) {
        const element = data[i];


        html += card(element)
    }
    document.querySelector("#productcategory").innerHTML = html
    document.querySelector("#categoryType").innerHTML = header

    $("#productcategory").slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,

                }
            }
        ]
    });

}

viewSingleProduct()



//=======================
// add to cart section



function changebtn() {
    $("#addtocartbtn").fadeOut(50);
    $("#alreadyadded").fadeIn(600);
}

function setlocal(product) {
    let data = JSON.parse(localStorage.getItem('product')) || []
    //console.log(data);
    data.push(product)
    localStorage.setItem('product', JSON.stringify(data))
    //console.log(product);

}
function addtocart(product) {

    setlocal(product);
    changebtn();

}
function checkifproducexist() {
    let products = JSON.parse(localStorage.getItem('product')) || []

    const params = new URLSearchParams(window.location.search)
    let id = Number(params.get('id'))

    let productExist = products.find(item => item.id === id)

    if (productExist) {
        $("#addtocartbtn").hide()
        $("#alreadyadded").removeClass('hidden').show()
    }
}

$(document).on("click", "#alreadyadded", function () {
    window.location.href = "/cart/cart.html";
});

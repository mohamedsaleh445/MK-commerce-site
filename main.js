headHtml()
footerHtml()
testuser()
//call api
async function getCategories() {
    const api = await fetch('https://dummyjson.com/products/categories')
    const respo = await api.json()

    // console.log(data);
    displayCategoriesTyps(respo)
    displayCategories(respo)
    getCards()
    $('.autoplay').slick({
        slidesToShow: 8,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        rtl: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,

                }
            }
        ]
    });


}

function displayCategoriesTyps(value) {

    let imgs = [1, 2, 3]
    let html = ''
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        // console.log(element);
        html += `<div class="px-2">
    <div class="flex flex-col items-center justify-center">
    <button onclick=viewCategory(this) datacat=${element.slug}>
    <img src="imgs/${(i % imgs.length) + 1}.jpg" class="cursor-pointer h-20 w-20 rounded-full object-cover md:h-28 md:w-28" alt="${imgs.name}" >
    <h1 class="mt-2 text-center text-sm font-bold md:text-xl">
    ${element.name}
    </h1></button>
    </div>
    </div>
    `

    }
    const slider = document.querySelector('.slider')
    if (slider) slider.innerHTML = html



}
function displayCategories(catefories) {
    let header = ''
    let footer = ''
    let headerlink = ''
    for (let i = 0; i < catefories.length; i++) {
        const element = catefories[i];
        header += `
        <div class='py-10'>
        <h1 class="text-3xl font-bold">${element.name}</h1>
            <p class="text-gray-400">أفضل ماركات ${element.name} بأسعار مميزة</p>
            <div class="h-10 flex justify-center items-center gap-3">
                <span class="h-1 w-24 bg-orange-300"></span>
                <span class="h-5 w-5 rounded-full bg-orange-300"></span>
                <span class="h-1 w-24 bg-orange-300"></span>
            </div>
            <div class="cards" data-category="${element.slug}"  >
            </div>
            </div>
`

    }
    const categorylinks = catefories.slice(0, 11)
    categorylinks.forEach(e => {
        footer += `<a href="">${e.name}</a>`;
        headerlink += `<li class=" mt-3 px-5  rounded-lg">
        <button  onclick=viewCategory(this) datacat=${e.slug} >
        ${e.name}</li>
        </button>`

    })
    const categories = document.querySelector('.categories')
    if (categories) categories.innerHTML = header
    const footerLink = document.querySelector(".footerLinks")
    if (footerLink) footerLink.innerHTML = footer
    const headerLinks = document.querySelectorAll(".headerLinks")
    headerLinks.forEach(header => {
        if (header) header.innerHTML = headerlink
    })
}

async function getCards() {
    const api = await fetch('https://dummyjson.com/products?limit=0')
    const respo = await api.json()
    const data = respo.products
    displayCardByCategories(data)

}

function displayCardByCategories(products) {
    products.forEach(element => {
        let html = document.querySelector(`.cards[data-category="${element.category}"]`);
        if (!html) {
            return
        }

        html.innerHTML += card(element)

    })

    document.querySelectorAll(".cards").forEach(card => {

        $(card).slick({
            slidesToShow: 5,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            rtl: true,
            arrows: false,
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
    });
}

function viewProduct(e) {
    window.location.href = `/pages/productsinglepage.html?id=${e}`
}
function viewCategory(e) {

    let categories = e.attributes[1].value
    console.log(categories);
    window.location.href = `/pages/productcategory.html?id=${categories}`

}
function card(element) {
    return `
                <div class="px-2 py-5 text-center">
                <div
                    class="overflow-hidden rounded-xl bg-white shadow-md h-full border" onclick = viewProduct(${element.id})>
                    
                    <div>
                        <img src="${element.images[0]}" alt="${element.title}" class="w-full h-52 object-cover"> </div>
                    <div class="p-4">
                        <span class="text-sm text-orange-500"> ${element.category} </span>
                        <h1 class="mt-1 text-lg font-bold">${element.title.slice(0, 15)}</h1>
                        <p class="mt-2 text-sm text-gray-500">${element.description.slice(0, 30)} </p>
                        <div class="mt-4 flex items-center justify-between">
                            <span> ⭐ ${element.rating}</span>
                            <h3 class="text-xl font-bold"> $${element.price}</h3>
                        </div>
                    </div>
                </div>
            </div>
        `;

}
getCategories()



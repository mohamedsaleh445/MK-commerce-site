headHtml()
footerHtml()

async function getProductByCategories() {
    const params = new URLSearchParams(window.location.search)
    let search = params.get('id')
    if (!search) {
        document.querySelector("#categories").innerHTML = `<div class="categories pt-10 text-center">
        </div>`
        return
    }
    //console.log(search);
    sectionhead(search)
    const api = await fetch(`https://dummyjson.com/products/category/${search}`)
    const respo = await api.json()
    const date = respo.products
    //console.log(date);

    let html = ''
    for (let i = 0; i < date.length; i++) {
        const element = date[i];

        html += `<div class="px-2 py-5 text-center ">
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
    document.querySelector('.category').innerHTML = html

}

function sectionhead(e) {
    document.querySelector("#sectionhead").innerHTML = `
        <div class='py-10 text-center'>
        <h1 class="text-3xl font-bold">${e}</h1>
            <p class="text-gray-400">أفضل ماركات ${e} بأسعار مميزة</p>
            <div class="h-10 flex justify-center items-center gap-3">
                <span class="h-1 w-24 bg-orange-300"></span>
                <span class="h-5 w-5 rounded-full bg-orange-300"></span>
                <span class="h-1 w-24 bg-orange-300"></span>
            </div>
           
            </div>
`

}
getProductByCategories()
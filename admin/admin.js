const adminheader = document.querySelector("#adminheader")
const adminfooter = document.querySelector("#adminfooter")
let allproducts = []


adminheader.innerHTML = `
<div class="flex text-2xl gap-5 p-5 bg-blue-800 text-white items-center align-middle justify-between flex-row-reverse">
<div class="flex gap-5 flex-row-reverse">
<a href='../index.html' > <i class='fa-solid fa-arrow-right-to-bracket'></i></a>
<button>
<i class="fa-solid fa-gear"></i>
</button>
<button>
<i class="fa-solid fa-bell"></i>
</button>
</div>
<div class="flex gap-3">
<button>
<i class="fa-solid fa-circle-user text-2xl"></i>
</button>
<h1>اهلا بيك محمد</h1>
</div>

</div>`

adminfooter.innerHTML = ` <div class="bg-blue-800 text-center text-white ">
            <h1 class="text-sm p-3">تم تصميم الموقع بواسطه شركه <a href="https://www.facebook.com/mkforwebsolutions">@MK for Web Solutions</a></h1>
        </div>`

const productForm = document.querySelector("#productForm")
productForm.addEventListener('submit', function (e) {
    e.preventDefault()
    getData()
})

let product = {}
function getData() {
    let data = document.querySelectorAll(" #productForm input , #productForm select")


    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element.name, element.value);
        product[element.name] = element.value
        element.value = ''
    }
    addProduct()
    displayProduct()
    document.querySelector("#noproduct").classList.add("hidden")
}
async function addProduct() {
    try {
        const api = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        const respo = await api.json()
        //console.log(respo);
    } catch (error) {
        console.log(error);

    }



}
async function getallcategories(selected) {
    const api = await fetch("https://dummyjson.com/products/category-list")
    const respo = await api.json()
    for (let i = 0; i < respo.length; i++) {
        const element = respo[i];
        selected.innerHTML += `
            <option value="${element}">${element}</option>`
    }

}
function displayProduct() {
    let html = ` <div class="p-5 border  ">
                <div>
                <img  src="../imgs/Gemini_Generated_Image_v2b9izv2b9izv2b91.jpg" alt="${product.title}" class="object-contain" id='mainImage'>
                </div>
                <div class="overflow-hidden rounded-xl flex md:flex-row-reverse flex-col  items-center ">
                    <div class="p-4 text-left items-center ">
                        <span class="text-sm text-orange-500"> ${product.category} </span>
                        <h1 class="mt-1 text-lg font-bold">${product.title}</h1>
                        <p class="mt-2 text-sm text-gray-500"> ${product.description} </p>
                        <span class="text-sm">width : ${product.width} <br>height : ${product.height} <br> depth : ${product.depth}
                        </span>
                        <h3 class="text-sm">stock : ${product.stock}</h3>
                        <div
                            class="mt-4 flex items-center justify-between">
                            <span>⭐ ${product.rating} </span>
                            <h3 class="text-xl font-bold"> $${product.price} </h3>
                        </div>
                    </div>
                </div>
            </div>
        `;
    document.querySelector("#displayProduct").innerHTML += html

}
async function getAllProduct(element) {
    const api = await fetch("https://dummyjson.com/products?limit=0")
    const respo = await api.json()
    const data = respo.products
    allproducts = data


    let html = ''
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        html += `
        <tr class="border py-1  "> 
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.category}</td>
            <td>${element.price}</td>
            <td>
            <button class='py-1 px-3 bg-blue-300 rounded-lg hover:bg-blue-700 transition hover:text-white' onclick='Update(${element.id})'>تحديث</button>
            <button class='px-4 py-1 bg-rose-500 rounded-lg hover:bg-rose-800 transition hover:text-white' onclick='Delete(${element.id})' >مسح</button>
            </td>
        </tr>
        `

    }
    document.querySelector("#update").innerHTML = html


}
function displaysearchproduct(result) {
    let html = ''
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        html += `
        <tr class="border py-1  "> 
            <td>${element.id}</td>
            <td>${element.title}</td>
            <td>${element.category}</td>
            <td>${element.price}</td>
            <td>
            <button class='py-1 px-3 bg-blue-300 rounded-lg hover:bg-blue-700 transition hover:text-white' onclick='Update(${element.id})'>تحديث</button>
            <button class='px-4 py-1 bg-rose-500 rounded-lg hover:bg-rose-800 transition hover:text-white' onclick='Delete(${element.id})' >مسح</button>
            </td>
        </tr>
        `

    }
    document.querySelector("#update").innerHTML = html

}


function updateProduct() {
    $(".addproduct").fadeOut(1000)
    $(".update").fadeIn(2000)
    getAllProduct()
}
function showAddform() {
    $(".addproduct").fadeIn(2000)
    $(".update").fadeOut(1000)

}

function searchproduct() {
    let value = document.querySelector(".updatesearch input").value
    let type = document.querySelector(".updatesearch select ").value
    //console.log(value, type);
    if (type === 'choose') {
        showMsg('searcherror')
        return
    }
    let result = allproducts.filter(product => {
        if (type === 'id') {
            return String(product.id) === value
        } else if (type === 'name') {
            return product.title.toLowerCase().includes(value.toLowerCase())

        } else if (type === 'price') {
            return String(product.price).includes(value)
        }
    })

    displaysearchproduct(result)
    //console.log(result);
}
function restsearch() {
    let value = document.querySelector(".updatesearch input")
    let type = document.querySelector(".updatesearch select ")
    value.value = ''
    type.value = 'choose'
}


async function Delete(id) {
    console.log(id);
    const api = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'DELETE',
    })
    const respo = await api.json()
    const data = respo
    showMsg("Delete")
}

async function Update(id) {
    $("#showUpdate").removeClass("hidden")
    const api = await fetch(`https://dummyjson.com/products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        })
    })
    const respo = await api.json()
    const data = respo
    //console.log(data);
    displayUpdate(data)

}
function showMsg(method) {
    if (method === 'Delete') {
        $('#msg').removeClass('bg-blue-500').addClass('bg-orange-500')
        $("#msg").html(`<h1 class='text-center text-3xl'> تم مسح المنتج بنجاح</h1>`)
            .stop(true, true)
            .fadeIn(600)
            .delay(2000)
            .fadeOut(600)
    } else if (method === 'searcherror') {
        $('#msg').removeClass('bg-blue-500').addClass('bg-red-500')
        $("#msg").html(`<h1 class='text-center text-3xl'> برجاء تحديد نوع البحث</h1>`)
            .stop(true, true)
            .fadeIn(600)
            .delay(2000)
            .fadeOut(600)
    } else {
        $('#msg').removeClass('bg-orange-500').addClass('bg-blue-500')
        $("#msg").html(`<h1 class='text-center text-3xl'> تم تعديل المنتج بنجاح</h1>`)
            .stop(true, true)
            .fadeIn(600)
            .delay(2000)
            .fadeOut(600)
    }

}
function displayUpdate(id) {
    let html = `<div class='flex pt-10 justify-center flex-col lg:flex-row items-center align-middle relative'>
    <div>
    <img src="${id.thumbnail}" alt="${id.title}" />
    </div>
    <div class='w-full flex flex-col gap-5 producInputs px-5'>
    <input class='input ' type="text" name='${id.title}' placeholder='${id.title}' />
    <input class='input ' type="number" name='${id.price}' placeholder='${id.price}' />
    <select type="text" class="input " id='categoryupdateform' name="category" required>
            <option value="" selected disabled>choose category</option>
    </select>
    <input class='input ' type="number" name='${id.stock}' placeholder='${id.stock}' />
    <button class='px-12 py-3 rounded-lg bg-blue-300 hover:bg-blue-600 transition mb-12 ' onclick="updatProduct()">تحديث المنتج</button>
    </div>
    <button class='absolute top-5 right-5' onclick="closeUpdate()">X</button>
    </div>`
    document.querySelector("#showUpdate div").innerHTML = html
    getallcategories(document.querySelector("#categoryupdateform"))
}
function closeUpdate() {
    $("#showUpdate").addClass("hidden")

}
function updatProduct() {
    let data = document.querySelectorAll(".producInputs input")
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element.value);

    }
    showMsg("update")
    closeUpdate()
}

getallcategories(document.querySelector(".selected"))

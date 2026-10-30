let header = document.querySelector("#header")
function headHtml() {

    header.innerHTML = `<div class="bg-rose-500 text-center w-full text-white">
            <h1 class="text-sm">%شحن مجانى للطلبات اكثر من 5000 جنيه / كل المنتجات مستورده 100</h1>

        </div >
        <div class="flex w-full justify-between items-center align-middle pt-2 md:pt-0  flex-row-reverse">
            <div class='flex items-center flex-row-reverse gap-3 relative'>
            <img src="./imgs/launching soon.png" class="w-24 " alt="" >
            <button onclick='gotocart()' class='relative gotocart'><i class="fa-solid fa-cart-shopping text-xl" style="color: rgb(158, 144, 92);"></i>
            <span id='cartdot' class='h-2 w-2 rounded-full bg-red-600 absolute top-0 left-0  hidden '></span>
            </button>           
            </div>
            <button id="sidemenubtn" class="lg:hidden"><i class="fa-solid fa-bars text-2xl"></i></button>
            <div class="hidden lg:block ">
                <ul class="text-right flex flex-row-reverse m-5 gap-5">
                    <li class="hover:bg-orange-400 py-2 px-4 rounded-xl"><a href='/pages/aboutus.html'>من نحن</a></li>
                    <li class="hover:bg-orange-400 py-2 px-4 rounded-xl relative"><button class="dropdownbtn">
                    التسوق
                    <i class="fa-solid fa-caret-down transition-transform duration-300"></i>
                    </button>
                        <div
                            class=" dropdownmenu absolute hidden  rounded-lg z-50 right-0 text-center mt-5 bg-white/70">
                            <ul class='headerLinks w-60 z-50'>   
                            </ul>
                        </div>
                    </li>

                    <li class="hover:bg-orange-400 py-2 px-4 rounded-xl"><button><a href="/pages/contactus.html">تواصل معنا</a></button></li>
                    <li class="hover:bg-orange-400 py-2 px-4 rounded-xl"><a href='/index.html'>الرئيسيه</a></li>

                </ul>
            </div>
            <div class="hidden lg:flex  h-10 justify-center gap-3 items-center mx-10 ">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-telegram"></i>
            <div class=''>
            <button class='login underline'>تسجيل الدخول</button>
            <button class=' mr-3 hidden underline logout'>تسجيل الخروج</button>
            </div>
            </div>

        </div>

        <div id="sidemenu" class="hidden absolute right-0  shadow-xl h-screen w-1/2 rounded-lg z-50 bg-white">
            <img class="bg-contain" src="./imgs/launching soon.png">
            <hr>
            <ul class="text-right  m-5 py-10 flex flex-col gap-3">
                <li><a href="/index.html">الرئيسيه</a> </li>
                <li><a href="/pages/aboutus.html">من نحن</a></li>
                <li><a href="/pages/contactus.html">تواصل معنا</a></li>
                <li class="">
                    <button class="dropdownbtn">التسوق
                        <i class="fa-solid fa-caret-left transition-transform duration-300"></i>
                    </button>


                    <div
                        class=" dropdownmenu absolute hidden w-32 rounded-lg z-50 text-center mr-3  top-0 -left-1/2 bg-gray-100  ">
                        <ul class='headerLinks'>
                            
                        </ul>
                        
                        </div>
                </li>
            </ul>
            <hr class="mt-24">
            <div class="flex h-10 justify-center gap-3 items-center">
                <i class="fa-brands fa-facebook-f  "></i>
                <i class="fa-brands fa-linkedin "></i>
                <i class="fa-brands fa-instagram "></i>
                <i class="fa-brands fa-telegram "></i>
            </div>
            <div class='text-center'>
            <button class='login underline'>تسجيل الدخول</button>
            <button class=' mr-3 hidden underline logout'>تسجيل الخروج</button>            
            </div>

        </div>`

    $("#sidemenubtn").on('click', function () {
        $("#sidemenu").slideToggle('slow')
    })

    $(".dropdownbtn").on('click', function () {
        $(".dropdownbtn i").toggleClass("rotate-180");
        $(".dropdownmenu").fadeToggle(500)
    })
    showdot()
}

function testuser() {
    let getdata = localStorage.getItem("userdata")
    let data = JSON.parse(getdata)
    let login = document.querySelectorAll(".login")

    if (data) {
        login.forEach(log => {
            log.innerText = `اهلا بك ${data.name} `
        })
        $(".logout").fadeIn()
    } else {
        login.forEach(log => {
            log.innerText = `سجل الدخول`
        })
        login.forEach(log => {
            log.addEventListener("click", function () {
                window.location.href = "/pages/login.html"
            })
        })

    }

    let logout = document.querySelectorAll(".logout")
    logout.forEach(logout => {
        logout.addEventListener('click', function () {
            localStorage.clear()
            window.location.reload()

        })

    })
}
function gotocart() {
    window.location.href = '/pages/cart.html'
}

function showdot() {
    let data = JSON.parse(localStorage.getItem('product'))
    //console.log(data);

    if (!data) {
        return
    } else if (data.length) {
        document.querySelector("#cartdot").classList.remove("hidden")
    } else {
        document.querySelector("#cartdot").classList.add("hidden")
    }

}

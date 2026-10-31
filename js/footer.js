let footer = document.querySelector("#footer")

function footerHtml() {

    footer.innerHTML = ` <div class="bg-blue-950 w-full gap-6 text-white flex flex-col md:flex-row text-center justify-center md:justify-evenly py-10">
            <div class='flex flex-col gap-5 justify-center  items-center'>
                <img src="${paths.images}launching soon.png" class="w-1/2  md:w-full h-20" alt="">
                <p>متجر متخصص في بيع المنتجات المستوردة عالية الجودة<br> بأسعار تنافسية لتلبية احتياجاتك.

                </p>
                <div class="flex  h-10 justify-center gap-3 items-center ">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-telegram"></i>
                </div>
            </div>
            <div>
                <h3 class='py-3 text-orange-400 font-semibold text-xl'>فئات المتجر</h3>
                <div id='footerLinks' class=' footerLinks grid grid-cols-3 md:grid-cols-2 md:gap-2'>
                    
                </div>
            </div>
            <div>
                <h3 class='text-orange-400 font-semibold text-xl'>صفحات مفيدة</h3>
                <ul>
                    <li><a href="${paths.home}">الرئيسيه</a> </li>
                    <li><a href="${paths.pages}aboutus.html">من نحن</a></li>
                    <li><a href="${paths.pages}contactus.html">تواصل معنا</a></li>
                </ul>
            </div>
            <div>
                <h3 class='text-orange-400 font-semibold text-xl'> تواصل معنا</h3>
                <ul>
                    <li><i class="fa-solid fa-location-dot" style="color: rgb(255, 212, 59);"></i>القاهرة، مصر</li>
                    <li><i class="fa-solid fa-phone" style="color: rgb(255, 212, 59);"></i>201228948473+</li>
                    <li><i class="fa-solid fa-envelope" style="color: rgb(255, 212, 59);"></i>info@MKcommerce-eg.com
                    </li>
                </ul>
            </div>
        </div>`

}
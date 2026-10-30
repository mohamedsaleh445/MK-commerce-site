document.querySelector(".swith").addEventListener("click", function () {
    $("#loginform").slideToggle(500, function () {
        $("#signupform").slideToggle(700)
        $(".massege").fadeOut()
    })


})
document.querySelector(".swithback").addEventListener("click", function () {
    $("#signupform").slideToggle(500, function () {
        $("#loginform").slideToggle(700)
        $(".massege").fadeOut()

    })

})


document.querySelector("#login").addEventListener('submit', function (e) {
    const loginname = document.querySelector("#loginname")
    const loginpass = document.querySelector("#loginpass")
    e.preventDefault()
    if (loginname.value === 'admin' && loginpass.value === 'admin') {
        window.location.replace("/admin/admin.html")

    } else {
        document.querySelector(".loginmassage").innerHTML = `<h1 class='text-red-900'>لا يوجد بيانات برجاء تسجيل الان</h1>`
        $(".loginmassage").fadeIn()

    }
})

document.querySelector("#sigup").addEventListener('submit', function (e) {
    e.preventDefault()
    const signupname = document.querySelector("#signupname").value
    const signupemail = document.querySelector("#signupemail").value
    const signuppass = document.querySelector("#signuppass").value
    const signuppassrepet = document.querySelector("#signuppassrepet").value
    const userdata = {
        name: signupname,
        email: signupemail,
        pass: signuppass,
        passrepet: signuppassrepet,
    }

    if (!signupname || !signupemail || !signuppass || !signuppassrepet) {
        document.querySelector(".singupmassage").innerHTML = `<h1 class='text-red-900'>برجاء تسجيل البيانات بشكل صحيح</h1>`
        $(".singupmassage").fadeIn()

    } else {
        let data = JSON.stringify(userdata)
        console.log(data);

        localStorage.setItem('userdata', data)
        window.location.replace("/index.html")
    }
})

let inputtest = document.querySelectorAll("input")
inputtest.forEach(input => {
    input.value = ''
})


// const BASE_URL = "/MK-commerce-site/";

// const paths = {
//     home: `${BASE_URL}index.html`,
//     images: `${BASE_URL}imgs/`,
//     pages: `${BASE_URL}pages/`,
//     js: `${BASE_URL}js/`,
//     cart: `${BASE_URL}pages/cart.html`,
//     admin: `${BASE_URL}pages/admin.html`,
//     css: `${BASE_URL}src/output.css`
// };


const BASE_URL = window.location.hostname === "mohamedsaleh445.github.io"
    ? "/MK-commerce-site/"
    : "/";

const paths = {
    home: `${BASE_URL}index.html`,
    images: `${BASE_URL}imgs/`,
    pages: `${BASE_URL}pages/`,
    js: `${BASE_URL}js/`,
    cart: `${BASE_URL}pages/cart.html`,
    admin: `${BASE_URL}pages/admin.html`,
    css: `${BASE_URL}src/output.css`
};

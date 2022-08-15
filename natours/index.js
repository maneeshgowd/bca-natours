require("core-js/modules/web.immediate.js");
require("regenerator-runtime");
var $knI9B$axios = require("axios");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}


const $f60945d37f8e594c$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = "pk.eyJ1Ijoiam9uYXNzY2htZWR0bWFubiIsImEiOiJjam54ZmM5N3gwNjAzM3dtZDNxYTVlMnd2In0.ytpI7V7w7cyT1Kq5rT9Z1A";
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy",
        scrollZoom: false
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement("div");
        el.className = "marker";
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: "bottom"
        }).setLngLat(loc.coordinates).addTo(map);
        // Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        }
    });
};



const $3adf927435cf4518$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};
const $3adf927435cf4518$export$de026b00723010c1 = (type, msg, time = 7)=>{
    $3adf927435cf4518$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($3adf927435cf4518$export$516836c6a9dfc573, time * 1000);
};


const $70af9284e599e604$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "POST",
            url: "/api/v1/users/login",
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === "success") {
            (0, $3adf927435cf4518$export$de026b00723010c1)("success", "Logged in successfully!");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", err.response.data.message);
    }
};
const $70af9284e599e604$export$7200a869094fec36 = async (data)=>{
    try {
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "POST",
            url: "/api/v1/users/signup",
            data: data
        });
        if (res.data.status === "success") {
            (0, $3adf927435cf4518$export$de026b00723010c1)("success", "Signed in successfully!");
            window.setTimeout(()=>{
                location.assign("/");
            }, 1500);
        }
    } catch (err) {
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", err.response.data.message);
    }
};
const $70af9284e599e604$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "GET",
            url: "/api/v1/users/logout"
        });
        res.data.status = "success";
        location.reload(true);
    } catch (err) {
        console.log(err.response);
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", "Error logging out! Try again.");
    }
};




const $936fcc27ffb6bbb1$export$f558026a994b6051 = async (data, type)=>{
    try {
        const url = type === "password" ? "/api/v1/users/updateMyPassword" : "/api/v1/users/updateMe";
        const res = await (0, ($parcel$interopDefault($knI9B$axios)))({
            method: "PATCH",
            url: url,
            data: data
        });
        if (res.data.status === "success") (0, $3adf927435cf4518$export$de026b00723010c1)("success", `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", err.response.data.message);
    }
};




const $6710bca62beba915$var$stripe = Stripe("  pk_test_51LU8yHSHVys8i8j2MpiGHkkSyAtIwtNvdRaZe0mq0SI2QeqK3p5MkOTpo22sOynzHePXldYqKfHGC3ETepUEfUdX00bzBjOCxx");
const $6710bca62beba915$export$8d5bdbf26681c0c2 = async (tourId)=>{
    try {
        // 1) Get checkout session from API
        const session = await (0, ($parcel$interopDefault($knI9B$axios)))(`/api/v1/bookings/checkout-session/${tourId}`);
        console.log(session);
        // 2) Create checkout form + chanre credit card
        await $6710bca62beba915$var$stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        (0, $3adf927435cf4518$export$de026b00723010c1)("error", err);
    }
};



// DOM ELEMENTS
const $d0f7ce18c37ad6f6$var$mapBox = document.getElementById("map");
const $d0f7ce18c37ad6f6$var$loginForm = document.querySelector(".form--login");
const $d0f7ce18c37ad6f6$var$signupForm = document.querySelector(".form--signup");
const $d0f7ce18c37ad6f6$var$logOutBtn = document.querySelector(".nav__el--logout");
const $d0f7ce18c37ad6f6$var$userDataForm = document.querySelector(".form-user-data");
const $d0f7ce18c37ad6f6$var$userPasswordForm = document.querySelector(".form-user-password");
const $d0f7ce18c37ad6f6$var$bookBtn = document.getElementById("book-tour");
// DELEGATION
if ($d0f7ce18c37ad6f6$var$mapBox) {
    const locations = JSON.parse($d0f7ce18c37ad6f6$var$mapBox.dataset.locations);
    (0, $f60945d37f8e594c$export$4c5dd147b21b9176)(locations);
}
if ($d0f7ce18c37ad6f6$var$loginForm) $d0f7ce18c37ad6f6$var$loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    (0, $70af9284e599e604$export$596d806903d1f59e)(email, password);
});
if ($d0f7ce18c37ad6f6$var$signupForm) $d0f7ce18c37ad6f6$var$signupForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("new-password").value;
    const passwordConfirm = document.getElementById("new-confirm-password").value;
    (0, $70af9284e599e604$export$7200a869094fec36)({
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm
    });
});
if ($d0f7ce18c37ad6f6$var$logOutBtn) $d0f7ce18c37ad6f6$var$logOutBtn.addEventListener("click", (0, $70af9284e599e604$export$a0973bcfe11b05c9));
if ($d0f7ce18c37ad6f6$var$userDataForm) $d0f7ce18c37ad6f6$var$userDataForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    (0, $936fcc27ffb6bbb1$export$f558026a994b6051)(form, "data");
});
if ($d0f7ce18c37ad6f6$var$userPasswordForm) $d0f7ce18c37ad6f6$var$userPasswordForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";
    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await (0, $936fcc27ffb6bbb1$export$f558026a994b6051)({
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm
    }, "password");
    document.querySelector(".btn--save-password").textContent = "Save password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
});
if ($d0f7ce18c37ad6f6$var$bookBtn) $d0f7ce18c37ad6f6$var$bookBtn.addEventListener("click", (e)=>{
    e.target.textContent = "Processing...";
    const { tourId: tourId  } = e.target.dataset;
    (0, $6710bca62beba915$export$8d5bdbf26681c0c2)(tourId);
});
const $d0f7ce18c37ad6f6$var$alertMessage = document.querySelector("body").dataset.alert;
if ($d0f7ce18c37ad6f6$var$alertMessage) (0, $3adf927435cf4518$export$de026b00723010c1)("success", $d0f7ce18c37ad6f6$var$alertMessage, 20);


//# sourceMappingURL=index.js.map

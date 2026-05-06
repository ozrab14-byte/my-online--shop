let prices = {
  All_in_one_PC: 1500,
  Desktap: 600,
  laptap: 750,
  Office_PC: 800,
  USP_3_Flash: 15,
  Type_C_flash: 10,
  OTG_flash: 12,
  Duel_flash: 16,
  External_Hardesk: 80,
  Internal_Hardesk: 45,
  Portable_Hardesk: 60,
  External_SSD: 75,
  Internal_SSD: 50,
  Keyboard: 45,
  Mouse: 30,
  Headphon: 60,
  LED_Monitor: 90,
  Gaming_Monitor: 180,
  Curved_Monitor: 220,
  Laser_printer: 150,
  Inkjet_printer: 80,
  All_in_one_printer: 170,
  Home_UPS: 70,
  Office_UPS: 120,
  Gaming_UPS: 200,
  Bluetooth_Speaker: 50,
  Computer_Speaker: 60,
  HD_Webcam: 80,
  FULL_HD_Webcam: 100,
  CPU_Cooler: 120
};

let prodact = document.getElementById("product");
let price = document.getElementById("price");
let quantity = document.getElementById("quantity");
let total = document.getElementById("total");
let form = document.getElementById("form");

// وقتی محصول انتخاب شد
prodact.addEventListener("change", function () {

  price.value = prices[this.value] || "";
  calculateTotal();
});

// وقتی تعداد تغییر کرد
quantity.addEventListener("input", calculateTotal);

function calculateTotal() {

   total.value = Number(price.value)*
   Number(quantity.value);
  
}
form.addEventListener("submit",function(e){
  e.preventDefault();
alert("you submit successfully!");
   form.reset();
   price.value="";
   total.value="";
});
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}
function checkform(){document.getElementById("form").scrollIntoView({behavior:"smooth"});}

// بخش سرج محصولات
   
 let search = document.getElementById("search");
let items = document.querySelectorAll(".item");

search.addEventListener("input", function () {
    let value = this.value.toLowerCase();

    items.forEach(function (item) {
        let text = item.textContent.toLowerCase();

        if (text.includes(value)) {
            item.style.display = "block";

            // باز کردن accordion
            let collapse = item.closest(".accordion-collapse");
            let bsCollapse = new bootstrap.Collapse(collapse, {
                toggle: false
            });
            bsCollapse.show();

            // اسکرول به آیتم
            item.scrollIntoView({ behavior: "smooth", block: "center" });

        } else {
            item.style.display = "none";
                item.style.color = "white";
        }
    });
});


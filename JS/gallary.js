import EmulatedlocalStorage from "./TableRaw.js";
import Data from "./productData.js";

// set data of products in local storage
let productData = new Data();
productData.dataOfProduct();

let allSpans = document.querySelectorAll(".item span");
let allbtn = document.querySelectorAll(".item button");

allSpans.forEach((span) => {
  span.addEventListener("click", (e) => {
    document.getElementById("nav").style.display = "none";
    document.getElementById("contain_home").style.display = "none";
    document.getElementById("contain_contactus").style.display = "none";
    document.getElementById("contain_aboutus").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("body").style.backgroundColor = "#eee";
    document.getElementById("container").style.display = "contents";
    if (e.target.classList.contains("read_more1")) {
      readMore1();
    }
    if (e.target.classList.contains("read_more2")) {
      readMore2();
    }
    if (e.target.classList.contains("read_more3")) {
      readMore3();
    }
    if (e.target.classList.contains("read_more4")) {
      readMore4();
    }
    if (e.target.classList.contains("read_more5")) {
      readMore5();
    }
    if (e.target.classList.contains("read_more6")) {
      readMore6();
    }
    if (e.target.classList.contains("read_more7")) {
      readMore7();
    }
    if (e.target.classList.contains("read_more8")) {
      readMore8();
    }
  });
});

allbtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (localStorage.loginData == null) {
      alert("please login first");
    } else {
      if (e.target.classList.contains("showCart")) {
        document.getElementById("nav").style.display = "none";
        document.getElementById("contain_home").style.display = "none";
        document.getElementById("contain_contactus").style.display = "none";
        document.getElementById("contain_aboutus").style.display = "none";
        document.getElementById("footer").style.display = "none";
        document.getElementById("body").style.backgroundColor = "#eee";
        document.getElementById("cart_bage").style.display = "contents";
      }
      if (e.target.classList.contains("buy1")) {
        buy1();
      }
      if (e.target.classList.contains("buy2")) {
        buy2();
      }
      if (e.target.classList.contains("buy3")) {
        buy3();
      }
      if (e.target.classList.contains("buy4")) {
        buy4();
      }
      if (e.target.classList.contains("buy5")) {
        buy5();
      }
      if (e.target.classList.contains("buy6")) {
        buy6();
      }
      if (e.target.classList.contains("buy7")) {
        buy7();
      }
      if (e.target.classList.contains("buy8")) {
        buy8();
      }
    }
  });
});

function readMore1() {
  document.getElementById("d_name").innerText = localStorage.getItem("p1_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p1_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p1_details");
  document.getElementById("d_img").src = localStorage.getItem("p1_pImg");
}

function readMore2() {
  document.getElementById("d_name").innerText = localStorage.getItem("p2_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p2_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p2_details");
  document.getElementById("d_img").src = localStorage.getItem("p2_pImg");
}

function readMore3() {
  document.getElementById("d_name").innerText = localStorage.getItem("p3_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p3_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p3_details");
  document.getElementById("d_img").src = localStorage.getItem("p3_pImg");
}

function readMore4() {
  document.getElementById("d_name").innerText = localStorage.getItem("p4_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p4_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p4_details");
  document.getElementById("d_img").src = localStorage.getItem("p4_pImg");
}

function readMore5() {
  document.getElementById("d_name").innerText = localStorage.getItem("p5_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p5_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p5_details");
  document.getElementById("d_img").src = localStorage.getItem("p5_pImg");
}

function readMore6() {
  document.getElementById("d_name").innerText = localStorage.getItem("p6_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p6_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p6_details");
  document.getElementById("d_img").src = localStorage.getItem("p6_pImg");
}

function readMore7() {
  document.getElementById("d_name").innerText = localStorage.getItem("p7_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p7_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p7_details");
  document.getElementById("d_img").src = localStorage.getItem("p7_pImg");
}

function readMore8() {
  document.getElementById("d_name").innerText = localStorage.getItem("p8_name");
  document.getElementById("d_price").innerText =
    localStorage.getItem("p8_price");
  document.getElementById("d_details").innerText =
    localStorage.getItem("p8_details");
  document.getElementById("d_img").src = localStorage.getItem("p8_pImg");
}

// save changes
const save = (data) => {
  EmulatedlocalStorage.setItem("table", JSON.stringify(data));
  return draw();
};
// get rows
const get = () => {
  let rows = EmulatedlocalStorage.getItem("table");
  if (!rows) {
    return [];
  }
  return JSON.parse(rows);
};
// draw into table
const draw = () => {
  let data = get();
  let element = document.querySelector("table");
  for (let tr of data) {
    let row = document.createElement("tr");
    for (let td of tr) {
      let cell = document.createElement("td");
      cell.appendChild(document.createTextNode(td));
      row.appendChild(cell);
    }
    element.appendChild(row);
  }
};

let rows;

if (localStorage.Orders != null) {
  rows = JSON.parse(localStorage.Orders);
} else {
  rows = get();
}

function buy1() {
  rows.push([
    localStorage.getItem("p1_name"),
    localStorage.getItem("p1_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

function buy2() {
  rows.push([
    localStorage.getItem("p2_name"),
    localStorage.getItem("p2_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

function buy3() {
  rows.push([
    localStorage.getItem("p3_name"),
    localStorage.getItem("p3_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

function buy4() {
  rows.push([
    localStorage.getItem("p4_name"),
    localStorage.getItem("p4_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

function buy5() {
  rows.push([
    localStorage.getItem("p5_name"),
    localStorage.getItem("p5_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

function buy6() {
  rows.push([
    localStorage.getItem("p6_name"),
    localStorage.getItem("p6_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

function buy7() {
  rows.push([
    localStorage.getItem("p7_name"),
    localStorage.getItem("p7_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

function buy8() {
  rows.push([
    localStorage.getItem("p8_name"),
    localStorage.getItem("p8_price"),
  ]);
  localStorage.setItem("Orders", JSON.stringify(rows));
  return save(rows);
}

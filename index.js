function is_touch_device() {
  return (
    "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (is_touch_device() != true) {
  // card hover

  const card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseenter", () => {
      card[i].classList.add("hover1");
    });
    card[i].addEventListener("mouseleave", () => {
      card[i].classList.remove("hover1");
    });
  }

  // email  hover

  const email = document.querySelectorAll(".email");
  for (let i = 0; i < email.length; i++) {
    email[i].addEventListener("mouseenter", () => {
      email[i].classList.add("hover2");
    });
    email[i].addEventListener("mouseleave", () => {
      email[i].classList.remove("hover2");
    });
  }

  // github hover

  const github = document.querySelectorAll(".github");
  for (let i = 0; i < github.length; i++) {
    github[i].addEventListener("mouseenter", () => {
      github[i].classList.add("hover2");
    });
    github[i].addEventListener("mouseleave", () => {
      github[i].classList.remove("hover2");
    });
  }

  // footer hover

  const footer = document.querySelectorAll(".img");
  for (let i = 0; i < footer.length; i++) {
    footer[i].classList.add("filter");
  }
  for (let i = 0; i < footer.length; i++) {
    footer[i].addEventListener("mouseenter", () => {
      footer[i].classList.add("hover3");
    });
    footer[i].addEventListener("mouseleave", () => {
      footer[i].classList.remove("hover3");
    });
  }
  // btn hover
  const btn = document.querySelectorAll(".btn");
  const arw = document.querySelectorAll(".arw");

  for (let i = 0; i < btn.length; i++) {
    for (let j = 0; j < arw.length; j++) {
      btn[i].addEventListener("mouseenter", () => {
        btn[i].classList.remove("btn_df");
        btn[i].classList.add("btn_hover");
        arw[j].classList.remove("arw_df");
        arw[j].classList.add("arw_hover_bottom");
        setTimeout(() => {
          arw[j].classList.remove("arw_hover_bottom");
          arw[j].classList.add("arw_hover_top");
        }, 300);
        setTimeout(() => {
          arw[j].classList.remove("arw_hover_top");
          arw[j].classList.add("arw_df");
        }, 600);
      });
    }
  }
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("mouseleave", () => {
      btn[i].classList.add("btn_df");
      btn[i].classList.remove("btn_hover");
    });
  }
} else {
  const arw = document.querySelectorAll(".arw");
  for (let i = 0; i < arw.length; i++) {
    setInterval(() => {
      arw[i].classList.remove("arw_df");
      arw[i].classList.add("arw_hover_bottom");
      setTimeout(() => {
        arw[i].classList.remove("arw_hover_bottom");
        arw[i].classList.add("arw_hover_top");
      }, 300);
      setTimeout(() => {
        arw[i].classList.remove("arw_hover_top");
        arw[i].classList.add("arw_df");
      }, 600);
    }, 2000);
  }
}

function btn_clc() {
  document.location.href = "./pages/python_page/python.html";
}

function btn_clc2() {
  document.location.href = "./pages/about_page/index.html"
}

function btn_clc3() {
  document.location.href="./pages/contact_page/index.html"
}

// header

const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 170) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

for (let index = 0; index < menu_item.length; index++) {
  menu_item[index].addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
}

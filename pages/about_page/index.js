function is_touch_device() {
    return (
      "ontouchstart" in window ||
      navigator.MaxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
}

if (is_touch_device() != true) {
    const icon = document.querySelectorAll(".img");
  let img_len = icon.length;
  for (let i = 0; i < img_len; i++) {
    icon[i].classList.add("filter");
  }
  for (let i = 0; i < img_len; i++) {
    icon[i].addEventListener("mouseenter", () => {
      icon[i].classList.add("hover2");
    });
    icon[i].addEventListener("mouseleave", () => {
      icon[i].classList.remove("hover2");
    });
  }
}
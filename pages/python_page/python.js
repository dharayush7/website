function is_touch_device() {
  return (
    "ontouchstart" in window ||
    navigator.MaxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
// console.log(is_touch_device());
if (is_touch_device() != true) {
  // hover in card
  const element = document.querySelectorAll(".card");
  let len = element.length;
  for (let i = 0; i < len; i++) {
    element[i].addEventListener("mouseenter", () => {
      element[i].classList.add("hover1");
    });
    element[i].addEventListener("mouseleave", () => {
      element[i].classList.remove("hover1");
    });
  }
  // hover in footer
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

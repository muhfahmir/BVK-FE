export default function (refItem = null, y = 150) {
  return window.scrollTo({
    top: refItem.current.offsetTop - y,
    behavior: "smooth",
  });
}

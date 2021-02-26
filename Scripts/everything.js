
var scrollTopBtn = document.querySelector(".scrollTopBtn")
var rootElement = document.documentElement
function handleScroll(){

    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if((rootElement.scrollTop/scrollTotal)>0.80){
        scrollTopBtn.classList.add("showBtn")
    }else{
        scrollTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  scrollTopBtn.addEventListener("click",scrollToTop)
  document.addEventListener("scroll",handleScroll)

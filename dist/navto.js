const nextPageBtn = document.querySelector(".nextBtn");
nextPageBtn.addEventListener("click", () => {
  console.log("clicked");
  location.assign("/signup.html");
});

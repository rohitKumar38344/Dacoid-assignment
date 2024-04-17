const nextPageBtn = document.querySelector(".nextBtn");
nextPageBtn.addEventListener("click", () => {
  console.log("clicked");
  location.assign("/next-page.html");
});

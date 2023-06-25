function load_image() {
  fetch("https://dog.ceo/api/breeds/image/random/8")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var images = data.message;

      images.forEach(function (image) {
        //Create Box
        var box = document.createElement("div");
        box.classList.add("box");

        var img = document.createElement("img");
        img.setAttribute("src", image);
        img.classList.add("imgbox");

        var heading = document.createElement("h2");
        heading.textContent = "Dog Image";
        heading.classList.add("h2class");

        box.appendChild(img);
        box.appendChild(heading);

        document.getElementById("container").appendChild(box);
      });
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}
load_image();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    load_image();
  }
});

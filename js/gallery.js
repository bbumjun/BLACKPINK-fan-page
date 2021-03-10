import "./common";
import "../scss/gallery/gallery.scss";
import imagesLoaded from "imagesloaded";
import {serverUrl} from "./config";
require.context("../images/common", true);
require.context("../images/gallery", true);


function resizeGridItems() {
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    imagesLoaded(item, (instance) => {
      const item = instance.elements[0];
      const grid = document.querySelector(".grid-container");
      const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
      const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
      const rowSpan = Math.floor((item.querySelector(".content").offsetHeight + rowGap) / (rowHeight + rowGap));
      item.style.gridRowEnd = "span " + rowSpan;
      item.style.backgroundColor = "gray";
      item.style.visibility = "visible";
    });
  });
  const gallery = document.querySelector(".grid-container");
  imagesLoaded(gallery, () => {
    document.querySelectorAll(".grid-item").forEach((item) => item.querySelector("img").style.visibility = "visible");
  });
}
function scrollHandler() {
  let debounce = null;
  let fetchIdx = 0;
  return function() {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        fetch(`${serverUrl}/gallery/pictures/${fetchIdx}`)
            .then((res)=> res.json())
            .then(({srcList})=>{
              if (srcList.length == 0 ) {
                document.querySelector(".loader").style.display = "none";
                window.removeEventListener("scroll", scrollHandler);
              } else {
                fetchIdx += srcList.length;
                srcList.forEach((src) => {
                  const gridContainer = document.querySelector(".grid-container");
                  const newItem = document.createElement("div");
                  const image = document.createElement("img");
                  newItem.classList.add("grid-item");
                  image.src = src;
                  image.alt = "blackpink gallery";
                  image.classList.add("content");
                  newItem.appendChild(image);
                  gridContainer.appendChild(newItem);
                });
                resizeGridItems();
              }
            })
            .catch((err)=>{
              console.log(err);
            });
      }
    }, 300);
  };
}
window.addEventListener("load", () => {
  document.querySelector(".loader").style.display = "flex";
  resizeGridItems();
});
window.addEventListener("resize", resizeGridItems);
window.addEventListener("scroll", scrollHandler());

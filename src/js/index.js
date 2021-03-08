import "../scss/index/index.scss";
import "./common";
require.context("../images/common", true);
require.context("../images/index", true);

(function loadBgImg() {
  const bgImg = new Image();
  bgImg.src = "src/images/index/background.jpg";
  bgImg.onload = ()=>{
    document.querySelector(".background")
        .style
        .backgroundImage = `url(${bgImg.src})`;
  };
})();

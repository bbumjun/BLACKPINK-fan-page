import "../scss/profile/profile.scss";
import "./common";
require.context("../images/common", true);
require.context("../images/profile", true);

window.addEventListener("load", ()=>{

  (function slideProfile () {
  const options = {
    threshold: 0.8,
  };
  const io = new IntersectionObserver((entries, observer)=>{
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    });
  }, options);
  const names = document.querySelectorAll(".member .name");
  const details = document.querySelectorAll(".member .detail");
  names.forEach((name)=>{
    io.observe(name);
  });
  details.forEach((detail)=>{
    io.observe(detail);
  });
})();


});


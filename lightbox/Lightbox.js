export default class Lightbox {
  static activate() {
    document.body.insertAdjacentHTML("beforeend", `
      <div class="lightbox" id="lightbox" style="display: none;">
        <div class="lightbox__inner">
          <button type="button" class="lightbox__close">
            &times;
          </button>
          <div class="lightbox__content"></div>
        </div>
      </div>
    `);

    const lightBox = document.querySelector("#lightbox");
    const btnClose = lightBox.querySelector(".lightbox__close");
    const content = lightBox.querySelector(".lightbox__content")
    const closeLightBox = () => {
      lightBox.style.display = "none";
      content.innerHTML = "";
    };

    lightBox.addEventListener("mousedown", e => {
      if (e.target.matches("#lightbox")) {
        closeLightBox();
      }
    })
    
    btnClose.addEventListener("click", () => {
      closeLightBox();
    });
  }

  static show(htmlOrElement) {
    const content = document.querySelector("#lightbox .lightbox__content");

    document.querySelector("#lightbox").style.display = null;

    if (typeof htmlOrElement === "string") {
      content.innerHTML = htmlOrElement;
    } else {
      content.innerHTML = "";
      content.appendChild(htmlOrElement);
    }
  }
}
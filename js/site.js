// Sibox Gam Studio – small shared script.
// 1) fills the current year in the footer
// 2) opens gallery screenshots in a lightbox (links still work without JS)

(function () {
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  var links = document.querySelectorAll("a[data-lightbox]");
  if (!links.length || typeof HTMLDialogElement === "undefined") return;

  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Screenshot preview");
  dialog.innerHTML = '<img alt=""><button type="button" aria-label="Close">×</button>';
  document.body.appendChild(dialog);

  var img = dialog.querySelector("img");
  var close = dialog.querySelector("button");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      img.src = link.getAttribute("href");
      img.alt = link.querySelector("img") ? link.querySelector("img").alt : "";
      dialog.showModal();
    });
  });

  close.addEventListener("click", function () { dialog.close(); });
  // click on the dark backdrop closes the dialog
  dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
})();

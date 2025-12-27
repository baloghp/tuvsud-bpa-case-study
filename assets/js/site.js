(() => {
  const path = window.location.pathname;
  const file = (path.split("/").pop() || "index.html").toLowerCase();

  /** @type {NodeListOf<HTMLAnchorElement>} */
  const links = document.querySelectorAll("nav a[data-nav]");
  for (const a of links) {
    const target = (a.getAttribute("href") || "").toLowerCase();
    if (target === file || (file === "" && target === "index.html")) {
      a.setAttribute("aria-current", "page");
    } else {
      a.removeAttribute("aria-current");
    }
  }
})();



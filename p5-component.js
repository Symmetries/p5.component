customElements.define("p5-component", class extends HTMLElement {
  async connectedCallback() {
    const src = this.getAttribute("src");
    const res = await fetch(src);
    const text = await res.text();
    const html = `
      <html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/p5@1.6.0/lib/p5.js"></script>
          <script>${text}</script>
          <style>
            * {
              margin: 0;
              padding:0;
            }
            canvas {
              display:block;
            }
          </style>
        </head>
        <body></body>
      </html>
    `;
    const iframe = document.createElement("iframe");
    this.appendChild(iframe);
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = "data:text/html;charset=utf-8," + encodeURIComponent(html);
  }
});
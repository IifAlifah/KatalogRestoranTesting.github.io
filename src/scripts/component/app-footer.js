class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>&copy; 2023 Foodies Zone - Iif Alifah</p>
      `;
  }
}

customElements.define('app-footer', AppFooter);

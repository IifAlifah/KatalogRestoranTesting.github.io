class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <header class="app-bar">
              <div class="app-bar__menu">
              <button id="hamburgerButton">☰</button>
              </div>
              <div class="app-bar__brand">
              <h1>Foodies Zone</h1>
              </div>
              <nav id="navigationDrawer" class="app-bar__navigation">
              <ul>
                <li class="nav_item"><a href="#/restaurant">Home</a></li>
                <li class="nav_item"><a href="#/favorite">Favorite</a></li>
                <li class="nav_item"><a href="https://github.com/IifAlifah">About Us</a></li>
              </ul>
              </nav>
          </header>
        `;
  }
}

customElements.define('app-bar', AppBar);

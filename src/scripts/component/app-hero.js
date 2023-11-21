class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
        <img src='./images/hero-image_2-large.jpg' alt="hero food">
      </picture>
        <div class="hero_inner">
        <h1 class="hero_title">Jelajahi Kelezatan dari Berbagai Restoran Terbaik</h1>
        <p class="hero_tagline">
            Temukan cita rasa terbaik dengan mengunjungi tempat-tempat makan pilihan kami
        </p>
        </div>
    </div> 
      `;
  }
}

customElements.define('app-hero', AppHero);

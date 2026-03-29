class SiteHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
<div class="navbar">
<div class="logo">ERLC<span>X</span></div>

<form method="get">
<div class="search"><input placeholder="Search creations, users, groups..."></div>
</form>

<div class="nav-right">
<button class="create-btn">+ Create New</button>
<div class="profile">HeyItBob36</div>
</div>
</div>`
  }
}


class SiteFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
<footer><div class="footer-grid">

<div class="footer-brand">
<h2>Surgedd</h2><p>Surge your servers staff team in no time.</p>
<span>© 2026 Surgedd. All rights reserved.<br>This site is not endorsed nor affilated with Roblox Inc.</span>
</div>

<div class="footer-column">
<h4>Resources</h4>
<a href="#">Support</a><a href="#">Premium</a><a href="#">Site Status</a>
</div>

<div class="footer-column">
<h4>Get in Touch</h4>
<a href="#">Email</a><a href="#">Discord</a>
</div>

<div class="footer-column">
<h4>Legal</h4>
<a href="#">Terms of Service</a><a href="#">Privacy Policy</a>
</div></div>

<div class="footer-bottom">
© 2026 ERLCX. All rights reserved.
</div>

</footer>`
  }
}

customElements.define('site-header', SiteHeader)
customElements.define('site-footer', SiteFooter)

console.log("Loaded custom header & footer.")

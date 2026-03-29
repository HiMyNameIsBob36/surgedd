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


class SiteFootee extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
<footer><div class="footer-grid">

<div class="footer-brand">
<h2>Surgedd</h2><p>Surge your servers staff team in no time.</p>
<span>© 2026 Surgedd. All rights reserved.<br>This site is not endorsed nor affilated with Roblox Inc.</span>
</div>

<div class="footer-column">
<h4>MARKETPLACE</h4>
<a href="#">Browse</a><a href="#">Groups</a><a href="#">Talent</a><a href="#">Upload</a>
</div>

<div class="footer-column">
<h4>ACCOUNT</h4>
<a href="#">Profile</a><a href="#">Creator Dashboard</a><a href="#">Support</a><a href="#">Guidelines</a>
</div>

<div class="footer-column">
<h4>COMMUNITY</h4>
<a href="#">Blog</a><a href="#">Affiliates</a>
</div>

<div class="footer-column">
<h4>LEGAL</h4>
<a href="#">Terms</a><a href="#">Privacy</a>
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

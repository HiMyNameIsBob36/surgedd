class SiteHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
header>
  <div class="nav-inner">

    <div class="logo"><a href=""><img src="../media/Surgedd.png"><span>Surgedd</span></a></div>

    <nav class="nav-links">
      <a href="#"><img src="../media/support.svg"><span>Support</span></a>
      <a href="#"><img src="../media/marketplace.svg"><span>Marketplace</span></a>
      <a href="#"><img src="../media/account.svg"><span>Account</span></a>
    </nav>

  </div>
</header>
`
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

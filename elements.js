class SiteHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
<header>
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
<footer>
  <div class="footer-inner">

    <div class="footer-col brand">
      <h2>Surgedd</h2>
      <p>Connecting servers with the right people..</p>
      <small>© 2026 @_sammy36. All rights reserved.</small>
      <small class="muted">This site is not endorsed by nor affiliated with Roblox Corporation.</small>
    </div>

    <div class="footer-group">

      <div class="footer-col">
        <h4>GET IN TOUCH</h4>
        <a href="mailto:"><img src="../media/mail.svg">Email</a>
        <a href="#"><img src="../media/chat.svg">Discord</a>      
        <a href="#"><img src="../media/github.svg">GitHub</a>
      </div>

      <div class="footer-col">
        <h4>RESOURCES</h4>
       <a href="guidelines">Guidelines</a>
        <a href="privacy">Privacy Policy</a>
        <a href="status">Status Page</a>
      </div>

    </div>

  </div>
</footer>
`
  }
}

customElements.define('site-header', SiteHeader)
customElements.define('site-footer', SiteFooter)

console.log("Loaded custom header & footer.")

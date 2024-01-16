document.getElementById("navbar").innerHTML = `
    <header>
      <div>
	<h1>${document.title}</h1>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <div id="hamburger-lines">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <nav id="menu">
        <a href="index.html">home</a>
        <a href="projects.html">projects</a>
        <a href="music.html">music</a>
      </nav>
    </header>
`;

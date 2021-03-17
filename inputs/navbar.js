const navBar = document.querySelector(".site-nav-bar");

const navBarContent = `
    <nav class="navbar navbar-expand-lg nav-color">
        <div class="container-fluid menu-design">
            <a class="navbar-brand" href="index.html"><img id="logo" src="images/logo-nova-era-construcoes.png" alt="logo"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/sobre-nos.html">Sobre Nós</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/nossos-servicos.html">Serviços</a>
                </li>
                </li>
                <li class="nav-item">
                <a class="nav-link contact-button" href="../contato.html">Fale Conosco</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>`;

navBar.insertAdjacentHTML("beforeend", navBarContent);


export { navBar, navBarContent }; 
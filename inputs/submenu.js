const subMenu = document.querySelector(".sub-menu");

const subMenuContent = `
    <div class="whatsapp-sub-menu"><i class="fab fa-whatsapp"></i><span class="whatsapp-text">(48)9901-3797</span></div>
    <div class="telefone-sub-menu"><i class="fas fa-mobile-alt"></i><span class="fa-mobile-text">(48)9901-3797</span></div>
`;

subMenu.insertAdjacentHTML("beforeend", subMenuContent);


export { subMenu, subMenuContent }; 









const siteFooter = document.querySelector("footer");

const footerContent = `
    <div class="footer-flex container">
        <div class="footer-item1">
          <img id="logo-footer" src="images/logo-nova-era-construcoes.png" alt="logo">
          <div id="footer-sobre-nos">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
  
        </div>
  
        <div class="footer-item2">
          <h4>Localização</h4>
          <div>Endereço: ....................................................</div>
          <div>Floripa - Florianópolis - SC</div>
          <div>CEP: ......................</div>
        </div>
  
        <div class="footer-item3">
          <h4>Atendimento</h4>
          <div class="whatsapp-footer-menu"><i class="fab fa-whatsapp"></i><span class="whatsapp-text">(48)0000-0000</span></div>
          <div class="telefone-footer-menu"><i class="fas fa-mobile-alt"></i><span class="fa-mobile-text">(48)0000-0000</span></div>
        </div>
      </div>
  
      <div class="hr-align">
          <hr>
        </div>
  
      <div class="under-footer">
        <div class="copyright">Copyright 2020-2021. Todos os direitos reservados.</div>
          <div class="footer-social-layout">
            <div class="footer-links"><a href="https://www.instagram.com/novaera_sc/"><i class="fab fa-instagram footer-instagram"></i></a> </div>
            <!-- <div class="footer-links"><a href=""><i class="fab fa-whatsapp footer-whatsapp"></i></a></div> -->
            <div class="footer-links"><a href="mailto:contato@novaeraconstrucoes.com"><i class="far fa-envelope footer-envelop"></i></a> </div>
          </div>
    </div>`;

siteFooter.insertAdjacentHTML("beforeend", footerContent);

export { siteFooter, footerContent }; 
<template>
  <footer class="footer">
    <svg-inline/>
    <div class="footer__contacts">
      <div class="container">
        <div class="outbox-border mb-30">
          <h2 class="footer__contacts-title color-info title-main outbox-border__item outbox-border__item--bg-info">
          Контакты
          </h2>
        </div>
        <ul class="footer__contacts-list">
          <li class="footer__contacts-item">
            <a
              href="https://t.me/ar69tem"
              class="footer__contacts-link"
              target="_blank"
              title="Telegram"
              >
                <svg class="svg-social">
                  <use xlink:href="#tg"></use>
                </svg>
            </a>
          </li>
          <li class="footer__contacts-item">
            <a 
              href="mailto:mushket.1998@mail.ru"
              class="footer__contacts-link"
              target="_blank"
              title="Mail"
              >
                <svg class="svg-social">
                  <use xlink:href="#email"></use>
                </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <a href="https://github.com/fellsia2019/portfolio_src" class="footer__link-github btn btn-main" target="_blank">
      Рабочую среду этого портфолио можете посмотреть на github
    </a>
    <div class="footer__main">
      <div class="container">
        <div class="footer__main-item">
          <img src="/assets/img/footer/mushket.png" alt="MushketCO" class="logo-footer">
          <h3 class="color-purple">
            Mushket corporation™
          </h3>
          <p class="color-neutral">
            All rights are saved©
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
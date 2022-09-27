<template>
  <section class="section-margin turnkey">
    <div class="hr1"><hr></div>
    <div class="turnkey__wrapper desktop-only" v-if="displaySize == 'desktop'">
      <div class="leftside">
        <div class="title">Выполняем работу<br><span class="blue">«под ключ»</span></div>
      </div>
      <div class="rightside">
        <div class="line">
          <div class="stage">
            <h3 class="turnkey-stage__title">Подберем оборудование</h3>
            <div class="turnkey-stage__text">Для спроектированных решений мы используем продукцию собственного производства</div>
            <div class="turnkey-stage__content">
              <div class="grid-2c">
                <div class="grid-2c__first">
                  <div class="card">Датчики Sekee</div>
                  <div class="card">Контроллеры</div>
                </div>
                <div class="grid-2c__second">
                  <div class="card">Деаераторы Sekee</div>
                  <div class="card">Бортовые компьютеры</div>
                </div>
                <div class="grid-2c__bottom">
                  <div class="card__last grid">
                    <span class="incard-circle__small">
                      <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 1.5C2.05964 1.5 1.5 2.05964 1.5 2.75L1.5 20.75C1.5 21.4404 2.05964 22 2.75 22H14.75C15.4404 22 16 21.4404 16 20.75L16 8.5H11.75C10.2312 8.5 9 7.26878 9 5.75V1.5L2.75 1.5ZM10.5 2.56066L14.9393 7L11.75 7C11.0596 7 10.5 6.44036 10.5 5.75V2.56066ZM0 2.75C0 1.23122 1.23122 0 2.75 0L9.75 0C9.94891 0 10.1397 0.0790176 10.2803 0.21967L17.2803 7.21967C17.421 7.36032 17.5 7.55109 17.5 7.75L17.5 20.75C17.5 22.2688 16.2688 23.5 14.75 23.5H2.75C1.23122 23.5 0 22.2688 0 20.75L0 2.75ZM5 13.75C5 13.3358 5.33579 13 5.75 13H8.75C9.16421 13 9.5 13.3358 9.5 13.75C9.5 14.1642 9.16421 14.5 8.75 14.5H5.75C5.33579 14.5 5 14.1642 5 13.75ZM5 17.75C5 17.3358 5.33579 17 5.75 17H11.75C12.1642 17 12.5 17.3358 12.5 17.75C12.5 18.1642 12.1642 18.5 11.75 18.5H5.75C5.33579 18.5 5 18.1642 5 17.75Z" fill="black"/>
                      </svg>
                    </span>
                    Всё оборудование и отдельные его элементы соответствуют требовованиям контролирующих инстанций и регистров
                  </div>
                </div>
              </div>
            </div>
            <div class="hr1"><br><hr><br></div>
          </div>
        </div>
        <div class="line">
          <div class="stage">
            <h3 class="turnkey-stage__title">Разработаем проект</h3>
            <div class="turnkey-stage__text">После согласования технических заданий и обсуждения требований инженеры-проектировщики разрабатывают индивидуальный проект на выбранный объект. Для того, чтобы проект был максимально оптимизирован под выбранный транспорт, специалисты также проводят предпроектное обследование</div>
            <div class="turnkey-stage__content">
              <img src="/images/industries/turnkey/project.png">
            </div>
            <div class="hr1"><br><hr><br></div>
          </div>
        </div>
        <div class="line">
          <div class="stage">
            <h3 class="turnkey-stage__title">Подготовим техническую документацию</h3>
            <div class="turnkey-stage__text">По проекту составляется подробная техническая документация, которая также передается вашим сотрудникам</div>
            <div class="turnkey-stage__content">
              <div class="group">
                <div class="incard-circle__big">
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 9.27273H23.25C23.25 9.07549 23.1723 8.88619 23.0337 8.74583L22.5 9.27273ZM14.3333 1L14.8671 0.473102C14.7262 0.330352 14.5339 0.25 14.3333 0.25V1ZM23.25 19.9091V9.27273H21.75V19.9091H23.25ZM23.0337 8.74583L14.8671 0.473102L13.7996 1.5269L21.9663 9.79962L23.0337 8.74583ZM14.3333 0.25H8.5V1.75H14.3333V0.25ZM13.5833 1V6.90909H15.0833V1H13.5833ZM16.6667 10.0227H22.5V8.52273H16.6667V10.0227ZM8.5 23.0227H17.8333V21.5227H8.5V23.0227ZM17.8333 23.0227H20.1667V21.5227H17.8333V23.0227ZM17.0833 22.2727V24.6364H18.5833V22.2727H17.0833ZM15.5 26.25H3.83333V27.75H15.5V26.25ZM2.25 24.6364V8.09091H0.75V24.6364H2.25ZM5.41667 3.36364V5.72727H6.91667V3.36364H5.41667ZM5.41667 5.72727V19.9091H6.91667V5.72727H5.41667ZM3.83333 6.47727H6.16667V4.97727H3.83333V6.47727ZM2.25 8.09091C2.25 7.19057 2.96798 6.47727 3.83333 6.47727V4.97727C2.12136 4.97727 0.75 6.38045 0.75 8.09091H2.25ZM3.83333 26.25C2.96798 26.25 2.25 25.5367 2.25 24.6364H0.75C0.75 26.3468 2.12136 27.75 3.83333 27.75V26.25ZM17.0833 24.6364C17.0833 25.5367 16.3654 26.25 15.5 26.25V27.75C17.212 27.75 18.5833 26.3468 18.5833 24.6364H17.0833ZM21.75 19.9091C21.75 20.8094 21.032 21.5227 20.1667 21.5227V23.0227C21.8786 23.0227 23.25 21.6195 23.25 19.9091H21.75ZM8.5 21.5227C7.63464 21.5227 6.91667 20.8094 6.91667 19.9091H5.41667C5.41667 21.6196 6.78803 23.0227 8.5 23.0227V21.5227ZM13.5833 6.90909C13.5833 8.61955 14.9547 10.0227 16.6667 10.0227V8.52273C15.8013 8.52273 15.0833 7.80943 15.0833 6.90909H13.5833ZM8.5 0.25C6.78803 0.25 5.41667 1.65318 5.41667 3.36364H6.91667C6.91667 2.4633 7.63464 1.75 8.5 1.75V0.25Z" fill="#1333BB"/>
                  </svg>
                </div>
                <div class="incard-svg__big">
                  <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="#E1E1E1"/>
                  </svg>
                </div>
                <div class="incard-circle__big">
                  <svg width="14" height="34" viewBox="0 0 14 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41873 1.75C1.94334 1.75 1.55118 2.32997 1.85337 2.85304L4.59947 7.60632H9.40031L12.1464 2.85304C12.4486 2.32997 12.0564 1.75 11.5811 1.75H2.41873ZM9.17929 9.10632H4.82049L2.19493 28.1938C2.15719 28.4683 2.26853 28.7318 2.46523 28.885L6.61078 32.1141L6.1499 32.7057L6.61078 32.1141C6.84348 32.2953 7.1563 32.2953 7.389 32.1141L7.84988 32.7057L7.389 32.1141L11.5346 28.885C11.7313 28.7318 11.8426 28.4683 11.8048 28.1938L9.17929 9.10632ZM3.38855 8.50886L0.554548 3.60341C-0.276338 2.16521 0.691806 0.25 2.41873 0.25H11.5811C13.308 0.25 14.2761 2.16521 13.4452 3.60341L10.6112 8.50885L13.2909 27.9894C13.3994 28.7786 13.0872 29.577 12.4563 30.0684L8.31075 33.2974C7.53606 33.9009 6.46372 33.9009 5.68903 33.2974L1.54348 30.0684L1.99865 29.484L1.54347 30.0684C0.912542 29.577 0.600368 28.7786 0.708926 27.9894L3.38855 8.50886Z" fill="#1333BB"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="hr1"><br><hr><br></div>
          </div>
        </div>
        <div class="line">
          <div class="stage">
            <h3 class="turnkey-stage__title">Согласуем с контролирующими органами</h3>
            <div class="turnkey-stage__text">Мы берем этот вопрос на себя. У нас богатый опыт и налаженная коммуникация со всеми необходимыми инстациями. Кроме того, все наше оборудование имеет необходимую сертификацию.</div>
            <div class="turnkey-stage__content">
              <div class="grid-2c" style="gap: 1.6rem;">
                <div class="grid-2c__col">
                  <svg width="312" height="442" viewBox="0 0 648 544" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="turnkey-stage__plate">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M487.974 10.1833C485.578 4.0426 479.66 0 473.069 0H424H16C7.16344 0 0 7.16346 0 16V528C0 536.837 7.16343 544 16 544H632C640.837 544 648 536.837 648 528V98C648 89.1634 640.837 82 632 82H526.931C520.34 82 514.422 77.9574 512.026 71.8167L487.974 10.1833Z" fill="#F2F2F2" data-v-65ceef3c=""/>
                  </svg>
                  <div class="top-block">
                    <div class="left-icon">
                      <img class="icon-img" src="/icon.png" alt="Logo Technodar">
                    </div>
                    <div class="right-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3332 18.3333L13.0472 13.0474M13.0472 13.0474C14.2536 11.841 14.9998 10.1743 14.9998 8.33334C14.9998 4.65144 12.0151 1.66667 8.33317 1.66667C4.65127 1.66667 1.6665 4.65144 1.6665 8.33334C1.6665 12.0152 4.65127 15 8.33317 15C10.1741 15 11.8408 14.2538 13.0472 13.0474ZM6.6665 8.33334H9.99984M8.33317 10V6.66667" stroke="#1333BB" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="bot-block">
                    <div class="bot-block__text">№ РОСС RU.PO.H00385</div>
                    <h3 class="bot-block__title">Сертификат соответствия</h3>
                  </div>
                </div>
                <div class="grid-2c__col">
                  <svg width="312" height="442" viewBox="0 0 648 544" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="turnkey-stage__plate">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M487.974 10.1833C485.578 4.0426 479.66 0 473.069 0H424H16C7.16344 0 0 7.16346 0 16V528C0 536.837 7.16343 544 16 544H632C640.837 544 648 536.837 648 528V98C648 89.1634 640.837 82 632 82H526.931C520.34 82 514.422 77.9574 512.026 71.8167L487.974 10.1833Z" fill="#F2F2F2" data-v-65ceef3c=""/>
                  </svg>
                  <div class="top-block">
                    <div class="left-icon">
                      <img class="icon-img" src="/icon.png" alt="Logo Technodar">
                    </div>
                    <div class="right-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3332 18.3333L13.0472 13.0474M13.0472 13.0474C14.2536 11.841 14.9998 10.1743 14.9998 8.33334C14.9998 4.65144 12.0151 1.66667 8.33317 1.66667C4.65127 1.66667 1.6665 4.65144 1.6665 8.33334C1.6665 12.0152 4.65127 15 8.33317 15C10.1741 15 11.8408 14.2538 13.0472 13.0474ZM6.6665 8.33334H9.99984M8.33317 10V6.66667" stroke="#1333BB" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="bot-block">
                    <div class="bot-block__text">№ РОСС RU.PO.H00385</div>
                    <h3 class="bot-block__title">Сертификат соответствия</h3>
                  </div>
                </div>
              </div>
              <button class="btn btn-white-filled turnkey-content__btn">Смотреть сертификаты</button>
            </div>
            <div class="hr1"><br><hr><br></div>
          </div>
        </div>
        <div class="line">
          <div class="stage">
            <h3 class="turnkey-stage__title">Реализуем решения</h3>
            <div class="turnkey-stage__text">Когда решение спроектировано и согласовано, начинается этап его реализации. Производственный отдел воплотит идеи и чертежи в осязаемые объекты реальности.</div>
            <div class="turnkey-stage__content">
              <img src="/images/industries/turnkey/solutions.png">
            </div>
            <div class="hr1"><br><hr><br></div>
          </div>
        </div>
        <div class="line">
          <div class="stage">
            <h3 class="turnkey-stage__title">Выполним работу в любой точке России и СНГ</h3>
            <div class="turnkey-stage__text">Можно не волноваться по поводу текущего местоположения флота, мы приедем и установим оборудование самостоятельно.</div>
          </div>
        </div>
      </div>
      <div class="grid2">
        <div style="display: flex; align-items: flex-end;">
          <div class="cta cta__content">
            <div class="cta-content__icon">
              <svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 12.6364L12.4495 13.1458C12.5915 13.2992 12.791 13.3864 13 13.3864C13.209 13.3864 13.4085 13.2992 13.5505 13.1458L13 12.6364ZM13 33.75C13.4142 33.75 13.75 33.4142 13.75 33C13.75 32.5858 13.4142 32.25 13 32.25V33.75ZM13 17.7045C12.5858 17.7045 12.25 18.0403 12.25 18.4545C12.25 18.8688 12.5858 19.2045 13 19.2045V17.7045ZM16.75 5.36364C16.75 5.77281 16.5451 6.39136 16.1344 7.16507C15.7372 7.91349 15.1989 8.71365 14.6476 9.45697C14.0984 10.1975 13.5475 10.8667 13.133 11.3516C12.9261 11.5936 12.754 11.7888 12.6342 11.9229C12.5742 11.9899 12.5274 12.0417 12.4959 12.0763C12.4802 12.0936 12.4683 12.1066 12.4604 12.1151C12.4565 12.1194 12.4536 12.1225 12.4518 12.1245C12.4509 12.1255 12.4502 12.1262 12.4499 12.1266C12.4497 12.1268 12.4495 12.1269 12.4495 12.127C12.4495 12.127 12.4495 12.127 12.4495 12.127C12.4495 12.127 12.4495 12.127 13 12.6364C13.5505 13.1458 13.5505 13.1457 13.5506 13.1456C13.5507 13.1455 13.5508 13.1454 13.5509 13.1453C13.5511 13.145 13.5514 13.1447 13.5518 13.1443C13.5525 13.1436 13.5535 13.1425 13.5547 13.1412C13.5572 13.1384 13.5608 13.1346 13.5654 13.1296C13.5746 13.1195 13.5879 13.105 13.6051 13.0861C13.6395 13.0483 13.6894 12.9931 13.7526 12.9225C13.8788 12.7813 14.0583 12.5777 14.2732 12.3262C14.7025 11.824 15.2766 11.1269 15.8524 10.3505C16.4261 9.57689 17.0128 8.7095 17.4593 7.86834C17.8924 7.05248 18.25 6.15945 18.25 5.36364H16.75ZM13 12.6364C13.5505 12.127 13.5505 12.127 13.5505 12.127C13.5505 12.127 13.5505 12.127 13.5505 12.127C13.5505 12.1269 13.5503 12.1268 13.5501 12.1266C13.5498 12.1262 13.5491 12.1255 13.5482 12.1245C13.5464 12.1225 13.5435 12.1194 13.5396 12.1151C13.5317 12.1066 13.5198 12.0936 13.5041 12.0763C13.4726 12.0417 13.4258 11.9899 13.3658 11.9229C13.246 11.7888 13.0739 11.5936 12.867 11.3516C12.4525 10.8667 11.9016 10.1975 11.3524 9.45697C10.8011 8.71365 10.2628 7.91349 9.86558 7.16507C9.45489 6.39136 9.25 5.77281 9.25 5.36364H7.75C7.75 6.15945 8.10761 7.05248 8.54067 7.86834C8.98715 8.7095 9.57386 9.57689 10.1476 10.3505C10.7234 11.1269 11.2975 11.824 11.7268 12.3262C11.9417 12.5777 12.1212 12.7813 12.2474 12.9225C12.3106 12.9931 12.3605 13.0483 12.3949 13.0861C12.4121 13.105 12.4254 13.1195 12.4346 13.1296C12.4392 13.1346 12.4428 13.1384 12.4453 13.1412C12.4465 13.1425 12.4475 13.1436 12.4482 13.1443C12.4486 13.1447 12.4489 13.145 12.4491 13.1453C12.4492 13.1454 12.4493 13.1455 12.4494 13.1456C12.4495 13.1457 12.4495 13.1458 13 12.6364ZM9.25 5.36364C9.25 3.38947 10.907 1.75 13 1.75V0.25C10.1224 0.25 7.75 2.51787 7.75 5.36364H9.25ZM13 1.75C15.093 1.75 16.75 3.38947 16.75 5.36364H18.25C18.25 2.51787 15.8776 0.25 13 0.25V1.75ZM4.75 26.4773H21.25V24.9773H4.75V26.4773ZM4.75 33.75H13V32.25H4.75V33.75ZM21.25 17.7045H13V19.2045H21.25V17.7045ZM21.25 19.2045C22.9288 19.2045 24.25 20.5184 24.25 22.0909H25.75C25.75 19.6468 23.7134 17.7045 21.25 17.7045V19.2045ZM21.25 26.4773C23.7134 26.4773 25.75 24.535 25.75 22.0909H24.25C24.25 23.6634 22.9288 24.9773 21.25 24.9773V26.4773ZM4.75 24.9773C2.28664 24.9773 0.25 26.9195 0.25 29.3636H1.75C1.75 27.7911 3.07122 26.4773 4.75 26.4773V24.9773ZM4.75 32.25C3.07122 32.25 1.75 30.9361 1.75 29.3636H0.25C0.25 31.8077 2.28664 33.75 4.75 33.75V32.25Z" fill="#1333BB"/>
              </svg>
            </div>
            <div class="cta-content__text">Покажем, как работает наша система на примере реального объекта</div>
            <button class="btn btn-blue-filled cta-content__btn">Записаться на демонстрацию</button>
          </div>
        </div>
        <div style="margin-left: 2rem; padding-left: 1rem;">
          <div class="turnkey-stage__content">
            <img src="/images/industries/turnkey/map.png">
          </div>
        </div>
      </div>
    </div>
    <div class="turnkey__wrapper-mobile tablet-mobile" v-else>
      <div class="turnkey__nav--title">Выполняем работу <span class="blue">«под ключ»</span></div>
      <div class="turnkey__nav">
        <div class="turnkey__numbers">
          <span class="turnkey-numbers__num turnkey-numbers__num--current">{{ `${activeSlide + 1}`.padStart(2, '0') }}</span>
          <span class="turnkey-numbers__num turnkey-numbers__num--all">{{ `6`.padStart(2, '0') }}</span>
        </div>
        <div class="turnkey__navigations">
          <button class="turnkey-navigations__arr turnkey-navigations__arr--prev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12L7.64645 11.6464L7.29289 12L7.64645 12.3536L8 12ZM16.3536 19.6464L8.35355 11.6464L7.64645 12.3536L15.6464 20.3536L16.3536 19.6464ZM8.35355 12.3536L16.3536 4.35355L15.6464 3.64645L7.64645 11.6464L8.35355 12.3536Z" fill="currentColor"/>
            </svg>
          </button>
          <button class="turnkey-navigations__arr turnkey-navigations__arr--next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20L16 12L8 4" stroke="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      <div v-swiper:swiper="swiperOptions" @slideChange="slideChange">
        <div class="swiper-wrapper">
          <div class="stage swiper-slide">
            <h3 class="turnkey-stage__title">Подберем оборудование</h3>
            <div class="turnkey-stage__text">Для спроектированных решений мы используем продукцию собственного производства</div>
            <div class="turnkey-stage__content">
              <div class="grid-2c">
                <div class="grid-2c__first">
                  <div class="card">Датчики Sekee</div>
                  <div class="card">Контроллеры</div>
                </div>
                <div class="grid-2c__second">
                  <div class="card">Деаераторы Sekee</div>
                  <div class="card">Бортовые компьютеры</div>
                </div>
                <div class="grid-2c__bottom">
                  <div class="card__last grid">
                    <span class="incard-circle__small">
                      <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 1.5C2.05964 1.5 1.5 2.05964 1.5 2.75L1.5 20.75C1.5 21.4404 2.05964 22 2.75 22H14.75C15.4404 22 16 21.4404 16 20.75L16 8.5H11.75C12312 8.5 9 7.26878 9 5.75V1.5L2.75 1.5ZM10.5 2.56066L14.9393 7L11.75 7C11.0596 7 10.5 6.44036 10.5 5.75V2.56066ZM0 2.75C0 1.23122 1.23122 0 2.75 0L9.75 0C9.94891 0 10.1397 0.0790176 12803 0.21967L17.2803 7.21967C17.421 7.36032 17.5 7.55109 17.5 7.75L17.5 20.75C17.5 22.2688 16.2688 23.5 14.75 23.5H2.75C1.23122 23.5 0 22.2688 0 20.75L0 2.75ZM5 13.75C5 13.3358 5.33579 15.75 13H8.75C9.16421 13 9.5 13.3358 9.5 13.75C9.5 14.1642 9.16421 14.5 8.75 14.5H5.75C5.33579 14.5 5 14.1642 5 13.75ZM5 17.75C5 17.3358 5.33579 17 5.75 17H11.75C12.1642 17 12.5 17.3358 15 17.75C12.5 18.1642 12.1642 18.5 11.75 18.5H5.75C5.33579 18.5 5 18.1642 5 17.75Z" fill="black"/>
                      </svg>
                    </span>
                    <p class="in-grid__mobile">Всё оборудование и отдельные его элементы соответствуют требовованиям контролирующих инстанций и регистров</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="stage swiper-slide">
            <h3 class="turnkey-stage__title">Разработаем проект</h3>
            <div class="turnkey-stage__text">После согласования технических заданий и обсуждения требований инженеры-проектировщики разрабатывают индивидуальный проект на выбранный объект. Для того, чтобы проект был максимально оптимизирован под выбранный транспорт, специалисты также проводят предпроектное обследование</div>
            <div class="turnkey-stage__content">
              <img src="/images/industries/turnkey/project.png">
            </div>
          </div>
          <div class="stage swiper-slide">
            <h3 class="turnkey-stage__title">Подготовим техническую документацию</h3>
            <div class="turnkey-stage__text">По проекту составляется подробная техническая документация, которая также передается вашим сотрудникам</div>
            <div class="turnkey-stage__content">
              <div class="group">
                <div class="incard-circle__big">
                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 9.27273H23.25C23.25 9.07549 23.1723 8.88619 23.0337 8.74583L22.5 9.27273ZM14.3333 1L14.8671 0.473102C14.7262 0.330352 14.5339 0.25 14.3333 0.25V1ZM23.25 19.9091V9.27273H21.75V19.9091H23.25ZM23.0337 8.74583L14.8671 0.473102L13.7996 1.5269L21.9663 9.79962L23.0337 8.74583ZM14.3333 0.25H8.5V1.75H14.3333V0.25ZM13.5833 1V6.90909H15.0833V1H13.5833ZM16.6667 10.0227H22.5V8.52273H16.6667V10.0227ZM8.5 23.0227H17.8333V21.5227H8.5V23.0227ZM17.8333 23.0227H20.1667V21.5227H17.8333V23.0227ZM17.0833 22.2727V24.6364H18.5833V22.2727H17.0833ZM15.5 26.25H3.83333V27.75H15.5V26.25ZM2.25 24.6364V8.09091H0.75V24.6364H2.25ZM5.41667 3.36364V5.72727H6.91667V3.36364H5.41667ZM5.41667 5.72727V19.9091H6.91667V5.72727H5.41667ZM3.83333 6.47727H6.16667V4.97727H3.83333V6.47727ZM2.25 8.09091C2.25 7.19057 2.96798 6.47727 3.83333 6.47727V4.97727C2.12136 4.97727 0.75 6.38045 0.75 8.09091H2.25ZM3.83333 26.25C2.96798 26.25 2.25 25.5367 2.25 24.6364H0.75C0.75 26.3468 2.12136 27.75 3.83333 27.75V26.25ZM17.0833 24.6364C17.0833 25.5367 16.3654 26.25 15.5 26.25V27.75C17.212 27.75 18.5833 26.3468 18.5833 24.6364H17.0833ZM21.75 19.9091C21.75 20.8094 21.032 21.5227 20.1667 21.5227V23.0227C21.8786 23.0227 23.25 21.6195 23.25 19.9091H21.75ZM8.5 21.5227C7.63464 21.5227 6.91667 20.8094 6.91667 19.9091H5.41667C5.41667 21.6196 6.78803 23.0227 8.5 23.0227V21.5227ZM13.5833 6.90909C13.5833 8.61955 14.9547 10.0227 16.6667 10.0227V8.52273C15.8013 8.52273 15.0833 7.80943 15.0833 6.90909H13.5833ZM8.5 0.25C6.78803 0.25 5.41667 1.65318 5.41667 3.36364H6.91667C6.91667 2.4633 7.63464 1.75 8.5 1.75V0.25Z" fill="#1333BB"/>
                  </svg>
                </div>
                <div class="incard-svg__big">
                  <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="#E1E1E1"/>
                  </svg>
                </div>
                <div class="incard-circle__big">
                  <svg width="14" height="34" viewBox="0 0 14 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.41873 1.75C1.94334 1.75 1.55118 2.32997 1.85337 2.85304L4.59947 7.60632H9.40031L12.1464 2.85304C12.4486 2.32997 12.0564 1.75 11.5811 1.75H2.41873ZM9.17929 9.10632H4.82049L2.19493 28.1938C2.15719 28.4683 2.26853 28.7318 2.46523 28.885L6.61078 32.1141L6.1499 32.7057L6.61078 32.1141C6.84348 32.2953 7.1563 32.2953 7.389 32.1141L7.84988 32.7057L7.389 32.1141L11.5346 28.885C11.7313 28.7318 11.8426 28.4683 11.8048 28.1938L9.17929 9.10632ZM3.38855 8.50886L0.554548 3.60341C-0.276338 2.16521 0.691806 0.25 2.41873 0.25H11.5811C13.308 0.25 14.2761 2.16521 13.4452 3.60341L10.6112 8.50885L13.2909 27.9894C13.3994 28.7786 13.0872 29.577 12.4563 30.0684L8.31075 33.2974C7.53606 33.9009 6.46372 33.9009 5.68903 33.2974L1.54348 30.0684L1.99865 29.484L1.54347 30.0684C0.912542 29.577 0.600368 28.7786 0.708926 27.9894L3.38855 8.50886Z" fill="#1333BB"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="stage swiper-slide">
            <h3 class="turnkey-stage__title">Согласуем с контролирующими органами</h3>
            <div class="turnkey-stage__text">Мы берем этот вопрос на себя. У нас богатый опыт и налаженная коммуникация со всеми необходимыми инстациями. Кроме того, все наше оборудование имеет необходимую сертификацию.</div>
            <div class="turnkey-stage__content">
              <div class="grid-2c" style="gap: 1.6rem;">
                <div class="grid-2c__col">
                  <svg width="312" height="442" viewBox="0 0 648 544" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="turnkey-stage__plate">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M487.974 10.1833C485.578 4.0426 479.66 0 473.069 0H424H16C7.16344 0 0 7.16346 0 16V528C0 536.837 7.16343 544 16 544H632C640.837 544 648 536.837 648 528V98C648 89.1634 640.837 82 632 82H526.931C520.34 82 514.422 77.9574 512.026 71.8167L487.974 10.1833Z" fill="#F2F2F2" data-v-65ceef3c=""/>
                  </svg>
                  <div class="top-block">
                    <div class="left-icon">
                      <img class="icon-img" src="/icon.png" alt="Logo Technodar">
                    </div>
                    <div class="right-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3332 18.3333L13.0472 13.0474M13.0472 13.0474C14.2536 11.841 14.9998 10.1743 14.9998 8.33334C14.9998 4.65144 12.0151 1.66667 8.33317 1.66667C4.65127 1.66667 1.6665 4.65144 1.6665 8.33334C1.6665 12.0152 4.65127 15 8.33317 15C10.1741 15 11.8408 14.2538 13.0472 13.0474ZM6.6665 8.33334H9.99984M8.33317 10V6.66667" stroke="#1333BB" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="bot-block">
                    <div class="bot-block__text">№ РОСС RU.PO.H00385</div>
                    <h3 class="bot-block__title">Сертификат соответствия</h3>
                  </div>
                </div>
                <div class="grid-2c__col">
                  <svg width="312" height="442" viewBox="0 0 648 544" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="turnkey-stage__plate">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M487.974 10.1833C485.578 4.0426 479.66 0 473.069 0H424H16C7.16344 0 0 7.16346 0 16V528C0 536.837 7.16343 544 16 544H632C640.837 544 648 536.837 648 528V98C648 89.1634 640.837 82 632 82H526.931C520.34 82 514.422 77.9574 512.026 71.8167L487.974 10.1833Z" fill="#F2F2F2" data-v-65ceef3c=""/>
                  </svg>
                  <div class="top-block">
                    <div class="left-icon">
                      <img class="icon-img" src="/icon.png" alt="Logo Technodar">
                    </div>
                    <div class="right-icon">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3332 18.3333L13.0472 13.0474M13.0472 13.0474C14.2536 11.841 14.9998 10.1743 14.9998 8.33334C14.9998 4.65144 12.0151 1.66667 8.33317 1.66667C4.65127 1.66667 1.6665 4.65144 1.6665 8.33334C1.6665 12.0152 4.65127 15 8.33317 15C10.1741 15 11.8408 14.2538 13.0472 13.0474ZM6.6665 8.33334H9.99984M8.33317 10V6.66667" stroke="#1333BB" stroke-width="1.5" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                  <div class="bot-block">
                    <div class="bot-block__text">№ РОСС RU.PO.H00385</div>
                    <h3 class="bot-block__title">Сертификат соответствия</h3>
                  </div>
                </div>
              </div>
              <button class="btn btn-white-filled turnkey-content__btn">Смотреть сертификаты</button>
            </div>
          </div>
          <div class="stage swiper-slide">
            <h3 class="turnkey-stage__title">Реализуем решения</h3>
            <div class="turnkey-stage__text">Когда решение спроектировано и согласовано, начинается этап его реализации. Производственный отдел воплотит идеи и чертежи в осязаемые объекты реальности.</div>
            <div class="turnkey-stage__content">
              <img src="/images/industries/turnkey/solutions.png">
            </div>
          </div>
          <div class="stage swiper-slide">
            <h3 class="turnkey-stage__title">Выполним работу в любой точке России и СНГ</h3>
            <div class="turnkey-stage__text">Можно не волноваться по поводу текущего местоположения флота, мы приедем и установим оборудование самостоятельно.</div>
            <div class="turnkey-stage__content">
              <img src="/images/industries/turnkey/map.png" style="border: 0.1rem solid var(--text-300); border-radius: 1.6rem;">
            </div>
          </div>
        </div>
      </div>
      <div class="stage">
        <div class="cta cta__content">
          <div class="cta-content__icon">
            <svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 12.6364L12.4495 13.1458C12.5915 13.2992 12.791 13.3864 13 13.3864C13.209 13.3864 13.4085 13.2992 13.5505 13.1458L13 12.6364ZM13 33.75C13.4142 33.75 13.75 33.4142 13.75 33C13.75 32.5858 13.4142 32.25 13 32.25V33.75ZM13 17.7045C12.5858 17.7045 12.25 18.0403 12.25 18.4545C12.25 18.8688 12.5858 19.2045 13 19.2045V17.7045ZM16.75 5.36364C16.75 5.77281 16.5451 6.39136 16.1344 7.16507C15.7372 7.91349 15.1989 8.71365 14.6476 9.45697C14.0984 10.1975 13.5475 10.8667 13.133 11.3516C12.9261 11.5936 12.754 11.7888 12.6342 11.9229C12.5742 11.9899 12.5274 12.0417 12.4959 12.0763C12.4802 12.0936 12.4683 12.1066 12.4604 12.1151C12.4565 12.1194 12.4536 12.1225 12.4518 12.1245C12.4509 12.1255 12.4502 12.1262 12.4499 12.1266C12.4497 12.1268 12.4495 12.1269 12.4495 12.127C12.4495 12.127 12.4495 12.127 12.4495 12.127C12.4495 12.127 12.4495 12.127 13 12.6364C13.5505 13.1458 13.5505 13.1457 13.5506 13.1456C13.5507 13.1455 13.5508 13.1454 13.5509 13.1453C13.5511 13.145 13.5514 13.1447 13.5518 13.1443C13.5525 13.1436 13.5535 13.1425 13.5547 13.1412C13.5572 13.1384 13.5608 13.1346 13.5654 13.1296C13.5746 13.1195 13.5879 13.105 13.6051 13.0861C13.6395 13.0483 13.6894 12.9931 13.7526 12.9225C13.8788 12.7813 14.0583 12.5777 14.2732 12.3262C14.7025 11.824 15.2766 11.1269 15.8524 10.3505C16.4261 9.57689 17.0128 8.7095 17.4593 7.86834C17.8924 7.05248 18.25 6.15945 18.25 5.36364H16.75ZM13 12.6364C13.5505 12.127 13.5505 12.127 13.5505 12.127C13.5505 12.127 13.5505 12.127 13.5505 12.127C13.5505 12.1269 13.5503 12.1268 13.5501 12.1266C13.5498 12.1262 13.5491 12.1255 13.5482 12.1245C13.5464 12.1225 13.5435 12.1194 13.5396 12.1151C13.5317 12.1066 13.5198 12.0936 13.5041 12.0763C13.4726 12.0417 13.4258 11.9899 13.3658 11.9229C13.246 11.7888 13.0739 11.5936 12.867 11.3516C12.4525 10.8667 11.9016 10.1975 11.3524 9.45697C10.8011 8.71365 10.2628 7.91349 9.86558 7.16507C9.45489 6.39136 9.25 5.77281 9.25 5.36364H7.75C7.75 6.15945 8.10761 7.05248 8.54067 7.86834C8.98715 8.7095 9.57386 9.57689 10.1476 10.3505C10.7234 11.1269 11.2975 11.824 11.7268 12.3262C11.9417 12.5777 12.1212 12.7813 12.2474 12.9225C12.3106 12.9931 12.3605 13.0483 12.3949 13.0861C12.4121 13.105 12.4254 13.1195 12.4346 13.1296C12.4392 13.1346 12.4428 13.1384 12.4453 13.1412C12.4465 13.1425 12.4475 13.1436 12.4482 13.1443C12.4486 13.1447 12.4489 13.145 12.4491 13.1453C12.4492 13.1454 12.4493 13.1455 12.4494 13.1456C12.4495 13.1457 12.4495 13.1458 13 12.6364ZM9.25 5.36364C9.25 3.38947 10.907 1.75 13 1.75V0.25C10.1224 0.25 7.75 2.51787 7.75 5.36364H9.25ZM13 1.75C15.093 1.75 16.75 3.38947 16.75 5.36364H18.25C18.25 2.51787 15.8776 0.25 13 0.25V1.75ZM4.75 26.4773H21.25V24.9773H4.75V26.4773ZM4.75 33.75H13V32.25H4.75V33.75ZM21.25 17.7045H13V19.2045H21.25V17.7045ZM21.25 19.2045C22.9288 19.2045 24.25 20.5184 24.25 22.0909H25.75C25.75 19.6468 23.7134 17.7045 21.25 17.7045V19.2045ZM21.25 26.4773C23.7134 26.4773 25.75 24.535 25.75 22.0909H24.25C24.25 23.6634 22.9288 24.9773 21.25 24.9773V26.4773ZM4.75 24.9773C2.28664 24.9773 0.25 26.9195 0.25 29.3636H1.75C1.75 27.7911 3.07122 26.4773 4.75 26.4773V24.9773ZM4.75 32.25C3.07122 32.25 1.75 30.9361 1.75 29.3636H0.25C0.25 31.8077 2.28664 33.75 4.75 33.75V32.25Z" fill="#1333BB"/>
            </svg>
          </div>
          <div class="cta-content__text">Спланируем внедрение системы на ваш объект</div>
          <button class="btn btn-blue-filled cta-content__btn">Записаться на консультацию</button>
        </div>
      </div>
    </div>
    <div class="hr1"><hr></div>
  </section>
</template>

<script>
export default {
  name: 'IndustriesTurnkey',
  data () {
    return {
      displaySize: '',
      activeSlide: 0,
      swiperOptions: {
        spaceBetween: 20,
        resistanceRatio: 0,
        navigation: {
          prevEl: '.turnkey-navigations__arr--prev',
          nextEl: '.turnkey-navigations__arr--next'
        }
      }
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.displaySize = document.documentElement.clientWidth < 1200 ? 'mobile' : 'desktop'
    },
    slideChange () {
      this.activeSlide = this.swiper.activeIndex
    }
  }
}
</script>

<style lang="scss" scoped>
.blue {
  color: var(--primary-blue)
}
.desktop-only {
  @include w1199 {
    display: none;
  }
  @include w767 {
    display: none;
  }
}
.tablet-mobile {
  display: none;
  @include w1199 {
    display: block;
  }
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  @include w767 {
    grid-template-columns: 1fr;
  }
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: span 2;
}
.hr1 {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding);
  hr {
    width: 100%;
    height: 0.1rem;
    margin: 0;
    border: none!important;
    background-color: var(--text-300);
  }
}
.line {
  border-left: 0.2rem solid var(--primary-100);
  margin-left: 2rem;
  padding-left: 1rem;
}
.line::before {
  content: url(/images/industries/svg/ellipse.svg);
  margin-left: -2.3rem;
  position: absolute;
}
.line:hover {
  border-left: 0.2rem solid var(--primary-blue);
}
.line:hover::before {
  content: url(/images/industries/svg/ellipse_hover.svg);
}
.line:last-of-type {
  border-left: none;
  margin-left: 2.2rem;
  padding-left: 1rem;
}
.turnkey {
  margin-left: calc(-1 * var(--container-padding));
  margin-right: calc(-1 * var(--container-padding));
  padding: 0 var(--container-padding) 0rem;
  @include w767 {
    padding: 2.4rem var(--container-padding) 2rem;
  }
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 3.2rem 0;
  }
  &__wrapper-mobile {
    display: block;
    padding: 3.2rem 0;
    .in-grid__mobile {
      margin-top: 1.6rem;
    }
    @include w1199 {
      height: 113rem;
    }
    @include w767 {
      height: 95rem;
    }
    .stage {
      height: auto;
      overflow-y: auto;
      overflow-x: hidden;
      @include w767 {
        height: 63rem;
      }
      @include w767 {
        height: 43rem;
      }
    }
  }
  &-stage {
    &__title {
      margin: 0;
      margin-left: 0.6rem;
      font-weight: 450;
      font-size: 2.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      color: var(--text-1000);
      @include w1199 {
      font-size: 1.8rem;
      }
      @include w767 {
      font-size: 1.6rem;
      }
    }
    &__text {
      margin: 0;
      margin-left: 0.6rem;
      font-weight: 450;
      font-size: 1.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      color: var(--text-700);
    }
    &__content {
      margin: 0 0.6rem;
      font-weight: 450;
      font-size: 1.4rem;
      line-height: 1.33;
      letter-spacing: -0.03em;
      color: var(--text-700);
      .grid-2c {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 3.2rem 0;
        @include w767 {
          grid-template-columns: 1fr;
        }
        &__bottom {
          grid-column: span 2;
        }
        &__col {
          position: relative;
          height: 40rem;
          @include w1199 {
            height: 34rem;
          }
          .top-block {
            position: absolute;
            top: 0;
            width: 100%;
            .right-icon {
              position: absolute;
              right: 0;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 5rem;
              height: 5rem;
              padding: 0;
              border-radius: 50%;
              border: 0.1rem solid var(--text-200);
              background: var(--text-200);
              cursor: pointer;
              @include w1199 {
                width: 2.4rem;
                height: 2.4rem;
                svg {
                  width: 1.6rem;
                  height: 1.6rem;
                }
              }
            }
            .left-icon {
              position: absolute;
              left: 0;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 5rem;
              height: 5rem;
              padding-left: 1.6rem;
              .icon-img {
                width: 100%;
                height: auto;
              }
            }
          }
          .bot-block {
            position: absolute;
            bottom: 1.6rem;
            width: 100%;
            padding: 0 3.2rem;
            &__title {
              margin: 0;
              margin-left: 0.6rem;
              font-weight: 450;
              font-size: 2.4rem;
              line-height: 1.33;
              letter-spacing: -0.03em;
              color: var(--text-1000);
            }
            &__text {
              margin: 0;
              margin-left: 0.6rem;
              font-weight: 400;
              font-size: 1.4rem;
              line-height: 1.33;
              letter-spacing: -0.03em;
              color: var(--text-700);
              text-transform: uppercase;
            }
          }
        }
      }
      img {
        width: 100vw;
        height: 50rem;
        object-fit: cover;
        border-radius: 1.6rem;
        margin-top: 3.2rem;
        @include w767 {
          height: auto;
        }
      }
    }
    &__plate {
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      min-width: 100%;
      height: 100%;
    }
  }
  &-content__btn {
    margin: 0.8rem 0;
    padding: 1.6rem 3.2rem;
    border: 0.1rem solid var(--primary-blue);
    @include w767 {
      bottom: 1.6rem;
      left: 1.6rem;
      width: calc(100% - 3.2rem);
      margin: 0;
      padding: 1.6rem 0;
    }
  }
  &__nav {
    position: relative;
    bottom: 0;
    z-index: 5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.2rem 5rem 3.2rem 3.2rem;
    @include w1199 {
      width: 100%;
    }
    @include w767 {
      position: static;
      width: 100%;
      margin-top: 0.8rem;
      padding: 1.6rem;
      background-color: var(--text-000);
    }
    &--title {
      padding: 1.5rem;
      display: block;
      margin-right: 3.2rem;
      font-size: 2.4rem;
      @include w1199 {
        display: block;
      }
      @include w767 {
        display: block;
        font-size: 2.8rem;
      }
    }
  }
  &__numbers {
    padding: 1.5rem 0;
    border: 0.1rem solid var(--text-300);
    border-radius: 3.2rem;
    display: flex;
  }
  &-numbers {
    &__num {
      line-height: 1.12;
      &--current {
        width: 5.6rem;
        padding-left: 2.4rem;
        border-right: 0.1rem solid var(--text-300);
        color: var(--text-900);
      }
      &--all {
        padding: 0 2.4rem 0 1.6rem;
        color: var(--text-300);
      }
    }
  }
  &__navigations {
    display: flex;
  }
  &-navigations {
    &__arr {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      padding: 0;
      border-radius: 50%;
      border: 0.1rem solid var(--text-300);
      background: none;
      cursor: pointer;
      color: var(--text-1000);
      transition: 0.2s;
      @include hover {
        &:hover,
        &:focus {
          color: var(--primary-blue);
          border-color: var(--primary-blue);
        }
        &:active {
          color: var(--text-1000);
          border-color: var(--primary-shadow);
        }
      }
      @include active {
        &:active {
          color: var(--text-1000);
          border-color: var(--primary-shadow);
        }
      }
      &--next {
        margin-left: 1.6rem;
        @include w767 {
          margin-left: 0.8rem;
        }
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }
}
.card {
  margin: 1.6rem;
  border: 0.1rem solid var(--text-300);
  border-radius: 1.6rem;
  padding: 3.2rem 1.6rem;
  @include w767 {
    height: 11rem;
  }
  &__last {
    margin: 0 1.6rem 1.6rem 1.6rem;
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    padding: 3.2rem 1.6rem;
  }
  &__last, .grid {
    grid-template-columns: 1fr 12fr;
  }
}
.group {
  margin-top: 1.6rem;
  display: flex;
  align-content: center;
}
.incard-circle__small {
  position: static;
  top: 3.1rem;
  left: 3.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  padding: 0;
  border-radius: 50%;
  border: 0.1rem solid var(--text-300);
  background: none;
  cursor: pointer;
  color: var(--primary-blue);
  transition: 0.2s;
  margin-right: 1.6rem;
  @include w1199 {
    position: static;
  }
  @include w767 {
    position: static;
    top: 2.3rem;
    left: 2.3rem;
  }
  svg {
    width: 1.6rem;
    height: 1.6rem;
  }
}
.incard-circle__big {
  position: static;
  top: 3.1rem;
  left: 3.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 9rem;
  padding: 0;
  border-radius: 50%;
  border: 0.1rem solid var(--text-300);
  background: none;
  cursor: pointer;
  color: var(--primary-blue);
  transition: 0.2s;
  margin-right: 1.6rem;
  @include w1199 {
    position: static;
  }
  @include w767 {
    position: static;
    top: 2.3rem;
    left: 2.3rem;
  }
  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
}
.incard-svg__big {
  position: static;
  top: 3.1rem;
  left: 3.1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 9rem;
  height: 9rem;
  padding: 0;
  background: none;
  cursor: pointer;
  color: var(--primary-blue);
  transition: 0.2s;
  margin-right: 1.6rem;
  @include w1199 {
    position: static;
  }
  @include w767 {
    position: static;
    top: 2.3rem;
    left: 2.3rem;
  }
  svg {
    width: 8.2rem;
    height: 3.2rem;
  }
}
.cta {
  padding: 0 var(--container-padding) 0rem;
  @include w767 {
    padding: 2.4rem var(--container-padding) 2rem;
  }
  display: block;
  &__content {
    border: 0.1rem solid var(--text-300);
    border-radius: 1.6rem;
    width: 45%;
    padding: 0 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @include w1199 {
      width: 45%;
      margin-top: 3.2rem;
      padding: 3.2rem 3.2rem;
      flex-direction: column;
      height: auto;
    }
    @include w767 {
      width: 100%;
      margin-top: 3.2rem;
      padding: 1.6rem 1.6rem;
      flex-direction: column;
      height: auto;
    }
  }
  &-content__icon {
    text-align: left;
    width: auto;
    height: 6.4rem;
    padding: 1.6rem;
    margin: 0.8rem 0;
    border: 0.1rem dashed var(--text-300);
    border-radius: 1.6rem;
  }
  &-content__text {
    margin: 0.8rem 0;
    font-size: 1.6rem;
    text-align: left;
    @include w767 {
      font-size: 1.6rem;
    }
  }
  &-content__btn {
    margin: 0.8rem 0.8rem;
    padding: 1.6rem 3.2rem;
    @include w767 {
      width: calc(100% - 3.2rem);
      margin: 0 1.6rem;
      padding: 1.6rem 0;
    }
  }
}
</style>

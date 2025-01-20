import { ScrollLock } from '../../utils/scroll-lock';

const initMenu = () => {
  const scrollLock = new ScrollLock();
  const toggleMenuButton = document.querySelector('[data-menu-toggle-btn]');
  const body = document.querySelector('body');
  const header = document.querySelector('[data-header]');
  const root = document.querySelector(':root');

  const setCustomVariableHederHeigth = () => {
    if (!header) {
      return;
    }

    const headerHeight = header.offsetHeight;

    root.style.setProperty('--header-height', `${headerHeight}px`);
  };

  const toogleMenuButtonClickHandler = () => {
    if (body.classList.contains('scroll-lock')) {
      scrollLock.enableScrolling();
    } else {
      scrollLock.disableScrolling();
    }
    body.classList.toggle('is-menu-open');
  };

  if (!toggleMenuButton) {
    return;
  }

  setCustomVariableHederHeigth();
  toggleMenuButton.addEventListener('click', toogleMenuButtonClickHandler);
};

export { initMenu };

import { Controller } from '@hotwired/stimulus';

export default class MobileMenuController extends Controller {
  static targets = ['menu', 'backdrop', 'iconOpen', 'iconClose'];

  declare readonly menuTarget: HTMLElement;
  declare readonly backdropTarget: HTMLElement;
  declare readonly iconOpenTarget: HTMLElement;
  declare readonly iconCloseTarget: HTMLElement;

  connect() {
    this.close();
  }

  toggle() {
    if (this.menuTarget.classList.contains('hidden')) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.menuTarget.classList.remove('hidden');
    this.backdropTarget.classList.remove('hidden');
    this.iconOpenTarget.classList.add('hidden');
    this.iconCloseTarget.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.menuTarget.classList.add('hidden');
    this.backdropTarget.classList.add('hidden');
    this.iconOpenTarget.classList.remove('hidden');
    this.iconCloseTarget.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

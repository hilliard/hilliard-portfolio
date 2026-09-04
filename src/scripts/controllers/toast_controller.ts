import { Controller } from '@hotwired/stimulus';

export default class ToastController extends Controller {
  static targets = ['container', 'message', 'title'];

  declare readonly containerTarget: HTMLElement;
  declare readonly messageTarget: HTMLElement;
  declare readonly titleTarget: HTMLElement;
  declare readonly hasTitleTarget: boolean;

  private timeoutId: any = null;

  show(title: string, message: string, duration: number = 4000) {
    if (this.hasTitleTarget) this.titleTarget.textContent = title;
    this.messageTarget.textContent = message;

    this.containerTarget.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    this.containerTarget.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.hide();
    }, duration);
  }

  hide() {
    this.containerTarget.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    this.containerTarget.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
  }
}

import { Controller } from '@hotwired/stimulus';

export default class ThemeController extends Controller {
  static targets = ['iconDark', 'iconLight'];

  declare readonly iconDarkTarget: HTMLElement;
  declare readonly hasIconDarkTarget: boolean;
  declare readonly iconLightTarget: HTMLElement;
  declare readonly hasIconLightTarget: boolean;

  connect() {
    this.syncIcons();
  }

  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    this.syncIcons();
  }

  syncIcons() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    if (currentTheme === 'dark') {
      if (this.hasIconDarkTarget) this.iconDarkTarget.classList.remove('hidden');
      if (this.hasIconLightTarget) this.iconLightTarget.classList.add('hidden');
    } else {
      if (this.hasIconDarkTarget) this.iconDarkTarget.classList.add('hidden');
      if (this.hasIconLightTarget) this.iconLightTarget.classList.remove('hidden');
    }
  }
}

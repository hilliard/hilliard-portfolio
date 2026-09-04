import { Controller } from '@hotwired/stimulus';

export default class CommandPaletteController extends Controller {
  static targets = ['modal', 'input', 'list', 'item', 'emptyState'];

  declare readonly modalTarget: HTMLElement;
  declare readonly inputTarget: HTMLInputElement;
  declare readonly listTarget: HTMLElement;
  declare readonly itemTargets: HTMLElement[];
  declare readonly emptyStateTarget: HTMLElement;
  declare readonly hasEmptyStateTarget: boolean;

  private selectedIndex: number = -1;

  connect() {
    this.handleKeyDown = this.handleKeyDown.bind(this);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  disconnect() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event: KeyboardEvent) {
    // Open on Cmd+K or Ctrl+K
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      this.toggle();
      return;
    }

    // Only handle other keys if modal is open
    if (this.isOpen()) {
      if (event.key === 'Escape') {
        event.preventDefault();
        this.close();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        this.navigate(1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        this.navigate(-1);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        this.selectCurrent();
      }
    }
  }

  isOpen(): boolean {
    return !this.modalTarget.classList.contains('hidden');
  }

  open() {
    this.modalTarget.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    this.inputTarget.value = '';
    this.filter();
    setTimeout(() => {
      this.inputTarget.focus();
    }, 50);
  }

  close() {
    this.modalTarget.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    this.selectedIndex = -1;
    this.updateHighlight();
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  backdropClick(event: MouseEvent) {
    if (event.target === this.modalTarget) {
      this.close();
    }
  }

  filter() {
    const query = this.inputTarget.value.toLowerCase().trim();
    let visibleCount = 0;
    const visibleItems: HTMLElement[] = [];

    this.itemTargets.forEach((item) => {
      const title = item.dataset.title?.toLowerCase() || '';
      const category = item.dataset.category?.toLowerCase() || '';
      const keywords = item.dataset.keywords?.toLowerCase() || '';

      const match =
        !query ||
        title.includes(query) ||
        category.includes(query) ||
        keywords.includes(query);

      if (match) {
        item.classList.remove('hidden');
        visibleItems.push(item);
        visibleCount++;
      } else {
        item.classList.add('hidden');
      }
    });

    if (this.hasEmptyStateTarget) {
      if (visibleCount === 0) {
        this.emptyStateTarget.classList.remove('hidden');
      } else {
        this.emptyStateTarget.classList.add('hidden');
      }
    }

    this.selectedIndex = visibleCount > 0 ? 0 : -1;
    this.updateHighlight();
  }

  navigate(direction: number) {
    const visibleItems = this.getVisibleItems();
    if (visibleItems.length === 0) return;

    this.selectedIndex += direction;
    if (this.selectedIndex < 0) {
      this.selectedIndex = visibleItems.length - 1;
    } else if (this.selectedIndex >= visibleItems.length) {
      this.selectedIndex = 0;
    }

    this.updateHighlight();

    const selectedItem = visibleItems[this.selectedIndex];
    if (selectedItem) {
      selectedItem.scrollIntoView({ block: 'nearest' });
    }
  }

  updateHighlight() {
    const visibleItems = this.getVisibleItems();
    visibleItems.forEach((item, index) => {
      if (index === this.selectedIndex) {
        item.classList.add('bg-mono-800/80', 'border-accent');
        item.classList.remove('border-transparent');
      } else {
        item.classList.remove('bg-mono-800/80', 'border-accent');
        item.classList.add('border-transparent');
      }
    });
  }

  selectCurrent() {
    const visibleItems = this.getVisibleItems();
    if (this.selectedIndex >= 0 && this.selectedIndex < visibleItems.length) {
      const selectedItem = visibleItems[this.selectedIndex];
      const link = selectedItem.querySelector('a') || (selectedItem as HTMLAnchorElement);
      if (link && link.href) {
        this.close();
        window.location.href = link.href;
      }
    }
  }

  getVisibleItems(): HTMLElement[] {
    return this.itemTargets.filter((item) => !item.classList.contains('hidden'));
  }
}

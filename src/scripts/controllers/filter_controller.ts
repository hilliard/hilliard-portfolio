import { Controller } from '@hotwired/stimulus';

export default class FilterController extends Controller {
  static targets = ['input', 'tag', 'item', 'counter', 'emptyState'];

  declare readonly inputTarget: HTMLInputElement;
  declare readonly hasInputTarget: boolean;
  declare readonly tagTargets: HTMLElement[];
  declare readonly itemTargets: HTMLElement[];
  declare readonly counterTarget: HTMLElement;
  declare readonly hasCounterTarget: boolean;
  declare readonly emptyStateTarget: HTMLElement;
  declare readonly hasEmptyStateTarget: boolean;

  private activeTag: string = 'all';

  connect() {
    this.update();
  }

  filterByTag(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const tag = target.dataset.tag || 'all';

    this.activeTag = tag;

    // Update active visual state for buttons
    this.tagTargets.forEach((btn) => {
      if (btn.dataset.tag === tag) {
        btn.classList.add('bg-accent', 'text-mono-950', 'border-accent');
        btn.classList.remove('bg-mono-900', 'text-mono-300', 'border-mono-800');
      } else {
        btn.classList.remove('bg-accent', 'text-mono-950', 'border-accent');
        btn.classList.add('bg-mono-900', 'text-mono-300', 'border-mono-800');
      }
    });

    this.update();
  }

  search() {
    this.update();
  }

  clearSearch() {
    if (this.hasInputTarget) {
      this.inputTarget.value = '';
      this.update();
    }
  }

  update() {
    const query = this.hasInputTarget ? this.inputTarget.value.toLowerCase().trim() : '';
    let count = 0;

    this.itemTargets.forEach((item) => {
      const itemTags = (item.dataset.tags || '').toLowerCase().split(',');
      const itemTitle = (item.dataset.title || '').toLowerCase();
      const itemDesc = (item.dataset.desc || '').toLowerCase();
      const itemCategory = (item.dataset.category || '').toLowerCase();

      const tagMatch = this.activeTag === 'all' || itemTags.includes(this.activeTag.toLowerCase()) || itemCategory === this.activeTag.toLowerCase();
      const queryMatch = !query || itemTitle.includes(query) || itemDesc.includes(query) || itemTags.some((t) => t.includes(query));

      if (tagMatch && queryMatch) {
        item.classList.remove('hidden');
        count++;
      } else {
        item.classList.add('hidden');
      }
    });

    if (this.hasCounterTarget) {
      this.counterTarget.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
    }

    if (this.hasEmptyStateTarget) {
      if (count === 0) {
        this.emptyStateTarget.classList.remove('hidden');
      } else {
        this.emptyStateTarget.classList.add('hidden');
      }
    }
  }
}

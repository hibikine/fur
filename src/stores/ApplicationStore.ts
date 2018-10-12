import { observable } from 'mobx';
import { PartStore } from './PartStore';

export class ApplicationStore {
  @observable
  public partStores: PartStore[] = [];
  @observable
  public activePartStore: PartStore;

  public addPartStore() {
    const partStore = new PartStore();
    this.partStores.push(partStore);
    if (this.partStores.length === 1) {
      this.activePartStore = partStore;
    }
  }

  public setActivePartStore(partStore: PartStore) {
    this.activePartStore = partStore;
  }

  public removeActivePartStore() {
    if (!this.activePartStore) return;
    const index = this.partStores.indexOf(this.activePartStore);
    this.partStores.splice(index, 1);
    this.activePartStore = this.partStores[index] || this.partStores[index - 1] || this.partStores[0] || undefined;
  }

  public refreshActivePartStore() {
    if (!this.activePartStore) return;
  }

  public saveActivePartStoreAsImage() {
    if (!this.activePartStore) return;
  }
}

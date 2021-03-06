import { action, observable } from 'mobx';
import { EdgeStore } from './EdgeStore';
import { FragmentStore } from './FragmentStore';
import { SimulationStore } from './SimulationStore';

export class PartStore {
  public readonly id = Math.random();

  @observable
  public color = '#ffffff';
  @observable
  public fragmentStores: FragmentStore[] = [];
  @observable
  public edgeStores: EdgeStore[] = [];

  public simulationStore = new SimulationStore(this.fragmentStores, this.edgeStores);

  public includesFragmentStore(fragment: FragmentStore) {
    return this.fragmentStores.indexOf(fragment) !== -1;
  }

  public indexOfEdgeStore(edge: EdgeStore) {
    return this.edgeStores.findIndex(e => e.equals(edge));
  }

  public includesEdge(dart: EdgeStore) {
    return this.indexOfEdgeStore(dart) !== -1;
  }

  @action
  public addFragment(fragment: FragmentStore) {
    if (this.includesFragmentStore(fragment)) return;
    this.fragmentStores.push(fragment);
    this.simulationStore.reset();
  }

  @action
  public removeFragment(fragment: FragmentStore) {
    const index = this.fragmentStores.indexOf(fragment);
    if (index >= 0) {
      this.fragmentStores.splice(index, 1);
      this.simulationStore.reset();
    }
  }

  @action
  public addEdge(edge: EdgeStore) {
    if (this.includesEdge(edge)) return;
    this.edgeStores.push(edge);
    this.simulationStore.reset();
  }

  @action
  public removeEdge(edge: EdgeStore) {
    const index = this.indexOfEdgeStore(edge);
    if (index === -1) return;
    this.edgeStores.splice(index, 1);
    this.simulationStore.reset();
  }
}

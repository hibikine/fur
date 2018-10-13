import { inject, observer } from 'mobx-react';
import { EditorStore, EditorTab } from '../stores/EditorStore';
import { ControllerType, ModelStore } from '../stores/ModelStore';
import './styles/CheatSheet.pcss';

type Props = {
  editorStore?: EditorStore;
  modelStore?: ModelStore;
};

export const CheatSheet = inject('editorStore', 'modelStore')(
  observer(({ editorStore, modelStore }: Props) => (
    <div styleName="base">
      <h1>fur</h1>
      {editorStore.editorTab === EditorTab.model ? (
        <div>
          <dl styleName={modelStore.controllerType === ControllerType.default ? 'active' : ''}>
            <dt>Click</dt>
            <dd>Move camera</dd>
          </dl>
          <dl styleName={modelStore.controllerType === ControllerType.fragment ? 'active' : ''}>
            <dt>Shift + Click</dt>
            <dd>Pick or unpick fragment</dd>
          </dl>
          <dl styleName={modelStore.controllerType === ControllerType.multipleFragmentAdd ? 'active' : ''}>
            <dt>Shift + A + Click</dt>
            <dd>Pick multiple fragment</dd>
          </dl>
          <dl styleName={modelStore.controllerType === ControllerType.multipleFragmentRemove ? 'active' : ''}>
            <dt>Shift + Z + Click</dt>
            <dd>Unpick multiple fragment</dd>
          </dl>
          <dl styleName={modelStore.controllerType === ControllerType.edge ? 'active' : ''}>
            <dt>Ctrl + Click</dt>
            <dd>Pick or unpick edge as darts</dd>
          </dl>
        </div>
      ) : null}
    </div>
  ))
);
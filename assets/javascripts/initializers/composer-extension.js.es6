import Composer from 'discourse/controllers/composer';
import { onToolbarCreate } from 'discourse/components/d-editor';

export default {
  name: 'composer-extension',

  initialize(container) {

      onToolbarCreate(toolbar => {
        toolbar.addButton({
          id: 'add-editor-space',
          group: 'insertions',
          icon: 'indent',
          perform: e => {
            if(e.selected) {
              return e.applySurround('[空格]', '', 'add_full_space');
            } else {
              return e.addText("[空格]");
            }
          }
        });
      })
   
  }
};

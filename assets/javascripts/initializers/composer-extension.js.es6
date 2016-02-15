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
          perform: e => e.addText('[空格]')
        });
      })
   
  }
};

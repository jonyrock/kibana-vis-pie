import { resolve } from 'path';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      visTypes: ['plugins/kibana-vis-pie/kibana-vis-pie']      
    },

  });
};

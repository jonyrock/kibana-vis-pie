import visTypes from 'ui/registry/vis_types';
import TemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';

import './less/main.less';
import template from './templates/index.html';
import paramsTemplate from './templates/params.html';

visTypes.register(PieVisProvider);


function PieVisProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  // Return a new instance describing this visualization.
  return new TemplateVisType({
    name: 'kibana-vis-pie',
    title: 'VisPie',
    icon: 'fa-bars',
    description: 'A nice test vis plugin',
    template: template,
    params: {
      defaults: {
        configLine: {},
        configLine_threshold_data: '',
        configLine_threshold_value1: 80,
        configLine_threshold_color1: "#ffaa00",
        configLine_threshold_value2: 90,
        configLine_threshold_color2: "#ff0000",
        configLinegrouped: "none",
        configLine_xrotate: 0,
        configLine_autoscale: false
      },
      editor: paramsTemplate
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Y-Axis',
        min: 1,
        aggFilter: '!std_dev',
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        title: 'X-Axis',
        min: 0
        //aggFilter: ['terms','date_histogram','filters']
      }
    ])
  })

};
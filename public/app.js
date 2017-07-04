import moment from 'moment';
import chrome from 'ui/chrome';
import { uiModules } from 'ui/modules';
import uiRoutes from 'ui/routes';

import 'ui/autoload/styles';
import './less/main.less';
import template from './templates/index.html';

uiRoutes.enable();
uiRoutes
.when('/', {
  template,
  resolve: {
    currentTime($http) {
      return $http.get('../api/vis_pie/example').then(function (resp) {
        return resp.data.time;
      });
    }
  }
});

uiModules
.get('app/vis_pie', [])
.controller('visPieHelloWorld', function ($scope, $route, $interval) {
  $scope.title = 'Vis Pie';
  $scope.description = 'A small test visualisation plugin for Kibana';

  const currentTime = moment($route.current.locals.currentTime);
  $scope.currentTime = currentTime.format('HH:mm:ss');
  const unsubscribe = $interval(function () {
    $scope.currentTime = currentTime.add(1, 'second').format('HH:mm:ss');
  }, 1000);
  $scope.$watch('$destroy', unsubscribe);
});

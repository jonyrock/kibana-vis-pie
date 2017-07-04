import uiModules from 'ui/modules';

const module = uiModules.get('vis-pie/vis-pie', ['kibana']);

module.controller('VisPieController', function ($scope, courier, $timeout) {
	$scope.title = 'Some title';
});
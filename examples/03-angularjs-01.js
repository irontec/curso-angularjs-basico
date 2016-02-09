angular.module('miApp', [])
  .controller('miControlador', function($scope) {
    $scope.contactos = [
        {nombre:'Jaime Brito', telefono:'678845167'},
        {nombre:'Dolores Burgos', telefono:'654894215'},
        {nombre:'Teodoro Alanis', telefono:'624456447'},
        {nombre:'Fernando Maestas', telefono:'684566544'},
        {nombre:'Elisa Sanabria Sta.', telefono:'697316548'},
        {nombre:'Lorena Jasso', telefono:'687464587'},
        {nombre:'Ester Godínez', telefono:'696356254'}];
  });

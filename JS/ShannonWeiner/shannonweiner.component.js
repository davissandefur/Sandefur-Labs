(function(){
'use strict';

angular.module('shannonweiner')
.component('shannonWeiner',{
  templateUrl:"templates/shannonWeiner.template.html",
  controller: ShannonWeinerController
});

ShannonWeinerController.$inject = ['ShannonWeinerService'];
function ShannonWeinerController(ShannonWeinerService) {
   var shannonWeiner = this;
   var service = ShannonWeinerService;

   shannonWeiner.speciesList = service.getData();
   shannonWeiner.addSpecies = function(){
     service.addSpecies(shannonWeiner.species, shannonWeiner.number);

     shannonWeiner.H = service.getH();
     shannonWeiner.total = service.getTotal();
     shannonWeiner.E = service.getE();
   };


}

})();

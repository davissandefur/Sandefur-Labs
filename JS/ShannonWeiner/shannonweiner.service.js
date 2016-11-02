(function(){
'uses strict';


angular.module('shannonweiner')
.service('ShannonWeinerService',ShannonWeinerService);

function ShannonWeinerService(){
  var service = this;
  var total = 0;

  var dataList = [];

  service.getData = function(){
    return dataList;
  };

  service.getTotal = function(){
    return total;
  };

  service.getH = function(){
    var H = 0;
    for(i=0;i<dataList.length;i++){
      H += dataList[i].PilnPi;
    }

    return round(H*-1,3);
  };

  service.getE = function(){
    var E = round(service.getH()/Math.log(total),3);
    return E;
  }


  service.addSpecies = function(species, number){
    var data =
    { name: species,
      quantity: number}

    total += parseInt(number);
    dataList.push(data);
    service.updatePi();
};


  service.updatePi = function(){
    for(i=0;i<dataList.length;i++){
      dataList[i].Pi = round(dataList[i].quantity/total,3);
      dataList[i].lnPi = round(Math.log(dataList[i].Pi),3);
      dataList[i].PilnPi = round(dataList[i].lnPi * dataList[i].Pi,3);
    }

  }
}

function round(value, decimals){
  return Number(Math.round(value+'e'+decimals)+"e-"+decimals);
}

})();

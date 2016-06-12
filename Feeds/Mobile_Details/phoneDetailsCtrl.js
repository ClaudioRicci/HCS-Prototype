app.controller('phoneDetailsCtrl', function($rootScope, $scope, $http) {
  console.log('From phoneDetailsCtrl');

 /*Base Google Sheet URL is: 
 https://spreadsheets.google.com/feeds/list/1fND_Ptx8f_tcL2Gpiz6c0X9kArfG8GK0xXOWV8lJvJE/od6/public/values?alt=json 

 The 'od6' should be substituted for the relative tab number left to right you want to grab the date from - in this case '1' for 'Mobiles', '2' for 'Component_Props'*/
    var url = 'https://spreadsheets.google.com/feeds/list/1fND_Ptx8f_tcL2Gpiz6c0X9kArfG8GK0xXOWV8lJvJE/1/public/values?alt=json'
    var parse = function(entry) {
      console.log(entry);
      var brand          = entry['gsx$brand']['$t'];
      var model          = entry['gsx$model']['$t'];
      var image          = "https://img01.bt.co.uk/mobile/images/phones/sub-family/xs/" + entry['gsx$image']['$t'] +".png";
      var alt            = "Buy your " + entry['gsx$image']['$t'] + " from BT";
      var features       = entry['gsx$features']['$t'];
      var colorOne       = entry['gsx$color-one']['$t'];
      var colorTwo       = entry['gsx$color-two']['$t'];
      var colorThree     = entry['gsx$color-three']['$t'];
      var colorFour      = entry['gsx$color-four']['$t'];
      var memoryOne      = entry['gsx$memory-one']['$t'];
      var memoryTwo      = entry['gsx$memory-two']['$t'];
      var memoryThree    = entry['gsx$memory-three']['$t'];
      var memoryFour     = entry['gsx$memory-four']['$t'];        
      var price          = entry['gsx$price']['$t'];
      return {
        brand           :  brand,
        model           :  model,
        image           :  image,
        alt             :  alt,
        features        :  features, 
        colorOne        :  colorOne,
        colorTwo        :  colorTwo, 
        colorThree      :  colorThree, 
        colorFour       :  colorFour,
        memoryOne       :  memoryOne,
        memoryTwo       :  memoryTwo, 
        memoryThree     :  memoryThree, 
        memoryFour      :  memoryFour,                                          
        price           :  price,     
      };
    }
    $http.get(url)
    .success(function(response) {
      var entries = response['feed']['entry'];
      $scope.parsedEntries = [];
      for (key in entries) {
        var content = entries[key];
        $scope.parsedEntries.push(parse(content));
      }
    });
});



app.controller('phoneBrandsCompCtrl', function($rootScope, $scope, $http) {
  console.log('From phoneBrandsCompCtrl');  
//Controller to return phone details
/*app.controller('phoneBrandsCompCtrl', ['$scope', '$http', function($scope,$http) {*/
/*Controller for CSS variants against 'phoneBrands' Component
 '2' in this URL refers to the second worksheet tab in the Google Sheet - Component Props*/

    var urlPhoneBrands = 'https://spreadsheets.google.com/feeds/list/1fND_Ptx8f_tcL2Gpiz6c0X9kArfG8GK0xXOWV8lJvJE/2/public/values?alt=json'
    var parse = function(entry) {
      console.log(entry);
      var width           = entry['gsx$width']['$t'];
      var fontfamily      = entry['gsx$font-family']['$t'];
      var fontweight      = entry['gsx$font-weight']['$t'];
      var color           = entry['gsx$color']['$t'];
      var borderweight    = entry['gsx$border-weight']['$t'];           
      var bordercolor     = entry['gsx$border-color']['$t'];
      var borderstyle     = entry['gsx$border-style']['$t'];   
      var float           = entry['gsx$float']['$t'];
      var display         = entry['gsx$display']['$t'];    
      return {
        width           :  width,
        fontfamily      :  fontfamily,
        fontweight      :  fontweight,
        color           :  color,
        borderweight    :  borderweight,
        bordercolor     :  bordercolor,
        borderstyle     :  borderstyle,
        float           :  float,
        display         :  display,
      };
    }
    $http.get(urlPhoneBrands)
    .success(function(response) {
      var entries = response['feed']['entry'];
      $scope.parsedEntries = [];
      for (key in entries) {
        var content = entries[key];
        $scope.parsedEntries.push(parse(content));
      }
    });
});

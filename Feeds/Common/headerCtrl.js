app.controller('headerCtrl', function($rootScope, $scope, $http) {
  console.log('From headerCtrl');  
//'2' in this URL refers to the third worksheet tab in the Google Sheet - Header_Props*/

    var urlHeaderProps = 'https://spreadsheets.google.com/feeds/list/1fND_Ptx8f_tcL2Gpiz6c0X9kArfG8GK0xXOWV8lJvJE/3/public/values?alt=json'
    var parse = function(entry) {
      console.log(entry);
      var headerOneSize   = entry['gsx$header-one-size']['$t'];
      var headerTwoSize   = entry['gsx$header-two-size']['$t'];     
      var width           = entry['gsx$width']['$t'];
      var fontfamily      = entry['gsx$font-family']['$t'];
      var fontweight      = entry['gsx$font-weight']['$t'];
      var color           = entry['gsx$color']['$t'];
      var borderweight    = entry['gsx$border-weight']['$t'];           
      var bordercolor     = entry['gsx$border-color']['$t'];
      var borderstyle     = entry['gsx$border-style']['$t'];   
      var float           = entry['gsx$float']['$t'];
      var display         = entry['gsx$display']['$t']; 
      var menuSwitch      = entry['gsx$menu']['$t'];         
      return {
        headerOneSize   :  headerOneSize,
        headerTwoSize   :  headerTwoSize,
        width           :  width,
        fontfamily      :  fontfamily,
        fontweight      :  fontweight,
        color           :  color,
        borderweight    :  borderweight,
        bordercolor     :  bordercolor,
        borderstyle     :  borderstyle,
        float           :  float,
        display         :  display,
        menuSwitch      :  menuSwitch,
      };
    }
    $http.get(urlHeaderProps)
    .success(function(response) {
      var entries = response['feed']['entry'];
      $scope.parsedEntries = [];
      for (key in entries) {
        var content = entries[key];
        $scope.parsedEntries.push(parse(content));
      }
    });
});

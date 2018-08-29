'use strict';


app.controller('tagController', function HomeController($scope,$rootScope,$http) {

$scope.bool=false;
$scope.add= function() {
$scope.bool=true;
$scope.add_bool=true;

};
$scope.addtag = function() {
$scope.add_bool=false;
$scope.edit_bool=true;
$http({
       method: "POST",
       url: "http://localhost:3000/tag",
       dataType: 'json',
       data: {'tagname': $scope.tagname},
       headers: { "Content-Type": "application/json" }
   }).then((response)=> {
     console.log(response.data)
     if(response.data.code!=200){
       $scope.docid=response.data.id;
     }

   }).catch((err)=>{
    console.log(err)
   });
};
$scope.delete=function(id,name) {
  console.log('delete',id,name)
  $http({
                  method: "DELETE",
                  url: "http://localhost:3000/tag",
                  dataType: 'json',
                  headers: { "Content-Type": "application/json","tag":name }
              }).then((response)=> {
                console.log(response.data)
                $http.get("http://localhost:3000/tag")
                  .then((response)=> {
                    console.log(response.data)
                     $scope.records = response.data;
                  }).catch((err)=>{
                    console.log(err);
                  });

              }).catch((err)=>{

               // $location.path('/add');
              });

}
$scope.edittag = function(docid) {
  console.log('*',docid)
$scope.edit_bool=false;
$scope.bool=false;
$http({
       method: "PUT",
       url: "http://localhost:3000/tag",
       dataType: 'json',
       data: {
          "id" : docid,
          "tagname" : $scope.tagname
      },
       headers: { "Content-Type": "application/json" }
   }).then((response)=> {

     if(response.data.code!=200){
       $http.get("http://localhost:3000/tag")
         .then((response)=> {
           console.log(response.data)
            $scope.records = response.data;
         }).catch((err)=>{
           console.log(err);
         });
     }

   }).catch((err)=>{
   });

};
});

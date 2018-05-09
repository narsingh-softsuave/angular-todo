var app = angular.module('dashboardApp', []);

app.controller('dashboardCtrl', function ($scope) {
    $scope.addValue = function(){

        if(!$scope.todoDate){
            $scope.isDate = true;
            return;
        }
        $scope.isDate = false;
        if(!$scope.todoTitle){
            $scope.isTitle = true;
            return;
        }
        $scope.isTitle = false;
        var newDate = new Date();
        $scope.arr.push({
            date : moment.utc($scope.todoDate).format("YYYY-MM-DD HH:mm:ss"),
            title : $scope.todoTitle,
            desc : $scope.todoDesc,
            id : newDate.getTime(),
        });
        $scope.todoDate = "";
        $scope.todoDesc = "";
        $scope.todoTitle = "";
        $('#myModal').modal('hide');
    }

    $scope.removeArray = function(){

        $("input:checkbox[name=checkboxtodo]:checked").each(function(){
            var id = $(this).val();
            $.each($scope.arr, function(index, item){
                if(item && item.id == id){
                    delete $scope.arr[index];
                }
            })
        });
        $scope.arr = $scope.arr.filter(function(val){
            return val;
        })
        $(".checkboxtodo").prop('checked', false);
    }

    $scope.selectAll = function(index){
        $(".checkboxtodo").prop('checked', true);
    }
    $scope.deSelectAll = function(index){
        $(".checkboxtodo").prop('checked', false);
    }
    $scope.arr = [];
    $scope.isTitle = false;
    $scope.isDate = false;

});
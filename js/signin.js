var app = angular.module('signinApp', []);

app.controller('UserValidFormCtrl', function($scope,$state) {
    $scope.email = "";
    $scope.pwd = "";
    var user = [{email:'admin@gmail.com',pwd:'admin'}];
    var model = { email:'',pwd:''};
    $scope.signInValidation = function(){
        $scope.invalid = '';
        if($scope.email != "" && $scope.pwd !=""){
            model.email = $scope.email;
            model.pwd = $scope.pwd ;
            validate(model);
        }else{
            $scope.invalid = "please fill email and password!";
        }
    }
    $scope.invalid = '';
    function validate(model){
        $scope.invalid = '';

        for(var counter in user){
        	if(user[counter].email == model.email && user[counter].pwd == model.pwd ){
                $state.go('dashboard')
			}else{
                $scope.invalid = "invalid user!";
            }

		}

    }
});


angular.module('my.school.directive',[])

.directive('schoolSelect', [function () {
	return {
		restrict: 'EAC',
		templateUrl:'templates/schoolSelect.html',
		controller:['$scope','schoolSelect',function($scope,schoolSelect){
			// 数据初始化
			$scope.provinceList = schoolSelect.getList('0');
			$scope.cityList = schoolSelect.getList('0_0');
			$scope.schoolList = schoolSelect.getList('0_0_0');

			$scope.sign = {
				province:"浙江省",
				city:'杭州市',
				school:'杭州电子科技大学(下沙校区)'

			};
			// 绑定事件
			$scope.changeC = function(){
				var province = $scope.sign.province;
				var a = $scope.provinceList.indexOf(province);
				$scope.cityList = schoolSelect.getList('0_'+a);
				// console.log($scope.cityList);
				$scope.sign.city = $scope.cityList?$scope.cityList[0]:'';
				// console.log('655'+$scope.sign.city);
				$scope.changeS();	
			};

			$scope.changeS = function(){
				var city = $scope.sign.city;
				console.log($scope.cityList);
				if($scope.cityList){
					
					var province = $scope.sign.province;
					var a = $scope.provinceList.indexOf(province);
					var b = $scope.cityList.indexOf(city);

					$scope.schoolList = schoolSelect.getList('0_'+a+"_"+b);
					// console.log($scope.schoolList);
					$scope.sign.school = $scope.schoolList?$scope.schoolList[0]:'';
				}else{
					$scope.sign.school = '';
				}
			};
		}]
	};
}]);
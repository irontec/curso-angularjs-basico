angular.module('constantExample', [])
    .factory("taskList", function() {
        var tasks = [];

        var taskList = {
            getList: function(){
                return tasks;
            },
            addTask: function(task){
                tasks.push(task);
            }
        }
        return taskList;

    })
    .controller('ListCtrl', function (taskList, $scope) {
        $scope.tasks = taskList.getList();
    })
    .controller('CreateCtrl', function (taskList, $scope) {
        $scope.newTask = '';
        $scope.addTask = function () {
            taskList.addTask($scope.newTask);
            $scope.newTask = '';
        }
    })

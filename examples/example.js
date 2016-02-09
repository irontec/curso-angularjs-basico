angular.module('example', [])
    .factory("taskList", function() {
        var tasks = [];

        var taskList = {
            getList: function(){
                return tasks;
            },
            addTask: function(task){
                tasks.push({name:task, removed: false});
            }
        }
        return taskList;

    })
    .controller('ListCtrl', function (taskList, $scope) {
        $scope.tasks = taskList.getList();

        $scope.removeTask = function(task) {
            console.log('remove task!');
            task.removed = true;
        }
    })
    .controller('CreateCtrl', function (taskList, $scope) {
        $scope.newTask = '';
        $scope.addTask = function () {
            taskList.addTask($scope.newTask);
            $scope.newTask = '';
        }
    })

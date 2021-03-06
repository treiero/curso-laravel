angular.module('app.controllers')
    .controller('projectNoteNewController',[
        '$scope',
        '$routeParams',
        '$location',
        'ProjectNote',
        function(
            $scope,
            $routeParams,
            $location,
            ProjectNote
        ){
            $scope.projectNote = new ProjectNote();
            $scope.projectNote.project_id = $routeParams.projectId;

            $scope.save = function(){
                if($scope.form.$valid){
                    $scope.projectNote.$save({projectId: $routeParams.projectId}).then(function(){
                        $location.path('/projects/'+$routeParams.projectId+'/notes');
                    });
                }
            };
        }
    ]);
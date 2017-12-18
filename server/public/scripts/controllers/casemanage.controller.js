myApp.controller('CaseController', function (FormService, $http, $mdDialog) {
    console.log('Caseontroller created');
    var vm = this;
    vm.formService = FormService;


    // Column sorting
    vm.sortColumn = "case_start_date";
    vm.reverseSort = false;

    vm.sortData = function (column) {
        vm.reverseSort = (vm.sortColumn == column) ? !vm.reverseSort : false;
        vm.sortColumn = column;
    }

    vm.getSortClass = function (column) {
        if (vm.sortColumn == column) {
            return vm.reverseSort ? 'arrow-down' : 'arrow-up';
        }
            return '';
    }

    //function to set formId
    // vm.saveFormId = function (id) {
    //     FormService.saveFormId(id);
    // }

    //function to show MA form popup
    vm.showMa = function (ev, id) {
        FormService.showMa(ev, id);
    }


    //function to show LA form popup
    vm.showLa = function (ev, id) {
        FormService.showLa(ev,id);
    }

    //function to show Refer form popup
    vm.showRefer = function (ev, id) {
        FormService.showRefer(ev, id);
    }

    //function to show Release form popup
    vm.showRelease = function (ev, id) {
        FormService.showRelease(ev, id);
    }
    //get route to populate cases
    vm.getCases = function () {
        FormService.getCases();
    }

    vm.getCases();

    vm.checkClicked = function(id, value, name){
        FormService.checkClicked(id, value, name);

    }

});
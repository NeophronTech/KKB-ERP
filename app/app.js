(function(){
    angular.module('AdminUI', ['ui.router', 'ui.bootstrap', 'angles', 'datatables', 'datatables.buttons', 'datePicker'])
    .config(config)
    .run(run);

    function config($stateProvider, $urlRouterProvider) {
    
        $stateProvider
            //Dashboard
            .state('home', {
                url: '/home',
                templateUrl: 'home/dashboard.html',
                controller: 'Dashboard.IndexController',
                controllerAs: 'vm'
            })
            // Master
            .state('master', {
                url: '/master',
                abstract: true,
                templateUrl: 'master/index.html'
            })
            .state('master.party', {
                url: '/master/party',
                templateUrl: 'master/party.html',
                controller: 'Master.PartyController',
                controllerAs: 'vm'
            })
            .state('master.addParty', {
                url: '/party/addParty',
                templateUrl: 'master/addParty.html',
                controller: 'Master.AddPartyController',
                controllerAs: 'vm'
            })
            .state('master.financialYear', {
                url: '/master/financialYear',
                templateUrl: 'master/financialYear.html',
                controller: 'Master.FinancialYearController',
                controllerAs: 'vm'
            })

        // Configure Idle settings
        $urlRouterProvider.otherwise("/home");
    }
    
    function run($http, $window, $rootScope, $state){
        $rootScope.$state = $state;
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;
    }

    $(function(){
        $.get('/app/token', function (token) {
            window.jwtToken = token;
            angular.bootstrap(document, ['AdminUI']);
        });
    });
})();
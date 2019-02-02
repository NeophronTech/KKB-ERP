(function(){
    angular.module('KKB', ['ui.router', 'ui.bootstrap', 'angles', 'datatables', 'datatables.buttons', 'datePicker'])
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
                url: '/party',
                templateUrl: 'master/party.html',
                controller: 'Master.PartyController',
                controllerAs: 'vm'
            })
            .state('master.addParty', {
                url: '/party/addParty',
                templateUrl: 'master/addParty.html',
                params: {obj: null},
                controller: 'Master.AddPartyController',
                controllerAs: 'vm'
            })
            .state('master.financialYear', {
                url: '/financialYear',
                templateUrl: 'master/financialYear.html',
                controller: 'Master.FinancialYearController',
                controllerAs: 'vm'
            })
            // ORDER ENTRY
            .state('orderEntry', {
                url: '/orderEntry',
                abstract: true,
                templateUrl: 'order_entry/index.html'
            })
            .state('orderEntry.orderEntry', {
                url: '/orderEntry',
                templateUrl: 'order_entry/orderEntry.html',
                controller: 'OrderEntry.OrderEntryController',
                controllerAs: 'vm'
            })
            // Delivery Dispatch
            .state('deliveryDispatch', {
                url: '/deliveryDispatch',
                abstract: true,
                templateUrl: 'delivery_dispatch/index.html'
            })
            .state('deliveryDispatch.stockBook', {
                url: '/stockBook',
                templateUrl: 'delivery_dispatch/stockBook.html',
                controller: 'DeliveryDispatch.StockBookController',
                controllerAs: 'vm'
            })
            .state('deliveryDispatch.delivery', {
                url: '/delivery',
                templateUrl: 'delivery_dispatch/delivery.html',
                controller: 'DeliveryDispatch.DeliveryController',
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
            angular.bootstrap(document, ['KKB']);
        });
    });
})();
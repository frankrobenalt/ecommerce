angular.module('trapApp').controller('mainCtrl', function($scope){
    $scope.images = images;
    $scope.images2 = images2;
    $scope.images3 = images3;
});

var images = [
    {
        name: 'fiji',
        url: 'images/wave.png'
    },
    {
        name: 'ali',
        url: 'images/ali.png'
    },
    {
        name: 'three-finger jack',
        url: 'images/threefinger.gif'
    },
   
];
var images2 = [
    {
        name: 'cornrole kenny',
        url: 'images/kenny.gif'
    },
    {
        name: 'tupac',
        url: 'images/tupac.gif'
    },
    {
        name: 'mantis toboggan MD',
        url: 'images/frank-reynolds-og.gif'
    }
]
var images3 = [
    {
        name: 'django',
        url: 'images/django.gif'
    }
]
'use strict';

require('./_carousel.scss');

module.exports = {
  template: require('./carousel.html'),
  controller: ['$log', CarouselController],
  controllerAs: 'carouselCtrl'
};

function CarouselController($log) {
  $log.debug('CarouselController');

  // let currentIndex = 0;
  this.setIterval = 2000;
  this.noWrapSlides = false;
  this.active = 0;
  this.slides = [
    {image: '../../../../app/assets/img/Joey-Sequence1.jpg', id: 0},
    {image: '../../../../app/assets/img/IMG_7005.png', id: 1},
    {image: '../../../../app/assets/img/Landscape+7.jpg', id: 2}

  ];
}

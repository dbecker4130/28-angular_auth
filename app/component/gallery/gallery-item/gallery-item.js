'use strict';

require('../../../scss/main.scss');

module.exports = {
  template: require('./gallery-item.html'),
  controller: ['$log', 'galleryService', GalleryItemController],
  controllerAs: 'galleryItemCtrl',
  bindings: {
    gallery: '<'
  }
};

function GalleryItemController($log, galleryService) {
  $log.debug('GalleryItemController');

  this.showEditGallery = false;

  this.deleteGallery = function() {
    galleryService.deleteGallery(this.gallery._id);
  };
}

'use strict';

require('./_thumbnail.scss');

module.exports = {
  template: require('./thumbnail.html'),
  controller: ['$log', 'picService', ThumbnailController],
  controllerAs: 'thumbnailCtrl',
  bindings: {
    pic: '<',
    gallery: '<',
  }
};

function ThumbnailController($log, picService) {
  $log.debug('ThumbnailController');

  this.deletePic = function() {
    $log.debug('thumbnailCtrl.deletePic()');
    picService.deleteGalleryPic(this.gallery, this.pic)
    .then( () => {
      $log.debug('pic deleted');
    })
    .catch( err => {
      $log.error(err.message);
    });
  };
}

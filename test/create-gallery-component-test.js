'use strict';

describe('Create Gallery Component', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('createGalleryCtrl.createGallery()', () => {
    it('should create a gallery', () => {
      let createGalleryCtrl = this.$componentController('createGallery', null);
      // let url = 'http://localhost:3000/api/gallery';
      let url = `${__API_URL__}/api/gallery`;

      let gallery = {
        name: 'name',
        desc: 'description'
      };

      let headers = {
        Accept: 'application/json',
        Authorization: 'Bearer test token',
        'Content-Type': 'application/json'
      };

      this.$httpBackend.expectPOST(url, gallery, headers).respond(200);

      createGalleryCtrl.gallery = gallery;
      expect(createGalleryCtrl.gallery.name).toEqual(gallery.name);
      expect(createGalleryCtrl.gallery.desc).toEqual(gallery.desc);
      createGalleryCtrl.createGallery();
      this.$rootScope.$apply();

    });
  });
});

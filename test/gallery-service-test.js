'use strict';

describe('Gallery Service', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, galleryService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.galleryService = galleryService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('galleryService.createGallery()', () => {
    it('should create a new gallery', () => {
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      };

      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer test token'
      };

      this.$httpBackend.expectPOST(`${__API_URL__}/api/gallery`, galleryData, headers)
      .respond(200, {
        _id: '1234',
        username: 'testuser',
        name: galleryData.name,
        desc: galleryData.desc,
        pics: []
      });

      this.galleryService.createGallery(galleryData);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.deleteGallery()', () => {
    it('should delete a gallery', () => {
      let galleryID = 'testid';
      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json, text/plain, */*',
      };

      this.$httpBackend.expectDELETE(`${__API_URL__}/api/gallery/testid`, headers).respond(204);
      this.galleryService.deleteGallery(galleryID);
      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });

  describe('galleryService.fetchGalleries()', () => {
    it('should fetch a gallery', () => {
      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json',
      };

      this.$httpBackend.expectGET(`${__API_URL__}/api/gallery`, headers).respond(200);
      this.galleryService.fetchGalleries();
      this.$httpBackend.flush();

    });
  });

  describe('galleryService.updateGallery()', () => {
    it('should update a gallery by ID', () => {
      let galleryID = 'testid';
      let galleryData = {
        name: 'example gallery',
        desc: 'example description'
      };
      let headers = {
        Authorization: 'Bearer test token',
        Accept: 'application/json, text/plain, */*',
      };

      this.$httpBackend.expectPUT(`${__API_URL__}/api/gallery/testid`, headers);
      this.galleryService.updateGallery(galleryID, galleryData);

    });
  });
});

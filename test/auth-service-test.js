'use strict';

describe('Auth Service', function() {
  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(( $rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });
  });

  describe('authService.getToken()', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'test token');

      this.authService.getToken()
      .then( token => {
        expect(token).toEqual('test token');
      })
      .catch( err => {
        expect(err).toEqual(null);
      });

      this.$rootScope.$apply();
    });
  });

  describe('authService.login()', () => {

    it('should allow user to login', () => {

      let testUser = {
        username: 'userName',
        password: 'userPassword',
      };

      let base64 = this.$window.btoa(`${testUser.username}:${testUser.password}`);

      let headers = {
        Accept: 'application/json',
        Authorization: `Basic ${base64}`,
      };

      this.$httpBackend.expectGET('http://localhost:3000/api/login', headers)
      .respond(200, 'test token');

      this.authService.login(testUser)
      .then(token => {
        expect(token).toBe('test token');
      });

      this.$httpBackend.flush();
    });
  });
});


//   describe('authService.logout()', () => {
//     it('should remove a token', () => {
//       this.authService.token = null;
//       this.$window.localStorage.setItem('token', 'test token');
//
//       this.authService.logout()
//       .then( token => {
//         expect(token).toEqual(null);
//       });
//
//       this.$rootScope.$apply();
//     });
//   });
// });

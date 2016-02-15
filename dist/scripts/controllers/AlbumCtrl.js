(function() {
  var AlbumCtrl = function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();
  };
  
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
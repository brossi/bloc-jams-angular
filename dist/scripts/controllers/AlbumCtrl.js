(function() {
  var AlbumCtrl = function AlbumCtrl() {
    this.albumData = albumPicasso;
  };
  
  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
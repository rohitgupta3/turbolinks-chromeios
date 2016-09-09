$(document).on('submit', '#search-form', function(e) {
  e.preventDefault();
  function geoSuccess(position) {
    $('input[name="user_lat"]').val(position.coords.latitude);
    $('input[name="user_lng"]').val(position.coords.longitude);
    var $searchForm = $(e.target);
    Turbolinks.visit($searchForm.attr('action') + "?" + $searchForm.serialize());
  }
  // function geoSuccessWait(position) { setTimeout(function() {geoSuccess(position); }, 1000) }
  var geoOptions = { maximumAge: 10000, timeout: 5000 };
  navigator.geolocation.getCurrentPosition(
    geoSuccess, // or geoSuccessWait for a longer lag
    function(error) { },
    geoOptions
  );
});

function initMap(lat, lng) {
  const ubicacion = { lat: lat, lng: lng };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion,
  });
  new google.maps.Marker({
    position: ubicacion,
    map: map,
  });
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    pos => initMap(pos.coords.latitude, pos.coords.longitude),
    err => {
      console.warn("No se pudo obtener ubicación, usando default");
      initMap(-34.6037, -58.3816); // Buenos Aires como fallback
    }
  );
} else {
  initMap(-34.6037, -58.3816);
}

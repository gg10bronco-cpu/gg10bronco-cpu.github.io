function initMap() {
  const centerPoint = { lat: 41.8781, lng: -87.6298 }; // Chicago

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: centerPoint,
  });

  const marker = new google.maps.Marker({
    position: centerPoint,
    map: map,
    title: "Chicago Downtown",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Chicago Downtown</h3><p>The heart of the city!</p>",
  });

  marker.addListener("click", () => infoWindow.open(map, marker));

  map.addListener("click", (event) => {
    new google.maps.Marker({
      position: event.latLng,
      map: map,
      title: "You clicked here!",
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("questionBtn").addEventListener("click", () => {
    alert("If you have questions, contact me at:\nggil@hawk.illinoistech.edu");
  });
});

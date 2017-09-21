<?php 
if(!isset($_GET['token']))
    die('Please provide token via Get ?token=yourToken');
$centerLat = isset($_GET['clat']) ? $_GET['clat'] : 10.864105;
$centerLong = isset($_GET['clong']) ? $_GET['clong'] : 106.753212;
echo 'The token: '.$_GET['token'];
echo '<br />';
echo 'Will random arround '.$centerLat.','.$centerLong;

$RANGE = 0.01;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RandomOrg</title>
    <script src="https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyACRkualdrgx276icr5yzKNeg6mh3_LrEE"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
        const RADIUS = 4000;// meters
        var dropOff = null;
        var circle;
        var infowindow = new google.maps.InfoWindow({});
        var center = {
            lat: 10.864105,
            long: 106.753212
        }
        function randomCenter() {
            const randomLat = getRandomInRange(
                <?php echo $centerLat + $RANGE?>,
                <?php echo $centerLat - $RANGE?>, 
                6
            );
            const randomLong = getRandomInRange(
                <?php echo $centerLong + $RANGE?>,
                <?php echo $centerLong - $RANGE?>,
            6);
            center.lat = randomLat;
            center.long = randomLong;
        }
        function getRandomInRange(from, to, fixed) {
           return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        }
        function initialize() {
            // random 2 point
            randomCenter()
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 12,
                center: new google.maps.LatLng(center.lat,center.long),
                mapTypeId: google.maps.MapTypeId.HYBRID
            });
            createMarker(map, new google.maps.LatLng(center.lat,center.long), "center ");
            circle = new google.maps.Circle({
                center: map.getCenter(),
                radius: RADIUS, 
                strokeColor: "#0000FF",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#0000FF",
                fillOpacity: 0.26
            });
            circle.setMap(map);
            var bounds = circle.getBounds();
            map.fitBounds(bounds);
            var sw = bounds.getSouthWest();
            var ne = bounds.getNorthEast();
            for (var i = 0; i < 100; i++) {
                var ptLat = Math.random() * (ne.lat() - sw.lat()) + sw.lat();
                var ptLng = Math.random() * (ne.lng() - sw.lng()) + sw.lng();
                var point = new google.maps.LatLng(ptLat, ptLng);
                if (google.maps.geometry.spherical.computeDistanceBetween(point, circle.getCenter()) < circle.getRadius()) {
                    createMarker(map, point, "marker " + i);
                    dropOff = {
                        lat: ptLat,
                        long: ptLng,
                    }
                    break
                }
            }
            // find adress
            var addressPickUp = 'Pickup address not found';
            var addressDropOff = 'Dropoff address not found';
            codeLatLng(center.lat, center.long, function(results, status){
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[1]) {
                        addressPickUp = results[1].formatted_address;
                    } else {
                        console.log('No results found');
                    }
                } else {
                    console.log('Geocoder failed due to: ' + status);
                }
                codeLatLng(dropOff.lat, dropOff.long, function(results, status){
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                            addressDropOff = results[1].formatted_address;
                        } else {
                            console.log('No results found');
                        }
                    } else {
                        console.log('Geocoder failed due to: ' + status);
                    }
                    sendToFCM(addressPickUp, addressDropOff);
                })  
            })
        }
        function sendToFCM(addressPickUp, addressDropOff) {
            const delivery = {
                done: false,
                pickUp: {
                    done: false,
                    latitude: center.lat,
                    longitude: center.long,
                    address: addressPickUp,
                },
                dropOff: {
                    done: false,
                    latitude: dropOff.lat,
                    longitude: dropOff.long,
                    address: addressDropOff,
                },
            }
            const data = {
                priority:"high",
                content_available:true,
                notification:{
                    sound:"default"
                },
                data:{
                    delivery: delivery,
                    sound:"default"
                },
                to:"<?php echo $_GET['token'] ?>"
            }
            axios.post(
                'https://fcm.googleapis.com/fcm/send',
                data,
                { 
                    headers: {
                        Authorization: 'key=AIzaSyAICT3xOLVKtqCcgAP-l-rxSYf1KrefdEI',
                        "Content-Type": "application/json",
                    }
                }
            )
            .then(function (response) {
                console.log(response);
                alert('Send FCM RESULT '+ JSON.stringify(response));
            })
            .catch(function (error) {
                alert('Send FCM fail '+ JSON.stringify(error));
            });
            // console.log(JSON.stringify(data));
            // $.ajax({
            //     url: 'https://fcm.googleapis.com/fcm/send',
            //     type: 'post',
            //     data: data,
            //     headers: {
            //         Authorization: 'AIzaSyAICT3xOLVKtqCcgAP-l-rxSYf1KrefdEI',
            //         contentType: "application/json",
            //         accessControlAllowOrigin:"*"
            //     },
            //     success: function (data, a,b,c) {
            //         console.info('fcm result', data);
            //         console.log(a);
            //         console.log(b);
            //         console.log(c);
            //     },
            //     error: function(xhr) {
            //         console.error(xhr);
            //     }
            // });
        }
        function createMarker(map, point, content) {
            var marker = new google.maps.Marker({
                position: point,
                map: map
            });
            google.maps.event.addListener(marker, "click", function(evt) {
                infowindow.setContent(content + "<br>" + marker.getPosition().toUrlValue(6));
                infowindow.open(map, marker);
            });
            return marker;
        }
        function codeLatLng(lat, lng, callback) {
            var geocoder= new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
                'latLng': latlng
            }, function (results, status) {
                callback(results, status);
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
</head>
<body>
    <div id="map" style="width: 530px; height: 500px">
    </div>
</body>
</html>
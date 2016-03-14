<script>
 if (navigator.getBattery) {
 navigator.getBattery().then(function(battery) {
 display(battery);
 });
 } else if (navigator.battery) {
 display(navigator.battery);
 } else {
 console.log("Sorry, Battery Status API is not supported");
 }

 function display(battery) {
 dataLayer.push({
 'battery_level': battery.level,
 'battery_is_charging': battery.charging,
 'battery_time_to_charge': battery.chargingTime,
 'battery_time_to_discharge': battery.dischargingTime,
 'event': 'battery_status'
 });
 }
</script>

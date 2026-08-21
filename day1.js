function getDeviceStatus(deviceName, temperature, isOnline) {
    if (!isOnline) {
        return "".concat(deviceName, " is offline");
    }
    if (temperature > 90) {
        return "".concat(deviceName, " is overHeating");
    }
    else {
        return "".concat(deviceName, " is running normally");
    }
}
console.log(getDeviceStatus("GPU-01", 95, true));
console.log(getDeviceStatus("CPU-03", 70, true));
console.log(getDeviceStatus("Sensor-Node-07", 50, false));

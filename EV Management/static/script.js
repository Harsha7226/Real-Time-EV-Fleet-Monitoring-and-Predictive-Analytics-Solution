// Function to fetch and display driver behavior data
async function fetchDriverData() {
    try {
        const response = await fetch('/api/driver-behavior');  // Fetch data from driver behavior API
        const data = await response.json();

        const behaviorDataContainer = document.getElementById("behavior-data");
        behaviorDataContainer.innerHTML = ""; // Clear existing data

        data.forEach((record) => {
            const behaviorDiv = document.createElement("div");
            behaviorDiv.innerHTML = `
                <p>Vehicle ID: ${record.vehicle_id}</p>
                <p>Trip ID: ${record.trip_id}</p>
                <p>Event Type: ${record.event_type}</p>
                <p>Timestamp: ${record.timestamp}</p>
                <p>Value: ${record.value}</p>
                <hr />
            `;
            behaviorDataContainer.appendChild(behaviorDiv);
        });
    } catch (error) {
        console.error("Error fetching driver data:", error);
    }
}

// Function to fetch and display maintenance alerts
async function fetchMaintenanceAlerts() {
    try {
        const response = await fetch('/api/maintenance-alerts');  // Fetch data from maintenance alerts API
        const data = await response.json();

        const alertsDataContainer = document.getElementById("alerts-data");
        alertsDataContainer.innerHTML = ""; // Clear existing alerts

        data.alerts.forEach((alert) => {
            const alertDiv = document.createElement("div");
            alertDiv.innerHTML = `
                <p>Vehicle ID: ${alert.vehicle_id}</p>
                <p>Issue: ${alert.issue}</p>
                <p>Severity: ${alert.severity}</p>
                <p>Timestamp: ${alert.timestamp}</p>
                <hr />
            `;
            alertsDataContainer.appendChild(alertDiv);
        });
    } catch (error) {
        console.error("Error fetching maintenance alerts:", error);
    }
}

// Fetch data on page load and every 5 seconds for both Driver Behavior and Maintenance Alerts
document.addEventListener("DOMContentLoaded", () => {
    // Fetch Driver Behavior Data
    fetchDriverData();
    setInterval(fetchDriverData, 5000);  // Fetch driver behavior data every 5 seconds

    // Fetch Maintenance Alerts
    fetchMaintenanceAlerts();
    setInterval(fetchMaintenanceAlerts, 5000);  // Fetch maintenance alerts every 5 seconds
});

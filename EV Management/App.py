from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/api/driver-data', methods=['GET'])
def get_driver_data():
    # Simulated real-time data
    data = {
        "driver_score": random.randint(70, 100),
        "trips": [
            {"id": "T001", "date": "2024-12-09", "distance": 120, "score": random.randint(70, 100), "issues": "Over-speeding"},
            {"id": "T002", "date": "2024-12-09", "distance": 90, "score": random.randint(70, 100), "issues": "None"},
            {"id": "T003", "date": "2024-12-09", "distance": 140, "score": random.randint(70, 100), "issues": "Harsh braking"},
        ]
    }
    return jsonify(data)

@app.route('/api/maintenance-alerts', methods=['GET'])
def get_maintenance_alerts():
    # Simulated alert data
    alerts = {
        "alerts": [
            {
                "vehicle_id": "EV001",
                "issue": "Battery health below threshold",
                "severity": "Critical",
                "timestamp": "2024-12-09T10:15:00Z"
            },
            {
                "vehicle_id": "EV002",
                "issue": "Scheduled maintenance overdue",
                "severity": "Warning",
                "timestamp": "2024-12-09T09:45:00Z"
            },
            {
                "vehicle_id": "EV003",
                "issue": "Tire pressure low",
                "severity": "Info",
                "timestamp": "2024-12-09T08:30:00Z"
            }
        ]
    }
    return jsonify(alerts)


if __name__ == "__main__":
    app.run(debug=True)

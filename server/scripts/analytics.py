from flask import Flask, request, jsonify
import pandas as pd
import json

app = Flask(__name__)

def perform_data_analytics(file_path):
    try:
        df = pd.read_csv(file_path)
        result = df.describe().to_dict() 
        return result
    except FileNotFoundError:
        return {"error": "File not found"}
    except pd.errors.EmptyDataError:
        return {"error": "Empty CSV file or invalid data"}

@app.route('/data-analytics', methods=['POST'])
def data_analytics():
    file = request.files['file']
    if not file:
        return jsonify({'error': 'No file uploaded'}), 400

    try:
        result = perform_data_analytics(file)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(port=5001)  # Run Flask on a different port than Express.js

from flask import Flask, request, jsonify
import pandas as pd
import json

app = Flask(__name__)

def perform_data_describe(file_path):
    try:
        df = pd.read_csv(file_path)
        result = df.describe().to_dict()
        return result
    except FileNotFoundError:
        return {"error": "File not found"}
    except pd.errors.EmptyDataError:
        return {"error": "Empty CSV file or invalid data"}

@app.route('/describe', methods=['POST'])
def data_analytics():
    file = request.files['file']
    if not file:
        return jsonify({'error': 'No file uploaded'}), 400

    try:
        result = perform_data_describe(file)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/shape', methods=['POST'])
def get_shape():
    file = request.files['file']
    if not file:
        return jsonify({'error': 'No file uploaded'}), 400

    try:
        df = perform_data_describe(file)
        shape = df.shape
        print(shape)
        return jsonify({'shape': shape})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(port=5001) 



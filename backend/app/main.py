from flask import Flask, jsonify, request
from flask_cors import CORS
from app.data import accommodations  # Importação absoluta

app = Flask(__name__)
CORS(app)

@app.route('/api/v1/acomodacoes', methods=['GET'])
def get_accommodations():
    cidade = request.args.get('cidade')
    if cidade:
        filtered_accommodations = [acc for acc in accommodations if cidade in acc['localizacao']]
        return jsonify(filtered_accommodations)
    return jsonify(accommodations)

@app.route('/api/v1/acomodacoes/<int:id>', methods=['GET'])
def get_accommodation(id):
    accommodation = next((acc for acc in accommodations if acc['id'] == id), None)
    if accommodation:
        return jsonify(accommodation)
    return jsonify({"error": "Acomodação não encontrada"}), 404

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000,debug=True)

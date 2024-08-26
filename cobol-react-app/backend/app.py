from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/api/salut', methods=['POST'])
def salut():
    # Récupération du nom envoyé par le front-end
    nom = request.json.get('nom', '')

    # Appel du programme COBOL
    process = subprocess.Popen(
        ['./simpleapi'],  # Remplacez 'simpleapi' par le nom de votre programme COBOL compilé
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    
    # Envoi de l'entrée au programme COBOL
    output, error = process.communicate(input=nom)
    
    # Vérification des erreurs
    if process.returncode != 0:
        return jsonify({'error': 'Erreur lors de l\'exécution du programme COBOL', 'details': error}), 500

    # Retourner la réponse au front-end
    return jsonify({'message': output.strip()})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

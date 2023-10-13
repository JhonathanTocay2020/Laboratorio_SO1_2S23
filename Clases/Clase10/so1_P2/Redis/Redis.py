from flask import Flask, request, jsonify
import simplejson as json
import redis

app = Flask(__name__)
redis_client = redis.StrictRedis(host='localhost', port=6379, db=0)

class Voto:
    def __init__(self, sede, municipio, departamento, papeleta, partido):
        self.sede = sede
        self.municipio = municipio
        self.departamento = departamento
        self.papeleta = papeleta
        self.partido = partido

@app.route('/voto/agregarVoto', methods=['POST'])
def agregar_voto():
    try:
        # Decodificar el JSON del cuerpo de la solicitud
        data = request.json
        voto = Voto(
            data['sede'],
            data['municipio'],
            data['departamento'],
            data['papeleta'],
            data['partido']
        )

        # Insertar el voto en Redis
        json_voto = {
            "sede": voto.sede,
            "municipio": voto.municipio,
            "departamento": voto.departamento,
            "papeleta": voto.papeleta,
            "partido": voto.partido
        }

        counter = redis_client.incr("contador_votos")
        key = f"voto{counter}"
        json_voto_str = json.dumps(json_voto)
        redis_client.set(key, json_voto_str)

        print("Voto Registrado en Redis:", json_voto)
        return f"¡Gracias por votar! ({counter} votos registrados)", 200
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3300, debug=True)
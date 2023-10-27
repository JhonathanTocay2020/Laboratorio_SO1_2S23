# Cloud Run

## Container Registry

### Paso 1.
Hacer pull de la imagen desde DockerHub

docker pull <<username>>/<<image_name>>

Ej:

sudo docker pull jhonathantocay/clase5_so1


### Paso 2.
Agregarle tag a la imagen.

docker tag <<imagen>> gcr.io/<ID>/<nombre>:<version>

Ej:

docker tag jhonathantocay/clase5_so1 gcr.io/so1-2s23/clase12:V1


### Paso 3.
Hacer push de la imagen tageada

docker push <<imagen>>

Ej:

docker push gcr.io/so1-2s22/front-clase12:V1
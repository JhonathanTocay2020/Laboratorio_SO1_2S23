# Guia Proyecto 2


## 1. Crear la Instancia de Cloud SQL
Abrimos nuestra cuenta de GCP

- Seleccionamos la Opcion de SQL

![Arquitectura_Proyecto1](./imagenes/1.PNG)

- Seleccionamos Crear Instancia

![Arquitectura_Proyecto1](./imagenes/2.PNG)

- Apareceran 3 opciones y seleccionaremos MYSQL

![Arquitectura_Proyecto1](./imagenes/3.PNG)

- Realizamos la siguiente configuracion

colocamos el nombre y contraseña
![Arquitectura_Proyecto1](./imagenes/4.PNG)

seleccionamos la version enterprise para reducir costos.
![Arquitectura_Proyecto1](./imagenes/5.PNG)

Cambiamos la Region y Creamos la instancia.
![Arquitectura_Proyecto1](./imagenes/6.PNG)

- Cuando se Genere la instancia visualizaremos la direccion ip publica.

![Arquitectura_Proyecto1](./imagenes/7.PNG)

- Para poder conectarnos debemos de Agregar nuestra ip publica para poder darle acceso.

para conocer nuestra ip publica podemos acceder a la siguiente pagina: https://www.ionos.es/tools/direccion-ip

![Arquitectura_Proyecto1](./imagenes/9.PNG)

Ahora debemos agregarlo a CLOUD SQL y nos vamos a la opcion Conexiones

![Arquitectura_Proyecto1](./imagenes/8.PNG)

seleccionamos la pestaña de Herramientas de redes

![Arquitectura_Proyecto1](./imagenes/10.PNG)

y agregamos una nueva red, asignandole un nombre y colocando nuestra ip publica.

![Arquitectura_Proyecto1](./imagenes/12.PNG)

Seleccionamos Listo y debemos Guardar los cambios.

![Arquitectura_Proyecto1](./imagenes/13.PNG)

- Ahora Nos Conectamos con Workbench o DBeaver

en Host colocamos la ip publica de nuestra instancia y luego agregamos las demas credenciales (usuario y contraseña)

![Arquitectura_Proyecto1](./imagenes/14.PNG)

- Probamos la conexion y listo.

![Arquitectura_Proyecto1](./imagenes/15.PNG)

# Clase 4 - Modulos de Kernel

## Herramientas a Utilizar

* __GCC (GNU Compiler Collection)__: Conjunto de compiladores de código abierto desarrollado por el Proyecto GNU. Estos compiladores permiten traducir el código fuente escrito en varios lenguajes de programación, como C, C++, Ada, Fortran, entre otros

* __Make__: es una herramienta de construcción utilizada en el desarrollo de software para automatizar el proceso de compilación y generación de ejecutables a partir del código fuente. Su función principal es coordinar y controlar la ejecución de tareas específicas definidas en archivos llamados "makefiles"


## Instalacion de GCC y Make

Verificamos si tenemos instalado estas herramientas. 

```
gcc --version

make --version
```

Si solamente falta make

```
sudo apt install make
```

Si falta GCC, también instala make

```
sudo apt install build-essential

sudo apt-get install manpages-dev
```

# Modulo

Compilar archivo
```
make all
```

Borrar los archivos compilados
```
make clean
```

Insertar modulo
```
sudo insmod <<nombre_modulo>>.ko
```

Obtener los mensajes de entrada y salida del modulo
```
sudo dmesg
```

Verificar informacion de los procesos en el directorio /proc
```
cd /proc
```

Listar modulos
```
ls
```

Leer archivo escrito
```
cat <<nombre_archivo>>
```

Eliminar modulo
```
sudo rmmod <<nombre_modulo>>.ko
```
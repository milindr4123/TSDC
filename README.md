# TSDC
Proyecto para administrar las incidencias de Ghost

## Integrantes:
	- Erika Margarita Forero Sossa - j.corredore@uniandes.edu.co
 	- Jeniffer Corredor Enciso - j.corredore@uniandes.edu.co
	- Brayan Ricardo García - br.garciam1@uniandes.edu.co
 	- Juan Diego García - j.garcia55@uniandes.edu.co

## Ejecución de pruebas

Los siguientes pasos son una guía para correr los respectivos escenarios de pruebas utilizando las herramientas de Cypress y Kraken.

### Pasos previos:
1. Usar la versión 18.18.2 de Node.js (Si se está usando nvm, utilizar la version 1.1.11 de este)
2. Instalar el cli del ghost, npm install -g ghost-cli@latest (Ghost-CLI version: 1.25.3, Ghost version: 5.73.2)
3. Crear una carpeta para el proyecto de ghost
4. Ingresar en el directorio
5. Instalar el CMS de Ghost usando: ghost install local
6. Inicializar el ghost usando: ghost start (El puerto debe ser 2368)
7. En un navegador ir al sitio: localhost:2368/ghost y realizar la correcta instalación del CMS
8. Guardar las credenciales de superadmin creadas para las pruebas

### Pasos usando Kraken
Prerequisitos: 
1. Tener instalado Android Studio
2. En las propiedades de Android Studio tener instalado:
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools (Obsolete) (Se deben poner visibles los paquetes obsoletos si se está usando Android Studio Giraffe o una versión más reciente)

3. Configurar las siguientes rutas en PATH: 
	a. C:\Users\***\AppData\Local\Android\Sdk\platform-tools
	b. C:\Users\***\AppData\Local\Android\Sdk\tools
	c. C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
	d. C:\Users\***\AppData\Local\Android\Sdk

4. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

Instalación y set-up de Kraken: 
1. Ir a la carpeta de trabajo (En este caso, la carpeta de Ghost o del release)
2. Sí aun no lo tiene, debe instalar Kraken en global: npm install kraken-node -g --force
3. Inicializar Kraken: kraken-node gen
4. Instalar Kraken en local: npm install kraken-node --force
5. Instalar Appium en global: npm install -g appium --force
6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor
7. Al ejecutar el paso 6. Se deberia visualizar una imagen como la siguiente:
8. ![image](https://github.com/milindr4123/TSDC/assets/142748575/da940a6e-cc85-4085-a512-58a51e36296b)


Ejecución: 
1. Para ejecutar un feature en específico en Kraken, copie el contenido del feature que desea probar de la carpeta "lista_features" y peguelo en el archivo my_first.feature.
2. En el archivo step.js debe cambiar las credenciales del super admin, encontradas en el Given: "I am logged"
3. Se deben modificar los correos y contraseñas del archivo properties.json
4. Correr las pruebas usando el comando: npx kraken-node run

### Pasos usando Cypress
1. Instalar cypress usando: npm install -g cypress
	- cypress version:
		Cypress package version: 13.5.1
		Cypress binary version: 13.5.1
		Electron version: 25.8.4
		Bundled Node version: 18.15.0
2. Instalar cypress de manera local: npm install cypress
3. Agrega los archivos descargados del repositorio que están asociados a Cypress al directorio de Ghost (La carpeta "cypress").
4. Abre la terminal y dentro del directorio de la aplicación ejecuta el comando "cypress open".
5. Selecciona el navegador "Chrome" en la ventana que se despliega.
6. En el menú izquierdo de la ventana de Cypress, elige la opción "Specs".
7. Selecciona las pruebas que deseas ejecutar.
8. (Paso adicional) Para las pruebas se deben modificar los atributos "email" y "password" en los archivos que se encuentran ubicados en la carpeta de fixtures. Utiliza las credenciales de superadmin creadas durante la instalación de Ghost.
9. (Recomendación) los archivos de cypress cuentan con distinas funcionalidades que van a ir ejecutandose una tras otra cuando realices las pruebas, algunas pruebas deben ejecutarse de manera individual para garantizar su funcionamiento, ya que crean usuarios únicos que no pueden repetirse en la aplicación.

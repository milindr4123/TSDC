# TSDC
Proyecto para administrar las incidencias de Ghost

## Ejecución de pruebas

Los siguientes pasos son una guía para correr los respectivos escenarios de pruebas utilizando las herramientas de Cypress y Kraken.

### Pasos usando Kraken
Prerequisitos: 
1. Usar la versión 16.14.2 de Node.Js (A mi me ha servido con versiones más recientes, pero a algunos parece que no)
2. Tener instalado Android Studio
3. En las propiedades de Android Studio tener instalado:
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools (Obsolete) (Se deben poner visibles los paquetes obsoletos si se está usando Android Studio Giraffe o una versión más reciente)

4. Configurar las siguientes rutas en PATH: 
	a. C:\Users\***\AppData\Local\Android\Sdk\platform-tools
	b. C:\Users\***\AppData\Local\Android\Sdk\tools
	c. C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
	d. C:\Users\***\AppData\Local\Android\Sdk

5. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

Instalación y set-up de Kraken: 
1. Ir a la carpeta de trabajo (En este caso, la carpeta de Ghost o del release)
2. Sí aun no lo tiene, debe instalar Kraken en global: npm install kraken-node -g
3. Inicializar Kraken: kraken-node gen
4. Instalar Kraken en local: npm install kraken-node
5. Instalar Appium en global: npm install -g appium
6. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor

Ejecución: 
Para ejecutar un feature en específico en Kraken, copie el contenido del feature que desea probar de la carpeta "lista_features" y peguelo en el archivo my_first.feature.
Luego use el comando: npx kraken-node run

### Pasos usando Cypress

1. Asegúrate de tener Ghost instalado en su última versión.
2. Inicia Ghost localmente utilizando el puerto por defecto (2368).
3. Instala la herramienta Cypress en el directorio donde está instalado Ghost.
4. Agrega los archivos asociados a Cypress al directorio de Ghost (La carpeta "cypress").
5. Abre la terminal y ejecuta el comando "cypress open".
6. Selecciona el navegador "Chrome" en la ventana que se abre.
7. En el menú izquierdo de la ventana de Cypress, elige la opción "Specs".
8. Selecciona las pruebas que deseas ejecutar.
9. (Paso adicional) Para las pruebas en los archivos "tags_testing.cy.js", "profile_testing.cy.js" y "members_testing.cy.js", modifica los atributos "email" y "password" en los archivos "members.json" y "tags.json" ubicados en la carpeta de fixtures. Utiliza las credenciales de superadmin creadas durante la instalación de Ghost.

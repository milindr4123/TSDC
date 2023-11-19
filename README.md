# TSDC
Proyecto para administrar las incidencias de Ghost

## Integrantes:
	- Erika Margarita Forero Sossa - j.corredore@uniandes.edu.co
 	- Jeniffer Corredor Enciso - j.corredore@uniandes.edu.co
	- Brayan Ricardo García - br.garciam1@uniandes.edu.co
 	- Juan Diego García - j.garcia55@uniandes.edu.co

## Ejecución de Pruebas de Regresión

Los siguientes pasos son una guía para correr los respectivos escenarios de pruebas utilizando las herramientas de Cypress y Kraken.

### Pasos previos:
1. Tener instalada la herramienta git
2. Tener instalada la versión 18.18.2 de Node.js (Si se está usando nvm, utilizar la version 1.1.11 de este en windows)
3. Instalar y correr contenedor de ghost versión 3.42.0 usando el puerto 3001 en docker: docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42
4. Ingresar a la url http://localhost:3001/ghost y colocar en Email: prueba@prueba.com y Password: 123456789$ (Esto para correr las pruebas sin realizar ninguna modificación en los fixtures)
5. Instalar y correr contenedor de ghost versión 5.73.2 usando el puerto 3002 en docker: docker run -d --name ghost_5.73.2 -e url=http://localhost:3002 -e NODE_ENV=development -e database__client=sqlite3 -e database__connection__filename="content/data/ghost.db" -e database__useNullAsDefault=true -e database__debug=false -p 3002:2368 ghost:5.73.2
6. Ingresar a la url http://localhost:3002/ghost y colocar en Email: prueba@prueba.com y Password: 123456789$ (Esto para correr las pruebas sin realizar ninguna modificación en los fixtures)
7. Clonar el repositorio del proyecto en el directorio de su preferencia: git clone https://github.com/milindr4123/TSDC.git
8. Correr el comando npm install dentro del repositorio clonado para descargar los paquetes necesarios para el funcionamiento de las pruebas.

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
6. Intalar faker: npm install faker
7. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor
8. Al ejecutar el paso 6. Se deberia visualizar una imagen como la siguiente:
   ![image](https://github.com/milindr4123/TSDC/assets/142748575/da940a6e-cc85-4085-a512-58a51e36296b)
#### Algunos errores comunes: 
1. 


Ejecución: 
1. Para ejecutar un feature en específico en Kraken, copie el contenido del feature que desea probar de la carpeta "lista_features" y peguelo en el archivo my_first.feature.
2. Cambie el nombre de la variable this.foldername en el archivo hooks.js, para que queden guardados los screenshots de acuerdo a la funcionalidad
3. En el archivo hooks.js debe cambiar las credenciales (this.email, this.oldPassword) del super admin, encontradas en el Given: "I am logged"
4. Se deben modificar los correos y contraseñas del archivo properties.json
5. Correr las pruebas usando el comando: npx kraken-node run
6. En caso de tener un error con el socket, intente cambiar el navegador en la variable this.deviceClient en el archivo hooks.js

### Pasos usando Cypress
1. Instalar cypress usando: npm install -g cypress
	- cypress version:
		Cypress package version: 13.5.1
		Cypress binary version: 13.5.1
		Electron version: 25.8.4
		Bundled Node version: 18.15.0
2. Abre la terminal y dentro del directorio de la aplicación ejecuta el comando "cypress open". 
3. Seleccionamos la opción de pruebas E2E (Podemos evidenciar que ya se encuentran configurados los archivos de las pruebas e2e)
5. Selecciona el navegador "Chrome" en la ventana que se despliega y le damos click a "Start E2E Testing in Chrome".
6. En el menú izquierdo de la ventana de Cypress, elige la opción "Specs".
7. Selecciona las pruebas que deseas ejecutar.
8. (Paso opcional) Para las pruebas se deben modificar los atributos "email" y "password" en el archivo credentials.json que se encuentran ubicado en la carpeta de cypress/fixtures. Utiliza las credenciales de superadmin creadas durante la instalación de Ghost.
9. (Paso opcional) Si por algún motivo se instaló alguna de las versiones de ghost de docker en un puerto diferente al que se recomendó, se debe modificar el archivo prots.json ubicado en la carpeta cypress/fixtures. La key "v1" se refiere a las pruebas realizadas en la versión 5.73.2 de ghost y "v2" se refiere a la versión 3.42.0 de ghost, entonces en el value se debe colocar el puerto en el cual se desplegaron esas versiones.
10. (Paso opcional) Si se quieren modificar algunos datos de las pruebas realizadas, puede ir a la carpeta cypress/fixtures, en donde encontrará los datos que se usaron para algunas de las pruebas.

### Observaciones
1. Los test se hicierón en dos versiones de GHOST (5.73.2 y 3.42.0). Dentro de los directorios de las pruebas podemos ver carpetas que tienen en su nombre "V3" los cuales se basan en las pruebas desarroladas en la versión 3.42.0 de GHOST.

### Obstáculos

Al ejecutar las Pruebas de Regresión en la versión 3.42.0 de Ghost se presentarón pruebas fallidas, ya que en esta versión la identificación y nombre de algunos selectores de los elementos no coincidian, por tal motivo se hizo necesario modificar algunos escenarios de pruebas, actualizando de esta manera los identificadores y nombres de los selectores, para que así se logrará la ejecución exitosa de las mismas.  

Nombre funcionalidad | Dificultad | Ubicación
-- | -- | --
Post | En algunos momentos identificaba correctamente el selector, pero en otros caso no lo reconocia. | post/Post-F1.feature
Post | En algunos momentos identificaba correctamente el selector, pero en otros caso no lo reconocia. | post/Post-F2.feature
Post | En algunos momentos identificaba correctamente el selector, pero en otros caso no lo reconocia. | post/Post-F3.feature
Post | En algunos momentos identificaba correctamente el selector, pero en otros caso no lo reconocia. | post/Post-F4.feature
Post | En algunos momentos identificaba correctamente el selector, pero en otros caso no lo reconocia. | post/Post-F5.feature

## Ejecución de Pruebas de Regresión Visual - VRT

### Aspectos a tener en cuenta: 

1. Para la ejecución de las pruebas de regresión visual (VRT) se seleccionaron 10 escenarios de 3 [Funcionalidades VRT](https://github.com/milindr4123/TSDC/wiki/Funcionalidades-para-pruebas-VRT) diferentes documentadas en la wiki del proyecto. Estas pruebas se ejecutaron sobre los screenshots tomados en ambas versiones de Ghost (5.73.2 - 3.42.0) utilizando las herramientas ResembleJS y BackstopJS.

2. Las diferencias visuales encontradas en la ejecución de las pruebas se encuentan reportadas en el sistema de [Registro de Incidencias](https://github.com/milindr4123/TSDC/issues) del proyecto.

3. En la documentación del proyecto también se presentan los [PROS y CONTRAS](https://github.com/milindr4123/TSDC/wiki) de las herramientas ResembleJS y BackstopJS utilizadas para la ejecución de las pruebas VRT.

4. El reporte generado para la ejecución de las pruebas con ResembleJs se encuentre en ......

5. El reporte generado para la ejecución de las pruebas con BackstopJS se encuentre en ......

6. En el siguiente video se busca explicar el procedimiento realizado para la toma de screenshots, las decisiones tomadas respecto al reporte generado y los resultados del proceso de ejecución de VRT.




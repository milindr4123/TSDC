# TSDC
Proyecto para administrar las incidencias de Ghost

## Integrantes:
	- Erika Margarita Forero Sossa - e.foreros@uniandes.edu.co
 	- Jeniffer Corredor Enciso - j.corredore@uniandes.edu.co
	- Brayan Ricardo García - br.garciam1@uniandes.edu.co
 	- Juan Diego García - j.garcia55@uniandes.edu.co

## Ejecución de Pruebas de Regresión

Los siguientes pasos son una guía para correr los respectivos escenarios de pruebas utilizando las herramientas de Cypress y Kraken.

### Pasos previos:
1. Tener instalada la herramienta git
2. Tener instalada la versión 18.18.2 de Node.js (Si se está usando nvm, utilizar la version 1.1.11 de este en windows)
3. Instalar y correr contenedor de ghost versión 3.42.0 usando el puerto 3001 en docker: docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42
4. Instalar y correr contenedor de ghost versión 5.73.2 usando el puerto 2368 en docker: docker run -d --name ghost_5.73.2 -e url=http://localhost:2368 -e NODE_ENV=development -e database__client=sqlite3 -e database__connection__filename="content/data/ghost.db" -e database__useNullAsDefault=true -e database__debug=false -p 2368:2368 ghost:5.73.2
4.1. En Caso de no funcionar esto, cambiar las urls de los steps y features al puerto donde se ejecuta Ghost en su máquina
5. Ingresar a la url http://localhost:3002/ghost y colocar en Email: prueba@prueba.com y Password: 123456789$ (Esto para correr las pruebas sin realizar ninguna modificación en los fixtures)
6. Clonar el repositorio del proyecto en el directorio de su preferencia: git clone https://github.com/milindr4123/TSDC.git
7. Correr el comando npm install dentro del repositorio clonado para descargar los paquetes necesarios para el funcionamiento de las pruebas.

### Pasos usando Kraken
Prerequisitos:
0. Dado que ningún integrante tiene un sistema operativo diferente a Windows, para seguir estos pasos es necesario hacerlo en el sistema operativo Windows
1. Tener instalado Android Studio
2. En las propiedades de Android Studio tener instalado:
	a. Android SDK Platform-Tools
	b. Android SDK Build-Tools
	c. Android SDK Tools (Obsolete) (Se deben poner visibles los paquetes obsoletos si se está usando Android Studio Giraffe o una versión más reciente)

3. Configurar las siguientes rutas en PATH de usuario: 
	a. C:\Users\***\AppData\Local\Android\Sdk\platform-tools
	b. C:\Users\***\AppData\Local\Android\Sdk\tools
	c. C:\Users\***\AppData\Local\Android\Sdk\build-tools\VERSION
	d. C:\Users\***\AppData\Local\Android\Sdk

4. Configurar la siguiente variable ambiental:
	JAVA_HOME: C:\Program Files\Android\Android Studio\jre

Instalación y set-up de Kraken: 
1. Ir a la carpeta de trabajo (En este caso, la carpeta de Ghost o del release)
2. Sí aun no lo tiene, debe instalar Kraken en global: npm install kraken-node -g --force
3. Descargar el repositorio
4. Abrir la terminal en la dirección donde descargó el repositorio
5. Ir a la carpeta kraken
6. Instalar Kraken en local: npm install kraken-node --force
7. Instalar Appium en global: npm install -g appium --force
8. Intalar faker: npm install faker
9. Puede verificar que todo haya quedado instalado usando el comando kraken-node doctor
10. Al ejecutar el paso 6. Se deberia visualizar una imagen como la siguiente:
   ![image](https://github.com/milindr4123/TSDC/assets/142748575/da940a6e-cc85-4085-a512-58a51e36296b)
#### Algunos errores comunes: 
1. Si ocurre un error, por favor reinstale kraken y faker
2. Si el error persiste corra el comando npm audit fix --force
3. Si aún tiene problemas, contáctenos, estamos 24 horas listos para ayudar :D

Ejecución: 
1. Para ejecutar un feature en específico en Kraken, copie el contenido del feature(.feature) y steps (steps.js) que desea probar de la carpeta "semana(#semana)/lista_features/(feature)", ejemplo, para tomar las pruebas de profile, vamos a la ruta "semana7/lista_features/profile". Si quiere probar con Ghost 5, o copie el contenido de la carpeta "semana6/lista_feature_version_ghost_3" si quiere probar con la versión 3.42 de Ghost, y peguelo en el archivo my_first.feature. (es posible que por correr varios usuarios al tiempo se generen errores, así que si esto sucede deberá correr de a un escenario a la vez. Los escenarios se encuentran dentro de los archivo .feature, y empiezan con "Scenario: NOMBRE_ESCENARIO")
2. Cambie el nombre de la variable this.foldername en el archivo hooks.js, para que queden guardados los screenshots de acuerdo a la funcionalidad que está probando
3. En el archivo hooks.js debe cambiar las credenciales (this.email, this.oldPassword) del super admin, encontradas en el Given: "I am logged"
4. Se deben modificar los correos y contraseñas del archivo properties.json
5. Correr las pruebas usando el comando: npx kraken-node run
6. En caso de tener un error con el socket, intente cambiar el navegador en la variable this.deviceClient en el archivo hooks.js ( this.deviceClient = new WebClient('%NAVEGADOR%', {}, this.userId);)

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

***
## Ejecución de Pruebas de Regresión Visual - VRT

## Escenarios de pruebas actualizados
[Funcionalidades ABP ‐ GHOST](https://github.com/milindr4123/TSDC/wiki/Funcionalidades-para-pruebas-VRT)

## Observaciones
1. Los test se hicierón en dos versiones de GHOST (5.73.2 y 3.42.0). Dentro de los directorios de las pruebas podemos ver carpetas que tienen en su nombre "V3" los cuales se basan en las pruebas desarroladas en la versión 3.42.0 de GHOST.

## Obstáculos
Al ejecutar las Pruebas de Regresión en la versión 3.42.0 de Ghost se presentarón pruebas fallidas, ya que en esta versión la identificación y nombre de algunos selectores de los elementos no coincidian, por tal motivo se hizo necesario modificar algunos escenarios de pruebas, actualizando de esta manera los identificadores y nombres de los selectores, para que así se logrará la ejecución exitosa de las mismas. 

## Reportes generados con ResembleJS y BackstopJS
**ResembleJS:** En este reporte se encuentran las pruebas realizadas con cypress, en este caso los 5 escenarios del CRUD de Pages 
- **/resemble/results/2023-11-19T23.25.58.260Z/report.html**

**BackstopJS:** En este reporte se encuentran las pruebas realizadas con kraken, en este caso 4 escenarios del CRUD de Tags y 1 escenario de Profile
- **/backstop/backstop_data/html_report/report_1.html**
- **/backstop/backstop_data/html_report/report_2.html**
- **/backstop/backstop_data/html_report/report_3.html**
- **/backstop/backstop_data/html_report/report_4.html**
- **/backstop/backstop_data/html_report/report_5.html**

## Enlace al video de explicación
[Enlace al video](https://youtu.be/rTh4BQayZsw)

## Herramientas de Pruebas de Regresión Visual - VRT

### Resemble JS 

#### Pros
- Útil para comparaciones visuales simples.
- Adecuada para proyectos que se centran en imágenes estáticas.
- Realiza comparaciones visuales precisas entre imágenes.
- Facilita la detección de cambios en la apariencia de una interfaz de usuario.
- Fácil de implementar.
- Permite ajustar la tolerancia para las diferencias visuales.
- Puede utilizarse en diversas plataformas y entornos de desarrollo.

#### Contras
- La precisión de las comparaciones visuales puede llegar depender de los entornos de ejecución.
- Carece de funcionalidades avanzadas
- Se centra solo en la comparación visual de imágenes estáticas
- Requiere de configuraciones y ajustes manuales para adaptarse a los requisitos específicos del proyecto web

### Backstop JS

#### Pros
- Identifica cambios que para un tester podrían ser difíciles de detectar.
- Facilita la identificación de cambios visuales inesperados.
- Permite ejecutar pruebas de regresión visual de manera eficiente y consistente ya que se puede integrar a flujos de pruebas automatizadas.
- Ofrece una interfaz gráfica para visualizar y comparar los resultados.
- Genera reporte de errores detectados sobre la interfaz de usuario.
- Permite asegurar que los cambios en el código no afecten negativamente la apariencia de la aplicación.
- Es una de las herramientas más completas para pruebas de regresión visual.

#### Contras
- La configuración inicial puede ser compleja.
- Al utilizar tecnologías como Puppeteer o PhantomJS para realizar capturas de pantalla y comparaciones visuales, Backstop JS tiene dependencia de estas herramientas.
- Puede llegar a requerir recursos significativos de hardware al ejecutar grandes conjuntos de pruebas en paralelo.
- Los cambios en las versiones de Puppeteer, PhantomJS u otras dependencias pueden afectar la funcionalidad de BackstopJS.
- Requiere de una alta curva de aprendizaje.

***
## Ejecución de Pruebas con Generación de Datos
Para la presente entrega se implementaron 120 escenarios de prueba en los que se usan las tres estrategias de generación de datos: ***pool de datos a-priori***, **pool de datos (pseudo) aleatorio dinámico** y ***escenario aleatorio***.

### Estrategia de Generacion de Datos

- Para la implementación de la estrategia de generación de datos pool de datos ***a-priori*** se crearon archivos .json con los datos a utilizar en los diferentes escenarios de prueba y estos fueron ubicados dentro del proyecto (TSDC/cypress/fixtures) e importados en cada caso de prueba.

- La estrategia de generación de datos ***pool de datos (pseudo) aleatorio dinámico***, se llevó a cabo con el uso de **MOCK APIS** generadas a través de la aplicación Mockaroo e implementados en los escenarios de pruebas a través de las diferentes url´s suministradas por Mockaroo.

- Para la implementación de la estrategia de generación ***aleatoria de datos***, se utilizó la libería **Faker**. Para ello, se realizó la instalación de la librería en el proyecto (***npm install @faker-js/faker --save-dev***) y se importó esta (***import {faker} from '@faker-js/faker'***) en los archivos que contienen los diferentes escenarios de prueba que usan datos aleatorios en su ejecución.

## Contenido de escenarios de prueba en el repositorio
Los 120 escenarios de prueba que implementan las tres estrategias de generación de datos han sido creados para ser ejecutados con las herramientas **Cypress** (60 escenarios) y **Kraken** (60 escenarios).
- Los archivos con los 60 escenarios de prueba implementados en **Cypress** se encuentran ubicados en ***TSDC/cypress*** (Los 60 escenarios tienen la distribución de las 3 estrategias de generación de datos).  
- Los archivos con los 60 escenarios de prueba implementados en **Kraken** se encuentran ubicados en ***TSDC/kraken*** (Los 60 escenarios tienen la distribución de las 3 estrategias de generación de datos).  

## Instrucciones de ejecución de las pruebas en **Cypress**
- Clonar el proyecto según instrucciónes previas
- Abrir la consola de comandos y ubicarse en la carpeta del proyecto (TSDC) e instalar la librería faker escribiendo el comando ***npm install @faker-js/faker --save-dev***
- Ejecutar el comando ***cypress open***

## Instrucciones de ejecución de las pruebas en **Kraken**
Ejecución: 
1. Para ejecutar un feature en específico en Kraken, copie el contenido del feature(.feature) y steps (steps.js) que desea probar de la carpeta "semana(#semana)/lista_features/(feature)", ejemplo, para tomar las pruebas de profile, vamos a la ruta "semana7/lista_features/profile" (es posible que por correr varios usuarios al tiempo se generen errores, así que si esto sucede deberá correr de a un escenario a la vez. Los escenarios se encuentran dentro de los archivo .feature, y empiezan con "Scenario: NOMBRE_ESCENARIO")
2. Cambie el nombre de la variable this.foldername en el archivo hooks.js, para que queden guardados los screenshots de acuerdo a la funcionalidad que está probando
3. En el archivo hooks.js debe cambiar las credenciales (this.email, this.oldPassword) del super admin, encontradas en el Given: "I am logged"
4. Se deben modificar los correos y contraseñas del archivo properties.json
5. Correr las pruebas usando el comando: npx kraken-node run
6. En caso de tener un error con el socket, intente cambiar el navegador en la variable this.deviceClient en el archivo hooks.js ( this.deviceClient = new WebClient('%NAVEGADOR%', {}, this.userId);)

## Instrucciones de ejecución de las pruebas de reconocimiento usando RIPuppet
Para esta prueba se debe tener en cuenta los pasos previos dados anteriormente
1. Clonar el repositorio del proyecto
2. Ingresar a la carpeta RIPuppet
3. Abrir el cmd de windows
4. Ejecutar "npm install"
5. Ejecutar "node index.js"
6. Instalar http-server "npm install -g http-server"
7. Dirigirse al directorio de results
8. Ejecutar "http-server"
9. Dirigirse al navegador usando el link "127.0.0.1:8080"
10. Seleccionar el ultimo directorio del listado
11. Revisar los resultados dados por la prueba


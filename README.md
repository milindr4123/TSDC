# TSDC
Proyecto para administrar las incidencias de Ghost

## Ejecución de pruebas

Los siguientes pasos son una guía para correr los respectivos escenarios de pruebas utilizando las herramientas de Cypress y Kraken.

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

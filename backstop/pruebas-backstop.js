const Backstop = require('backstopjs');
const fs = require('fs');

// Directorios que quieres comparar
const testDir = 'D:\\Documentos\\maestria\\pruebas\\TSDC\\cypress\\screenshots\\2023-11-19T21.29.38.230Z-PageGhostV5';
const referenceDir = 'D:\\Documentos\\maestria\\pruebas\\TSDC\\cypress\\screenshots\\2023-11-19T21.32.42.498Z-PageGhostV3';
// Rutas para archivos temporales de Backstop
const referencePath = './backstop_data/bitmaps_reference';
const testPath = './backstop_data/bitmaps_test';

// Copiar imágenes de los directorios a los directorios temporales de Backstop
let scenarios = []
fs.readdirSync(referenceDir).forEach(file => {
    if (fs.existsSync(`${referenceDir}/${file}`) && fs.existsSync(`${testDir}/${file}`)){

        fs.copyFileSync(`${referenceDir}/${file}`, `${referencePath}/${file}`);
        let nombreLimpio = file.replace(/[^\w\s]/gi, '');
        nombreLimpio = nombreLimpio.replace(/\s+/g, '_');
        fs.rename(`${referencePath}/${file}`, `${referencePath}/backstop_default_${nombreLimpio}_0_document_0_default.png`, (err) => {
            if (err) {
              console.error('Error al cambiar el nombre del archivo:', err);
            } else {
              console.log('El archivo se renombró correctamente.');
            }
        });
        scenarios.push({
            "label": file,
            "referenceUrl": "D:\\Documentos\\maestria\\pruebas\\TSDC\\cypress\\screenshots\\2023-11-19T21.32.42.498Z-PageGhostV3\\"+file,
            "url": "http://127.0.0.1:8080/2023-11-19T21.29.38.230Z-PageGhostV5/"+file,
            "readyEvent": "",
            "delay": 1000,
            "misMatchThreshold" : 0.1
        })
    }
});

    // Configuración para BackstopJS
setTimeout(() => {
    const backstopConfig = {
        config: {
            "id": "backstop_default",
            "viewports": [
            {
                "label": "default",
                "width": 800,
                "height": 600
            }
            ],
            "onBeforeScript": "puppet/onBefore.js",
            "onReadyScript": "puppet/onReady.js",
            "scenarios": scenarios,
            "paths": {
            "bitmaps_reference": "backstop_data/bitmaps_reference",
            "bitmaps_test": "backstop_data/bitmaps_test",
            "engine_scripts": "backstop_data/engine_scripts",
            "html_report": "backstop_data/html_report",
            "ci_report": "backstop_data/ci_report"
            },
            "report": ["browser"],
            "engine": "puppeteer",
            "engineOptions": {
            "args": ["--no-sandbox"]
            },
            "asyncCaptureLimit": 5,
            "asyncCompareLimit": 50,
            "debug": false,
            "debugWindow": false
        }, // Nombre de tu escenario en backstop.json
    };

    // Ejecutar BackstopJS
    Backstop('test', backstopConfig)
    .then(() => {
        console.log('Comparación finalizada.');
        // Aquí puedes realizar acciones adicionales después de la comparación si es necesario
    })
    .catch(err => {
        console.error('Error al realizar la comparación:', err);
    });

}, 3000);


const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');
const path = require('path');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    console.log(browser)
    var resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    for(b of browsers){
        if(!b in ['firefox']){
            return;
        }
        if (!fs.existsSync(`./results/${datetime}`)){
            fs.mkdirSync(`./results/${datetime}`, { recursive: true });
        }

        const rutaPrincipal = '../cypress/screenshots'; // Reemplaza con la ruta de tu directorio
        const cadena1Buscada = 'PageGhostV5';
        const cadena2Buscada = 'PageGhostV3';
        let ultimaCarpeta1 = null;
        let ultimaCarpeta2 = null;
        let ultimaFecha1 = new Date(0);
        let ultimaFecha2 = new Date(0);
        let data;
        fs.readdir(rutaPrincipal, (err, carpetas) => {
            if (err) {
                console.error('Error al leer el directorio:', err);
                return;
            }
            carpetas.forEach(nombreCarpeta => {
                const rutaCarpeta = path.join(rutaPrincipal, nombreCarpeta);
                fs.stat(rutaCarpeta, (err, stats) => {
                    if (err) {
                      console.error('Error al obtener información de la carpeta:', err);
                      return;
                    }
              
                    if (stats.isDirectory() && nombreCarpeta.includes(cadena1Buscada)) {
                      const fechaCreacion = new Date(stats.birthtime);
                      if (fechaCreacion > ultimaFecha1) {
                        ultimaFecha1 = fechaCreacion;
                        ultimaCarpeta1 = nombreCarpeta;
                      }
                    }

                    if (stats.isDirectory() && nombreCarpeta.includes(cadena2Buscada)) {
                        const fechaCreacion = new Date(stats.birthtime);
                        if (fechaCreacion > ultimaFecha2) {
                          ultimaFecha2 = fechaCreacion;
                          ultimaCarpeta2 = nombreCarpeta;
                        }
                      }
                });
            });
        });

        setTimeout(() => {
            ultimaCarpeta1 = path.join(__dirname, '../cypress/screenshots/', ultimaCarpeta1);
            ultimaCarpeta2 = path.join(__dirname, '../cypress/screenshots/', ultimaCarpeta2);
            console.log(ultimaCarpeta1, ultimaCarpeta2)
            fs.readdir(ultimaCarpeta1, (err, files) => {
                if (err) {
                    console.error('Error al leer el directorio:', err);
                    return;
                }
                files.forEach(async (file) => {
                    let archivo1 = path.join(ultimaCarpeta1, file);
                    let archivo2 = path.join(ultimaCarpeta2, file);
                    if(fs.existsSync(archivo1) && fs.existsSync(archivo2)){
                        data = await compareImages(
                            fs.readFileSync(archivo1),
                            fs.readFileSync(archivo2),
                            options
                        );
        
                        resultInfo[file] = {
                            isSameDimensions: data.isSameDimensions,
                            dimensionDifference: data.dimensionDifference,
                            rawMisMatchPercentage: data.rawMisMatchPercentage,
                            misMatchPercentage: data.misMatchPercentage,
                            diffBounds: data.diffBounds,
                            analysisTime: data.analysisTime,
                            beforeImage: archivo1,
                            afterImage: archivo2,
                            fileName: file
        
                        }
                        fs.writeFileSync(`./results/${datetime}/compare-${file}.png`, data.getBuffer());
                    }
    
                });
            });
            
        }, 3000);

        
    }
    setTimeout(() => {
        fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
        fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);
        console.log('------------------------------------------------------------------------------------')
        console.log("Execution finished. Check the report under the results folder")
        return resultInfo;  
    }, 10000);
  }
(async ()=>console.log(await executeTest()))();

function browser(b, info){
    
    let report = '';
    Object.keys(info).forEach((item) => {
        report += `<div class=" browser" id="test0">
        <div class=" btitle">
            <h2>${info[item].fileName}</h2>
            <p>Data: ${JSON.stringify(info[item])}</p>
        </div>
        <div class="imgline">
        <div class="imgcontainer">
            <span class="imgname">Reference</span>
            <img class="img2" src="${info[item].beforeImage}" id="refImage" label="Reference">
        </div>
        <div class="imgcontainer">
            <span class="imgname">Test</span>
            <img class="img2" src="${info[item].afterImage}" id="testImage" label="Test">
        </div>
        </div>
        <div class="imgline">
        <div class="imgcontainer">
            <span class="imgname">Diff</span>
            <img class="imgfull" src="./compare-${info[item].fileName}.png" id="diffImage" label="Diff">
        </div>
        </div>
    </div>`
    })
    return report;
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b=>browser(b, resInfo))}
            </div>
        </body>
    </html>`
}
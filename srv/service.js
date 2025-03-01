const cds = require('@sap/cds');

module.exports = (srv) => {
    srv.on('GenerateFilter', async (req) => {
        const { Text , Entity, Field } = req.data;

     
        // Dividir o texto em palavras
        const palavras = Text.split(" ");

        // Construir os filtros de pesquisa
        const filters = palavras.map(palavra => `contains(d/${Field},'${palavra}')`).join(' or ');

        const mainFilter = `${Entity}/any(d: d/Language eq 'PT' and (${filters}))`;

        // Construir a URL
        return mainFilter;

        //return encodeURIComponent(mainFilter);

    });

    srv.on('GenerateFilterAction', async (req) => {
        const { Text , Entity, Field } = req.data;

     
        // Dividir o texto em palavras
        const palavras = Text.split(" ");

        // Construir os filtros de pesquisa
        const filters = palavras.map(palavra => `contains(d/${Field},'${palavra}')`).join(' or ');

        const mainFilter = `${Entity}/any(d: d/Language eq 'PT' and (${filters}))`;

        // Construir a URL
        return mainFilter;

    });


    srv.on('GenerateFilterActionV2', async (req) => {
        const { KeyName, KeyValue, FieldName, FieldValue} = req.data;

     
        // Dividir o texto em palavras
        const palavras = FieldValue.split(" ");

        // Construir os filtros de pesquisa
        const filters = palavras.map(palavra => `substringof('${palavra}', ${FieldName})`).join(' or ');
        return `(${filters}) and ${KeyName} ne '${KeyValue}'`;


    });
    
};


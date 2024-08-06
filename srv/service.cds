namespace capgenfilter;


// Definição do serviço
service CatalogService {
    function GenerateFilter(Text: String, Entity: String, Field: String) returns String;

    action GenerateFilterAction(Text: String, Entity: String, Field: String) returns String;

    action GenerateFilterActionV2(KeyName: String, KeyValue: String, FieldName: String, FieldValue: String) returns String;
}
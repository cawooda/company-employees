const Table = require('cli-table');

function prepHeaders(headers) {
    //This function preps the headers from header_item to HEADER ITEM
    const result = []
    headers.forEach(element => {
        result.push(element.toUpperCase().replace('_',' '));
        return result;
    });
    return result;
}

function widths (headers,values) {
    //This function takes headers and values and returns an array of column widths that will fit the info and or headers.
    
    var fullArray = values.map((element)=>element);
    fullArray.push(headers);
    
    var widths = fullArray[0].map((item)=>item.toString().length +3);

    fullArray.forEach(element => {
        for (index = 0; index < element.length; index++) {    
            if (element[index] && element[index].toString().length > widths[index]) {
                widths[index] = element[index].toString().length + 3 ;
            }
        }
    });
     
    return widths;

}

function showTable(object){
    var headers = prepHeaders(Object.keys(object[1]));
    const values = object.map((item)=>{
        return Object.values(item);
    });
    
    const columnWidths = widths(headers,values);
    var table = new Table({
            head:headers,
            colWidths: columnWidths
    });
    values.forEach(element => {
        table.push(element);
    });
    
    console.log(table.toString());
}

module.exports = showTable;
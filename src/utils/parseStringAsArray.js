module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim()); //map irá verificar o arquivo e a function trim, vai retirar os espaços antes e depois da tecnologia
            //split = eu vou cortar a string, toda vez quer tiver o caracter dentro da função, que no caso é a virgula
}
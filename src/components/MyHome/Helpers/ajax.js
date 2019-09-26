function loadShaderFromFile(path) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", path, false);
    xmlhttp.send();
    return xmlhttp.responseText;
}

export default loadShaderFromFile;
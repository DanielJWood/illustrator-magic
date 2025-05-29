// Paste Transform Properties from Text Layer

if (app.documents.length > 0 && app.activeDocument.selection.length > 0) {
    var doc = app.activeDocument;
    var sel = doc.selection[0];

    var layerName = "copy_paste_properties";
    var textLayer;

    try {
        textLayer = doc.layers.getByName(layerName);
    } catch (e) {
        alert("Layer 'copy_paste_properties' not found.");
    }

    if (textLayer.textFrames.length === 0) {
        alert("No text found in 'copy_paste_properties'.");
    }

    var yaml = textLayer.textFrames[0].contents;
    alert("YAML content:\n" + yaml);
    var values = {};

var lines = yaml.replace(/\r/g, "\n").split("\n");

for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.indexOf(":") === -1) continue; // Skip invalid lines
    
    var parts = line.split(":");
    var key = parts[0].replace(/^\s+|\s+$/g, ''); // trim
    var valStr = parts.slice(1).join(":").replace(/^\s+|\s+$/g, ''); // handle colons in value
    var value = parseFloat(valStr);
    if (!isNaN(value)) {
        values[key] = value;
    }
}


    // Apply transform    
    var x = parseFloat(values.x);
    var y = parseFloat(values.y);

    sel.position = [x,y];
    sel.width = parseFloat(values.width);
    sel.height = parseFloat(values.height);
    // sel.rotation = values.angle;

    alert("Transform properties pasted.");
} else {
    alert("Please select one object.");
}

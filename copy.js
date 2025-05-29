// Copy Transform Properties to a Text Layer

if (app.documents.length > 0 && app.activeDocument.selection.length > 0) {
    var doc = app.activeDocument;
    var sel = doc.selection[0];

    // Get object bounds
    // var bounds = sel.geometricBounds; // [top, left, bottom, right]
    // var objX = bounds[0]; // left
    // var objY = bounds[1]; // top

    // // Get active artboard's bounds
    // var ab = doc.artboards[doc.artboards.getActiveArtboardIndex()];
    // var abBounds = ab.artboardRect; // [top, left, bottom, right]
    // var abLeft = abBounds[0];
    // var abTop = abBounds[1];

    // // Position relative to artboard top-left
    // var x = objX - abLeft;
    // var y = abTop - objY; // Y is inverted (AI's y goes down)
    // alert(bounds)
    // alert(abBounds)
    var x = sel.position[0];
    var y = sel.position[1];
    
    var w = sel.width;
    var h = sel.height;
    // var matrix = sel.matrix;
    // var angle = Math.atan2(matrix.mValueB, matrix.mValueA) * (180 / Math.PI);
    // alert(angle)

    var yaml = "x: " + x.toFixed(2) + "\n" +
           "y: " + y.toFixed(2) + "\n" +
           "width: " + w.toFixed(2) + "\n" +
           "height: " + h.toFixed(2) + "\n";


    // Find or create the layer
    var layerName = "copy_paste_properties";
    var textLayer = doc.layers.getByName(layerName);
    if (!textLayer) {
        textLayer = doc.layers.add();
        textLayer.name = layerName;
    }

    // Create or update the text frame
    var textFrames = textLayer.textFrames;
    var textFrame;
    if (textFrames.length > 0) {
        textFrame = textFrames[0];
    } else {
        textFrame = textLayer.textFrames.add();
        textFrame.position = [0, 0]; // Place at top-left
    }

    textFrame.contents = yaml;
    alert("Transform properties copied.");
} else {
    alert("Please select one object.");
}

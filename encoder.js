function GifEncoder() {
  this.width = 0; // image size
  this.height = 0;
  this.transparent = null; // transparent color if given
  this.transIndex = undefined; // transparent index in color table
  this.repeat = false;
  this.delay = 0; // frame delay (hundredths)
  this.started = false; // ready to output frames
  this.pixels; // BGR byte array from frame
  this.indexedPixels; // converted frame indexed to palette
  this.colorDepth; // number of bit planes
  this.colorTab; // RGB palette
  this.usedEntry = new Array(256); // active palette entries
  this.palSize = 7; // color table size (bits-1)
  this.dispose = -1; // disposal code (-1 = use default)
  this.closeStream = false; // close stream when finished
  this.sample = 10; // default sample interval for quantizer
  this.frames = 0;
  this.out = new Array();
}

// adds another image frame
GifEncoder.prototype.addFrame = function(image) {
  if (!this.width || !this.height) {
    this.width = image.width;
    this.height = image.height;
  }

  this.getImagePixels(image);
  this.analyzePixels(image);

  if (this.frames == 0) {
    this.writeLSD();
    this.writePalette();
    if (this.repeat) {
      this.writeNetscapeExt();
    }
  }

  this.writeGraphicCtrlExt();
  this.writeImageDescriptor();
  if (this.frames > 0) { this.writePalette(); }

  this.writePixels(image);
};

// flushes remaining data and writes the gif out to canvas
GifEncoder.prototype.finish = function() {
  this.out.push(
};

// starts encoding by writing a header
GifEncoder.prototype.start = function() {
  this.writeString("GIF89a");
};

// analyzes image colors and creates a color map
GifEncoder.prototype.analyzePixels = function() {

};

// returns the index of palette color closest to c
GifEncoder.prototype.findClosest = function(color) {

};

// extracts image pixels into an array
GifEncoder.prototype.getImagePixels = function() {

};

// graphic control extension? some bytes, labels, block size?
GifEncoder.prototype.writeGraphicCtrlExt = function() {

};

// another part of the gif perhaps? probably called per frame
GifEncoder.prototype.writeImageDescriptor = function() {

};

// Logical Screen Descriptor
GifEncoder.prototype.writeLSD = function() {

};

// netscape application extension (for repeat count?)
GifEncoder.prototype.writeNetscapeExt = function() {

};

// writes the color table
GifEncoder.prototype.writePalette = function() {

};

// writes the current pixels to the buffer
GifEncoder.prototype.writePixels = function() {

};

// writes a 16-bit value to the stream
GifEncoder.prototype.writeShort = function(value) {

};

GifEncoder.prototype.writeString = function(string) {

};


function LZWEncoder(){

};

function NewQuant() {

};

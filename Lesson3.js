/**
 * Created by Ria Stroes on 17-10-2016.
 */
 "use strict";
 var s, nr;
 var fontTitle;
 function preload(){
   fontTitle = loadFont('resources/PhoenixScriptFLF.ttf');
 }

function setup(){
  nr = 3;

  this.layout = new Layout(11,50,2);
  this.layout.addSection(1,1,5,1,1);
  this.layout.addSection(1,3,5,4,5);
  this.layout.addSection(7,1,2,3,3);
  this.layout.addSection(7,5,2,2,3);
  this.layout.addSection(1,8,8,1,1);
  this.layout.addSection(1,9,8,4,5);
  this.layout.addSection(1,14,8,1,1);
  this.layout.addSection(0,15,1,4,4); //lnr
  this.layout.addSection(1,15,8,4,6);
  this.layout.addSection(1,15,4,4,6);
  this.layout.addSection(5,15,4,4,6);
  this.layout.addSection(1,20,8,1,2);
  this.layout.addSection(1,21,8,4,2);
  this.layout.addSection(1,26,4,1,2);
  this.layout.addSection(5,26,4,1,2);


  s = this.layout.sections[0];
  var bgTitle = createDiv("");
  bgTitle.position(s.x, s.y);
  bgTitle.size(s.width, s.height);
  bgTitle.class("bglesson");

  var title = createDiv("Lesson");
  title.position(s.x, s.y- (s.height/2));
  title.size(s.width, s.height);
  title.class("lesson");


  var subject = createDiv("Point");
  subject.position(s.x, s.y);
  subject.size(s.width, s.height);
  subject.class("subject");



  s = this.layout.sections[2];
  var bgDiv = createDiv("");
  bgDiv.position(s.x, s.y);
  bgDiv.size(s.width, s.height);
  bgDiv.class("bgnr");

  var lesnr = createDiv(nr);
  lesnr.position(s.x+20, s.y - 100);
  lesnr.size(s.width, s.height);
  lesnr.class("nr");

  s = this.layout.sections[1];
  var bgContent1 = createDiv("");
  bgContent1.position(s.x, s.y);
  bgContent1.size(s.width-40, s.height);
  bgContent1.class("bgcontent");


  var content1 = createDiv("");
  bgContent1.child(content1);
  content1.size(s.width, s.height);
  content1.class("content");
  content1.child(document.getElementById("intro"));


  s = this.layout.sections[3];
  var bgContent2 = createDiv("");
  bgContent2.position(s.x, s.y);
  bgContent2.size(s.width-20, s.height);
  bgContent2.class("bgcontent");

  var content2 = createDiv("");
  bgContent2.child(content2);
    content2.size(s.width-20, s.height);
    content2.class("content");
    content2.child(document.getElementById("Yayoi Kusama"));


  s = this.layout.sections[4];
  var howtitle = createDiv("HOW");
  howtitle.position(s.x, s.y);
  howtitle.size(s.width, s.height);
  howtitle.class("title");

  s = this.layout.sections[5];
  var how = createDiv("");
  how.position(s.x, s.y);
  how.size(s.width-40, s.height);
  how.class("how");
  how.child(document.getElementById("how1"));
  how.child(document.getElementById("how2"));
  how.child(document.getElementById("how3"));
  how.child(document.getElementById("how4"));
  how.child(document.getElementById("how5"));

  s = this.layout.sections[6];
  var canvastitle = createDiv("CANVAS");
  canvastitle.position(s.x, s.y);
  canvastitle.size(s.width, s.height);
  canvastitle.class("canvastitle");

  s = this.layout.sections[7];
  var bglnr = createDiv(nr);
  bglnr.position(s.x, s.y);
  bglnr.size(s.width, s.height);
  bglnr.class("lnr");

  s = this.layout.sections[8];
  var bgcanvas = createDiv("");
  bgcanvas.position(s.x, s.y);
  bgcanvas.size(s.width, s.height);
  bgcanvas.class("bgcanvas");

  s = this.layout.sections[9];
  var bgcode = createDiv("");
  bgcode.position(s.x, s.y);
  bgcode.size(s.width, s.height);
  bgcode.class("bgcode");
  bgcode.child(document.getElementById("code1"));


  s = this.layout.sections[10];
  var canvas = createCanvas(s.width, s.height);
  canvas.position(s.x, s.y);
  background(255);

  s = this.layout.sections[11];
  var asstitle = createDiv("ASSIGNMENTS");
  asstitle.position(s.x, s.y+30);
  asstitle.size(s.width, s.height/2);
  asstitle.class("title2");

  s = this.layout.sections[12];
  var ass = createDiv("");
  ass.position(s.x, s.y);
  ass.size(s.width-40, s.height/2);
  ass.class("how");
  ass.child(document.getElementById("assignment1"));

  s = this.layout.sections[13];
  var info = createDiv("");
  info.position(s.x, s.y);
  info.size(s.width, s.height/2);
  info.class("info");
  info.child(document.getElementById("info1"));

  s = this.layout.sections[14];
  var link = createDiv("");
  link.position(s.x, s.y);
  link.size(s.width, s.height/2);
  link.class("link");
  link.child(document.getElementById("link1"));
}

function draw(){


  stroke(100);
  strokeWeight(130);
  point(75, 100);

  stroke(100);
  strokeWeight(300);
  point(100, 300);

  stroke(100);
  strokeWeight(130);
  point(225, 100);

  stroke(100);
  strokeWeight(300);
  point(200, 300);

  //three dots
  stroke(0);
  strokeWeight(20);
  point(100, 100);

  stroke(100);
  strokeWeight(20);
  point(150, 100);

  stroke(200);
  strokeWeight(20);
  point(200, 100);

}

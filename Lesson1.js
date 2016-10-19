/**
 * Created by Ria Stroes on 15-10-2016.
 */
 "use strict";
 var s, nr;
 var fontTitle;
 function preload(){
   fontTitle = loadFont('resources/PhoenixScriptFLF.ttf');
 }

function setup(){
  nr = 1;

  this.layout = new Layout(11,50,2);
  this.layout.addSection(1,1,5,1,1);
  this.layout.addSection(1,3,5,5,5);
  this.layout.addSection(7,1,2,3,3);
  this.layout.addSection(7,5,2,3,3);
  this.layout.addSection(1,8,8,1,1);  //how title
  this.layout.addSection(1,9,8,4,4);  //how
  this.layout.addSection(1,14,8,5,5); //img
  this.layout.addSection(1,19,8,13,12); //how2
  this.layout.addSection(1,32,8,1,1); //assignment title
  this.layout.addSection(1,33,8,4,1); //assignments
  this.layout.addSection(1,36,4,1,1);
  this.layout.addSection(5,36,4,1,1);

  s = this.layout.sections[0];
  var bgTitle = createDiv("");
  bgTitle.position(s.x, s.y);
  bgTitle.size(s.width, s.height);
  bgTitle.class("bglesson");

  var title = createDiv("Lesson");
  title.position(s.x, s.y- (s.height/2));
  title.size(s.width, s.height);
  title.class("lesson");


  var subject = createDiv("P5");
  subject.position(s.x, s.y);
  subject.size(s.width, s.height);
  subject.class("subject");

  s = this.layout.sections[2];
  var bgDiv = createDiv("");
  bgDiv.position(s.x, s.y);
  bgDiv.size(s.width, s.height);
  bgDiv.class("bgnr");

  var divnr = createDiv(nr);
  divnr.position(s.x+20, s.y - 100);
  divnr.size(s.width, s.height);
  divnr.class("nr");

  s = this.layout.sections[1];
  var bgContent1 = createDiv("");
  bgContent1.position(s.x, s.y);
  bgContent1.size(s.width-40, s.height);
  bgContent1.class("bgcontent");


  var content1 = createDiv("");
  bgContent1.child(content1);
  content1.size(s.width-40, s.height);
  content1.class("content");
  content1.child(document.getElementById("intro1"));
  content1.child(document.getElementById("intro2"));
  content1.child(document.getElementById("intro3"));
  content1.child(document.getElementById("intro5"));
  content1.child(document.getElementById("intro6"));
  content1.child(document.getElementById("intro7"));

  s = this.layout.sections[3];
  var bgContent2 = createDiv("");
  bgContent2.position(s.x, s.y);
  bgContent2.size(s.width-40, s.height);
  bgContent2.class("bgcontent");

  var content2 = createDiv("");
  bgContent2.child(content2);
    content2.size(s.width-40, s.height);
    content2.class("content");
    content2.child(document.getElementById("intro4"));


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


  s = this.layout.sections[6];
  var divimg = createDiv("");
  divimg.position(s.x, s.y);
  divimg.size(s.width, s.height);
  divimg.class("divimg");
  divimg.child(document.getElementById("howimg"));

  s = this.layout.sections[7];
  var how2 = createDiv("");
  how2.position(s.x, s.y);
  how2.size(s.width-40, s.height);
  how2.class("how");
  how2.child(document.getElementById("how4"));
  how2.child(document.getElementById("how5"));
  how2.child(document.getElementById("how6"));
  how2.child(document.getElementById("how7"));
  how2.child(document.getElementById("how8"));
  how2.child(document.getElementById("how9"));
  how2.child(document.getElementById("how10"));
  how2.child(document.getElementById("how11"));
  how2.child(document.getElementById("how12"));
  how2.child(document.getElementById("how13"));
  how2.child(document.getElementById("how14"));

  s = this.layout.sections[8];
  var asstitle = createDiv("ASSIGNMENTS");
  asstitle.position(s.x, s.y+30);
  asstitle.size(s.width, s.height/2);
  asstitle.class("title2");

  s = this.layout.sections[9];
  var ass = createDiv("");
  ass.position(s.x, s.y);
  ass.size(s.width-40, s.height/2);
  ass.class("how");
  ass.child(document.getElementById("assignment1"));

  s = this.layout.sections[10];
  var info = createDiv("");
  info.position(s.x, s.y);
  info.size(s.width, s.height/2);
  info.class("info");
  info.child(document.getElementById("info1"));

  s = this.layout.sections[11];
  var link = createDiv("");
  link.position(s.x, s.y);
  link.size(s.width, s.height/2);
  link.class("link");
  link.child(document.getElementById("link1"));
}

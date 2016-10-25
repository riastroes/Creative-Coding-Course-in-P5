/**
 * Created by Ria Stroes on 15-10-2016.
 */
 "use strict";
function Section(x,y, sectionwidth, sectionheight, rows){
  this.x = x;
  this.y = y;
  this.width = sectionwidth;
  this.height = sectionheight;
  this.rows = rows;
  this.rowheight = this.height / this.rows;
  this.stylenr =0;
}
Section.prototype.setContent = function(atext,row,style){

  switch(style){
  case "Lesson":{
    this.style(3);
    this.textsize =this.height /row;
    textSize(this.textsize * 1.6);
    textAlign(LEFT);
    text(atext, this.x , this.y + this.textsize);
    break;
  }
  case "Title":{
    this.style(4);
    this.textsize =this.height/row;
    textSize(this.textsize );
    textAlign(RIGHT);
    text(atext, this.x  + this.width, this.y + this.textsize);
    break;
  }
  case "Nr":{
    this.style(4);
    this.textsize =this.height/row;
    textSize(this.textsize);
    textAlign(RIGHT);
    text(atext, this.x + this.width , this.y + this.height);
    break;
  }
  case "LNr":{  // nr
    this.style(5);
    this.textsize =this.height;
    textSize(this.textsize);
    textAlign(RIGHT);
    text(atext, this.x+75, this.y-1 +(row + this.textsize));
    break;
  }
  default:{
    this.style(1);
    this.textsize =24;
    textSize(this.textsize);
    textAlign(LEFT);
    text(atext, this.x + 20 , this.y + 20 +(row * this.textsize));
  }
}

}
Section.prototype.draw = function(nr){

  this.style(2);
  rect(this.x,this.y, this.width, this.height);
}
Section.prototype.style = function(nr){

  switch(nr){
    case 0:
    textFont(fontNormal);
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness =1;
    break;

    case 1:
    textFont(fontNormal);
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[1];
    this.thickness =1;
    break;

    case 2:
    textFont(fontNormal);
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[2];
    this.thickness =1;
    break;

    case 3:
    textFont(fontTitle);
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[1];
    this.thickness =1;
    break;

    case 4:
    textFont(fontNr);
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[5];
    this.thickness =1;
    break;

    case 5:
    textFont(fontNr);
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[2];
    this.thickness =1;
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};

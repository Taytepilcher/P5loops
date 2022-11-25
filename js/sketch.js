var myarray=["5","4","3","2","1"]

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    for (let i = 0; i<10; i++){
        console.log("I want "+i+ " Ice cream");
    }


    for(let i =0; i<myarray.length;i++){
console.log(myarray[i])
    }
    

}

function draw() {
    background(220);

    fill(255, 255, 255);
    
    
    //for(let lineX =80;lineX<=width; lineX+=80 ){
      //  line(lineX, 0,lineX, height)
    //}
    //for(let x = 0 ; x<=30; x++){
    //    ellipse(x*10, height/2, 10);
   // }
   for(let y = 0 ; y<=80; y++)
   {
       for(let x = 0; x <=80;x++)
       {
        fill(x*y,x*10,y);
circle(x*10, y*10, 10)
       }
   }

}
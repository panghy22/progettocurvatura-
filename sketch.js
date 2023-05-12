/**

  Duplicate this sketch to start your project 🧪
  More info: https://dev.codemotionkids.com/libraries/diorama/docs/
  
  Creative Commons BY-SA

**/

function setup() {
  createCanvas3D(600, 400);
  //Change background color of the scene
  background3D("#00BCD4");
  
  var albero = beginGroup();
    //Change material color to orange
    diffuse("#3FBD44");
    //Create a sphere in 0, 0, 0 with radius 1
    sphere(0, 3.5, 0, 2);
    diffuse("#3B1A0E");
    align(TOP);
     cylinder(0, 0, 0, 0.3, 3.5);
  endGroup();
  var lato = 20
  var numeroAlberi = 5;
  for (var i=0; i<numeroAlberi; i++)
    {
          var x = random(-lato/2 , lato/2);
          var y = 0;
          var z = 0;random(-lato/2 , lato/2);
      
    var nuovoAlbero=  clone(albero, x, y, z);
      nuovoAlbero.setScale(random(1,2));
    }
  
  align(BOTTOM);
  box(0,0, 0, 200, 20, 200);
  
 
}

function draw() {
  // 🔍 Never create objects here, but don't forget to have it in your code:
  // leave empty for the moment
} 
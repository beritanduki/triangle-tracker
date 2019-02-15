function triangle() {
    var side1=document.getElementById("triangle1").value;
    var side2=document.getElementById("triangle2").value;
    var side3=document.getElementById("triangle3").value;

    var sidea = parseInt(side1);
    var sideb = parseInt(side2);
    var sidec = parseInt(side3);
  
  if (sidea===sideb && sideb===sidec && sidea===sidec) {
  alert ("Equilateral triangle");
  } 
  else if (sidea===sideb && sidea===sidec || !sideb==sidec) {
  alert ("Isosceles triangle");
  }
  else if (sidea!==sideb || sideb!==sidec || sidea!==sidec) {
  alert ("Scalene triangle");
  } 
  else { ((sidea+sideb)<=sidec || (sidea+sidec)<=sideb || (sideb+sidec)<=sidea) 
  alert ("This cannot be a triangle");
  }
  }
  
function findState(xc,yc,x1,y1,a,b){
    let r= Math.sqrt(Math.pow((x1-xc),2)+Math.pow((y1-yc),2));
    let d=Math.sqrt(Math.pow((a-xc),2)+Math.pow((b-yc),2));
    if(r>d){
      return "The point is inside the circle";
    }
  else if(r<d){
    return "The point is outside the circle";
    }
    else if(r==d){
      return "The point is on the circle";
    }
   }
   console.log(findState(0,0,5,5,5,6));
  
  
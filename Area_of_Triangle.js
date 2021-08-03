function findArea(){
    let area = Math.floor(Math.sqrt(Math.pow(Math.random()*101,2)+Math.pow(Math.random()*101,2)-2*Math.random()*101*Math.random()*101*Math.cos(Math.round(Math.random()*180)*Math.PI/180)));
    if(area>50 && area<100){
        return "Big triangle";
    }
    else if(area>100){
      return "Very big triangle";
    }
    else{
      return "Enter valid numbers!";
    }
  }
  console.log(findArea());
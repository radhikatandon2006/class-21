function ourownisTouching(a,b){

    if(a.x  - b.x <= a.width/2 + b.width/2 &&
     b.x  - a.x <=a.width/2 + b.width/2 &&
     b.y -a.y <= b.height/2 + a.height/2 &&
     a.y-b.y <= b.height/2 + a.height/2){
     return true;
    }
    else{
      return false
    }
    
    
    }
    
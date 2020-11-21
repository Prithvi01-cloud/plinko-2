  
class Plinko {
  constructor(x, y) {
      var options = {
          restitution: 1,
          friction: 0,
          isStatic:true
      }
      this.r = 5;
      this.body = Bodies.circle(x, y, this.r, options);
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      noStroke();
      fill(this.color);
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
  }
  score(){
    if(this.velocity<1){
        if(this.body.position.x>0&&this.body.position.x<80){
            score+=80


        }else if(this.body.position.x>80&&this.body.position.x<160){
            score+=160


        }else if(this.body.position.x>160&&this.body.position.x<240){
            score+=240


        }else if(this.body.position.x>240&&this.body.position.x<320){
            score+=320


        }else if(this.body.position.x>320&&this.body.position.x<400){
            score+=400


        }else if(this.body.position.x>400&&this.body.position.x<480){
            score+=480


        }else if(this.body.position.x>480&&this.body.position.x<560){
            score+=560


        }else if(this.body.position.x>560&&this.body.position.x<640){
            score+=640


        }else if(this.body.position.x>640&&this.body.position.x<720){
            score+=720


        }else if(this.body.position.x>720&&this.body.position.x<800){
            score+=800


        }
    }




  }

};
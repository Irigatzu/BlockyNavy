class HealthBar {
	constructor (x,y,w,h,maxhealth,color){
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.maxhealth=maxhealth;
		this.maxWidth=w;
		this.health=maxhealth;
		this.color=color;
	}
	show(context){
		context.lineWidth=4;
		context.stroleStyle="#333";
		context.fillStyle=this.color;
		context.fillRect(this.x,this.y,this.w,this.h);
		context.strokeRect(this.x,this.y,this.maxWidth,this.h);
	}
	updateHealth(damage){
	if(this.health>0){
	this.health =this.health-damage;
	this.w=(this.health/this.maxhealth)*this.maxWidth
	}

	}
}
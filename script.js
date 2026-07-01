//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	get returnWidth(){
		return this.width;
	}

	get returnHeight(){
		return this.height;
	}

	getArea(){
		return (this.width*this.height);
	}
}

class Square extends Rectangle {
	constructor(width, height, getArea, side){
		super(width,height,getArea);
		this.side = side;
	}

	get returnWidht(){
		this.width = side;
	}

	get returnHeight(){
		this.height = side;
	}

	getArea(){
		return this.side*this.side;
	}

	getPerimeter(){
		return 4*this.side;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

import React from 'react';
import Sketch from 'react-p5';

export default (props) => {
	let x = 50;
	const y = 50;

	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);
	};

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x++;
	};

	function TextBox(string, x, y, size) {
		this.w = (string.length * size) / 1.75;
		this.h = size + 30;

		var options = {
			friction: 1,
			frictionAir: 0.05,
			restitution: 0.2,
		};

		this.body = Bodies.rectangle(x, y, this.w, this.h, options);

		World.add(world, this.body);

		this.show = function () {
			var pos = this.body.position;
			var angle = this.body.angle;
			push();
			translate(pos.x, pos.y);
			rotate(angle);
			noStroke();
			fill(234, 232, 246);
			rectMode(CENTER);
			textFont(dmSans);
			textAlign(CENTER, CENTER);
			rect(0, 0, this.w, this.h);
			fill(33);
			textSize(size);
			text(string, 0, 0);
			fill(100);
			pop();
		};
	}

	return <Sketch setup={setup} draw={draw} />;
};

import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { Actor } from './Actor';
import { checkLimits } from '../utils/checkLimits';

export class Goomba extends Actor {
	goombaSize: Size;
	goombaColor: string;
	goombaSpeed: number;

	constructor(
		size: Size = { w: 30, h: 30 },
		initialPos: Point = { x: 500 + size.w, y: 350 }
	) {
		super(initialPos);
		this.goombaSize = size;
		this.goombaColor = 'blue';
		this.goombaSpeed = 40;
	}
	update(delta: number) {
		let newPos: Point = {
			x: this.position.x - this.goombaSpeed * delta,
			y: this.position.y,
		};
		if (checkLimits(newPos, this.goombaSize, this.goombaColor)) {
			this.position = newPos;
		} else {
			this.position = { x: 500 + this.goombaSize.w, y: 350 };
		}
	}
	draw(delta: number, ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.goombaColor;
		ctx.fillRect(
			this.position.x,
			this.position.y,
			this.goombaSize.w,
			this.goombaSize.h
		);
	}
}

import { Point } from '../types/Point';

export interface IActor {
    position: Point
    draw: (ctx: CanvasRenderingContext2D) => void;
}

export class Actor implements IActor {
  position: Point;
  constructor(position: Point) {
		this.position = position;
	}
  draw(ctx: CanvasRenderingContext2D) { }
}

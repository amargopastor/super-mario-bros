import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { Actor, IActor } from './Actor';

export class Mario extends Actor {
  marioSize: Size;
  marioColor: string;

  constructor(initialPos: Point = {x:10, y:100}, size: Size = {w:30,h:15 }){
    super(initialPos);
    this.marioSize = size;
    this.marioColor = "red";
  };
  draw(ctx: CanvasRenderingContext2D){
    ctx.fillStyle = 'red';
    ctx.fillRect(
      this.position.x, 
      this.position.y, 
      this.marioSize.w, 
      this.marioSize.h)
  }
}

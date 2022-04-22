import { Mario } from "./actors/Mario";

window.onload = () => {
  console.log('ready');

  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  const mario = new Mario();

  let lastFrame = 0;
	const render = (time: number) => {
		lastFrame = time;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
    mario.draw(ctx);
		window.requestAnimationFrame(render);
	};

	window.requestAnimationFrame(render);
};

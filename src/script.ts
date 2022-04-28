import { Actor, IActor } from './actors/Actor';
import { Mario } from './actors/Mario';
import { Goomba } from './actors/Goomba';
import { FPSViewer } from './actors/FPSViewer';
import { Score } from './actors/Score';

window.onload = () => {
	console.log('ready');

	const canvas = document.getElementById('canvas') as HTMLCanvasElement;
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

	const mario = new Mario();
	const goomba = new Goomba();
	const fps = new FPSViewer({ x: 5, y: 15 });
	const score = new Score();

	const actors: Array<IActor> = [goomba, mario, fps, score];

	let lastFrame = 0;
	const render = (time: number) => {
		const delta = (time - lastFrame) / 1000;
		lastFrame = time;

		actors.forEach((actor) => actor.update(delta));
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		actors.forEach((actor) => actor.draw(delta, ctx));

		window.requestAnimationFrame(render);
	};

	document.body.addEventListener('keydown', (e) => {
		if (mario.keyboard_event_down) {
			mario.keyboard_event_down(e.key);
		}
	});
	document.body.addEventListener('keyup', (e) => {
		if (mario.keyboard_event_up) {
			mario.keyboard_event_up(e.key);
		}
	});

	window.requestAnimationFrame(render);
};

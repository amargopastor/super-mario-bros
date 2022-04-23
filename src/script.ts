import { Goomba } from './actors/Goomba';
import { Mario } from './actors/Mario';

window.onload = () => {
	console.log('ready');

	const canvas = document.getElementById('canvas') as HTMLCanvasElement;
	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

	const mario = new Mario();
	const goomba = new Goomba();

	const actors = [goomba, mario];

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

const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
	jsConfetti.addConfetti({
		emojis: ['🌈', '✨', '💫', '🌸','❤️','💞'],
		emojiSize: 70,
	}).then(() => jsConfetti.addConfetti()).then(() => jsConfetti.addConfetti()).then(() => jsConfetti.addConfetti());
});


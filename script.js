// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('video', { captions: { active: true }, ads: { enabled: true, tagUrl: '#' } });

// Expose player so it can be used from the console
window.player = player;

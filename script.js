// Change the second argument to your options:
// https://github.com/sampotts/plyr/#options
const player = new Plyr('video', { captions: { active: true }, ads: { enabled: true, tagUrl: 'https://www.videosprofitnetwork.com/watch.xml?key=408c55564190656e0dc0f64c94e96389' } });

// Expose player so it can be used from the console
window.player = player;

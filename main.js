const synth = new Tone.Synth().toDestination();
const keys = Array.from(document.querySelectorAll('.key'));

document.addEventListener('mousedown', (e) => {
    if (!e.target.classList.contains('key')) {
      return;
    }
    synth.triggerAttack(e.target.dataset.note);
    e.target.classList.add('active');
  });
  
  document.addEventListener('mouseup', (e => {
    keys.forEach(key => key.classList.remove('active'));
    synth.triggerRelease();
  }));
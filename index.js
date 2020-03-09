let [C4, D4b, D4, E4b, E4, F4, G4b, G4, A4b, A4, B4b, B4] = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let [C5, D5b, D5, E5b, E5, F5, G5b, G5, A5b, A5, B5b, B5] = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
let [C6, D6b, D6, E6b, E6, F6, G6b, G6, A6b, A6, B6b, B6] = [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38];
let [C7, D7b, D7, E7b, E7, F7, G7b, G7, A7b, A7, B7b, B7] = [39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

let speed = 1

let playTone = (note) => {
  let frequency = 220 * 2 ** (note / 12)

  let audioContext = new(window.AudioContext || window.webkitAudioContext)()
  let startTime = audioContext.currentTime
  let oscillator = audioContext.createOscillator()
  let gain = audioContext.createGain()
  let noteLength = 3 * speed
  oscillator.frequency.value = frequency
  oscillator.type = 'sine'
  oscillator.connect(gain)
  gain.connect(audioContext.destination)
  gain.gain.setValueAtTime(0.5, startTime)
  gain.gain.linearRampToValueAtTime(0, startTime + noteLength)
  oscillator.start(startTime)
  oscillator.stop(startTime + noteLength)
}

let playOrbit = (note, lengths) => {
  setInterval(() => {
    playTone(note)
  }, lengths * 1000 * speed);
}


// mercury
playOrbit(C4, 2.5)

// venus
playOrbit(D4, 4)

// earth
playOrbit(E4, 6)

// mars
playOrbit(F4, 10)

// jupiter
playOrbit(G4, 15)

// saturn
playOrbit(A5, 30)

// uranus
playOrbit(B5, 45)

// neptune
playOrbit(C5, 50)

// pluto
playOrbit(D5, 60)

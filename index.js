// one misconception is this refers to the function itself


// another misconception is this points to the instance that a method belongs to


function musicPlayer() {
  return function play() {
    console.log(`Playing ${this.song}`)
  }
}

const startMusic = musicPlayer()
startMusic()

const favSong = {
  song: 'Believer',
  startMusic: startMusic
}

favSong.startMusic()
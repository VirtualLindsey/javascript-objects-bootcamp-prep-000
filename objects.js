let playlist = {
  "Daft Punk" : "Something About Us",
  "Joy Division" : "Atrocity Exhibition",
  "David Bowie" : "Sound and Vision"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  console.log(playlist)
  console.log("############")
  delete playlist.artistName;
  console.log(playlist)
  return playlist;
}
let playlist = {
  "Daft Punk" : "Something About Us",
  
  "Joy Division" : ["Atrocity Exhibition"],
  
  "David Bowie" : ["Sound and Vision", "Be My Wife", "Station to Station"]
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist;
}
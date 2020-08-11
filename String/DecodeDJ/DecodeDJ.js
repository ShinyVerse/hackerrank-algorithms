const DecodeDJ = (song) => {
  let decodedSong;
  decodedSong = song.replace(/WUB/g, " ");

  decodedSong = decodedSong.replace(/\s+/g, " ");

  return decodedSong.trim();
};

module.exports = { DecodeDJ };

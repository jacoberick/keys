// repeated styles
const majorMinorTitles = `text-xl text-left`;

let majorChords = [
  "A Major",
  "A#/Bb Major",
  "B Major",
  "C Major",
  "C#/Db Major",
  "D Major",
  "D#/Eb Major",
  "E Major",
  "F Major",
  "F#/Gb Major",
  "G Major",
  "G#/Ab Major",
];

const majorChordButtons = majorChords.map((c) => (
  <button className="m-4 border-2  border-gray-900 p-2 rounded-md">
    <p>{c}</p>
  </button>
));

const FindKey = () => {
  return (
    <div
      id="findKeyContainer"
      className="mx-auto max-w-4xl px-16 text-center mt-4"
    >
      <p className={majorMinorTitles}>Major Chords</p>
      <div id="chordBank">{majorChordButtons}</div>
    </div>
  );
};

export default FindKey;

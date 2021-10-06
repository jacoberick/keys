// repeated styles
const majorMinorTitles = `text-xl mb-4 text-white relative bottom-9 bg-gray-800 inline-block rounded py-1 px-2`;
const chordSection = `my-6 bg-gray-900 rounded-lg p-6`;
const buttonsContainer = `flex flex-wrap justify-center`;

const majorChords = [
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

const minorChords = [
  "A Minor",
  "A#/Bb Minor",
  "B Minor",
  "C Minor",
  "C#/Db Minor",
  "D Minor",
  "D#/Eb Minor",
  "E Minor",
  "F Minor",
  "F#/Gb Minor",
  "G Minor",
  "G#/Ab Minor",
];

const majorChordButtons = majorChords.map((c) => (
  <button className="m-4 border-2  border-yellow-400 p-2 rounded-md w-32">
    <p>{c}</p>
  </button>
));

const minorChordButtons = minorChords.map((c) => (
  <button className="m-4 border-2  border-yellow-400 p-2 rounded-md w-32">
    <p>{c}</p>
  </button>
));

const FindKey = () => {
  return (
    <div id="findKeyContainer" className="mx-auto max-w-4xl px-16">
      <section id="majorSection" className={chordSection}>
        <p className={majorMinorTitles}>Major Chords</p>
        <div id="majorChordBank" className={buttonsContainer}>
          {majorChordButtons}
        </div>
      </section>
      <section id="minorSection" className={chordSection}>
        <p className={majorMinorTitles}>Minor Chords</p>
        <div id="minorChordBank" className={buttonsContainer}>
          {minorChordButtons}
        </div>
      </section>
    </div>
  );
};

export default FindKey;

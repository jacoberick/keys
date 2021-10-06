// repeated styles
const majorMinorTitles = `text-xl mb-4 text-white relative bottom-9 bg-gray-800 inline-block rounded py-1 px-2 font-lato`;
const chordSection = `my-6 bg-gray-900 rounded-lg p-6`;
const buttonsContainer = `flex flex-wrap justify-center`;
const chordButton = `text-yellow-400 m-4 border-2  border-yellow-400 p-2 rounded-md w-32 hover:bg-yellow-400 transition-all hover:text-white`;

//chord arrays
const baseChords = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
];

const majorChords = baseChords.map((x) => x + " Major");
const minorChords = baseChords.map((x) => x + " Minor");
const dimChords = baseChords.map((x) => x + " Diminished");

//variables that store chord button elements
const majorChordButtons = majorChords.map((c) => (
  <button key={c} className={chordButton}>
    {c}
  </button>
));

const minorChordButtons = minorChords.map((c) => (
  <button key={c} className={chordButton}>
    {c}
  </button>
));

const dimChordButtons = dimChords.map((c) => (
  <button key={c} className={chordButton}>
    {c}
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
      <section id="minorSection" className={chordSection}>
        <p className={majorMinorTitles}>Diminished Chords</p>
        <div id="minorChordBank" className={buttonsContainer}>
          {dimChordButtons}
        </div>
      </section>
    </div>
  );
};

export default FindKey;

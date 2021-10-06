import React, { useState } from "react";

// repeated styles
const majorMinorTitles = `text-xl mb-4 text-white relative bottom-9 bg-gray-800 inline-block rounded py-1 px-2 font-lato`;
const chordSection = `my-6 bg-gray-900 rounded-lg p-4 max-w-2xl`;
const buttonsContainer = `flex flex-wrap justify-center`;
const chordButton = `text-yellow-400 m-4 border-2  border-yellow-400 p-2 rounded-md w-32 hover:bg-yellow-400 transition-all hover:text-white`;

const FindKey = () => {
  //state
  const [selectedChords, setSelectedChords] = useState([]);

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

  const toggleSelectedChord = (el) => {
    let chordName = el.target.innerHTML;
    let arrCopy = [...selectedChords];
    let selectIndex = arrCopy.indexOf(chordName);

    selectIndex === -1
      ? setSelectedChords([...arrCopy, chordName])
      : setSelectedChords(arrCopy.filter((x) => x !== chordName));
  };

  console.log(selectedChords);

  //variables that store chord button elements
  const majorChordButtons = majorChords.map((c) => (
    <button onClick={toggleSelectedChord} key={c} className={chordButton}>
      {c}
    </button>
  ));

  const minorChordButtons = minorChords.map((c) => (
    <button onClick={toggleSelectedChord} key={c} className={chordButton}>
      {c}
    </button>
  ));

  const dimChordButtons = dimChords.map((c) => (
    <button onClick={toggleSelectedChord} key={c} className={chordButton}>
      {c}
    </button>
  ));

  return (
    <div
      id="findKeyContainer"
      className="flex justify-center px-16 max-w-7xl mx-auto"
    >
      {/* chords for selection */}
      <div id="left" className="mr-4 w-1/2">
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
      {/* selected chords */}
      <div id="right" className="ml-4 w-1/2">
        <section className="my-6 bg-gray-200 rounded-lg p-4 max-w-2xl flex flex-col items-start">
          <p className={`${majorMinorTitles}`}>Selected Chords</p>
          <div id="minorChordBank" className={buttonsContainer}></div>
          <button className="self-center border-gray-800 border-2 rounded p-2 hover:bg-gray-800 hover:text-white transition-all">
            Find Key
          </button>
        </section>
      </div>
    </div>
  );
};

export default FindKey;

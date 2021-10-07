import React, { useState } from "react";

// repeated styles
const majorMinorTitles = `text-xl mb-4 text-white absolute -top-6 bg-gray-800 inline-block rounded py-1 px-2 font-lato`;
const chordSection = `my-12 bg-gray-900 rounded-lg p-4 max-w-2xl relative`;
const buttonsContainer = `flex flex-wrap justify-center`;
const chordButton = `text-yellow-400 m-4 border-2 border-yellow-400 p-2 rounded-md w-32 transition-all`;

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

  const basesForKeys = [
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

  //function to compute all major keys given index of first note
  const computeMajorKeys = (startChordIndex) => {
    let theOne = basesForKeys[startChordIndex] + " Major";
    let theTwo = basesForKeys[startChordIndex + 2] + " Minor";
    let theThree = basesForKeys[startChordIndex + 4] + " Minor";
    let theFour = basesForKeys[startChordIndex + 5] + " Major";
    let theFive = basesForKeys[startChordIndex + 7] + " Major";
    let theSix = basesForKeys[startChordIndex + 9] + " Minor";
    let theSeven = basesForKeys[startChordIndex + 11] + " Diminished";
    return [theOne, theTwo, theThree, theFour, theFive, theSix, theSeven];
  };

  //function to compute all minor keys given index of first note
  const computeMinorKeys = (startChordIndex) => {
    let theOne = basesForKeys[startChordIndex] + " Minor";
    let theTwo = basesForKeys[startChordIndex + 2] + " Diminished";
    let theThree = basesForKeys[startChordIndex + 3] + " Major";
    let theFour = basesForKeys[startChordIndex + 5] + " Minor";
    let theFive = basesForKeys[startChordIndex + 7] + " Minor";
    let theSix = basesForKeys[startChordIndex + 8] + " Major";
    let theSeven = basesForKeys[startChordIndex + 10] + " Major";
    return [theOne, theTwo, theThree, theFour, theFive, theSix, theSeven];
  };

  //computes all keys and their respective chords and pushes to the keys array
  let keys = [];

  for (let i = 0; i < baseChords.length; i++) {
    keys.push([baseChords[i] + " Major", computeMajorKeys(i)]);
    keys.push([baseChords[i] + " Minor", computeMinorKeys(i)]);
  }

  //toggles chord to be selected or removed from selected
  const toggleSelectedChord = (el) => {
    let chordName = el.target.innerHTML;
    let arrCopy = [...selectedChords];
    let selectIndex = arrCopy.indexOf(chordName);

    if (selectIndex === -1) {
      setSelectedChords([...arrCopy, chordName]);
      el.target.classList.remove("text-yellow-400");
      el.target.classList.add("bg-yellow-400", "text-white");
    } else {
      setSelectedChords(arrCopy.filter((x) => x !== chordName));
      el.target.classList.remove("bg-yellow-400");
      el.target.classList.add("text-yellow-400");
    }
  };

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

  const selectedChordButtons = selectedChords.map((c) => (
    <p
      key={c}
      className="pointer-events-none bg-gray-900 text-white m-4 rounded-md transition-all hover:text-white"
    >
      {c}
    </p>
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
        <section className={`${chordSection} flex flex-col`}>
          <p className={`${majorMinorTitles}`}>Selected Chords</p>
          <div id="minorChordBank" className={`${buttonsContainer}`}>
            {selectedChords.length ? (
              selectedChordButtons
            ) : (
              <p className=" text-gray-500">select some chords, my friend</p>
            )}
          </div>
          <button
            className={`${
              selectedChords.length
                ? "border-gray-400 text-gray-400 border-2 rounded p-2 transition-all self-end mt-4"
                : "hidden"
            } hover:border-yellow-400 hover:text-yellow-400`}
          >
            Find Key
          </button>
        </section>
      </div>
    </div>
  );
};

export default FindKey;

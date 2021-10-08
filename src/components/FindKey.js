import React, { useState } from "react";

// repeated styles
const chordSection = `max-w-2xl my-6`;
const buttonsContainer = `p-4 rounded-lg bg-gray-900 flex flex-wrap justify-center`;
const chordButton = `transform hover:scale-110 active:scale-75 text-yellow-400 m-4 border-2 border-yellow-400 p-2 rounded-md w-32 transition-all`;

const FindKey = () => {
  //state
  const [selectedChords, setSelectedChords] = useState([]);
  const [foundKeys, setFoundKeys] = useState([]);

  const returnNada = () => null;

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

  //compares values in chordSelection to the musical keys in the key array
  const findKeys = () => {
    let potentialKeys = [];
    for (let i = 0; i < keys.length; i++) {
      let newKey = selectedChords.every((x) => keys[i][1].indexOf(x) !== -1);
      newKey ? potentialKeys.push(keys[i][0]) : returnNada();
    }
    setFoundKeys(potentialKeys);
  };

  //toggles chord to be selected or removed from selected
  const toggleSelectedChord = (el) => {
    let chordName = el.target.innerHTML;
    let arrCopy = [...selectedChords];
    let selectIndex = arrCopy.indexOf(chordName);

    if (selectIndex === -1) {
      setSelectedChords([...arrCopy, chordName]);
      el.target.classList.remove("text-yellow-400");
      el.target.classList.add("bg-yellow-400", "text-white", "cb-selector");
    } else {
      setSelectedChords(arrCopy.filter((x) => x !== chordName));
      el.target.classList.remove("bg-yellow-400");
      el.target.classList.add("text-yellow-400");
    }
  };

  //resets selected chords
  const resetSelected = () => {
    let chordButtons = document.querySelectorAll(".cb-selector");
    for (const button of chordButtons) {
      button.classList.remove("bg-yellow-400");
      button.classList.add("text-yellow-400");
    }
    setSelectedChords([]);
  };

  //array that store chord button elements
  let buttonsArray = [majorChords, minorChords, dimChords];
  let buttonsCode = [];

  for (let i = 0; i < buttonsArray.length; i++) {
    let code = buttonsArray[i].map((c) => (
      <button onClick={toggleSelectedChord} key={c} className={chordButton}>
        {c}
      </button>
    ));
    buttonsCode.push(code);
  }

  //generates buttons based on selectedChords state
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
      className="flex flex-col items-center x-16 max-w-7xl"
    >
      {/* selected chords */}
      <section className={`${chordSection} w-full`}>
        <p className="">Selected Chords</p>
        <div id="selectedChords" className={`${buttonsContainer}`}>
          {selectedChords.length ? (
            selectedChordButtons
          ) : (
            <p className=" text-gray-500">Select some chords, my friend.</p>
          )}
        </div>
        <div id="selectedSectionButtons" className="flex justify-between">
          <button
            onClick={findKeys}
            className={`${
              selectedChords.length
                ? "border-gray-400 text-gray-400 border-2 rounded p-2 transition-all self-end mt-4"
                : "hidden"
            } hover:border-green-400 hover:text-green-400`}
          >
            Find Key
          </button>
          <button
            onClick={resetSelected}
            className={`${
              selectedChords.length
                ? "border-gray-400 text-gray-400 border-2 rounded p-2 transition-all self-start mt-4"
                : "hidden"
            } hover:border-red-500 hover:text-red-500`}
          >
            Reset
          </button>
        </div>
      </section>

      {/* chords for selection */}
      <section id="majorSection" className={chordSection}>
        <p className="">Major Chords</p>
        <div id="majorChordBank" className={buttonsContainer}>
          {buttonsCode[0]}
        </div>
      </section>
    </div>
  );
};

export default FindKey;

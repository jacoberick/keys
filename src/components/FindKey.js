import React, { useState } from "react";

// repeated styles
const chordSection = `max-w-2xl mt-6 mb-8`;
const buttonsContainer = `p-4 rounded-lg bg-gray-900 flex flex-wrap justify-center`;
const chordButton = `transform hover:scale-110 active:scale-95 text-yellow-400 m-4 border-2 border-yellow-400 p-2 rounded-md w-32 transition-all`;

const FindKey = () => {
  //state
  const [selectedChords, setSelectedChords] = useState([]);
  const [foundKeys, setFoundKeys] = useState([]);
  const [selectedChordGrp, setSelectedChordGrp] = useState("Major Chords");

  const returnNada = () => null;

  //chord arrays
  const baseChords = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"];
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
    if (!potentialKeys.length) {
      potentialKeys.push("No compatible keys found.");
    }
    setFoundKeys(potentialKeys);
  };

  // adds and removes active class to selected buttons
  let renderActiveClasses = () => {
    let buttons = document.getElementsByClassName("cb-selector");
    [...buttons].forEach((x) => {
      if (selectedChords.indexOf(x.innerHTML) !== -1) {
        x.classList.remove("text-yellow-400");
        x.classList.add("bg-yellow-400", "text-white");
      }
    });
  };

  //updates chord group button style
  let chordSwapButtons = document.getElementsByClassName("chord-swap-button");
  [...chordSwapButtons].forEach((x) => {
    if (selectedChordGrp.indexOf(x.innerHTML) !== -1) {
      x.classList.add("text-yellow-400", "italic");
    } else {
      x.classList.remove("text-yellow-400", "italic");
    }
  });

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

  // resets selected chords and active classes
  const resetSelected = () => {
    let chordButtons = document.querySelectorAll(".cb-selector");
    for (const button of chordButtons) {
      button.classList.remove("bg-yellow-400");
      button.classList.add("text-yellow-400");
    }
    setSelectedChords([]);
    setFoundKeys([]);
  };

  //array that store chord button elements
  let buttonsArray = [majorChords, minorChords, dimChords];
  let buttonsCode = [];

  for (let i = 0; i < buttonsArray.length; i++) {
    let code = buttonsArray[i].map((c) => (
      <button onClick={toggleSelectedChord} key={c} className={`${chordButton} cb-selector`}>
        {c}
      </button>
    ));
    buttonsCode.push(code);
  }

  //generates buttons based on selectedChords state
  const selectedChordButtons = selectedChords.map((c) => (
    <p key={c} className="pointer-events-none bg-gray-900 text-white m-4 rounded-md transition-all hover:text-white">
      {c}
    </p>
  ));

  //updates selectedChordGroup state on click of chordSwap buttons
  const setSelectedGroup = (el) => {
    setSelectedChordGrp(el.target.innerHTML);
    setTimeout(() => {
      renderActiveClasses();
    }, 5);
  };

  //switch case to determine which chord group to render
  let renderChordGroup = () => {
    switch (selectedChordGrp) {
      case "Major Chords":
        return buttonsCode[0];
      case "Minor Chords":
        return buttonsCode[1];
      case "Diminished Chords":
        return buttonsCode[2];
      default:
        return buttonsCode[0];
    }
  };

  //variable that stores mapped p tags for foundKeys
  let foundKeyTags = foundKeys.map((x) => <p key={x}>{x}</p>);

  return (
    <div id="findKeyContainer" className="flex flex-col max-w-7xl items-center mx-auto">
      {/* chords for selection */}
      <section id="chordChoices" className={chordSection}>
        <div id="chordSwapContainer" className="flex justify-between items-center text-white mb-4">
          <button className="chord-swap-button text-yellow-400 italic" onClick={setSelectedGroup}>
            Major Chords
          </button>
          <hr className="border-2 w-32 rounded-3xl border-gray-600" />
          <button className="chord-swap-button" onClick={setSelectedGroup}>
            Minor Chords
          </button>
          <hr className="border-2 w-32 rounded-3xl border-gray-600" />
          <button className="chord-swap-button" onClick={setSelectedGroup}>
            Diminished Chords
          </button>
        </div>
        <div id="majorChordBank" className={buttonsContainer}>
          {renderChordGroup()}
        </div>
      </section>

      {/* selected chords */}
      <section className={`${chordSection} w-full`}>
        <p className="text-white mb-4">Selected Chords</p>
        <div id="selectedChords" className={`${buttonsContainer} py-5 min-h-40 items-center`}>
          {selectedChords.length ? (
            selectedChordButtons
          ) : (
            <p className="text-gray-400">Select some chords, my friend.</p>
          )}
        </div>
        <div id="selectedSectionButtons" className="flex justify-center">
          <button
            onClick={findKeys}
            className={`${
              selectedChords.length
                ? "border-green-400 text-green-400 hover:shadow-greenGlow"
                : "border-gray-600 text-gray-600 pointer-events-none"
            } border-2 rounded p-2 transition-all self-end mt-4 mr-4 w-24`}
          >
            Find Key
          </button>
          <button
            onClick={resetSelected}
            className={`${
              selectedChords.length
                ? "border-red-500 text-red-500 hover:shadow-redGlow"
                : "border-gray-600 text-gray-600 pointer-events-none"
            } border-2 rounded p-2 transition-all self-end mt-4 ml-4 w-24`}
          >
            Reset
          </button>
        </div>
      </section>

      {/* found key section */}
      <section id="foundKeySection" className="w-full max-w-2xl mb-20">
        <p className="text-white mb-4">Compatible Keys</p>
        <hr className="border-gray-600 border-2 rounded-full" />
        <div id="displayCompatKeysContainer">{foundKeyTags}</div>
      </section>
    </div>
  );
};

export default FindKey;

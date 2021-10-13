import { useEffect, useState } from "react";

const directionStyle = `mb-4 text-white text-center`;
const chordButtonBank = ["C Major", "A Minor", "B Dim"];
const chordButton = `transform hover:scale-110 active:scale-95 text-yellow-400 m-4 border-2 border-yellow-400 p-2 rounded-md w-32 transition-all`;

const Intro = () => {
  const [selectedCrdTyp, setSelectedCrdType] = useState([]);

  //handles chordType example selections
  const updateChordTypeState = (e) => {
    setSelectedCrdType([e.target.innerHTML]);
  };

  useEffect(() => {
    let chordTypeButtons = document.getElementsByClassName("chord-type");
    [...chordTypeButtons].forEach((x) => {
      selectedCrdTyp.indexOf(x.innerHTML) !== -1
        ? x.classList.add("text-yellow-400", "italic")
        : x.classList.remove("text-yellow-400", "italic");
    });
  }, [selectedCrdTyp]);

  return (
    <div className="max-w-7xl mx-auto px-16 h-screenMinusHeader">
      <div id="inner" className="flex flex-col h-full justify-evenly">
        <p className="font-zilla text-white text-5xl">
          Unlock your music... with <span className="text-yellow-400">Keys</span>!
        </p>
        <div id="center" className="self-center">
          <p className="mb-4 text-3xl font-zilla text-yellow-400">How to use...</p>
          <div className="">
            <p className={directionStyle}>Choose between chord types.</p>
            <div
              id="chordSwapContainer"
              className="flex items-center shadow-introFlow bg-gray-700 p-5 rounded text-white"
            >
              <button onClick={updateChordTypeState} className="chord-type mx-4">
                Major Chords
              </button>
              <hr className="border-2 w-20 rounded-3xl border-gray-600" />
              <button onClick={updateChordTypeState} className="chord-type mx-4">
                Minor Chords
              </button>
              <hr className="border-2 w-20 rounded-3xl border-gray-600" />
              <button onClick={updateChordTypeState} className="chord-type mx-4">
                Diminished Chords
              </button>
            </div>
            <p className={`${directionStyle} mt-8`}>Pick your chords.</p>
            <div className="flex justify-center shadow-introFlow bg-gray-700 rounded">
              {chordButtonBank.map((x) => (
                <button key={x} className={chordButton}>
                  {x}
                </button>
              ))}
            </div>
            <p className={`${directionStyle} mt-8`}>Click the Find Key button.</p>
            <div className="flex justify-center shadow-introFlow bg-gray-700 p-3 rounded">
              <button className="border-2 rounded p-2 transition-all w-24 border-green-400 text-green-400 hover:shadow-greenGlow">
                Find Key
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <a className="font-zilla text-white text-3xl hover:underline" href="#findKeyContainer">
            Click here to get started.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;

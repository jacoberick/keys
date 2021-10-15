import { useEffect, useState } from "react";

const directionStyle = `mb-4 text-white text-center`;
const chordButtonBank = ["C Major", "A Minor", "B Dim"];
const chordButton = `transform hover:scale-110 active:scale-95 text-yellow-400 m-4 border-2 border-yellow-400 p-2 rounded-md w-32 transition-all bTwo:text-sm bTwo:w-20`;

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

  //handle chord buttons
  const clickityClackCB = (e) => {
    let elem = e.target.classList;
    let activeClass = ["bg-yellow-400", "text-white", "im-active"];
    if (elem.contains("im-active")) {
      elem.remove(...activeClass);
      elem.add("text-yellow-400");
    } else {
      elem.remove("text-yellow-400");
      elem.add("im-active", ...activeClass);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-16 h-screenMinusHeader bFive:h-auto bFive:px-6">
      <div id="inner" className="flex flex-col h-full justify-evenly">
        <p className="font-zilla text-white text-5xl bOne:text-center bOne:text-4xl bTwo:text-3xl bFive:mb-8 bFive:mt-4">
          Unlock your music... with <span className="text-yellow-400">Keys</span>!
        </p>
        <div id="center" className="self-center bFive:self-auto">
          <p className="mb-4 text-3xl font-zilla text-yellow-400 bOne:text-2xl bTwo:text-xl">How to use...</p>
          <div className="">
            <p className={directionStyle}>Choose between chord types.</p>
            <div
              id="chordSwapContainer"
              className="flex items-center shadow-introFlow bg-gray-700 p-5 rounded text-white bTwo:p-3 bTwo:text-sm bFive:flex-col"
            >
              <button onClick={updateChordTypeState} className="chord-type mx-4">
                Major Chords
              </button>
              <hr className="border-2 w-20 rounded-3xl border-gray-600 bThree:w-5 bFive:hidden" />
              <button onClick={updateChordTypeState} className="chord-type mx-4 bFive:my-4">
                Minor Chords
              </button>
              <hr className="border-2 w-20 rounded-3xl border-gray-600 bThree:w-5 bFive:hidden" />
              <button onClick={updateChordTypeState} className="chord-type mx-4">
                Diminished Chords
              </button>
            </div>
            <p className={`${directionStyle} mt-8`}>Pick your chords.</p>
            <div className="flex justify-center shadow-introFlow bg-gray-700 rounded bFive:flex-col bFive:items-center">
              {chordButtonBank.map((x) => (
                <button onClick={clickityClackCB} key={x} className={chordButton}>
                  {x}
                </button>
              ))}
            </div>
            <p className={`${directionStyle} mt-8`}>Click the Find Key button.</p>
            <div className="flex justify-center shadow-introFlow bg-gray-700 p-3 rounded">
              <button className="border-2 rounded p-2 transition-all w-24 border-green-400 text-green-400 hover:shadow-greenGlow bTwo:w-20 bTwo:text-sm">
                Find Key
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end bOne:justify-center">
          <a
            className="font-zilla text-white text-3xl hover:underline bOne:text-2xl bTwo:text-xl bThree:text-lg bFive:mt-8"
            href="#findKeyContainer"
          >
            Click here to get started.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;

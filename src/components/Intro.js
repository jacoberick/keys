const directionStyle = `mb-4 text-yellow-400`;

const Intro = () => {
  return (
    <div className="max-w-7xl mx-auto px-16 h-screen">
      <div id="inner" className="mt-8 flex flex-col">
        <p className="font-zilla text-white text-5xl">
          Unlock your music... with <span className="text-yellow-400">Keys</span>!
        </p>
        <div id="rightMid" className="whitespace-nowrap self-end mt-20">
          <p className="mb-4 text-3xl font-zilla text-yellow-400">How to use...</p>
          <div className="shadow-introFlow bg-gray-700 p-5 rounded">
            <p className={directionStyle}>Choose your chord type.</p>
            <div id="chordSwapContainer" className="flex items-center text-white">
              <p className="chord-swap-button mx-4">Major Chords</p>
              <hr className="border-2 w-20 rounded-3xl border-gray-600" />
              <p className="chord-swap-button mx-4">Minor Chords</p>
              <hr className="border-2 w-20 rounded-3xl border-gray-600" />
              <p className="chord-swap-button mx-4">Diminished Chords</p>
            </div>
            <p className={`${directionStyle} mt-8`}>Pick your chords.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

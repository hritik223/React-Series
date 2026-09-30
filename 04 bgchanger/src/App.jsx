import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      {/* Bottom Color Palette */}
      <div className="fixed bottom-8 inset-x-0 flex justify-center px-4">
        <div className="flex flex-wrap justify-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3 rounded-full shadow-2xl">

          <button
            onClick={() => setColor("red")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-200"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("blue")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-200"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-200"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="px-5 py-2 rounded-full text-black font-semibold shadow-lg hover:scale-110 duration-200"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("purple")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-200"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-5 py-2 rounded-full text-white font-semibold shadow-lg hover:scale-110 duration-200"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
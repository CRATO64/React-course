import { useState } from "react"

function App() {
  const [color, setColor] = useState("Olive")
  return (
    <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick={() => setColor("red")}
           className= "bg-red-700 text-white rounded-3xl px-2 py-1">
            Red
          </button>
          <button onClick={() => setColor("green")}
           className="bg-green-600 text-white rounded-3xl px-2 py-1">
            Green
          </button>
          <button onClick={() => setColor("blue")}
           className="bg-blue-600 text-white rounded-3xl px-2 py-1">
            Blue
          </button>
          <button onClick={() => setColor("olive")}
           className="bg-orange-600 text-white rounded-3xl px-2 py-1">
            Olive
          </button>
          <button onClick={() => setColor("gray")}
           className="bg-gray-500 text-white rounded-3xl px-2 py-1">
            Gray
          </button>
          <button onClick={() => setColor("yellow")}
           className="bg-yellow-500 text-white rounded-3xl px-2 py-1">
            Yellow
          </button>
          <button onClick={() => setColor("pink")}
           className="bg-pink-500 text-white rounded-3xl px-2 py-1">
            Pink
          </button>
          <button onClick={() => setColor("purple")}
           className="bg-purple-600 text-white rounded-3xl px-2 py-1">
            Purple
          </button>
          <button onClick={() => setColor("lavender")}
           className="bg-blue-300 text-white rounded-3xl px-2 py-1">
            Lavender
          </button>
          <button onClick={() => setColor("white")}
           className="bg-white text-black rounded-3xl px-2 py-1">
            White
          </button>
          <button onClick={() => setColor("black")}
           className="bg-black text-white rounded-3xl px-2 py-1">
            Black
          </button>
        </div>
      </div>
     </div>
  )
}

export default App

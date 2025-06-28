import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState(" ")

  //useRef Hook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num) str += "0123456789"
    if(char) str += "!@#$%^&*?/|"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
      setPassword(pass)
  }, [length, num, char, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto my-12 
       bg-blue-500 shadow-md rounded-lg py-4 text-center'>
        
        <h1 className='text-white text-center mb-3 font-bold'>Password Generator</h1>

        <div className='flex rounded-xl overflow-hidden mx-5 mb-4'>
          <input type='text' value={password} placeholder='Password'
           className='outline-none w-full px-3 py-1' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-400'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2 mx-6'>

          <div className='flex items-center gap-x1'>
            <input type='range' min={8} max={99} value={length}
            onChange={(e) => {setlength(e.target.value)}}
            className='cursor-pointer'/>
            <label className='mx-3'>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1 mx-1'>
            <input type='checkbox' defaultChecked={num} id='numInput'
            onChange={() => {setNum((prev) => !prev)}}/>
            <label htmlFor="numInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={char} id='charInput'
            onChange={() => {setChar((prev) => !prev)}}/>
            <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

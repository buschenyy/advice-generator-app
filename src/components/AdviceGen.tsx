import { useState } from 'react'

const API = 'https://api.adviceslip.com/advice'
const intialState = (await getData()).slip

async function getData() {
  const response = await fetch(API)
  return await response.json()
}

const AdviceGen = () => {
  const [advice, setAdvice] = useState<{ id: number; advice: string }>(
    intialState
  )

  return (
    <>
      {advice && (
        <div>
          <span>Advice #{advice.id}</span>
          <p>{advice.advice}</p>
          <hr />
          <button onClick={async () => setAdvice((await getData()).slip)}></button>
        </div>
      )}
    </>
  )
}

export default AdviceGen

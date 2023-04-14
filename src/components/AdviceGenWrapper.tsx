import { useState } from 'react'

const API = 'https://api.adviceslip.com/advice'
const intialState = (await rest()).slip

async function rest() {
  const response = await fetch(API)
  return await response.json()
}

const AdviceGenWrapper = () => {
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
          <button onClick={async () => setAdvice((await rest()).slip)}></button>
        </div>
      )}
    </>
  )
}

export default AdviceGenWrapper

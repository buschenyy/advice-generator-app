import { useEffect, useState } from 'react'

const API = 'https://api.adviceslip.com/advice'

const AdviceGenWrapper = () => {
  const [advice, setAdvice] = useState<{ id: number; advice: string } | null>(
    null
  )

  useEffect(() => rest(), [])

  const rest = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip))
  }

  return (
    <>
      {advice && (
        <div>
          <div>{advice.id}</div>
          <div>{advice.advice}</div>
          <hr />
          <button onClick={rest}></button>
        </div>
      )}
    </>
  )
}

export default AdviceGenWrapper

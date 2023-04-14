import { useEffect, useState } from 'react'

const API = 'https://api.adviceslip.com/advice'

const initialAdvice = { id: 0, advice: '' }

const AdviceGenWrapper = () => {
  useEffect(() => rest(), [])
  const [advice, setAdvice] = useState<{ id: number; advice: string }>(
    initialAdvice
  )

  const rest = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip))
  }

  return (
    <div>
      <div>{advice.id}</div>
      <div>{advice.advice}</div>
      <hr />
      <button onClick={rest}></button>
    </div>
  )
}

export default AdviceGenWrapper

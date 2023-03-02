import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '/': 'opt',
        '-': 'opt',
        '+': 'opt'
    }
    return className[btn];
}

const Button = ({value}) => {
  const { calc, setCalc } = useContext(CalcContext);
  const commaClick = () => {
    setCalc({
        ...calc,
        num: !calc.num.toSring().includes('.') ? calc.num + value : calc.num
    })
  }

  const handleBtnClick = () => {
    const results = {
        '.': commaClick
    }
    return results[value]()
  }  
  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} btn`}>{value}</button>
  )
}

export default Button
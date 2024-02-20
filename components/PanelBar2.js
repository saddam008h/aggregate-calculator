import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'
import Entries from './Entries'
function PanelBar2() {

  const [theoryData,setTheoryData] = useState([])
  
  useEffect(()=>{

    const theoryDataa = localStorage.getItem('theoryData')
    const parsedData = JSON.parse(theoryDataa)
    setTheoryData(parsedData)
    
  },[])
  
  return (
    <>
    {theoryData.map((element,index) => (
      <>
      <Accordion title={element.name} key={index}>
        <Entries title={element.name} key={index}/>
      </Accordion>
      </>
    ))}
    </>
  )
}
export default PanelBar2;
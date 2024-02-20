import React, { useEffect, useState } from 'react';
import Accordion3 from './Accordion3';

const AccordionList = () => {
  const [accordionCount, setAccordionCount] = useState();
//   const [formData, setFormData] = useState({})
  const [inputValues, setInputValues] = useState([]);

//   const handleAccordionCountChange = (event) => {
//     setFormData({
//         ...formData,
//         [event.target.name]: event.target.value
//     })
//   };

//   function handleSubmitAccordian(e){
//     e.preventDefault();
//     setAccordionCount(formData.count)
//     setInputValues(Array(accordionCount).fill('').map(() => []));
//   }

  const handleInputChange = (accordionIndex, inputIndex, value) => {
    const newInputValues = [...inputValues];
    newInputValues[accordionIndex][inputIndex] = value;
    setInputValues(newInputValues);
  };

  //getting data from local storage
  const [theoryData,setTheoryData] = useState([])
  useEffect(()=> {
    const localData = JSON.parse(localStorage.getItem('theoryData'))
    setTheoryData(localData)
    const inputData = JSON.parse(localStorage.getItem('inputValues'))
    if(!inputData){
      const count = parseInt(localData.length)
      setInputValues(Array(count).fill('').map(() => []));
    }
    setInputValues(inputData)
    setAccordionCount(localData.length)
  },[])

  //success or not 
  const [success,setSuccess] = useState(0)
  function handleSaveSubmit(e,i){
    e.preventDefault()
    setSuccess(Number(i)+500)
    localStorage.setItem('inputValues', JSON.stringify(inputValues))
    if (click) setClick(false)
    else setClick(true)
  }

  const [ith,setIth] = useState(0)
  const [click,setClick] = useState(false)
  useEffect(()=>{
    toggleDisabledState(ith)
    aggregateCalculation(ith)
  },[click])

  //new method
  const [disabledStates,setDisabledStates] = useState([[]])
  const toggleDisabledState = (i) => {
    if((Number(i)+500) === success){
    const INITIAL_SUB_ARRAY_COUNT = inputValues.length; // Specify the desired number of sub-arrays
    const INITIAL_SUB_ARRAY_LENGTH = inputValues[i].length;
    const initialDisabledStates = Array.from({ length: INITIAL_SUB_ARRAY_COUNT }, () =>
      Array.from({ length: INITIAL_SUB_ARRAY_LENGTH }, () => false)
    );
   
    setDisabledStates(initialDisabledStates)
    let newDisabledStates = [...disabledStates];
    if (!newDisabledStates[i]) {
      newDisabledStates[i] = [];
    } 
    for(let k=0; k<inputValues[i].length;k++){
      newDisabledStates[i][k] = true
    }
    setDisabledStates(newDisabledStates);
  };
  }

  //handling edit entries
  function handleEditEntries(i,j){
        const newDisabledStates = [...disabledStates]
        newDisabledStates[i][j] = false
        setDisabledStates(newDisabledStates)
      }
  
  //calculating total aggregate
  const [sectionAggregate,setSectionAggregate] = useState([])
  let totalAggregate = 0
  
  function aggregateCalculation(ith){
    let sectionAggregate2 = 0
    for(let i=0; i<inputValues.length;i++){
      for(let j=0; j<inputValues[i].length; j++){
        sectionAggregate2 = Number(sectionAggregate2) + Number(inputValues[i][j])
      }
      if( i == ith){
      sectionAggregate[i] = ((sectionAggregate2/(100*(inputValues[i].length)))*theoryData[i].percentage).toFixed(2)
      }
      sectionAggregate2 = 0
    }
    let total = 0
    for(let i=0; i<sectionAggregate.length;i++){
      total = total + Number(sectionAggregate[i])
    }
    totalAggregate =total
    //storing aggregate in local storage
    const aggregateData = {
      sectionAggregate: sectionAggregate,
      totalAggregate: totalAggregate
    }
    localStorage.setItem('aggregateData',JSON.stringify(aggregateData))
  }

  //retrieving aggregate
  useEffect(()=>{
    const aggregateData = JSON.parse(localStorage.getItem('aggregateData'))
    console.log(aggregateData)
    setSectionAggregate(aggregateData.sectionAggregate)
  },[])
  
  const generateAccordions = () => {
    const accordions = [];
    for (let i = 0; i < accordionCount; i++) {
      accordions.push(
        <Accordion3
          key={i}
          percentage={theoryData[i].percentage}
          title={`${theoryData[i].name}`}
          obtainPercentage = {sectionAggregate[i]}
          content={
            <form onSubmit={(e)=>{
                handleSaveSubmit(e,i);
                setIth(i);
            }}
            className='flex flex-col' >
              <div className='flex'>
              <button
                type='button'
                className="bg-blue-500 w-4/12 text-white py-1.5 rounded"
                onClick={() => {
                  const newInputValues = [...inputValues];
                  newInputValues[i].push('');
                  setInputValues(newInputValues);
                }}
              >
                Add {theoryData[i].name.substring(0,12)}
              </button>
              <button
              type='submit'
              className='bg-gray-800 w-4/12 ml-auto text-white rounded'
              name={i}
              >
                Save
                </button>
              </div>
              <br />
              {inputValues[i].map((value, j) => (
                <div className='flex items-center'>
                  <span className='font-semibold mx-2 mb-2'>{`${theoryData[i].name} ${j+1}` }</span>
                <input
                  key={j}
                  type="number"
                  className={`${disabledStates[i] && disabledStates[i][j] ? 'bg-gray-200':''} border border-gray-300 w-5/12 rounded p-2 mb-2`}
                  required
                  min={0}
                  max={100}
                  placeholder="Enter"
                  value={value}
                  name={i}
                  disabled={disabledStates[i] && disabledStates[i][j]}
                  onChange={(event) =>{
                    handleInputChange(i, j, event.target.value)
                    
                  }}
                />
                <i class='bx bxs-edit mx-3 text-2xl cursor-pointer hover:scale-110 text-green-500 mb-2 '
                onClick={()=>{
                  handleEditEntries(i,j)
                }}
                >
                </i>
                <i 
                  class='bx bx-trash text-2xl cursor-pointer hover:scale-110 text-red-500 mb-2'
                  onClick={ (e) => {
                    const lastChar = e.target.getAttribute('name').slice(-1)
                    console.log(lastChar)
                    const newInputValues = [...inputValues];
                    newInputValues[i].splice(lastChar, 1); // Remove one element at the specified index
                    setInputValues(newInputValues);
                    aggregateCalculation(i)
                    const newDisabledStates = [...disabledStates]
                    newDisabledStates[i][j] = false
                    setDisabledStates(newDisabledStates)
                    click ? setClick(false):setClick(true)
                  }
                  }
                  name={`${i} by ${j}`}
                  />
                </div>             
              ))}
            </form>
          }
        />
      );
    }

    return accordions;
  };

  return (
    <div>
      <div className="mt-2">{generateAccordions()}</div>
    </div>
  );
};

export default AccordionList;

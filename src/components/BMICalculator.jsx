// import React from 'react'
import './BMICalculator.css'
import { Col, Row ,Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';

function BMICalculator() {

  const [height,setHeight] = useState('')
  const [weight,setWeight] = useState('')
  const [bmi,setBmi] = useState(null)
  const [condition,setCondition] = useState('')



const handleCalculate=()=>{
if(!height || !weight ){
  alert("Please Enter Your Height and Weight...!")
  setBmi(0)
  setCondition('')
}
else if (height <=0 || weight <=0){
  alert("Please Enter A Valid Height and Weight...!")
  setBmi(0)
  setCondition('')

}else{
  const heightInMeters = parseFloat(height)/100
  const FBMI = parseFloat(weight)/(heightInMeters*heightInMeters)
 const BMI = FBMI.toFixed(2)
  // const BMI = parseFloat(FBMI.toFixed(2))
  setBmi(BMI)

  if(BMI<18.5){
setCondition("Underweight")
  }else if(BMI >= 18.5 &&  BMI <= 24.9){
    setCondition('Normal Weight')
  }else if(BMI >=25 && BMI <= 29.9){
    setCondition('Overweight')
  }else  {
  setCondition('Obese')
}
  
}
}

const handleReset=()=>{
  setHeight('')
  setWeight('')
  setBmi(null)
  setCondition('')
}
  
  return (

<Row>
  <Col id='bg1'></Col>
    <Col>
<div id='form'>  
      <h2 id='top'>Check Your BMI !!!</h2>

    <Form>
<div id="head">
  <h1 style={{fontFamily:"fangsong"}}>{bmi}</h1>
  <h4>{condition}</h4>
</div>

<Form.Label style={{margin:8}}><h6><b>Height(Cm)</b></h6></Form.Label>
      <Form.Control
        type="number"
        value={height}
        id="height"
        onChange={(e)=>setHeight(e.target.value)}
      />
<Form.Label style={{margin:8}}><h6><b>Weight(Kg)</b></h6></Form.Label>
      <Form.Control
        type="number"
        value={weight}
        id="weight"
         onChange={(e)=>setWeight(e.target.value)}
      />
     <div id='btn'>
      
      <Button onClick={handleCalculate} variant="warning">Calculate</Button>
      <Button onClick={handleReset}  variant="danger">Reset</Button></div>
    </Form>
</div>    
    </Col>
  <Col></Col>

</Row>
  

  )


  }


export default BMICalculator
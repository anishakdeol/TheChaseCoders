import React,{useState} from 'react'
import { FormGroup,FormLabel,FormControl,Form,Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux'
import {userInfo}from "../actions/EventActions"
import {useNavigate} from "react-router-dom"


export default function Details() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [validated, setValidated] = useState(false);

    const[name,Setname]=useState("")
    const[diff,Setdiff]=useState("")
    const[player,Setplayer]=useState("")

const userDetails={
    name,diff,player
}

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{

    
        event.preventDefault();
    setValidated(true);
    dispatch(userInfo(userDetails))
    console.log("hogya")
    navigate("./topics")

    
}
  };










  return (
    <div className='container-fluid'>
            <br/><br/><br/><br/>
       <div className='row'>
          
           <h2 className='text-center my-4 text-white '>Welcome to the Quiz</h2>
           <div className='col-md-2 '>
           </div>

    <div className='col-md-8 '>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
           <FormGroup className="mb-3" controlId="validatiousername">
                <FormLabel className="text-white" >User Name</FormLabel>
                <FormControl required  className="py-2" onChange={(e)=>Setname(e.target.value)} placeholder="Enter User Name"  />
          </FormGroup>


          <Form.Group className="mb-3" controlId="validationlevel">
            <FormLabel  className="text-white">Choose Difficulty</FormLabel>
             <Form.Select required className="py-2" onChange={(e)=>Setdiff(e.target.value)} >
                  <option >Please Select One</option>
                   <option value="easy">Easy</option>
                   <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
              </Form.Select>
          </Form.Group>



        <Form.Group className="mb-3" controlId="validationplayers" >
            <FormLabel className="text-white"  >No of players</FormLabel>
                <Form.Select required className="py-2"  onChange={(e)=>Setplayer(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option  value="3" >3</option>
                <option  value="4" >4</option>
                <option  value="5" >5</option>
                <option  value="6" >6</option>
                </Form.Select>
        </Form.Group>

        <FormGroup className="mb-3 d-flex justify-content-center align-items-center ">
              <Button as="input"   className="w-25 text-lg bg-white text-dark mt-4"   type="submit" value="Start" style={{fontSize:"20px"}} />{' '}
        </FormGroup>
  </Form>
 
           </div>

<div className='col-md-2'></div>

       </div>

</div>
  )
}

import React,{useState} from 'react'

export default function Home(props) {
  const  [ w,sw] =useState("0")
     const  [ s,ss] =useState("0")
  const [text,setext]=useState(" ")
  const change=(event)=>{
     setext(event.target.value)
   
  }
  const cc1=() =>{
    let val=text;
   setext( val.toUpperCase())
   props.setalert("success","converted to uppercase")
  }
  const cc2=() =>{
    let val=text;
   setext( val.toLowerCase())
  }
  const cc3=() =>{
    let val=text;
    setext( "")
  }
     
     const onc=()=>{
     
     
     }
  return (
    <div>
      <h1>Enter here!!</h1>
      <textarea  onChange={change}  cols="600" rows="6" value={text}  > </textarea>
      <br/>
      <button className="btn mx-3"  style={{backgroundColor:'skyblue'}}    id="btn1"   onClick={cc1}>Upper</button>
      <button className="btn mx-3"   style={{backgroundColor:'skyblue'}} id="btn2"  onClick={cc2}>Lower</button>
      <button className="btn mx-3"  style={{backgroundColor:'skyblue'}}   id="btn3" onClick={cc3}>Cut</button>
      <p className='container'>
                   <h1>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words {text.length } characters</h1>
      </p>
    </div>
  )
}


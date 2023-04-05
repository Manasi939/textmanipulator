import React from 'react'

export default function Alert(props) {
  return (
   props.sett  && <div class="alert alert-primary container" role="alert">
       tyep: {props.sett.type} msg: {props.sett.msg}
    </div>
  )
}

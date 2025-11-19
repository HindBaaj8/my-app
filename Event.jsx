import React, { useState } from "react";
import BookTitle from "./Components/BookTitle";
function BookEdit(){
  const [title,setTitle]=useState("test");
  return(
  <form action="">
    <BookTitle onTitleChange={(e)=>setTitle(e.target.value)} title={title}/>
  </form>
  )
}
export default BookEdit;

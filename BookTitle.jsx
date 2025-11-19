
function BookTitle(props){
    return(
        <label htmlFor="">
            title:{props.title}
            <br />
            <input onChange={props.onTitleChange} value={props.title} />
        </label>
    )
}
export default BookTitle;
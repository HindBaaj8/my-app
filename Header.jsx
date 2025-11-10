function Header(){
    let ti=12;
    let style1={
        color:"blue",
        backgroundColor:"aliceblue"
    };
    return (
        <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aut.</h1>
            <h1 style={style1}> this is the header</h1>
            <h2>{ti>15 ?"bonjour":"bonsoir"}</h2>

        </div>
        
)}
export default Header;
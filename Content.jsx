import Header from './Components/Header';

function Content(params){
    const p = {code:1,produits_name:"porche",prix:1000};
    return(
        <div>
            <header/>
        <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, autem obcaecati nihil, nostrum distinctio at laborum culpa molestias delectus in libero.</p>
  
    <h2>Business women sondosse</h2>
    <ul>
        <li>code:{p.code}</li>
        <li>produits name{p.produits_name}</li>
        <li>prix:{p.prix}$dollar</li>
    </ul>
    <h3>Sum function result</h3>
    <p>5+10={somme(5,10)}</p>
    <p>5+10={somme(5,10)}</p>


    <h3>Multiplication function resultt</h3>
    <p>5*10={multiplication(5,10)}</p>

            </div>

 );
}


export default Content;
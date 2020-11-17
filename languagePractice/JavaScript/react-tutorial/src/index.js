import React from 'react'
import ReactDOM from 'react-dom'
// Importing CSS
import './index.css'

function BookList(){
    return(
        <section className = 'booklist'>
            <Book/>

        </section>
    );
}

const Book = () =>{
    return (    
        <article className = 'book'>
            <img src="https://images-na.ssl-images-amazon.com/images/I/61MdxYhjN8L._AC_SX184_.jpg" alt=""/>
            <h1>Love Real Food: More Than 100 Feel-Good Veg… </h1>
            <h3>Kathryne Taylor </h3>
        </article>  
    );
}


ReactDOM.render(<BookList/>, document.getElementById('root'));
import React from 'react'
import ReactDOM from 'react-dom'
// Importing CSS
import './index.css'

function BookList(){
    return(
        <section className = 'booklist'>
            <Book/>
            <Book/>
            <Book/>
        </section>
    );
}

const Book = () =>{
    return (
        <article className = 'book'>
            <Image/>
            <Title></Title>
            <Author/>
        </article>
    );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/61MdxYhjN8L._AC_SX184_.jpg" alt=""/>

const Author = () => {
    return (
        <h3>Kathryne Taylor </h3>
    );
}
const Title = () => {
    return(
        <h1>Love Real Food: More Than 100 Feel-Good Veg… </h1>
    );
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
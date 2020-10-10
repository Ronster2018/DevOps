import React from 'react'
import ReactDOM from 'react-dom'

function BookList(){
    return(
        <section>
            <Book/>
        </section>
    );
}

const Book = () =>{
    return (
        <article>
            <Image/>
            <Title></Title>
            <Author/>
        </article>
    );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/61MdxYhjN8L._AC_SX184_.jpg" alt=""/>

const Author = () => {
    return (
        <h1>Kathryne Taylor </h1>
    );
}
const Title = () => {
    return(
        <h3>Love Real Food: More Than 100 Feel-Good Veg… </h3>
    );
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
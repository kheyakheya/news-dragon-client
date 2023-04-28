import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam quae, harum fuga recusandae voluptatum dicta hic quod obcaecati ducimus, officia, ad nobis molestiae expedita temporibus autem rem quia vitae.</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
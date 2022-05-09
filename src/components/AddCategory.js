import React, { useState } from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({ setcategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 0) {
            setcategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }


    }

    AddCategory.propTypes = {
        setcategories: propTypes.func.isRequired 
    }


  return (
    <form onSubmit={ handleSubmit }>
        <input 
            type='text' 
            value={ inputValue }
            onChange={ handleInputChange }
            placeholder='Enter your gif search...'
        />
    </form>
  )
}

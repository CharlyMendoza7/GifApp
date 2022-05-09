import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setcategories] = useState(['Dragon Ball Z']);

    // const handleAdd = () => {

    //     setcategories([...categories, 'HunterxHunter']);
    //     //setcategories( cats => [ ...cats, 'HunterxHunter ]);

    // }

    return ( 
        <>
            <h1>Gif App</h1>
            <AddCategory setcategories={ setcategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map( category =>  
                        <GifGrid 
                            category={ category } 
                            key={category}
                        />
                    )
                }
            </ol>
        </>
     );
}
 
export default GifExpertApp;


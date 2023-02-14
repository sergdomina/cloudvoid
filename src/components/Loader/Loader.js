import { DivLoad } from './Loader.styled'
import { preLoaderAnim } from '../Animation/index';
import React, {useEffect} from 'react';

const Loader =()=> {

    useEffect(()=>{
        console.log('hello')
      }, []);

    return(
        <DivLoad className='divload'>

            <span className='title'>HELLO.</span>

        </DivLoad>
    )
}

export default Loader;
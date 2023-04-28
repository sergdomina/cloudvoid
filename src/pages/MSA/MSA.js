import MSA_PDF from '../../components/PDF/Cloudvoid MSA.pdf'
import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import { Link } from 'react-router-dom';

const MSA =()=>{
    return (
            <div style={{paddingTop:'80px', width:'100vw', height:'100vh'}}>
                <iframe
          src={MSA_PDF}
          width="100%"
          height="100%"
          title="PDF Viewer"
        />
            </div>

      );
}

export default MSA
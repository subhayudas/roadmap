import React from 'react';
import './rightContainer.css';

export default function RightContainer({links, text}){
    
    const renderData = links.map((element, index)=>{
        return <a href={element.url} target='_blank' rel="noopener noreferrer" key={index}>
            {element.text}
        </a>
    });

return(
    
<div className="containerRight">
    <div>
        {renderData}
    </div>
    <hr />
    {text === '' ? <span className='noText'></span> : <span>{text}</span> }
</div>
)
}

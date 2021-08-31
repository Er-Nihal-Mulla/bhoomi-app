import React, { useEffect, useState } from 'react'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const [totalchar , setTotalChar] = useState(false);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    useEffect(()=>{
      if(text.length>280){
        setTotalChar(true)
      }
    })
    return (
     <span className="toggle-text-ellipses"> 
        {isReadMore && totalchar ? text.slice(0, 280) : text}
        {totalchar?(        <span onClick={toggleReadMore} className="toggle-text-link">
            <a>
          {isReadMore ? "...Read more" : " Show less"}
          </a>
        </span>):null}

        </span>
    );
  };
export default ReadMore;

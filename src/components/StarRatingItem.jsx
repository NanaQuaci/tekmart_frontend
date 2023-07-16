import React from 'react'

const StarRatingItem = () => {
  return (
    <div>
       <span class = "fa fa-star checked"></span>  
        <span class = "fa fa-star checked"></span>  
        <span class = "fa fa-star checked"></span>  
        <span class = "fa fa-star checked"></span>  
        {/*<!-- To display unchecked star rating icons --> */}  
        <span class = "fa fa-star unchecked"></span> 
    </div>
  )
}

export default StarRatingItem

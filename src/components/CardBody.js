const CardBody = ({image, name, price, tags}) => {  
    return (
      <div className="card-body">  
       <img src={image} className="card-image" alt="..."/>
          <h4 className="card-name">{name} <span className="card-price">${price}</span></h4>
          <h5 className="card-tags"><span> {tags.join(' ')} </span></h5> 
        </div>
    );
  };
  
  
  export default CardBody;
import CardBody from './CardBody';


const Card = (props) => {
  console.log('Card1 - props', props);
  
  return (
    <div className="card" style={{ width: '17rem' }}>
      <CardBody {...props}/>
    </div>
  );
};


export default Card;
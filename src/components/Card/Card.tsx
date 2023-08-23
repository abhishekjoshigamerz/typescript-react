import './card.css';

type CardProps = {
    children: JSX.Element;
}

function Card(props:CardProps){

    return (
        <div className='card'>
            { props.children }
        </div>
    );
}

export default Card;


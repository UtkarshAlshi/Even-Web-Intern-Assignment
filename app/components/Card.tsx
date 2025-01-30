interface CardProps{
    image: string;
    name: string;
    species: string;
}

const Card = ({image,name,species}: CardProps)=>{
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-64 p-4 border flex-shrink-0">
            <img src={image} alt={name}  className="w-full h-40 object-cover rounded-md"/>
            <div className="mt-4 text-center">
                <h2 className="text-black font-semibold">{name}</h2>
                <p className="text-gray-600">{species}</p>
            </div>
        </div>   
    );
};

export default Card;
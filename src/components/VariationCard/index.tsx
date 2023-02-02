import arrow from '../assets/icons/arrow.svg';

type VariationCardProps = {
    heading: string;
    value: string; 
    color: string;
    up: boolean;
};

export default function VariationCard( { heading, value, color, up } : VariationCardProps ) {
    return (
        <div className="flex items-center">
            <div className={`mr-3 w-9 h-9 bg-${color}-600 rounded-full flex justify-center `} 
                style= {{
                    transform: up ? "rotate(180deg)" : "none",
                    backgroundColor: color
                }}
            >
                <img src={arrow} alt="arrow" className="w-8"/>
            </div>
      
            <div className="flex flex-col items-center">
                <h1 style={{color: color}}>{heading}</h1>
                <p>{value}</p>
            </div>
        </div>
    );
};
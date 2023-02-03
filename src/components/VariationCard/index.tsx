import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

type VariationCardProps = {
    heading: string;
    value: string; 
    color: string;
    up: boolean;
};

export default function VariationCard( { heading, value, color, up } : VariationCardProps ) {
    return (
        <section className='w-1/2'>
            <Link to={`/${heading}`} className="flex items-center justify-center hover:bg-purple-900 h-full">
                <div className={`mr-3 w-9 h-9 rounded-full flex justify-center`} 
                    style= {{
                        transform: up ? "rotate(180deg)" : "none",
                        backgroundColor: color
                    }}
                >
                    <img src={arrow} alt="arrow" className="w-8"/>
                </div>
    
                <div className="flex flex-col items-center">
                    <h1 className='capitalize' style={{color: color}}>{heading}</h1>
                    <p>{value}</p>
                </div>
            </Link>
        </section>
    );
};
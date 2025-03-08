import { Link } from "react-router-dom";
import "./MainCard.css";

interface MainCardProps {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
}

function MainCard({ name, description, image, link }: MainCardProps) {
    return (
        <div className="col">
            <div className="card d-flex main-card shadow-lg rounded-4 overflow-hidden h-100">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-dark fw-bold text-center">{name}</h5>
                    <p className="card-text text-center">{description}</p>

                    <Link to={link} className="mt-auto">
                        <button className="btn btn-danger w-100">Ver Mais</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MainCard;

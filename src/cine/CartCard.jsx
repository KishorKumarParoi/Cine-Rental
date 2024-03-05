import deleteIcon from "../assets/delete.svg";
import { getImageUrl } from '../utils/cine-utils';

export default function CartCard({ movie }) {
    return (
        <>
            <div key={movie.id} className="grid grid-cols-[1fr_auto] gap-4">
                <div className="flex items-center gap-4">
                    <img
                        className="rounded overflow-hidden"
                        src={getImageUrl(movie.cover)}
                        alt={movie.title}
                        width={"50px"}
                        height={"50px"}
                    />
                    <div>
                        <h3 className="text-base md:text-xl font-bold"> {movie.title} </h3>
                        <p className="max-md:text-xs text-[#575A6E]">
                            {movie.genre}
                        </p>
                        <span className="max-md:text-xs"> {movie.price} </span>
                    </div>
                </div>
                <div className="flex justify-between gap-4 items-center">
                    <button
                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    >
                        <img className="w-5 h-5" src={deleteIcon} alt="delete" />
                        <span className="max-md:hidden">Remove</span>
                    </button>
                </div>
            </div>
        </>
    );
}
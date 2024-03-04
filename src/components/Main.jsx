import comingSoon from "../assets/icons/commingSoon.svg"
import favorite from "../assets/icons/favourite.svg"
import newRelease from "../assets/icons/newRelease.svg"
import trending from "../assets/icons/trending.svg"
import watchLater from "../assets/icons/watchLater.svg"
import ironMan from '../assets/movie-1.png'
import avatar from '../assets/movie-covers/avatar.png'
import marriageStory from '../assets/movie-covers/marriage-strory.jpg'
import onceInHo from '../assets/movie-covers/once-in-ho.jpg'
import painAndGain from '../assets/movie-covers/pain-and-gain.jpg'
import parasite from '../assets/movie-covers/parasite.jpg'
import star from "../assets/star.svg"
import tag from '../assets/tag.svg'

export default function Main() {
    return (
        <>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <aside>
                        <ul className="space-y-2">
                            <li>
                                <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                                    <img src={trending} width="24" height="24" alt="" />
                                    <span>Trending</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                                    <img src={newRelease} width="24" height="24" alt="" />
                                    <span>New Releases</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                                    <img src={comingSoon} width="24" height="24" alt="" />
                                    <span>Coming Soon</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                                    <img src={favorite} width="24" height="24" alt="" />
                                    <span>Favourites</span>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                                    <img src={watchLater} width="24" height="24" alt="" />
                                    <span>Watch Later</span>
                                </a>
                            </li>
                        </ul>
                    </aside>

                    <div className="content">
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">

                            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                <img className="w-full object-cover" src={ironMan} alt="" />
                                <figcaption className="pt-4">
                                    <h3 className="text-xl mb-1">Iron Man</h3>
                                    <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                    <div className="flex items-center space-x-1 mb-5">
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                    </div>
                                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                        href="#">
                                        <img src={tag} alt="" />
                                        <span>$100 | Add to Cart</span>
                                    </a>
                                </figcaption>
                            </figure>

                            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                <img className="w-full object-cover" src={avatar} alt="" />
                                <figcaption className="pt-4">
                                    <h3 className="text-xl mb-1">Iron Man</h3>
                                    <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                    <div className="flex items-center space-x-1 mb-5">
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                    </div>
                                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                        href="#">
                                        <img src={tag} alt="" />
                                        <span>$100 | Add to Cart</span>
                                    </a>
                                </figcaption>
                            </figure>

                            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                <img className="w-full object-cover" src={marriageStory} alt="" />
                                <figcaption className="pt-4">
                                    <h3 className="text-xl mb-1">Iron Man</h3>
                                    <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                    <div className="flex items-center space-x-1 mb-5">
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                    </div>
                                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                        href="#">
                                        <img src={tag} alt="" />
                                        <span>$100 | Add to Cart</span>
                                    </a>
                                </figcaption>
                            </figure>

                            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                <img className="w-full object-cover" src={painAndGain} alt="" />
                                <figcaption className="pt-4">
                                    <h3 className="text-xl mb-1">Iron Man</h3>
                                    <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                    <div className="flex items-center space-x-1 mb-5">
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                    </div>
                                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                        href="#">
                                        <img src={tag} alt="" />
                                        <span>$100 | Add to Cart</span>
                                    </a>
                                </figcaption>
                            </figure>

                            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                <img className="w-full object-cover" src={parasite} alt="" />
                                <figcaption className="pt-4">
                                    <h3 className="text-xl mb-1">Iron Man</h3>
                                    <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                    <div className="flex items-center space-x-1 mb-5">
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                    </div>
                                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                        href="#">
                                        <img src={tag} alt="" />
                                        <span>$100 | Add to Cart</span>
                                    </a>
                                </figcaption>
                            </figure>

                            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                                <img className="w-full object-cover" src={onceInHo} alt="" />
                                <figcaption className="pt-4">
                                    <h3 className="text-xl mb-1">Iron Man</h3>
                                    <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
                                    <div className="flex items-center space-x-1 mb-5">
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                        <img src={star} width="14" height="14" alt="" />
                                    </div>
                                    <a className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                        href="#">
                                        <img src={tag} alt="" />
                                        <span>$100 | Add to Cart</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
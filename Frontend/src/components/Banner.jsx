import BannerCard from "../Home/BannerCard";


const Banner = () => {
    return (
        <div className="flex items-center px-4 bg-teal-200 lg:px-24">
            <div className="flex flex-col items-center justify-between w-full gap-12 mt-24 md:flex-row py-14">
                {/* left side */}
                <div className="h-full space-y-8 md:w-1/2">
                    <h2 className="text-5xl font-bold leading-snug text-balance">Buy and Sell Your Books <span className="text-blue-700">For The Best Prices</span></h2>
                    <p className="md:w-4/5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, explicabo enim. Facere iste architecto dolor. Impedit nisi explicabo dicta reprehenderit, dolor modi, libero odit soluta accusantium nostrum ullam animi earum?</p>
                    <input type="search" name="search" id="search" placeholder="Search a Book" className="px-2 py-2 rounded-md outline-none" />
                    <button className="px-6 py-2 font-medium text-white transition-all duration-100 ease-in bg-blue-700 rounded-md hover:bg-black ">Search</button>
                </div>
                {/* Right Side */}
                <div>
                    <BannerCard/>
                </div>
            </div>
        </div>
    );
};

export default Banner;
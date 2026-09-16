import ban from "../assets/banner-stack.png"

const hero = () => {
    return (
        <div className="container mx-auto flex flex-col items-stretch gap-8 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-0 md:py-0">
            <div className="flex flex-col gap-8">
                <div>
                    <h1 className="text-4xl font-bold md:text-7xl">Build Your Ideal</h1>
                    <h1 className="bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">Development Stack</h1>
                </div>
                <div>
                    <p className="text-lg text-gray-600 md:text-2xl">
                        Explore frontend, backend, database and tooling options,<br/>
                        compare them side by side, and put together the stack that fits your<br/>
                        next project.
                    </p>
                </div>

                <div>
                    <button className="bg-pink-500 text-white rounded py-2 px-4"><a href="#technologies">Explore Technologies</a></button>
                    <button className="border border-pink-500 text-black rounded py-2 px-4 ml-2"><a href="#learn-more">Learn More</a></button>
                </div>
            </div>

            <div className="flex justify-center md:block">
                    <img className="w-full max-w-md md:w-auto md:max-w-none" src={ban} alt="" />
            </div>
        </div>
    );
};

export default hero;
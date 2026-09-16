import logo from '../assets/logo-text.png'

const footer = () => {
    return (
        <div className="bg-slate-50 py-10">
            <div className="container mx-auto flex flex-col items-center gap-10 px-4 text-center md:items-stretch md:px-0 md:text-left">
                <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <img src={logo} alt="DevStack Logo" className="mx-auto md:mx-0" />

                        <p>
                            Curated tools, technologies, and resources for developers building <br />
                            modern software.
                        </p>

                        <ul className="text-olive-600 flex justify-center gap-4 font-bold md:justify-start">
                            <li><a href="https://github.com/devstack">GitHub</a></li>
                            <li><a href="https://twitter.com/devstack">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/company/devstack">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <h1 className="font-bold text-lg">PRODUCT</h1>
                        <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="/technologies">Technologies</a></li>
                            <li><a href="/projects">Projects</a></li>
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <h1 className="font-bold text-lg">COMPANY</h1>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/careers">Careers</a></li>
                        </ul>
                    </div>

                    <div className="hidden lg:block">
                        <h1 className="font-bold text-lg">LEGAL</h1>

                        <ul>
                            <li><a href="/terms">Privacy Policy</a></li>
                            <li><a href="/privacy">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-slate-600">© 2026 DevStack. All Rights Reserved.</p>
                    <ul className="flex gap-4 text-sm text-slate-600">
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/terms">Terms</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default footer;
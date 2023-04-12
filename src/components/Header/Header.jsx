import Navbar from "../Navbar"

function Header() {
    return (
        <header className="flex justify-between items-center">
            <div className="mx-7">
                <h4 className="uppercase text-4xl font-semibold">
                    L
                    <span className="text-cyan-600">D</span>
                    QUOC
                </h4>
            </div>

            <Navbar />
        </header>
    );
}

export default Header
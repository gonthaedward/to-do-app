function Header(){
    return(
        <header>
            <nav className="flex p-8 ">
                <div className="flex items-center flex-shrink-0 text-white bg-transparent">
                    <a href="/" className="bg-transparent"> HOME</a>
                </div>
                <div className="px-24 text-white bg-transparent ">
                    <a href="/clock" className="mr-4 bg-transparent hover:underline" >CLOCK</a>
                    <a href="/todo" className="mr-4 bg-transparent hover:underline">TO-DO</a>
                </div>
            </nav>
        </header>
    )
}

export default Header
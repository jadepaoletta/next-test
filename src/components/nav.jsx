import Link from 'next/link'

const Nav = ()=>{
    return(
        <div className="grid grid-cols-4 px-20 py-16 text-center">
            <h1 className="hover:text-slate-500"><Link href="/"><a>Home</a></Link></h1>
            <h1 className="hover:text-slate-500"><Link href="/about"><a>About</a></Link></h1>
            <h1 className="hover:text-slate-500"><Link href="/test-page"><a>test</a></Link></h1>
        </div>
    )
}

export default Nav;

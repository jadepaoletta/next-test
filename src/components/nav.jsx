import Link from 'next/link'

const Nav = ()=>{
    return(
        <div className="grid grid-cols-4 px-20 py-16 text-center">
            <h1 className="hover:text-slate-500"><Link href="/">Home</Link></h1>
            <h1 className="hover:text-slate-500"><Link href="/about">About</Link></h1>
            <h1 className="hover:text-slate-500"><Link href="/test-page">Test Page</Link></h1>
        </div>
    )
}

export default Nav;
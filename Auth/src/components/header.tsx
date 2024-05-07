import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='bg-slate-200'>
        <nav className='flex justify-between items-center p-4'>
            <Link to='/'>
                <h1 className='text-2xl font-bold'>Auth</h1>
            </Link>
            <ul className='flex space-x-4'>
            <Link to ='/'>
                <li><a href='/' className='text-blue-500 hover:underline'>Home</a></li>
            </Link>
            <Link to='/about'>
                <li><a href='/about' className='text-blue-500 hover:underline'>About</a></li>
            </Link>
            <Link to='/login'>
                <li><a href='/login' className='text-blue-500 hover:underline'>Login</a></li>
            </Link>
            <Link to='/profile'>
                <li><a href='/profile' className='text-blue-500 hover:underline'>Profile</a></li>
            </Link>
            <Link to='/sign-up'>
                <li><a href='/sign-up' className='text-blue-500 hover:underline'>Sign Up</a></li>
            </Link>
            </ul>
        </nav>
    </div>
  )
}

import Link from 'next/link';
import CustomButton from './Button';

const Navbar = () => {
    return (
        <nav>
            <Link href='/'>SolJobs</Link>
            <ul>
                <li><Link href={'/create-job'}>Create Job</Link></li>
                <li><Link href={'/create-profile'}>Create Profile</Link></li>
                <li><CustomButton>Connect Wallet</CustomButton></li>
            </ul>
        </nav>
    )
}

export default Navbar;


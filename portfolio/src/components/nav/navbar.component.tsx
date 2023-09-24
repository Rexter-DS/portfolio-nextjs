import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='flex flex-row justify-between w-screen'>
      <div className='flex flex-row items-center gap-8'>
        <Link href='' scroll>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={70}
            height={70}
            layout='responsive'
          />
        </Link>
        <span
          className='
            text-base
            font-semibold
            sm:text-2xl
            lg:text-3xl
          '
        >
          Rexter Delos Santos
        </span>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <a>
          <Image
            src='/linkedin.svg'
            alt='LinkedIn Logo'
            width={40}
            height={40}
          />
        </a>
        <a>
          <Image
            src='/github.svg'
            alt='Github Logo'
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
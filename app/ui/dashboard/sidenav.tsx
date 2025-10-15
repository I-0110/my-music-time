import Link from 'next/link';

export default function SideNav () {
    return (
        <div className='flex h-full flex-col px-3 py-4 md:px-2'>
            <Link
                className='mb-2 flex h-20 items-end justify-start rounded-md bg-green-500 p-4 md:h-40'
                href="/"
            >
                Music Time!
            </Link>
        </div>
    )
}
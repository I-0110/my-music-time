'use client';

import Link from 'next/link';

const months = [
    'January', 
    'February', 
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const categories = [
    'Watch',
    'Rhythm',
    'Birthday',
    'Sing'
];

const grades = [
    'GradeK',
    'Grade1',
    'Grade2',
    'Grade3',
    'Grade4',
    'Grade5',
    'GradeMiddle+'
];

export default function SideNav () {
    return (
        <>
            <div className='flex h-full flex-col px-3 py-4 md:px-2'>
                <Link
                    className='mb-2 flex h-20 items-end justify-start rounded-md bg-green-500 p-4 md:h-40'
                    href="/"
                >
                    Music Time!
                </Link>
            </div>

            <aside className="w-64 p-4 border-r">
                <h2 className="font-bold mb-2">Browse by</h2>

                <div className="mb-4">
                    <h3 className="font-semibold">Month</h3>
                    <ul className="ml-2">
                    {months.map((m) => (
                        <li key={m}>
                        <Link href={`/dashboard/month/${encodeURIComponent(m)}`}>{m}</Link>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold">Category</h3>
                    <ul className="ml-2">
                    {categories.map((c) => (
                        <li key={c}>
                        <Link href={`/dashboard/category/${encodeURIComponent(c)}`}>{c}</Link>
                        </li>
                    ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="font-semibold">Grade Level</h3>
                    <ul className="ml-2">
                    {grades.map((g) => (
                        <li key={g}>
                        <Link href={`/dashboard/grade/${g}`}>Grade {g}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </aside>
        </>
    )
}
import { db } from '@/app/lib/db';
import { Video } from '@prisma/client';
import { notFound } from 'next/navigation';

function getVideoUrl(url: string): string | null {
  const match = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default async function Page({ params }: { params: { category: string } }) {
    const category = decodeURIComponent(params.category);

    const videos: Video[] = await db.video.findMany({
        where: {
            categories: {
                has: category,
            },
        },
    });

    if (!videos.length) return notFound();

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Videos in {category}</h1>
            <ul className='list-none space-y-6'>
                {videos.map((video) => {
                    if (!video.url) return null;

                const videoId = getVideoUrl(video.url);

                return (
                    <li key={video.id}>
                    <h2 className='text-lg font-semibold'>{video.title}</h2>
                    {videoId ? (
                        <iframe 
                        className='mt-2 w-full aspect-video'
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        />
                    ) : (
                        <p className='text-red-500'>Invalid video</p>
                    )}
                    </li>
                );
                })}
            </ul>
        </div>
    )
}
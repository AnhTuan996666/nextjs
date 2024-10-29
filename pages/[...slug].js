// pages/[...slug].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function CatchAllPage() {
  const router = useRouter();
  const { slug } = router.query;

  const isRouteValid = false;

  useEffect(() => {
    if (!isRouteValid) {
      router.replace('/404');
    }
  }, [isRouteValid, router]);

  return (
    <div>
      <h1>Nội dung cho route: {slug && slug.join('/')}</h1>
    </div>
  );
}

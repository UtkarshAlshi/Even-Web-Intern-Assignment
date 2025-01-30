'use client';

import { useState, useEffect, useRef } from 'react';
import Card from './components/Card';
import { fetchData } from './lib/api';

export default function Home() {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMoreData = async () => {
      setLoading(true);
      const newData = await fetchData(page);
      setData((prev) => [...prev, ...newData]);
      setLoading(false);
    };

    loadMoreData();
  }, [page]);

  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { root: null, rootMargin: '100px', threshold: 1.0 }
    );

    observer.observe(observerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [loading]);

  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {data.map((item, index) => (
          <Card key={index} image={item.image} name={item.name} species={item.species} />
        ))}
        <div ref={observerRef} className="w-10 h-10 bg-transparent"></div>
      </div>
      {loading && <p className="text-center text-gray-500">Loading more...</p>}
    </div>
  );
}

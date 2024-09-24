import React, { useEffect, useState, useRef } from 'react';

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState([]);  // To hold loaded items
  const [page, setPage] = useState(1);     // Track the current page
  const [hasMore, setHasMore] = useState(true);  // To check if more data is available
  const [loading, setLoading] = useState(false); // Loading state

  // Ref for the bottom div (sentinel)
  const observerRef = useRef(null);

  useEffect(() => {
    // Load initial data on mount
    fetchMoreData();
  }, []);

  // Function to fetch data from API (or a mock function)
  const fetchMoreData = async () => {
    if (!hasMore || loading) return;
    setLoading(true);

    try {
      // Mock fetch function (replace with actual API call)
      const newItems = await fetchItems(page); 
      if (newItems.length === 0) {
        setHasMore(false);  // If no more data, stop further requests
      } else {
        setItems((prevItems) => [...prevItems, ...newItems]); // Append new data
        setPage((prevPage) => prevPage + 1);  // Increment page for next fetch
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Setup IntersectionObserver for infinite scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchMoreData();  // Load more data when bottom div is visible
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);  // Start observing the ref
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);  // Cleanup observer on unmount
      }
    };
  }, [observerRef.current]);

  // Mock API fetch function (replace with actual API call)
  const fetchItems = (page) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newItems = Array.from({ length: 10 }, (_, i) => `Item ${i + 1 + (page - 1) * 10}`);
        resolve(newItems);
      }, 1000);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Infinite Scroll Example</h1>

      {/* List of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2 border-b pb-2">{item}</li>
        ))}
      </ul>

      {/* Loading spinner */}
      {loading && <div className="text-center my-4">Loading...</div>}

      {/* Sentinel div at the bottom */}
      <div ref={observerRef} className="h-10 bg-transparent"></div>

      {/* End of data */}
      {!hasMore && <div className="text-center my-4">No more items to load.</div>}
    </div>
  );
};

export default InfiniteScrollComponent;

import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Fullstækk 19.10.2023</h1>
      <p>Henter nyhetsartikler fra NYT.</p>
      <Link href="/news">Go to News Page</Link>
    </div>
  );
};

export default HomePage;

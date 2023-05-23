'use client';

import Image from 'next/image';
import styles from './page.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
  });

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/test-route');

    const json = await response.json();

    console.log(json.message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <h1>this is the home page</h1>

      <h2>use this form to post some data to the express server</h2>

      <form action="http://localhost:3000/post-form-data" method="post">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <button type="submit">SEND!</button>
      </form>
    </main>
  );
}

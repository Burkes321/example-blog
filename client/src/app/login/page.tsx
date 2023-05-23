'use client';

// TODO: put this into global styles
import styles from '../page.module.css';

export const Login = () => {
  return (
    <main className={styles.main}>
      <h1>use this form to log into the application</h1>

      <form action="http://localhost:3000/post-form-data" method="post">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <button type="submit">SEND!</button>
      </form>
    </main>
  );
};

export default Login;

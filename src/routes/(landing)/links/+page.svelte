<script>
  import Github from '../../../assets/github.svelte'
  import GoogleDrive from '../../../assets/google-drive.svelte'
  import LinkedIn from '../../../assets/linkedin.svelte'
  import Kayla from '../../../assets/kayla.jpeg'
</script>

<img src={Kayla} alt="Kayla Sween" />
<h1>Kayla Sween</h1>
<ul>
  <li>
    <a
      href="https://drive.google.com/file/d/1eLBnkfCg9BtV37Knv7CVHzSOt2LxfiVu/view?usp=sharing"
    >
      <GoogleDrive />
      &nbsp;Resume</a
    >
  </li>
  <li>
    <a href="https://www.linkedin.com/in/kayla-sween/"
      ><LinkedIn />&nbsp;LinkedIn</a
    >
  </li>
  <li><a href="https://github.com/kaylasween"><Github />&nbsp;GitHub</a></li>
</ul>

<style>
  img {
    border-radius: 50%;
    display: block;
    margin: 2rem auto;
    height: 200px;
    width: 200px;
  }

  h1 {
    margin-bottom: 1rem;
  }

  ul {
    margin: 2rem auto;
    padding-left: 0;
    width: max-content;
  }

  li {
    list-style-type: none;
    margin: 0.75rem;
  }

  a {
    color: #011e11;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #123123;
    border-radius: 0.5rem;
    font-size: 1.25rem;
    padding: 1rem;
    text-decoration: none;
  }

  a:hover {
    background: radial-gradient(40% 50% at center 100%, #fbe3e8, transparent),
      radial-gradient(80% 100% at center 120%, #ebf6f5, transparent), #95f4f1;
    box-shadow: 0 0 3px 3px #5cbdb9;
  }
</style>

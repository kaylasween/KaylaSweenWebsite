<script>
  import Github from '../../assets/github.svelte'
  import GoogleDrive from '../../assets/google-drive.svelte'
  import LinkedIn from '../../assets/linkedin.svelte'
</script>

<h1>Links</h1>
<ul>
  <li>
    <a
      href="https://drive.google.com/file/d/1eLBnkfCg9BtV37Knv7CVHzSOt2LxfiVu/view?usp=sharing"
      ><GoogleDrive />&nbsp;Resume</a
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
  h1 {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-left: 0;
    margin-bottom: 2rem;
  }

  li {
    list-style-type: none;
    margin: 0.75rem;
  }

  a {
    border: 1px solid #fff;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    background-color: #123123;
    font-size: 1.25rem;
  }
</style>

export default function Home() {
  return (
    <div>
      <h1>Erik Dunteman</h1>
      <h3>Founder, engineer, etc.</h3>
      <p>My online presence:</p>
      <a style={{ color: 'blue' }}  href="https://blog.erikdunteman.com/">Blog</a>
      <br></br>
      <a style={{ color: 'blue' }} href="https://twitter.com/erikdoingthings">Twitter</a>
      <br></br>
      <a style={{ color: 'blue' }}  href="https://linkedin.com/in/edunteman">LinkedIn</a>
      <br></br>
      <a style={{ color: 'blue' }}  href="https://github.com/erik-dunteman">Github</a>
      <br></br>
      <a style={{ color: 'blue' }}  href="https://youtu.be/dQw4w9WgXcQ">OnlyFans</a>
      <br></br>
      <a style={{ color: 'blue' }} onClick={function(){alert("recursion!")}} href="https://erikdunteman.com">Personal Site</a>
      
      <br></br><br></br>
      <h3>Startups</h3>
      <a style={{ color: 'blue' }}  href="https://banana.dev">Banana - Serverless GPUs for ML</a>
      <p>... and 13 other pivots ...</p>
      <br></br>
      <h3>Technology</h3>
      <p>I am a self-taught developer.</p>
      <p>I build backends and distributed systems.</p>
      <p>My frontends are trash.</p>
    </div>
  )
}

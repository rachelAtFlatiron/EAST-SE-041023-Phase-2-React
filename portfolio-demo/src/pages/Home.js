import React from 'react'

function Home() {
  return (
    <section className="box">
    <h2>Hey!  View Awesome Projects.</h2>
    <p>
        Looking for someone to hire? Check out these awesome projects from
        Flatiron students.
    </p>

    <div style={{ margin: "60px 0" }}>
        {/* create link to project page */}
        <button className="button" >
            View All Projects
        </button>
    </div>

    {/* create fetch request to populate top 5 projects */}

</section>
  )
}

export default Home
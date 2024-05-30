
import React from 'react';


export default function Project() {
  return (
    <main>
        <h1>Simple html game</h1>
        <div className="project">
          <img src="proj1.png" alt="Project 1" height={400} />
          <h2>Project 1</h2>
          <p>Role: Developer | Description: create a game where you click the bug that moves across the screen. | Outcome: game was completed in one week</p>
        </div>
        <div className="project">
        <img src="proj2.png" alt="Project 2" height={400} />

          <h2>SQL movie database</h2>
          <p>Role: Developer | Description: create packages and functions for a movie rental shop| Outcome: Created 3 functions and 2 packages</p>
        </div>

    </main>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage(props) {
  return (
    <div className='LandingPage'>
      <header>
        <h1>Welcome to PetGrab!</h1>
      </header>
      <main>
        <img src="https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2020/02/05105518/adopt-a-pet_chewy-940x503.jpg" alt='Dog and kittens in front of adoption sign' />
        <p>
          Here at PetGrab we feel that a true pet parent should be less concerned with the breed of your pet than the experiences that pet gives you. Each one of our pets are hand-picked from local kill-shelters and placed here on our platform. The fast turnaround time allow for less stress on the animals, saves them from unecessary death, and facilitates an efficient way for us to help improve both the lives of these unfortunate animals and you!
        </p>
        <p>
          If this sounds like something you're interested in, then go ahead and click the link below to go to our adoption page! You'll see a list of the available pets, the other hopeful owners waiting in line, and a place where you can join the queue to become our newest hopeful pet owner!
        </p>
      </main>
      <footer>
        <Link to={"/adopt"}><button type='button'>Adopt a pet today!</button></Link>
      </footer>
    </div>
  );
}
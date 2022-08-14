import React from 'react';
import Typewriter from 'typewriter-effect';

export default function HomeTypewriter() {
  return (
    <div className='typewriter'>
        <p>Jeg er interessert i </p>
        <span>
          <Typewriter
            options={{
                strings: [' programvareutvikling', ' smidig metodikk', ' prosjektledelse', ' arbeid i team'],
                autoStart: true,
                loop: true,
              }}
          />
        </span>
    </div>
  )
}

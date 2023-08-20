import React from 'react';
import Typewriter from 'typewriter-effect';

export default function HomeTypewriter() {
  return (
    <div className='typewriter'>
        <p>Jeg er interessert i </p>
        <span>
          <Typewriter
            options={{
                strings: [' programvareutvikling', 
                          ' strategi',
                          ' no-code', 
                          ' prosjektledelse', 
                          ' arbeid i team',
                          ' smidig metodikk'],
                autoStart: true,
                loop: true,
              }}
          />
        </span>
    </div>
  )
}

import React from 'react';
import {useEffect} from 'react';
import drawing from '../assets/nativityStar.png';
const TitleComponent = () => {
    useEffect(() => {
        const iconContainer = document.getElementById('icon-container');
        const numIcons = 10;
        for (let i = 0; i < numIcons; i++) {
          const icon = document.createElement('img');
          icon.classList.add('icon');
          icon.src = drawing; 
          // Set the size and position of the icon
          const size = 15; // Adjust the icon size as needed
          const x = Math.random() * (iconContainer.offsetWidth - size);
          const y = Math.random() * (iconContainer.offsetHeight - size);
          icon.classList.add('animate-twinkling');
          icon.style.width = `${size}px`;
          icon.style.height = `${size}px`;
          icon.style.left = `${x}px`;
          icon.style.top = `${y}px`;
          // Append the icon to the container
          iconContainer.appendChild(icon);
        }
      }, []);
    return(
        <div class="flex justify-center items-center h-screen bg-dullesGreen" id="icon-container">
            <h1 class='mx-auto text-white animate-fade-in-bounce'>Dulles Custom Tailors</h1>
        </div>
    )
}

export default TitleComponent;
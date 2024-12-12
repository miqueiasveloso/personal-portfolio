// data for projects 
const projectsData = [
    {
      title: 'Shopping Store',
      description: 'A React Shopping Store page where you can add and delete movies from your cart.',
      imageUrl: 'path/to/project1-image.jpg',
      liveUrl: 'https://miqueiasveloso.github.io/shopping-store/#/',
      sourceUrl: 'https://github.com/miqueiasveloso/shopping-store'
    },
    {
      title: 'CV Builder',
      description: 'A simple CV application webpage created using React.',
      imageUrl: 'path/to/project2-image.jpg',
      liveUrl: 'https://miqueiasveloso.github.io/cv-builder/',
      sourceUrl: 'https://github.com/miqueiasveloso/cv-builder'
    },
    {
      title: 'Weather App',
      description: 'A Javascript Weather App where you can search for the weather in any location you desire.',
      imageUrl: 'path/to/project2-image.jpg',
      liveUrl: 'https://miqueiasveloso.github.io/weather-app/',
      sourceUrl: 'https://github.com/miqueiasveloso/weather-app'
    },
    {
      title: 'Chat App',
      description: 'A chat app where you can log in and wriite or delete messages.',
      imageUrl: 'path/to/project2-image.jpg',
      liveUrl: 'https://miqueiasveloso.github.io/chat-app/',
      sourceUrl: 'https://github.com/miqueiasveloso/chat-app'
    },
    {
      title: 'Calculator',
      description: 'A simple Calculator created using Vanilla Javascript.',
      imageUrl: 'path/to/project2-image.jpg',
      liveUrl: 'https://miqueiasveloso.github.io/calculator/',
      sourceUrl: 'https://miqueiasveloso.github.io/calculator/'
    },
    {
      title: 'Battleship',
      description: 'A Javascript Battleship game.',
      imageUrl: 'path/to/project2-image.jpg',
      liveUrl: 'https://miqueiasveloso.github.io/battleship/',
      sourceUrl: 'https://github.com/miqueiasveloso/battleship'
    }
    // Add more projects here if needed
  ];
  
  // Function to create project cards and append them to the projects container
  function createProjectCards() {
    const projectsContainer = document.getElementById('projects');
  
    projectsData.forEach(project => {
      const card = document.createElement('div');
      card.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');
  
      const title = document.createElement('h3');
      title.textContent = project.title;
      title.classList.add('text-xl', 'font-bold', 'mb-2');
  
      const description = document.createElement('p');
      description.textContent = project.description;
      description.classList.add('text-gray-600', 'mb-4');
  
      const image = document.createElement('img');
      image.src = project.imageUrl;
      image.alt = project.title;
      image.classList.add('w-full', 'mb-4');
  
      const liveLink = document.createElement('a');
      liveLink.href = project.liveUrl;
      liveLink.textContent = 'Live Demo';
      liveLink.classList.add('text-indigo-600', 'mr-2');
  
      const sourceLink = document.createElement('a');
      sourceLink.href = project.sourceUrl;
      sourceLink.textContent = 'Source Code';
      sourceLink.classList.add('text-indigo-600');
  
      const linkContainer = document.createElement('div');
      linkContainer.classList.add('mt-4');
  
      linkContainer.appendChild(liveLink);
      linkContainer.appendChild(sourceLink);
  
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(image);
      card.appendChild(linkContainer);
  
      projectsContainer.appendChild(card);
    });
  }
  
  // Call the function to generate project cards
  createProjectCards();
  

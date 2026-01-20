export type Memory = {
    id: number;
    src: string;
    category: string;
    date: string;
    title: string;
    description?: string;
  };
  
  export const memories: Memory[] = [
    {
      id: 1,
      src: '../../../public/photography/Chicago1.png',
      category: 'Food',
      date: '2026-01-04',
      title: 'StarBucks Reserve',
      description: 'A cozy corner at Starbucks Reserve in Chicago, perfect for enjoying a cup of coffee while watching the world go by.'
    },
    // {
    //   id: 2,
    //   src: '../../../public/photography/Chicago2.png',
    //   category: 'Chicago',
    //   date: '2025-12-22',
    //   title: 'London House',
    //   description: 'An afternoon view of London House in Chicago, capturing the vibrant city lights reflecting off the river.'
    // },
    {
        id: 3,
        src: '../../../public/photography/Chicago3.png',
        category: 'Chicago',
        date: '2025-12-16',
        title: 'Goldern Evening at North Center',
        description: 'A golden evening in North Center, Chicago, where the sunlight bathes the neighborhood in a warm glow.'
      },
      {
        id: 4,
        src: '../../../public/photography/Chicago4.png',
        category: 'Nature',
        date: '2025-12-02',
        title: 'Snowy morning in Lincoln Park',
        description: 'A serene snowy morning in Lincoln Park, Chicago, with trees and pathways blanketed in fresh snow.'
      },
      {
        id: 5,
        src: '../../../public/photography/Chicago5.png',
        category: 'Chicago',
        date: '2025-11-23',
        title: 'Protrait from Washington Library in a sunny day',
        description: 'A sunny day at Washington Library in Chicago, capturing a candid portrait against the backdrop of the historic architecture.'
      },
      {
        id: 6,
        src: '../../../public/photography/Chicago6.png',
        category: 'Chicago',
        date: '2025-09-27',
        title: 'Autumn Vibes at uptown Chicago',
        description: 'Autumn vibes in uptown Chicago, with colorful fall foliage lining the streets and creating a picturesque scene.'
      },
      {
        id: 7,
        src: '../../../public/photography/Newyork7.png',
        category: 'New York',
        date: '2025-09-26',
        title: 'Skyline of New York City from new jersey',
        description: 'A breathtaking view of the New York City skyline from New Jersey, showcasing iconic skyscrapers against a clear blue sky.'
      },
      {
        id: 8,
        src: '../../../public/photography/Newyork8.png',
        category: 'New York',
        date: '2025-09-25',
        title: 'Watkins Glen State Park',
        description: 'A scenic spot at Watkins Glen State Park in New York, featuring a tranquil waterfall surrounded by lush greenery.'
      },
      {
        id: 9,
        src: '../../../public/photography/Newyork9.png',
        category: 'New York',
        date: '2025-09-22',
        title: 'Vessel at Hudson Yards',
        description: 'The Vessel at Hudson Yards in New York City, an architectural marvel with its intricate honeycomb like structure.'
      },
      {
        id: 10,
        src: '../../../public/photography/Newyork10.png',
        category: 'New York',
        date: '2025-09-21',
        title: 'Dumbo Park View',
        description: 'A picturesque view from Dumbo Park in Brooklyn, New York, capturing the iconic Manhattan Bridge framed by autumn foliage.'
      },
      {
        id: 11,
        src: '../../../public/photography/Newyork11.png',
        category: 'New York',
        date: '2025-09-20',
        title: 'Brooklyn Bridge at Morning',
        description: 'The Brooklyn Bridge in New York City during a serene morning, with soft sunlight illuminating the historic structure.'
      },
      {
        id: 12,
        src: '../../../public/photography/Newyork12.png',
        category: 'New York',
        date: '2025-09-20',
        title: 'NYC Road view',
        description: 'A bustling road in New York City, capturing the energy and movement of the city with NYPD barriers and pedestrians.'
      },
    //   {
    //     id: 13,
    //     src: '../../../public/photography/Newyork13.png',
    //     category: 'New York',
    //     date: '2025-09-19',
    //     title: 'Welcome to New York',
    //     description: 'A welcoming picture at the Airport, symbolizing the vibrant energy and diversity of the city that never sleeps.'
    //   },
      {
        id: 14,
        src: '../../../public/photography/Chicago14.png',
        category: 'Chicago',
        date: '2025-06-07',
        title: 'Evening like this at montrose beach',
        description: 'An evening at Montrose Beach in Chicago, with the sun setting over the lake and casting a warm glow on the water.'
      },
      {
        id: 15,
        src: '../../../public/photography/Chicago15.png',
        category: 'Food',
        date: '2025-05-17',
        title: 'Delicious Hashbrowns',
        description: 'A close up of crispy and golden hashbrowns, showcasing their texture and deliciousness.'
      },
      {
        id: 16,
        src: '../../../public/photography/Chicago16.png',
        category: 'Chicago',
        date: '2025-04-05',
        title: 'Building near Washington & Wabash',
        description: 'An architectural shot of a building near Washington & Wabash in Chicago, highlighting its unique design and structure.'
      },
      {
        id: 17,
        src: '../../../public/photography/Chicago17.png',
        category: 'Chicago',
        date: '2025-03-28',
        title: 'Jackson Boulevard Bridge',
        description: 'A scenic view from Jackson Boulevard Bridge in Chicago, with the city skyline in the background and the river flowing beneath.'
      },
      {
        id: 18,
        src: '../../../public/photography/Chicago18.png',
        category: 'Food',
        date: '2025-03-22',
        title: 'Melt & Dip Chicago',
        description: 'lotus waffle from Melt & Dip in Chicago, topped with vanilla ice cream and drizzled with syrup.'
      },
      {
        id: 19,
        src: '../../../public/photography/Chicago19.png',
        category: 'Chicago',
        date: '2025-02-17',
        title: 'Chicago Surburbs in Snow',
        description: 'A Surburbs scene in Chicago, capturing the snowy weather of everyday life in the city with houses and trees lining the streets.'
      },
      {
        id: 20,
        src: '../../../public/photography/Chicago20.png',
        category: 'Chicago',
        date: '2025-01-11',
        title: 'After snow sunset',
        description: 'A beautiful sunset after a snowfall in surburbs, with the sky painted in warm hues and the snow-covered ground reflecting the light.'
      },
      {
        id: 21,
        src: '../../../public/photography/Chicago21.png',
        category: 'Chicago',
        date: '2024-08-29',
        title: 'Fall Colors morning surburbs',
        description: 'A peaceful fall morning in the Chicago surburbs, with colorful autumn leaves covering the trees and ground.'
      },
      {
        id: 22,
        src: '../../../public/photography/Chicago22.png',
        category: 'Chicago',
        date: '2024-07-10',
        title: 'Goldern Hour at bloomingdale trail',
        description: 'A golden hour at Bloomingdale Trail in Chicago, with the sun casting a warm glow on the highway and surrounding greenery.'
      },
      {
        id: 23,
        src: '../../../public/photography/Chicago23.png',
        category: 'Chicago',
        date: '2024-07-04',
        title: 'Pink Sunset at bloomingdale trail',
        description: 'A pink sunset at Bloomingdale Trail in Chicago, with the sky painted in soft pastel hues and homes silhouetted against the colorful backdrop.'
      },





  ];
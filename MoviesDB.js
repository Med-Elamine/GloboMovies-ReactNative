const globoMovies = [
    {
        movieName: 'Joker',
        image: require('./images/joker.jpg'),
        movieId: 'MV-01',
        description: 'Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker',
        shortDescription: 'Put on a happy face',
        price: '30'
    },
    {
        movieName: 'Spider-Man: New Generation',
        image: require('./images/spider.jpg'),
        movieId: 'MV-02',
        description: 'Phil Lord and Christopher Miller, the creative minds behind The Lego Movie and 21 Jump Street, bring their unique talents to a fresh vision of a different Spider-Man Universe, with a groundbreaking visual style that\'s the first of its kind. Spider-Man(TM): Into the Spider-Verse introduces Brooklyn teen Miles Morales (Shameik Moore), and the limitless possibilities of the Spider-Verse, where more than one can wear the mask',
        shortDescription: 'Enter a universe where more than one wears the mask',
        price: '35'
    },
    {
        movieName: 'Spider-Man: No Way Home',
        image: require('./images/spider2.jpg'),
        movieId: 'MV-03',
        description: 'Peter Parker\'s secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.',
        shortDescription: 'The Multiverse Unleashed',
        price: '45'
    },
    {
        movieName: 'Avengers: Infinity War',
        image: require('./images/avengers.jpg'),
        movieId: 'MV-04',
        description: 'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.',
        shortDescription: 'An entire universe, Once and for all',
        price: '53'
    },
    {
        movieName: 'Gladiator',
        image: require('./images/gladiator.jpg'),
        movieId: 'MV-05',
        description: 'Maximus is a powerful Roman general, loved by the people and the aging Emperor, Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his own son, Commodus, and a power struggle leaves Maximus and his family condemned to death. The powerful general is unable to save his family, and his loss of will allows him to get captured and put into the Gladiator games until he dies. The only desire that fuels him now is the chance to rise to the top so that he will be able to look into the eyes of the man who will feel his revenge.',
        shortDescription: 'Father of a murdered son, husband to a murdered wife and I shall have my vengeance in this life or the next',
        price: '31'
    },
    {
        movieName: 'Interstellar',
        image: require('./images/stellar.jpg'),
        movieId: 'MV-06',
        description: 'Earth\'s future has been riddled by disasters, famines, and droughts. There is only one way to ensure mankind\'s survival: Interstellar travel. A newly discovered wormhole in the far reaches of our solar system allows a team of astronauts to go where no man has gone before, a planet that may have the right environment to sustain human life.',
        shortDescription: 'The end of Earth will not be the end of us',
        price: '54'
    },
    {
        movieName: 'The Thing',
        image: require('./images/thing.jpg'),
        movieId: 'MV-07',
        description: 'A US research station, Antarctica, early-winter 1982. The base is suddenly buzzed by a helicopter from the nearby Norwegian research station. They are trying to kill a dog that has escaped from their base. After the destruction of the Norwegian chopper the members of the US team fly to the Norwegian base, only to discover them all dead or missing. They do find the remains of a strange creature the Norwegians burned. The Americans take it to their base and deduce that it is an alien life form. After a while it is apparent that the alien can take over and assimilate into other life forms, including humans, and can spread like a virus. This means that anyone at the base could be inhabited by The Thing, and tensions escalate.',
        shortDescription: 'Man is The Warmest Place to Hide',
        price: '12'
    }
];

export default globoMovies;
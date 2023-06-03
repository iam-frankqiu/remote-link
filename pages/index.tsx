import React from 'react';

const Home = () => {
    // Remote job websites data
    const remoteJobWebsites = [
        { name: 'Remote OK', description: 'Find remote jobs worldwide.', url: 'https://remoteok.io' },
        { name: 'We Work Remotely', description: 'Find remote jobs in various categories.', url: 'https://weworkremotely.com' },
        // Add more remote job websites here
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-blue-500 py-8">
                <h1 className="text-4xl font-bold text-white text-center">Remote Job Websites</h1>
            </header>
            <main className="container mx-auto py-12">
                <ul className="space-y-8">
                    {remoteJobWebsites.map((website, index) => (
                        <li key={index} className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg">
                            <a href={website.url} className="text-blue-500 hover:underline font-medium text-xl">{website.name}</a>
                            <p className="text-gray-600 mt-2">{website.description}</p>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
};

export default Home;

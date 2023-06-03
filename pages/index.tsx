import React from "react";

const Home = () => {
  // Remote job websites data
  const remoteJobWebsites = [
    {
      name: "Remote OK",
      description: "Find remote jobs worldwide.",
      url: "https://remoteok.io",
    },
    {
      name: "We Work Remotely",
      description: "Find remote jobs in various categories.",
      url: "https://weworkremotely.com",
    },
    {
      name: "Upwork",
      description: "Find remote jobs in various categories.",
      url: "https://www.upwork.com/nx/find-work/best-matches",
    },
    {
      name: "Crypto Careers",
      description: "Find remote jobs in various categories.",
      url: "https://www.crypto-careers.com/",
    },
    {
      name: "Clever Tech",
      description: "Find remote jobs in various categories.",
      url: "https://clevertech.biz/jobs",
    },
    {
      name: "StartUpers",
      description: "Find remote jobs in various categories.",
      url: "https://www.startupers.com/",
    },
    {
      name: "Y Combinator",
      description: "Find remote jobs in various categories.",
      url: "https://www.ycombinator.com/jobs/role/software-engineer/remote",
    },
    {
      name: "Startup.JOBS",
      description: "Find remote jobs in various categories.",
      url: "https://startup.jobs/",
    },
    {
      name: "Dice",
      description: "Find remote jobs in various categories.",
      url: "https://www.dice.com/jobs?q=software&countryCode=US&radius=30&radiusUnit=mi&page=1&pageSize=20&filters.isRemote=true&language=en&eid=S2Q_",
    },
    {
      name: "StartUpers",
      description: "Find remote jobs in various categories.",
      url: "https://www.startupers.com/",
    },
    {
      name: "Defi Jobs",
      description: "Find remote jobs in various categories.",
      url: "https://www.defi.jobs/",
    },
    {
      name: "Web3 Career",
      description: "Find remote jobs in various categories.",
      url: "https://web3.career/",
    },
    {
      name: "Crypto Jobs List",
      description: "Find remote jobs in various categories.",
      url: "https://cryptojobslist.com/",
    },
    {
      name: "Remote3 Jobs",
      description: "Find remote jobs in various categories.",
      url: "https://remote3.co/web3-jobs",
    },
    {
      name: "Crypto Currency Jobs",
      description: "Find remote jobs in various categories.",
      url: "https://cryptocurrencyjobs.co/",
    },
    {
      name: "Crypto Jobs",
      description: "Find remote jobs in various categories.",
      url: "https://crypto.jobs/",
    },
    {
      name: "Froog",
      description: "Find remote jobs in various categories.",
      url: "https://froog.co/",
    },
    {
      name: "Remotive",
      description: "Find remote jobs in various categories.",
      url: "https://remotive.com/remote-jobs",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-8">
        <h1 className="text-4xl font-bold text-white text-center">
          Remote Job Websites
        </h1>
      </header>
      <main className="container mx-auto py-12">
        <ul className="space-y-8">
          {remoteJobWebsites.map((website, index) => (
            <li
              key={index}
              className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg"
            >
              <a
                href={website.url}
                className="text-blue-500 hover:underline font-medium text-xl"
              >
                {website.name}
              </a>
              <p className="text-gray-600 mt-2">{website.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;

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
      name: "Well Found",
      description: "Find remote jobs worldwide.",
      url: "https://wellfound.com/jobs",
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
    {
      name: "4dayweek",
      description: "Find a 4 day week job.",
      url: "https://4dayweek.io/",
    },
    {
      name: "NextJS who is hiring",
      description: "NextJS",
      url: "https://github.com/vercel/next.js/discussions?discussions_q=who%27s+hiring",
    },
    {
      name: "Vue Jobs",
      description: "Vue",
      url: "https://vuejobs.com/jobs",
    },
    {
      name: "Javascript Job",
      description: "JS",
      url: "https://javascriptjob.xyz/",
    },
    {
      name: "Just Join",
      description: "JS",
      url: "https://justjoin.it/remote/javascript",
    },
    {
      name: "A Better web3",
      description: "a better web3",
      url: "https://abetterweb3.notion.site/daa095830b624e96af46de63fb9771b9",
    },
    {
      name: "TopTal",
      description: "Toptal",
      url: "https://www.toptal.com/",
    },
    {
      name: "workingnomads",
      description: "workingnomads",
      url: "https://www.workingnomads.com/jobs?location=anywhere",
    },
    {
      name: "himalayas",
      description: "himalayas",
      url: "https://himalayas.app/jobs",
    },
    {
      name: "foundit",
      description: "foundit",
      url: "https://www.foundit.hk/srp/results?sort=1&limit=15&query=%22Software+Engineer%22&locations=Remote&queryEntity=software+engineer%3Adesignation&queryDerived=true&searchId=33d1121a-3b84-4768-985e-42ab00bd553d",
    },
    {
      name: "hubstaff",
      description: "hubstaff",
      url: "https://talent.hubstaff.com/search/jobs?search%5Bkeywords%5D=&page=1&search%5Btype%5D=&search%5Blast_slider%5D=&search%5Bcategory_ids%5D%5B%5D=3&search%5Bjob_type%5D%5B0%5D=1&search%5Bnewer_than%5D=&search%5Bnewer_than%5D=&search%5Bpayrate_start%5D=1&search%5Bpayrate_end%5D=100%2B&search%5Bpayrate_null%5D=0&search%5Bpayrate_null%5D=1&search%5Bbudget_start%5D=1&search%5Bbudget_end%5D=100000%2B&search%5Bbudget_null%5D=0&search%5Bbudget_null%5D=1&search%5Bexperience_level%5D=-1&search%5Bcountries%5D%5B%5D=&search%5Blanguages%5D%5B%5D=&search%5Bsort_by%5D=relevance",
    },
    {
      name: "authenticjobs",
      description: "authenticjobs",
      url: "https://authenticjobs.com/",
    },
    {
      name: "ycombinator who is hiring",
      description: "ycombinator who is hiring",
      url: "https://news.ycombinator.com/submitted?id=whoishiring",
    },
    {
      name: "protocol",
      description: "protocol jobs",
      url: "https://jobs.protocol.ai/jobs",
    },
    {
      name: "proxify",
      description: "proxify",
      url: "https://career.proxify.io/",
    },
    {
      name: "Arc dev",
      description: "arc",
      url: "https://arc.dev/remote-jobs/full-stack",
    },
    {
      name: "remotepoc",
      description: "remotepoc",
      url: "https://remotepoc.com/remote-developer-jobs/",
    },
    {
      name: "squadjobs",
      description: "squadjobs",
      url: "https://squadjobs.com/jobs?text=full+stack",
    },
    {
      name: "remote.io",
      description: "remote.io",
      url: "https://www.remote.io/remote-jobs-to-work-from-home?s=anywhere",
    },
    {
      name: "seek.com",
      description: "seek.com",
      url: "https://www.seek.com.au",
    },
    {
      name: "showcase",
      description: "showcase.com",
      url: "https://www.showwcase.com",
    },
    {
      name: "snaphunt",
      description: "snaphunt.com",
      url: "https://snaphunt.com/job-listing/all-locations/Remote/",
    },
    { name: "Sui jobs", 
      description: "Sui jobs",
      url: "https://jobs.sui.io/jobs"
    },
    {
      name: "who is hiring",
      description: "who is hiring",
      url: "https://github.com/rebase-network/who-is-hiring?tab=readme-ov-file",
    }
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

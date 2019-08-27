import React, { useEffect, useState } from 'react';

// import Button from '../Button';

export default function Sidebar({ author }) {
  const [mentor, setMentor] = useState(null);
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    if (mentors.length === 0) {
      fetch('https://api-staging.codingcoach.io/mentors?limit=5')
        .then(response => response.json())
        .then(response => {
          setMentors(response.data);
        });
      }

    if (author) {
      setMentor({
        ...author.frontmatter,
        description: author.frontmatter.about,
      });
    } else {
      fetch('https://api-staging.codingcoach.io/mentors/featured')
        .then(response => response.json())
        .then(response => {
          setMentor(response.data);
        });
    }
  }, [author]);

  return (
    <aside className="md:flex lg:block lg:pl-8 lg:w-1/4">
      {mentor && <FeaturedMentor mentor={mentor} isAuthor={!!author} />}
      <LatestMentors mentors={mentors} />
      {/* <NewsletterSignup /> */}
    </aside>
  );
}


function FeaturedMentor({ mentor, isAuthor }) {
  return (
    <div className="mb-12 pt-4 bg-primary-lighter p-4 overflow-hidden md:mr-4 md:flex-1 lg:flex-none">
      <SidebarTitle>
        { isAuthor ? 'Author' : 'Featured Mentor' }
      </SidebarTitle>
      <a href={`https://mentors.codingcoach.io/?name=${mentor.name}`} className="block mb-4 w-full">
        <img src={mentor.avatar} className="w-full" alt={mentor.name} />
      </a>
      <h3 className="font-body mb-1 text-lg truncate" title={mentor.name}>
        <a href={`https://mentors.codingcoach.io/?name=${mentor.name}`} className="hover:underline">{mentor.name}</a>
      </h3>
      {mentor.tags &&
        <p className="font-body mb-1 text-xs uppercase truncate text-secondary-dark">
          {mentor.tags.map(tag =>
            <a key={tag} className="inline-block mr-2 hover:underline" href={`https://mentors.codingcoach.io/?technology=${tag}`}>{tag}</a>
          )}
        </p>
      }
      <p className="font-body text-sm text-secondary-dark">{mentor.description}</p>
    </div>
  );
}

function LatestMentors({ mentors }) {
  return (
    <div className="mb-12 pt-4 md:mr-4 md:flex-1 lg:flex-none">
      <SidebarTitle>Latest mentors</SidebarTitle>
      <ul>
        {mentors.map(mentor =>
          <li key={mentor.name} className="mb-2">
            <h4 className="font-body">
              <a href={`https://mentors.codingcoach.io/?name=${mentor.name}`} className="hover:underline">{mentor.name}</a>
            </h4>
            <p className="uppercase text-xs text-secondary-dark truncate">{mentor.tags.join(', ')}</p>
          </li>
        )}
      </ul>
    </div>
  );
}

// @TODO: Integrate with SendGrid
// function NewsletterSignup() {
//   return (
//     <div className="mb-12 pt-4 md:flex-1 lg:flex-none">
//       <SidebarTitle>Newsletter signup</SidebarTitle>
//       <form>
//         <label className="block mb-2">
//           <span className="text-sm font-body">Name:</span>
//           <input type="text" name="name" className="border border-secondary rounded w-full px-2 py-1" />
//         </label>
//         <label className="block mb-2">
//           <span className="text-sm font-body">Email:</span>
//           <input type="email" name="email" className="border border-secondary rounded w-full px-2 py-1" />
//         </label>
//         <Button className="mt-4">Register</Button>
//       </form>
//     </div>
//   );
// }

function SidebarTitle({ children }) {
  return (
    <h2
      className="mb-6 font-display text-base border-b border-secondary-dark text-secondary-dark uppercase leading-tight lg:text-right"
    >
      {children}
    </h2>
  );
}


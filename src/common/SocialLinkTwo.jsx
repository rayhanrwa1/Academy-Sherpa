// SocialLinksTwo.jsx
import React from 'react';
import Link from 'next/link';

const SocialLinksTwo = ({ social_links_two }) => {
  if (!social_links_two || Object.keys(social_links_two).length === 0) {
    return <div>Social links are not available</div>;
  }

  return (
    <>
      {Object.values(social_links_two).map((link, i) => (
        <Link key={i} target={link.target} className={`icon-color-${link.color}`} href={link.link}>
          <i className={link.icon}></i>
          <span></span>
        </Link>
      ))}
    </>
  );
};

export default SocialLinksTwo;

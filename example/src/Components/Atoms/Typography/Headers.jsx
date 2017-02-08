import React, { PropTypes } from 'react';

/**
 * Main Header
 *
 * @description The main header for the site, characterized by the script font-face with a sans-serif all-caps subheader
 * @property {String} props.title for the main title
 * @property {String} props.subtitle for the subtitle
 */
export const MainHeader = (props) => (
  <div>
		<h1 className="mt2 mb0 baskerville i fw1 f1">{ props.title }</h1>
		<h2 className="mt2 mb0 f6 fw4 ttu tracked">{ props.subtitle }</h2>
  </div>
);

MainHeader.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

/**
 * Profile Header
 *
 * @description Header for the github profile
 */
export const ProfileHeader = (props) => (
  <h2>{ props.children }</h2>
);

ProfileHeader.propTypes = {
	text: PropTypes.string.isRequired,
};

/**
 * Section Header
 *
 * @description Header for a section
 */
export const SectionHeader = (props) => (
  <h3>{ props.children }</h3>
);

ProfileHeader.propTypes = {
	text: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import NextHead from 'next/head';

import './styles.scss';

const Head = ({ title, description }) => (
  <NextHead>
    <title>{title}</title>
    {description ? <meta name="description" content={description} /> : null}
  </NextHead>
);

Head.propTypes = {
  /*
  The title of the page
  */
  title: PropTypes.string.isRequired,
  /*
  Short description of the document (limit to 150 characters)
  */
  description: PropTypes.string,
};

Head.defaultProps = {
  description: null,
};

export default Head;

let baseUrl = 'http://localhost:5000/api/';

if (window.location.host === 'comicbook-dev.falconweb.app') {
  baseUrl = 'https://comicbook-api-dev.falconweb.app/api/';
} else if (window.location.host === 'comicbook-qa.falconweb.app') {
  baseUrl = 'https://comicbook-api-qa.falconweb.app/api/';
} else if (window.location.host === 'comicbook-staging.falconweb.app') {
  baseUrl = 'https://comicbook-api-staging.falconweb.app/api/';
} else if (window.location.host === 'comicbook-prod.falconweb.app/') {
  baseUrl = 'https://comicbook-api-prod.falconweb.app/api/';
}

module.exports = { baseUrl };

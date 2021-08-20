// Components
import Card from 'nhsuk-frontend/packages/components/card/card';
import Checkboxes from 'nhsuk-frontend/packages/components/checkboxes/checkboxes';
import Details from 'nhsuk-frontend/packages/components/details/details';
import ErrorSummary from 'nhsuk-frontend/packages/components/error-summary/error-summary';
import Header from 'nhsuk-frontend/packages/components/header/header';
import Radios from 'nhsuk-frontend/packages/components/radios/radios';
import SkipLink from 'nhsuk-frontend/packages/components/skip-link/skip-link';

// Polyfills
import 'nhsuk-frontend/packages/polyfills';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  Card();
  Checkboxes();
  Details();
  ErrorSummary();
  Header();
  Radios();
  SkipLink();
});

import { useLocation, useParams } from 'react-router-dom';

export function useCountry() {
  const { country } = useParams();
  const location = useLocation();

  if (country === 'in' || country === 'ae') {
    return country;
  }

  // If country is not in params, check pathname prefix
  if (location.pathname.startsWith('/in/') || location.pathname === '/in') {
    return 'in';
  }
  if (location.pathname.startsWith('/ae/') || location.pathname === '/ae') {
    return 'ae';
  }

  // Timezone-based browser deduction for local dev/fallback
  try {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTimeZone && (userTimeZone.includes('Calcutta') || userTimeZone.includes('Kolkata') || userTimeZone.includes('Delhi') || userTimeZone.includes('Mumbai'))) {
      return 'in';
    }
  } catch (e) {
    console.error('Failed to detect timezone', e);
  }

  // Default to ae
  return 'ae';
}

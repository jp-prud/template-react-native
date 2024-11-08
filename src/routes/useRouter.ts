import { useEffect } from 'react';

import { useAuthContext } from '@context';
import { useSettings } from '@useCases';

import { Stacks } from './navigationTypes';

export function useRouter(): Stacks {
  const { authCredentials, isLoading } = useAuthContext();

  const { hideSplashScreen, showOnboarding } = useSettings();

  useEffect(() => {
    if (!isLoading) {
      hideSplashScreen();
    }
  }, [isLoading, hideSplashScreen]);

  if (isLoading) {
    return 'Loading';
  }

  if (showOnboarding) {
    // return 'Auth';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Auth';
}

import { useState } from 'react';

import { Header } from 'ui';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return <Header isLoggedIn={isLoggedIn} />;
};

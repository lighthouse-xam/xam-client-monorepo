import { Router } from '@router';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { queryClient } from '@queryClient';

import '@styles/globals.css';

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      locale={koKR}
      theme={{ token: { colorPrimary: '#EF933A', fontFamily: 'spoqa' } }}>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{
          persister: localStoragePersister,
          dehydrateOptions: {
            shouldDehydrateMutation: () => false,
            shouldDehydrateQuery: (query) => {
              return (
                query.state.status === 'success' &&
                query.queryKey.length > 0 &&
                typeof query.queryKey[0] === 'string' &&
                query.queryKey[0] === 'persist'
              );
            },
          },
        }}>
        <Router />
      </PersistQueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>
);

import React from 'react';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import BookShelf from '../script/components/BookShelf';

function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <div className='app'>
        <BookShelf />
      </div>
    </EasybaseProvider>
  );
}



export default App;

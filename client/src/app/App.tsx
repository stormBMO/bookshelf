import React from 'react';
import { EasybaseProvider } from 'easybase-react';
import ebconfig from './ebconfig';
import Book from '../script/components/Book';

function App() {
  return (
    <EasybaseProvider ebconfig={ebconfig}>
      <div className='app'>
        <Book />
      </div>
    </EasybaseProvider>
  );
}



export default App;

import Header from '@components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <main>
                    <AppRouter />
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;

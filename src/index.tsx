import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-calendar/dist/Calendar.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClinet = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClinet}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>,
);

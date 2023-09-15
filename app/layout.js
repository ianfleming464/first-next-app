'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { TodoProvider } from './store/todo-provider';
import { Provider } from 'react-redux';
import store from './store/configure-store';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider store={store}>
          <TodoProvider>{children}</TodoProvider>
        </Provider>
      </body>
    </html>
  );
}

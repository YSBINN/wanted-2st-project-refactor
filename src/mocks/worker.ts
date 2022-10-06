import { setupWorker } from 'msw';
import { AdminHandler } from './adminHandler';
import { ClientHandler } from './clientHandler';

export const worker = setupWorker(...ClientHandler, ...AdminHandler);

import firebase from 'firebase/app';
import 'firebase/auth';

import { config } from './config';

export const app = firebase.initializeApp(config);

import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constants';

export const openAi = new OpenAI({
  apiKey: OPENAI_API_KEY,
//   allow to make calls from client sides - by default open Ai dont allow to make calls from Browser/Client
  dangerouslyAllowBrowser: true,
}); 

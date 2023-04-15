import { TCollaborator } from './types';
import MarcosPhoto from '../../assets/landingPageImages/profilePictures/marcos.png';
import ChristianPhoto from '../../assets/landingPageImages/profilePictures/christian.png';
import FabiPhoto from '../../assets/landingPageImages/profilePictures/fabi.png';
import HiagoPhoto from '../../assets/landingPageImages/profilePictures/hiago.png';
import IgorPhoto from '../../assets/landingPageImages/profilePictures/igor.png';
import LuizPhoto from '../../assets/landingPageImages/profilePictures/luiz.png';
import NabsonPhoto from '../../assets/landingPageImages/profilePictures/nabson.png';
import NahanPhoto from '../../assets/landingPageImages/profilePictures/nahan.png';

// We're going to storage only 6 colaborators in each storage
export const collaborators: TCollaborator[][] = [
  [
    {
      name: 'Hiago Leda',
      role: 'Product Owner',
      linkedin: 'https://www.linkedin.com/in/hiago-leda-5b0994191/',
      photo: HiagoPhoto,
    },
    {
      name: 'Nabson Paiva',
      role: 'Tech Lead',
      linkedin: 'https://www.linkedin.com/in/nabson-paiva/',
      photo: NabsonPhoto,
    },
    {
      name: 'Christian Alex',
      role: 'Designer UX/UI',
      linkedin: 'https://www.linkedin.com/in/arekuso/',
      photo: ChristianPhoto,
    },
    {
      name: 'Marcos Paulo',
      role: 'Front-end Developer',
      linkedin: 'https://www.linkedin.com/in/marcos-paulo-57bb52185/',
      photo: MarcosPhoto,
    },
    {
      name: 'Luiz Daniel',
      role: 'Back-end Developer',
      linkedin: 'https://www.linkedin.com/in/luiz-daniel-ba1519199',
      photo: LuizPhoto,
    },
    {
      name: 'Igor Vinícios',
      role: 'Back-end Developer',
      linkedin: 'https://www.linkedin.com/in/ivfernandes/',
      photo: IgorPhoto,
    },
  ],
  [
    {
      name: 'Nahan Trindade',
      role: 'Front-end Developer',
      linkedin: 'https://www.linkedin.com/in/nahan-trindade/',
      photo: NahanPhoto,
    },
    {
      name: 'Fabiana Bezerra',
      role: 'QA Assurance',
      linkedin: 'https://www.linkedin.com/in/fabiana-bezerra',
      photo: FabiPhoto,
    },
  ],
];

import kakaoIcon from '../assets/kakaoIcon.svg';
import facebookIcon from '../assets/facebookIcon.svg';
import linkCopyIcon from '../assets/linkCopyIcon.svg';

//modal purpose 상수
export const FOLDER_RENAME: string = '폴더 이름 변경';
export const FOLDER_ADD: string = '폴더 추가';
export const FOLDER_DELETE: string = '폴더 삭제';
export const LINK_DELETE: string = '링크 삭제';

interface ShareButton {
  id: number;
  name: string;
  img: any;
  background: string;
}

//share modal buttons
export const SHARE_BUTTONS: ShareButton[] = [
  {
    id: 1,
    name: '카카오톡',
    img: kakaoIcon,
    background: '#FEE500',
  },
  {
    id: 2,
    name: '페이스북',
    img: facebookIcon,
    background: '#1877F2',
  },
  {
    id: 3,
    name: '링크복사',
    img: linkCopyIcon,
    background: 'rgba(157, 157, 157, 0.04)',
  },
];

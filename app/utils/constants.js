import config from '../../server/config';

export const RESTART_ON_REMOUNT = '@@saga-injector/restart-on-remount';
export const DAEMON = '@@saga-injector/daemon';
export const ONCE_TILL_UNMOUNT = '@@saga-injector/once-till-unmount';
export const TEST_PORT = 5000;
export const PROJECT_PORT = 9000;
export const CALL_PORT = 4000;
export const SCIENCE_PORT = 3000;
export const CALL_SERVERPORT = 4443;
export const STACK_PORT = 8080;
export const APP_KEY = 'training_course';
export const URL = config.appURL || 'http://127.0.0.1';
export const URL_AUTH_SERVER = config.authServer || 'http://127.0.0.1';
export const PORT = config.appPort || 7000;
export const PORT_AUTH_SERVICE = config.authServicePort || 81;
export const HTTPS_URL = 'https://localhost';

export const PAGE_SIZE = [{
  key: '0',
  value: 5,
  text: '5',
  label: '5',
}, {
  key: '1',
  value: 10,
  text: '10',
  label: '10',
}, {
  key: '2',
  value: 20,
  text: '20',
  label: '20',
}, {
  key: '3',
  value: 50,
  text: '50',
  label: '50',
}];

export const GENDER_OPTIONS = [{
  key: '0',
  value: '남자',
  text: '남자',
}, {
  key: '1',
  value: '녀자',
  text: '녀자',
}];

export const USER_STATUS_OPTIONS = [{
  key: 'status_pending',
  value: 2,
  text: '대기',
}, {
  key: 'status_allowed',
  value: 3,
  text: '허가',
}, {
  key: 'status_block',
  value: 1,
  text: '차단',
}];

export const monthOptions = [{
  key: '1',
  value: 1,
  text: '1월'
}, {
  key: '2',
  value: 2,
  text: '2월'
}, {
  key: '3',
  value: 3,
  text: '3월'
}, {
  key: '4',
  value: 4,
  text: '4월'
}, {
  key: '5',
  value: 5,
  text: '5월'
}, {
  key: '6',
  value: 6,
  text: '6월'
}, {
  key: '7',
  value: 7,
  text: '7월'
}, {
  key: '8',
  value: 8,
  text: '8월'
}, {
  key: '9',
  value: 9,
  text: '9월'
}, {
  key: '10',
  value: 10,
  text: '10월'
}, {
  key: '11',
  value: 11,
  text: '11월'
}, {
  key: '12',
  value: 12,
  text: '12월'
}];

export const STR_LABEL = {
  SIGNOUT: '가입취소',
  USER_PROFILE: '사용자정보',
  CHANGE_USER_PASSWORD: '암호변경',
  SUFFIX_USERNAME: '동지',

  TITLE_NEW: '새로 작성',

  INPUT_ROLE_NAME: '권한명',
  INPUT_ROLE_UID: '권한식별자',
  INPUT_ROLE_LEVEL: '권한준위',
  SELECT_ROLE_SUBSYSTEM: '체계명',

  INPUT_USER_NAME: '이 름',
  INPUT_USER_POSITION: '직 위',

  BTN_EDIT: '편 집',
  BTN_DELETE: '삭 제',
  BTN_SAVE: '보 관',
  BTN_CANCEL: '취 소',
  BTN_NEW: '새로 추가',
  BTN_INIT: '초기화',
  BTN_DETAIL: '상세보기',
  BTN_GO_BACK: '되돌이',
  BTN_SET_ROLE: '권한설정',
  BTN_RESTORE: '복 귀',
  BTN_BACKUP: '여벌복사',

  SCHEDULE_TYPES: {
    1: '강의',
    2: '과제',
    3: '시험',
    4: '자체학습',
  },

  GROUP_STATUS: {
    0: '삭제됨',
    1: '정 상',
    2: '양성중',
    3: '양성완료됨',
  },
};

export const STR_MESSAGES = {
  EMPTY_LIST: '현시할 자료가 없습니다.',
  EMPTY_TERM_LIST: '등록된 총화자료가 없습니다.',
  DONE_SUCCESSFULLY: '조작이 성공하였습니다.',
  CONFIRM_DELETE_USER_ROLE: '선택한 사용자권한정보를 삭제하시겠습니까?',
  CONFIRM_DELETE: '선택한 자료를 정말로 지우겠습니까?',
  CONFIRM_DELETE_DATABASE: '선택한 자료를 정말로 지우겠습니까?',
  CONFIRM_RESTORE_DATABASE: '선택한 자료기지정보를 복귀하겠습니까?\n 이미 존재하는 자료는 삭제됩니다.',

  CONFIRM_REMOVE_USER_AUTHORIZATION: '선택한 사용자의 권한을 삭제하시겠습니까?',
};

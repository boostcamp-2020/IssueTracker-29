const BASE_API_URL = (process.env.NODE_ENV && process.env.NODE_ENV === 'development')? 'http://localhost:3000' : 'http://118.67.132.176/api';
const ISSUE_OPEN = 1;
const ISSUE_CLOSE = 0;

export { BASE_API_URL, ISSUE_OPEN, ISSUE_CLOSE };

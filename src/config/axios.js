import axios from 'axios'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2QzNDE2NmI0NTg4MjUyYmQwZWE4ZDEiLCJpYXQiOjE1NTczNDg3MTB9.B4CDlJx55Sh2qvbtZF-OEcJHt0NwEf6nPGxU-Q9eFPU'

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios
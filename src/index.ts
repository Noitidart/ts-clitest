import axios from 'axios';

export async function sayHello() {
  console.log('fetching');
  const res = await axios.get('https://example.com');

  console.log('got data:', res.data);
}

sayHello();

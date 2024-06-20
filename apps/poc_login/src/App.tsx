import { Button, Input } from '@repo/ui';
import React from 'react';

function App() {
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sessionStorage.setItem('token', 'darwin');
    setEmail('');
    setPassword('');

    window.location.replace('/dashboard');
  };
  return (
    <div className="bg-pink-400 h-screen">
      POC LOGIN
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button
          className="bg-yellow-600 rounded-sm"
          variant={'outline'}
          onClick={(e) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            handleSubmit(e);
          }}
        >
          submit
        </Button>
      </form>
    </div>
  );
}

export default App;

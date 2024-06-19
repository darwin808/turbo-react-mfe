import { Button } from '@repo/ui';

function App({ React }: any) {
  const [email, setEmail] = React.useState('');

  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sessionStorage.setItem('token', 'darwin');
    setEmail('');
    setPassword('');

    window.location.replace('/dashboard');
  };
  return (
    <div className="bg-pink-400 h-screen">
      POC LOGIN
      <form onSubmit={handleSubmit}>
        <input
          placeholder="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <input
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
        <Button
          className="bg-yellow-600 rounded-sm"
          variant={'outline'}
          onClick={(e) => {
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

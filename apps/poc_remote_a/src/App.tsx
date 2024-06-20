import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from '@repo/ui';

function App() {
  return (
    <div className="bg-green-400 p-10">
      REMOTE A
      <Card className="rounded-lg border-sky-50">
        <CardHeader>
          <CardTitle className="text-lg">Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default App;

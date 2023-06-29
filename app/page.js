import Main from "./components/toDo/main";
import Completed from "../app/components/toDo/completed";
import Input from "../app/components/toDo/Input";
import Deleted from '@/app/components/toDo/deleted';

export default function Home() {
  return (
    <div className="min-w-full h-screen bg-blue-500 m-0">
      <Input />
      <div className="min-w-full h-1/2 flex my-20 justify-center">
        <Deleted />
        <Main />
        <Completed />
      </div>
    </div>
  );
}

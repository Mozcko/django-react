import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3xl mb-4">Task App</h1>
      </Link>
      <Link className="flex bg-indigo-500 items-center px-4 rounded-lg hover:bg-indigo-700" to="/tasks-create">
        Create a task
      </Link>
    </div>
  );
}

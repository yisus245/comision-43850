import MainScreen from "./src/Screens/MainScreen";
const taskList = [
  {
    id: 1,
    task: "Zapatos",
    completed: false,
  },
  {
    id: 2,
    task: "Camisas",
    completed: false,
  },
  {
    id: 3,
    task: "Pantalones",
    completed: false,
  },
  {
    id: 4,
    task: "Cintos",
    completed: false,
  },
  {
    id: 5,
    task: "Corbatas",
    completed: false,
  },
];

export default function App() {
  return <MainScreen taskList={taskList} />;
}

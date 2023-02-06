import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { useEffect, useState } from "react";
import Jobs from "./components/Jobs";

function App() {
  const [jobList, setJobList] = useState([{ job: "", type: 0, isDone: false }]);

  const [currentItemType, setCurrentItemType] = useState(0);

  const [manuelRender, setManuelRender] = useState(false);

  return (
    <div className="App container">
      <Header />
      <Todo
        kaydetCallBack={(value, type) => {
          setJobList([...jobList, { job: value, type: type }]);
          // setCurrentItemType(type);
        }}
      />
      {/* <Jobs type={currentItemType} isler={jobList} /> */}
      <div className="kutu">
        {jobList.length > 1 &&
          jobList.map((object) => {
            var typeName = "obje-normal";
            if (object.type == 1) {
              typeName = "obje-critical";
            } else if (object.type == 2) {
              typeName = "obje-important";
            } else if (object.type == 3) {
              typeName = "obje-routine";
            }
            return (
              <p
                onClick={() => {
                  {
                    object.isDone = !object.isDone;
                    setManuelRender(!manuelRender);
                  }
                }}
                className={object.isDone ? typeName + "-done" : typeName}
              >
                {object.job}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default App;

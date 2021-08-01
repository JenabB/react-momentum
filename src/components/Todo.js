import { useState } from "react";

const Todo = () => {
  let getTodo = localStorage.getItem("todo");
  let getIsTodo = localStorage.getItem("isTodo");
  let getCheck = localStorage.getItem("check");

  let [todo, setTodo] = useState(getTodo == null ? "" : getTodo);
  let [isTodo, setIsTodo] = useState(getIsTodo);
  let [check, setCheck] = useState(JSON.parse(getCheck));

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = (e) => {
    if (e.key === "Enter") {
      setTodo(getTodo);
      setIsTodo(true);
      localStorage.setItem("todo", todo);
      localStorage.setItem("isTodo", true);
    }
  };

  const handleDelete = () => {
    localStorage.removeItem("todo");
    localStorage.removeItem("isTodo");
    localStorage.removeItem("check");

    setTodo("");
    setIsTodo(false);
    setCheck(false);
  };

  const handleCheck = () => {
    setCheck(!check);
    localStorage.setItem("check", !check);
  };
  return (
    <div className="text-center mt-5 text-white">
      <div className="todo">
        {isTodo ? (
          <>
            <h2 className="text-white text-3xl mb-4 font-bold">Today Task</h2>

            <div className="flex items-center justify-center">
              <div>
                <input
                  type="checkbox"
                  id="fruit1"
                  name="fruit-1"
                  checked={check}
                  onChange={handleCheck}
                />
                <label htmlFor="fruit1"></label>
              </div>

              <h2
                className="text-2xl mx-10"
                style={
                  check
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {getTodo}
              </h2>
              <span className="cursor-pointer" onClick={handleDelete}>
                X
              </span>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-white text-xl">
              What's Your Main Focus Today?
            </h2>
            <input
              type="text"
              className="bg-transparent border-b-2 border-white"
              value={todo.value}
              onChange={handleChange}
              onKeyPress={addTodo}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;

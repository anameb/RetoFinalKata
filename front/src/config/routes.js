
import ListTodo from "../components/ListTodo";
import Todo from "../components/Todo"

const routesUser= [
    {
      patch: "/",   
      component: Todo,  
    },
    {
      patch: "/listtodo",  
      component: ListTodo,  
    },
   
  ];


  const routes = [...routesUser]

  export default routes;
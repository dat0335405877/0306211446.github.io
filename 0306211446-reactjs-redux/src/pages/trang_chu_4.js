import FormAddTask from '../components_4/form_add_task';
import ListTasks from '../components_4/list_tasks';


function TrangChu4(props) {
  // render UI
  return (
    <>
    <div className='content'>
    <FormAddTask />
      <ListTasks />
    </div>
      
    </>

  );
}

export default TrangChu4;
import React from 'react';
import './App.css'
class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'a',
      selected: null,
      data: [
        {id: 1, name: 'Joe', status: 'High'},
        {id: 2, name: 'Biden', status: 'Low'},
        {id: 3, name: 'Ali', status: 'Medium'},
        {id: 4, name: 'Vali', status: 'High'},
        {id: 5, name: 'Azamat', status: 'Low'},
      ],
      name: '',
      status: '',
      editname: '',
      editstatus: '',
    };
  }
  
  render() {
    const onDelete = (id) => {
      // console.log('deleted');
      const newData = this.state.data.filter(value => value.id !==id);
      this.setState({data: newData});
    }
    const add = ()=>{
      // console.log('added');
      const data = {
        name: this.state.name, 
        status: this.state.status, 
        id: this.state.data.length+1
      };
      if(this.state.name !=="" && this.state.status !=="" ){

        const newData = [...this.state.data, data]
        this.setState({data: newData, name: '', status: ''})
      }
      else alert('please fill input')
      // console.log(data);
    }
    const onStatus = (e)=>{
      this.setState({status: e.target.value})
    }
    const onName = (e)=>{
      this.setState({name: e.target.value})
    }
    //======================================
    const onEdit = (id, name, status)=>{
      // console.log(id);
      this.setState({selected: id, editname: name, editstatus: status})
    }

    const onChangeStatus = (e)=>{
      this.setState({editstatus: e.target.value})
    }
    const onChangeName = (e)=>{
      this.setState({editname: e.target.value})
    }
    const onSave = (id)=>{
      // console.log(id);
     const newData = this.state.data.map(value=>{
       return value.id !== id ? value 
       : {
         ...value, 
         name: this.state.editname, 
         status: this.state.editstatus
        }
     })
      this.setState({selected: null, data: newData})
    }
    
    return (
      <div>
        <div className='info-adders'>
           <input value={this.state.name} onChange={onName} placeholder='name' type='text' />  <br />
           <input value={this.state.status} onChange={onStatus} placeholder='status' type='text' /> <br />
           <button onClick={add}>Add</button>
        </div>
  <table border='1'>
          <thead>
             <tr>
               <th>ID</th>
               <th>Name</th>
               <th>Status</th>
               <th>Remove</th>
               <th>Edit</th>
               {/* <th>Save</th> */}
             </tr>
          </thead>

    <tbody>
        {
          this.state.data.map(({id, name, status})=>{
            return(
              <tr key={id}>
                <td>{id}</td>
                <td> 
                  { this.state.selected === id ? (
                    <input 
                     onChange={onChangeName}
                     disabled={this.state.selected !== id} 
                     type='text' 
                     value={this.state.editname}>
                  </input>
                 ) : ( <div>{name}</div> )
                  } 
                </td>

                <td> 
                  { this.state.selected === id ? (
                    <input
                     onChange={onChangeStatus} 
                     disabled={this.state.selected !== id} 
                     type='text' 
                     value={this.state.editstatus}>
                  </input>
                 ) : ( <div>{status}</div> )
                  } 
                </td>
                <td> <button onClick={ ()=> onDelete(id)}>delete {id} </button> </td>
                <td> 
                  <button onClick={()=> this.state.selected === id 
                    ? onSave(id) 
                    : onEdit(id, name, status)
                  }
                  disabled = {
                    this.state.selected === id &&
                    (this.state.editname.length <= 0 || this.state.editstatus.length <= 0)
                  }
                  >
                    {this.state.selected === id ? 'save' : 'edit'}
                  </button> 
                </td>
              </tr>

            )
          })
        }
    </tbody>
</table>

        <div className='search'> 
           <input type='text' placeholder='search...'  />
        </div>
      </div>
    );
  }
}

export default Student;

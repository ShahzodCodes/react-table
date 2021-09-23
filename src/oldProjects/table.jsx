import React from 'react';
import { newList } from './mock'

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newList,
      title: '',
    };
  }

  render() {
    const onChange = (e) => {

      this.setState((state) => {
        const newData = newList.filter(val =>
          // console.log(e.target.value)
          // val.status.includes(e.target.value)
          val.name.includes(e.target.value)
        )
        return { data: newData }
      })

      // this.setState({ title: e.target.value })
      // console.log(e.target.value);
      // const newData = newList.filter(val => 
      //   val.name.includes(this.state.title)
      // );

      // this.setState({ data: e.target.value.length <= 0 ? newList : newData })
    }

    const onOption = () => {
      
    }

    return (
      <div>
        <input
          type="text"
          placeholder="Enter text"
          onChange={onChange}
        />
        <select name="" id="">
            <option selected disabled>choose</option>
          <option onChange={onOption} value="">ID</option>
          <option onChange={onOption} value="">Name</option>
          <option onChange={onOption} value="">Status</option>
        </select>
        <table border='1'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map(({ id, name, status }, index) => (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{status}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
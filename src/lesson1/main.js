import React from 'react';
import './style.css'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className='calc'>
                  <button>-</button>
                  <h1>0</h1>
                  <button>+</button>
                  </div>
            </div>
        );
    }
}


export default Main;

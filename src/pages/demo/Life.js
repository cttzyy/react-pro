import React from 'react';
import Child from "./Child";
import './index.less'

 class Life extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }

    };
    handleClick(){
        this.setState(
            {count:this.state.count+1}
        )
           
            
        }
    render(){
        return (<div className='content'>
              <div onClick={this.handleClick.bind(this)}>1111</div>
                <p>{this.state.count}</p>
                <Child name='zyy'></Child>
        </div>
      )

    }
    
}
export default Life
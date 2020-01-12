import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

 class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    };
    componentwillMounted(){
        console.log('will componentWillMounted')
    }
    
    
    render(){
        return (<div>
            <div>生命周期</div>
                <p>{this.props.name}</p>
                <Button type="primary">Primary</Button>
            

        </div>
      )

    }
    
}
export default Child
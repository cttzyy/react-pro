import React from 'react';
import { Menu, Icon, Button } from 'antd';
import menuData from '../../assest/menu'
const { SubMenu } = Menu;
export default class NavLeft extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        let menuListShow = () => {
            let arr = []
            console.log(menuData)
            menuData.forEach((element,ind) => {
                if (element.children) {
                    arr.push(<SubMenu
                        key={ind}
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>{element.name}</span>
                            </span>
                        }>
                        {element.children.map((ele,index)=> {
                            return <Menu.Item key={ele.key}>
                                <Icon type="inbox" />
                                <span>{ele.name}</span>
                            </Menu.Item>
                        })}

                    </SubMenu>)
                } else {
                    arr.push(<Menu.Item key={element.key}>
                        <Icon type="pie-chart" />
                        <span>{element.name}</span>
                    </Menu.Item>)
                }

            })
            return arr
        }
        return (
            <div>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}>
                    {
                        menuListShow()
                    }
                </Menu>
            </div>
        );
    }
}
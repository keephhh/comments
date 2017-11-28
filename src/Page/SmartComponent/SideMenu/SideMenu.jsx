import React, { Component } from 'react';
import { browserHistory} from 'react-router'
import {connect} from 'react-redux'
import { Collapse } from 'antd';
import './style.css'

const Panel = Collapse.Panel;



class SideMenu extends Component {
    constructor (context) {
        super(context)
        this.state = {
            status: localStorage.getItem('status')
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentWillMount() {
        localStorage.setItem('status', 'sale')
    }
     callback(key) {
    }
    handleClick(route) {
        localStorage.setItem('status', route)
        switch (route) {
            case 'sale':
                browserHistory.push('/')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'hotelserver':
                browserHistory.push('/hotelserver')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'flight':
                browserHistory.push('/flight')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'flightserver':
                browserHistory.push('/flightserver')
                this.setState({
                    status: localStorage.getItem('status')
                })
                break;
            case 'error':
                browserHistory.push('/error')
                break;
        }

    }
    render() {
        const { isOrder } = this.props
        return (
            <div className="search-left left">
                <div className="order-message">
                    <img src={require("../../../images/logo.png")} alt=""/>
                </div>
                {
                    isOrder === '订单管理'
                    ? <div className="sidemenu-order">
                            <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                <Panel header="酒店订单" key="1">
                                    <div className="sale order"
                                         onClick={() => {this.handleClick("sale")}}
                                    >
                            <span className={(this.state.status == "sale" ? "isActive" : "")}>
                                销售订单
                            </span>
                                    </div>
                                    <div className="server order"
                                         onClick={() => {this.handleClick("hotelserver")}}
                                    >
                                        <i className="icon-people"></i>
                                        <span className={(this.state.status == "hotelserver" ? "isActive" : "")}>
                                售后订单
                            </span>
                                    </div>
                                </Panel>
                                <Panel header="机票订单" key="2">
                                    <div className="hotel order"
                                         onClick={() => {this.handleClick("flight")}} >
                                        <i className="icon-pic"></i>
                                        <span className={(this.state.status == "flight" ? "isActive" : "")}>
                                销售订单（10）
                            </span>
                                    </div>
                                    <div className="hotel order"
                                         onClick={() => {this.handleClick("flightserver")}} >
                                        <i className="icon-pic"></i>
                                        <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                                售后订单（7）
                            </span>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                        : ''
                }
                {
                    isOrder === '合作商户'
                        ? <div className="sidemenu-order">
                            <Collapse defaultActiveKey={['1']} onChange={this.callback()}>
                                <Panel header="商户名称" key="1">
                                    <div className="sale order"
                                         onClick={() => {this.handleClick("error")}}
                                    >
                            <span className={(this.state.status == "error" ? "isActive" : "")}>
                                商户模块
                            </span>
                                    </div>
                                    <div className="server order"
                                         onClick={() => {this.handleClick("hotelserver")}}
                                    >
                                        <i className="icon-people"></i>
                                        <span className={(this.state.status == "sale" ? "isActive" : "")}>
                                哈哈等哈
                            </span>
                                    </div>
                                </Panel>
                                <Panel header="其他商户" key="2">
                                    <div className="hotel order"
                                         onClick={() => {this.handleClick("flight")}} >
                                        <i className="icon-pic"></i>
                                        <span className={(this.state.status == "flight" ? "isActive" : "")}>
                                销售订单（10）
                            </span>
                                    </div>
                                    <div className="hotel order"
                                         onClick={() => {this.handleClick("flightserver")}} >
                                        <i className="icon-pic"></i>
                                        <span className={(this.state.status == "flightserver" ? "isActive" : "")}>
                                售后订单（7）
                            </span>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                        : ''
                }
                {
                    console.log(this.state.status)
                }

            </div>
        );
    }
}


const mapStateToProps = state => ({
    isOrder: state.CommonReducer.isOrder,
});


export default connect(mapStateToProps)(SideMenu);
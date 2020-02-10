import React, {Component} from 'react';
import {Card, Icon, Modal, Table} from 'antd';
import * as constants from '../../const/backend';
import 'antd/dist/antd.css';
import '../../utils/alert'
import {Alert} from "../../utils/alert";
import {FormattedNumber, FormattedDate} from 'react-intl';

export class TableView extends Component {

    //Constructor will be called initially whenever the page is rendered.
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalVisible: false,
            modalData: {}
        }
    };

    componentDidMount() {
        this.callAPI();
    }

    //Handle connection with node
    callAPI = () => {
        try {
            fetch(constants.nodeConnect)
                .then((response) => response.json())
                .then((responseJSON) => {
                    // do stuff with responseJSON here...
                    this.setState({
                        data: responseJSON
                    })
                });
        }
        catch (e) {
            this.alertView(e)
        }
    }

    alertView = (errorMsg) => {
        return (
            <Alert errorMessage={errorMsg}/>
        )
    }

    //When each table row is selected
    onViewRow = (text, record, key) => {
        try {
            this.setState({
                modalData: record
            }, () => {
                this.setState({
                    modalVisible: true
                })
            })
        }
        catch (e) {
            this.alertView(e)
        }
    }

    //
    handleModalCancel = () => {
        try {
            this.setState({
                modalVisible: false
            })
        }
        catch (e) {
            this.alertView(e)
        }
    }

    renderTable = (data, columns) => {
        try {
            return (
                <Table
                    pagination={false}
                    dataSource={this.state.data}
                    columns={columns}
                    bordered={true}
                    key={'table'}
                />
            )
        }
        catch (e) {
            this.alertView(e)
        }
    }

    renderModal = (modalVisible, modalData,) => {
        try {
            return (
                <Modal
                    title="Detailed View"
                    visible={modalVisible}
                    onCancel={this.handleModalCancel}
                    footer={null}
                >
                    <p><b>First Name:</b> {modalData.FirstName}</p>
                    <p><b>Last Name:</b> {modalData.LastName}</p>
                    <p><b>DOB:</b> {modalData.DOB}</p>
                    <p><b>Salary:</b> Rs {modalData.Salary}</p>
                </Modal>
            )
        }
        catch (e) {
            this.alertView(e)
        }
    }

    render() {

        const {data, modalVisible, modalData} = this.state;

        const columns = [
            {
                title: 'First Name',
                dataIndex: 'FirstName',
                key: 'FirstName',
            },
            {
                title: 'Last Name',
                dataIndex: 'LastName',
                key: 'LastName',
            },
            {
                title: 'DOB',
                dataIndex: 'DOB',
                key: 'DOB',
                render: (dob, record, key) => {
                    return <div>
                                <FormattedDate
                                    value={new Date(dob.toString().split("/").reverse().join("/"))}
                                    year="numeric"
                                    month="long"
                                    day="numeric"
                                    weekday="long"
                                />
                            </div>
                }
            },
            {
                title: 'Salary',
                dataIndex: 'Salary',
                key: 'Salary',
                render: (text, record, key) => {
                    return <div><FormattedNumber value={text} /></div>
                }
            },
            {
                title: 'View',
                dataIndex: 'operation',
                width: 50,
                key: 'edit',
                className: 'scrollableColumn',
                render: (text, record, key) => {
                    return <Icon type="eye" onClick={() => this.onViewRow(text, record, key)}/>
                }
            }
        ];

        return (
                <Card className="onBoardingScreen">
                    <div className="onBoardingScreen">
                        {this.renderTable(data, columns)}
                        {this.renderModal(modalVisible, modalData)}
                    </div>
                </Card>
        );
    }
}

export default TableView;

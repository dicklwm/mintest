import React, { Component } from 'react';
import { Table, Tag, Button } from 'antd';
import 'antd/dist/antd.min.css';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selectedRowKeys: [],
        }
        this.columns = [
            { key: "id", dataIndex: "id", title: "编号", width: "80px", },
            { key: "nickname", dataIndex: "nickname", title: "昵称", width: "100px" },
            { key: "truename", dataIndex: "truename", title: "姓名", width: "100px" },
            {
                key: "sex",
                dataIndex: "sex",
                title: "性别",
                width: "80px",
                render: (text, record, index) => text===1 ? '男' : '女'
            },
            { key: "title", dataIndex: "title", title: "部门", width: "100px" },
            { key: "create_at", dataIndex: "create_at", title: "创建时间", width: "150px" },
            { key: "update_at", dataIndex: "update_at", title: "更新时间", width: "150px" },
            { key: "last_login_at", dataIndex: "last_login_at", title: "最后登录时间", width: "150px" },
            {
                key: "wx_count",
                dataIndex: "wx_count",
                title: "是否有销售号",
                width: "110px",
                render: (text, record, index) =>
                    <label key={index}>
                        <Tag color={text > 0 ? "green-inverse" : "orange-inverse"}> {text > 0 ? '有' : '无'}</Tag>
                    </label>

            },
            {
                key: "status", dataIndex: "status", title: "状态", width: "80px",
                render: (text, record, index) =>
                    <label key={index}>
                        <Tag color={text > 0 ? "green-inverse" : "orange-inverse"}>  {text > 0 ? '正常' : '异常'}</Tag>

                    </label>
            },
            {
                key: "op",
                dataIndex: "op",
                title: "操作",
                width: "100px",
                render: (record, text, index) => <Button onClick={this.handleClick}>聊天记录</Button>
            },
        ];
        this.rows = [
            {
                title: "总经办",
                account: "test123",
                address: "",
                agent_id: "001",
                bank_card: "",
                bank_type: "",
                birthday: "2017-02-16",
                card_id: "",
                city: "",
                client_id: 0,
                create_at: "2017-02-17 16:41:44",
                delete_at: "0000-00-00 00:00:00",
                device: null,
                icon: "",
                id: 984,
                last_login_at: null,
                last_token_at: null,
                leader: 1,
                nickname: "456",
                password: "50eb6ccf3baf10c4fc1534a01aa575d2",
                pid: 1,
                receive_count: 0,
                sector_id: 27,
                send_count: 0,
                sex: 1,
                status: 1,
                token: "",
                truename: "123",
                type: 1,
                update_at: "2017-02-17 16:41:44",
                wx_count: 0
            },
            {
                title: "一部三组",
                account: "111111",
                address: "",
                agent_id: "",
                bank_card: "",
                bank_type: "",
                birthday: null,
                card_id: "",
                city: "",
                client_id: 0,
                create_at: "2017-01-13 20:06:09",
                delete_at: "0000-00-00 00:00:00",
                device: null,
                icon: "",
                id: 983,
                last_login_at: null,
                last_token_at: null,
                leader: 1,
                nickname: "111111",
                password: "50eb6ccf3baf10c4fc1534a01aa575d2",
                pid: 974,
                receive_count: 1886,
                sector_id: 10,
                send_count: 490,
                sex: 1,
                status: 1,
                token: "",
                truename: "111111",
                type: 1,
                update_at: "2017-01-13 20:06:09",
                wx_count: 2
            },
            {
                title: "嵘御科技",
                account: "haha",
                address: "",
                agent_id: "",
                bank_card: "",
                bank_type: "",
                birthday: "2016-12-26",
                card_id: "",
                city: "",
                client_id: 0,
                create_at: "2016-12-26 18:35:19",
                delete_at: "0000-00-00 00:00:00",
                device: null,
                id: 974,
                last_login_at: "2017-02-06 16:25:44",
                last_token_at: "2017-02-16 10:54:31",
                leader: 1,
                nickname: "123",
                password: "50eb6ccf3baf10c4fc1534a01aa575d2",
                pid: 1,
                receive_count: 5134,
                sector_id: 10,
                send_count: 5754,
                sex: 2,
                status: 1,
                token: "55da340ce52ff3d83ade1c2c16058599",
                truename: "haha",
                type: 1,
                update_at: "2016-12-26 18:35:19",
                wx_count: 1
            },
            {
                title: "一部一组",
                account: "test123",
                address: "",
                agent_id: "001",
                bank_card: "",
                bank_type: "",
                birthday: "2017-02-16",
                card_id: "",
                city: "",
                client_id: 0,
                create_at: "2017-02-17 16:41:44",
                delete_at: "0000-00-00 00:00:00",
                device: null,
                icon: "",
                id: 985,
                last_login_at: null,
                last_token_at: null,
                leader: 1,
                nickname: "456",
                password: "50eb6ccf3baf10c4fc1534a01aa575d2",
                pid: 1,
                receive_count: 0,
                sector_id: 27,
                send_count: 0,
                sex: 1,
                status: 1,
                token: "",
                truename: "123",
                type: 1,
                update_at: "2017-02-17 16:41:44",
                wx_count: 0
            },
            {
                title: "一部二组",
                account: "111111",
                address: "",
                agent_id: "",
                bank_card: "",
                bank_type: "",
                birthday: null,
                card_id: "",
                city: "",
                client_id: 0,
                create_at: "2017-01-13 20:06:09",
                delete_at: "0000-00-00 00:00:00",
                device: null,
                icon: "",
                id: 986,
                last_login_at: null,
                last_token_at: null,
                leader: 1,
                nickname: "111111",
                password: "50eb6ccf3baf10c4fc1534a01aa575d2",
                pid: 974,
                receive_count: 1886,
                sector_id: 10,
                send_count: 490,
                sex: 1,
                status: 1,
                token: "",
                truename: "111111",
                type: 1,
                update_at: "2017-01-13 20:06:09",
                wx_count: 2
            },
            {
                title: "一部二组",
                account: "haha",
                address: "",
                agent_id: "",
                bank_card: "",
                bank_type: "",
                birthday: "2016-12-26",
                card_id: "",
                city: "",
                client_id: 0,
                create_at: "2016-12-26 18:35:19",
                delete_at: "0000-00-00 00:00:00",
                device: null,
                id: 977,
                last_login_at: "2017-02-06 16:25:44",
                last_token_at: "2017-02-16 10:54:31",
                leader: 1,
                nickname: "123",
                password: "50eb6ccf3baf10c4fc1534a01aa575d2",
                pid: 1,
                receive_count: 5134,
                sector_id: 10,
                send_count: 5754,
                sex: 2,
                status: 1,
                token: "55da340ce52ff3d83ade1c2c16058599",
                truename: "haha",
                type: 1,
                update_at: "2016-12-26 18:35:19",
                wx_count: 1
            },
        ]

    }

    handleSelectionChange (rowKey) {
        let selectedRowKeys = this.state.selectedRowKeys;
        const index = selectedRowKeys.findIndex(item => item===rowKey);
        if (index >= 0) {
            selectedRowKeys.splice(index, 1);
        } else {
            selectedRowKeys.push(rowKey);
        }
        this.setState({
            selectedRowKeys: selectedRowKeys
        })
    }

    render () {
        const rowSelection = {
            selectedRowKeys: this.state.selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                })
            },
        }
        //展示选中行
        alert('当前选中行' + this.state.selectedRowKeys);

        return (
            <div>
                <Table
                    showHeader
                    title={(currentPageData) => "有rowKey=id的表格"}
                    rowKey="id"
                    columns={this.columns}
                    dataSource={this.rows}
                    rowSelection={rowSelection}
                    onRowClick={(record, index) => this.handleSelectionChange(index)}
                    pagination={false}
                />

                <Table
                    showHeader
                    title={(currentPageData) => "没有rowKey的表格"}
                    columns={this.columns}
                    dataSource={this.rows}
                    rowSelection={rowSelection}
                    onRowClick={(record, index) => this.handleSelectionChange(index)}
                    pagination={false}
                />

            </div>
        );
    }
}

export default App;

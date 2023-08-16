import React from 'react'
import {Button, Input, Select, Space} from 'antd';

export default function Hello() {
    return <Space.Compact>
        <Button>Info</Button>
        <Input addonBefore={'User'}/>
        <Input addonBefore={'Email'}/>
        <Select style={{width: 200}} options={[{label: 'User 1', value: 1}, {label: 'User 2', value: 2}]}/>
    </Space.Compact>
};

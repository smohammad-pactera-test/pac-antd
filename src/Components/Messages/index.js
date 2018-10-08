import React from 'react';
import { message } from 'antd';


export const PMessage = {
    info:(messageDescription) => message.info(messageDescription),
    warning:(messageDescription) => message.warning(messageDescription),
    error:(messageDescription) => message.error(messageDescription),
    success:(messageDescription) => message.success(messageDescription)
};


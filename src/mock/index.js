import Mock from 'mockjs';

import { tokenInfo, userInfo } from './auth';

Mock.mock('proxy/auth/login', 'post', tokenInfo);
Mock.mock('proxy/auth/user', 'get', userInfo);

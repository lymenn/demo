import Mock from 'mockjs'
import LoginAPI from './login'

Mock.mock(/\/user\/info/, LoginAPI.getUserInfo)

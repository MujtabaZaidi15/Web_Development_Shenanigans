import {Button, Form, Input} from 'antd'
import {Link} from 'react-router-dom'
import React from 'react'


function Login() {


  const onFinish = values =>{

    console.log(' recived values of form ',values);
  }

  return (
  
    <div className='authentication'> 
    <div className='authentication-form card p-3' >
    
    <h1 className='card-title'>
      WELCOME BACK
    </h1>

    <Form layout='vertical' onFinish={onFinish}>
  
    
      <Form.Item label='Email' name='email'>
        <Input placeholder='Email' />
      </Form.Item>
    
      <Form.Item label='Password' name='password'>
        <Input placeholder='Password' type='password' />
      </Form.Item>
    
    
    
    <Button className='primary-button mt-3' htmlType='submit' >
      LOGIN 
    </Button>

   <Link to='/register' className='anchor mt-2' >
   CLICK HERE TO REGISTER BILAL LOVES U!
   </Link>

    </Form> 

    

    </div>
    </div>
  )
}

export default Login
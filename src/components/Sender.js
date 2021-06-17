
import React  from 'react';
import {
    Form,
    Input,
    InputNumber,
    Button,
} from 'antd';
import Axios from "axios";
import Swal from "sweetalert2";
import TextArea from "antd/es/input/TextArea";



const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function Sender() {

    const [form] = Form.useForm();

    const onFinish=(values) =>{
        SendEmail(values)
    }

    const SendEmail = async(values) => {


        //const url = 'https://peaceful-ridge-86113.herokuapp.com/api/users/'
        const url='https://warm-earth-28122.herokuapp.com/api/'

        const response = await Axios.post(
            url,
            {values})

        const mensaje = response.data.data
        const status=response.status

        console.log(mensaje)

        if(status===200){
            Swal.fire({
                title: mensaje,

            })

            window.location.reload(false)
        }else{
            Swal.fire({
                title: mensaje,

            })

        }
    }

    return (
        <div id="hero" className="registerBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Generacion PDF</h2>
                </div>

                <div className="block">
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}

                        scrollToFirstError
                    >

                        <Form.Item
                            name="ciudad"
                            label="Ciudad "
                            rules={[{required: true, message: 'Por favor ingresa la ciudad!', whitespace: false}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="nombre"
                            label="Nombre "
                            rules={[{required: true, message: 'Por favor ingresa el nombre!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="representante"
                            label="Representante "
                            rules={[{required: true, message: 'Por favor ingresa el representante!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="nit"
                            label="Nit "

                            rules={[{required: true, message: 'Por favor ingresa el Nit!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="correo"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'El email ingresado no es valido',
                                },
                                {
                                    required: true,
                                    message: 'Por favor ingresa tu email!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>


                        <Form.Item
                            name="direccion"
                            label="Direccion "

                            rules={[{required: true, message: 'Por favor ingresa la direccion!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="telefono"
                            label="Telefono "
                            rules={[{required: true, message: 'Por favor ingresa el telefono!'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="ciudadA"
                            label="Ciudad "
                            rules={[{required: true, message: 'Por favor ingresa la ciudad!', whitespace: false}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="asunto"
                            label="Asunto "
                            rules={[{required: true, message: 'Por favor ingresa el asunto!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="mensaje"
                            label="Mensaje "
                            rules={[{required: true, message: 'Por favor ingresa el mensaje!'}]}
                        >
                            <TextArea/>
                        </Form.Item>

                        <Form.Item
                            name="secretaria"
                            label="Secretaría "
                            rules={[{required: true, message: 'Por favor ingresa la secretaría!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="ocupacion"
                            label="Ocupación "
                            rules={[{required: true, message: 'Por favor ingresa la ocupación!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>


                        <Form.Item
                            name="redactor"
                            label="Redactor "
                            rules={[{required: true, message: 'Por favor ingresa el redactor!', whitespace: true}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            name="emailDestino"
                            label="E-mail Destino"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'El email ingresado no es valido',
                                },
                                {
                                    required: false,
                                    message: 'Por favor ingresa tu email!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>




                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Enviar
                            </Button>
                        </Form.Item>
                    </Form>

                </div>
            </div>
        </div>
    );

}

export default Sender;

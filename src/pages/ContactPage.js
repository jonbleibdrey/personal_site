import React, { Component } from 'react'
import Content from '../components/Content';
import HomeText from '../components/HomeText';
import Form from 'react-bootstrap/Form'

class ContactPage extends Component {

    constructor(props) {
        super(props);

        this.state ={
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,

        }
    }

    render() {
        return (
            <div>
                <HomeText title={this.props.title}/>

                <Content>
                    hello
                </Content>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name"/>

                        </Form.Group>
                    </Form>
           </div>
        )
    }
}

export default ContactPage


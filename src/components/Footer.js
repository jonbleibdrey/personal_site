import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Footer() {
    return (
       <footer className='mt-5'>

           <Container fluid={true}>
               <Row>
                   <Col className='p-0' md={3} sm={12}> 
                   Footer
                   </Col> 
               </Row>
           </Container>

       </footer>
    )
}

export default Footer

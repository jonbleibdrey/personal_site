import React, { Component } from 'react'
import briefcase  from '../assets/images/briefcase.PNG'
import candy  from '../assets/images/candy.PNG'
import shoe  from '../assets/images/shoe.PNG'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: "Linked in",
                    subTitle: "check out my resume",
                    imgSrc: briefcase,
                    link: "https://www.linkedin.com/mwlite/in/jonathan-bleibdrey-4032171b9",
                    selected: false

                },
                {
                    id:1,
                    title: "Github",
                    subTitle: "check out what i have made",
                    imgSrc: candy,
                    link: "https://github.com/jonbleibdrey",
                    selected: false

                },
                {
                    id:2,
                    title: "Facebook",
                    subTitle: "check out my social media",
                    imgSrc: shoe,
                    link: "https://www.facebook.com/jbleibdrey/",
                    selected: false

                },

            ]
        }
    }

    handleCardClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
             <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
             </Row>
            </Container>
        )
    }
}

export default Carousel

import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import MoreItems from '../MoreItems'
import PricedProducts1 from './PricedProducts1'
const Specification = () => {
    return (
        <div className="container-fluid bg-white">
            <Container>
                <h6 className="h6 text-center" >SPECIFICATION AND PRODUCT DETAILS</h6>
                <hr />
                <div className="row">
                    <div className="col">
                        <span>Specification</span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                    </div>
                    <div className="col">
                        <br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                        <span><i>Lorem ipsum: dolor sit amet.</i></span><br />
                    </div>
                </div>

                <hr />

                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nesciunt quae quos harum necessitatibus sequi ratione beatae libero iure, saepe, ab soluta optio nostrum dolore eos voluptates hic magnam? Quidem delectus quae iure quibusdam! Necessitatibus!
                    <div className="specification-rect rectangle">
                    </div>
                </div>
                <p></p>
                <div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nesciunt quae quos harum necessitatibus sequi ratione beatae libero iure, saepe, ab soluta optio nostrum dolore eos voluptates hic magnam? Quidem delectus quae iure quibusdam! Necessitatibus!
                    </div>
                    <div className="specification-rect rectangle">
                    </div>
                </div>
                <p></p>
                <div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, nesciunt quae quos harum necessitatibus sequi ratione beatae libero iure, saepe, ab soluta optio nostrum dolore eos voluptates hic magnam? Quidem delectus quae iure quibusdam! Necessitatibus!
                    </div>
                    <div className="specification-rect rectangle">
                        <p></p>
                    </div>
                </div>
            </Container>

            <div>
                <br />
                <MoreItems />
            </div>
            <div className="d-flex">
                <PricedProducts1 />
                <PricedProducts1 />
                <PricedProducts1 />
                <PricedProducts1 />
                <PricedProducts1 />
                <PricedProducts1 />
                <PricedProducts1 />
                <PricedProducts1 />
            </div>
        </div>

    )
}

export default Specification

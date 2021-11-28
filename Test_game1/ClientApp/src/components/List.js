import React, { Component } from 'react';
import { ListGroup,Badge,Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import {NavLink} from "reactstrap";


export class ListUnits extends Component {
    static displayName = ListUnits.name;

    constructor(props) {
        super(props);
        this.state = { units: [], loading: true ,justClicked: null,};}

    componentDidMount() {
        this.populateUnitsData();
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : <ListGroup as="ol" numbered>
            {this.state.units.map(unit =>
                <ListGroup.Item
                key={unit.id}
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{unit.name}</div>
                        HP:{unit.hp} Mp:{unit.mana} Class:{unit.class}
                    </div>
                    <div>   
                    <Link to={{pathname: `/edit/${unit.id}`, query: "/edit"}} >
                        <Button variant="outline-warning"  size="sm">
                        edit
                        </Button>
                    </Link>
                    
                    <Button variant="outline-danger " size="sm"
                        
                        onClick={()=>{
                            fetch('/api/units/'+unit.id, { method: 'DELETE' })
        .then(
            this.setState({units: this.state.units.filter(function(u) { 
                return u !== unit })})
                
        );
                        }}>Delete</Button>
                </div> 
                </ListGroup.Item>
            )}
        </ListGroup>;

        return (
            <div>
                <h1 id="tabelLabel" >sdsd</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateUnitsData() {
        const response = await fetch('api/units');
        console.log(response);
        const data = await response.json();
        console.log(data);
        this.setState({ units: data, loading: false });
    }
}

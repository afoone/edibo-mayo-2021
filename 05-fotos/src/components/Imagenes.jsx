import React, { Component } from 'react'
import axios from 'axios'

export class Imagenes extends Component {


    constructor(props){
        super(props)
        this.state= {
            imagenes: []
        }
    }

    componentDidMount() {
        axios.get('https://api.unsplash.com/search/photos/?client_id=N4IxmojIOcsRn0NMD39tJwNIYJBhFDLUWJWO_1wpssU&query=beach').then(
            res => this.setState({
                imagenes: res.data.results
            })
        )
    }

    render() {
        return (
            <div>
                Imagenes
                {
                    this.state.imagenes.map(
                        imagen => <img src={imagen.urls.thumb}/>
                    )
                }
            </div>
        )
    }
}

export default Imagenes

import React, { Component } from 'react'

class About extends Component {
    componentWillMount(){
        fetch('/about')
        .then(res => res.json())
        .then(customer => console.log(customer))
        .catch(err => {
            console.log("fetch not work");
        })
    }
    render() {
        return (
            <div>
                <div>
                    here the nodejs
                </div>
            </div>
        )
    }
}
export default About;

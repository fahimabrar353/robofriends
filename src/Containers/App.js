import React, {Component}from "react";
import CardList from "../Components/CardList";
// import { robots } from "./robots";
import SearchBox from "../Components/SearchBox";
import './App.css'
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";




class App extends Component {
    constructor(){ 
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response=>{
                return Response.json();
            })
            .then(users =>{
            this.setState({robots: users})
         });
    }


    onSearchChange = (event) =>{ 
        this.setState({searchfield: event.target.value})   
        
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots= robots.filter(robot1 =>{
            return robot1.name.toLowerCase().includes(searchfield.toLowerCase())
        })

        if (robots.length === 0){
            return <h1>Loading...</h1>
        }else{
            return(
                <div className="tc">
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                        
                    </Scroll>
                </div>
            )
        }    
    }
}

export default App;
import React,{Component} from 'react';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import {robots} from '../robots';
import './App.css';
import Scroll from '../Components/Scroll';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
       fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: robots}));  
    }

    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})   
    }

    
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
    return (
        <div className='tc f1'>
            <h1>RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll><CardList robots = {filteredRobots}/></Scroll>
            
        </div>
    );
    }
}


export default App;

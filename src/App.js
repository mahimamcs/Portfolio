import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
    
    constructor() {
        super();
        this.state = { displayBio: false};
     //   console.log ('Component this',this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
  
     toggleDisplayBio(){
        this.setState({displayBio:!this.state.displayBio});
    } 
    render() {
        return (
            <div> 
                <h1> Hello!</h1>
                <p> I am Mahima</p>
                {
                    this.state.displayBio ?(
                    <div> 
                        <p> I live in Connecticut and I found  ReactJS is interesting to learn </p>
                        <p> I Like to code and I'm a Badminton player too</p>
                        <button onClick={this.toggleDisplayBio}>Show less</button>
                    </div>
                    ): (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read more</button>
                    </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>

            </div>
        );
    }
}


export default App;

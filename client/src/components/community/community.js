import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Community extends Component {
    render() {
        return(
            <div className="cards">
                <div className="cardui">
                    <div class="card" style={{width: '45rem'}}>
                        <img class="card-img-top" src="/images/youtube.jpg" alt="Cardcap" />
                        <div class="card-body">
                            <h5 class="card-title">Edumonk's Youtube</h5>
                            <p class="card-text">Watch Edumonk's videos on Youtube with your intergrated youtube system and explore more stuff for education purpose</p>
                            <Link to="/community/youtube" class="btn btn-primary">Check</Link>
                        </div>
                    </div>
                </div>
                <div className="cardui">
                    <div class="card" style={{width: '45rem'}}>
                        <img class="card-img-top" src="/images/story.jpg" alt="Card cap" />
                        <div class="card-body">
                            <h5 class="card-title">Share Your Story</h5>
                            <p class="card-text">Share your story about edumonk your counselling process that help other student regarding there query</p>
                            <Link to="/community/public-stories" class="btn btn-primary">check</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Community;
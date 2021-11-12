import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog">
            <p className="text-center my-2">Recent Articles</p>
            <h2 className="text-center my-2">Featured Blog & News</h2>
            <br />
            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 my-4">
                        <div className="blog-img">
                            <img className="img-fluid" src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/09/des-4.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 my-4">
                        <div className="blog-details">
                            <h3>Etiquette Tips For Travellers</h3>
                            <br />
                            <h5>Learn as much as you can about the place you’re travelling to</h5>
                            <br />

                            <p>While there’s a lot to be said for ‘learning on the job’, it also pays to be prepared. Read up on the customs, history and culture of your destination. The more you know about a country and its citizens, the smaller the odds are that you’ll overstep your bounds. Besides, it’s fun! You learn all sorts of interesting trivia in the process. E.g. did you know many Russians refuse to shake hands over a threshold? They believe it leads to an argument. Now, that’s a super interesting titbit to work into conversation with fellow travellers on the coach.</p>

                            <h5>Remember you’re a visitor</h5>

                            <p>Always regard locals as your hosts and let them go about their normal routines. Don’t expect them to make space for you on the train/tram/bus. This is their day to day and they might be on their way to work or school. Always be courteous in your interactions, and you will reap the rewards. Most people are eager to help and engage with a friendly person, no matter where they’re from.</p>

                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 my-4">
                        <div className="blog-details">
                            <h3>The Top 25 Hotels in London</h3>
                            <br />

                            <br />

                            <p>Ian Schrager is best known for Studio 54 in New York and for launching the entire concept of boutique hotels, so unsurprisingly, walking into this one in the middle of Fitzrovia feels like joining the party. The lobby is also the bar, with a billiards table, a lofty stucco ceiling with a giant chrome egg dangling from it, and an open fire. Expect loud chatter over gin and tonics and people reclining on sofas pretending to work on their MacBooks; the crowd is an entertaining mix of bright young things, finance swells, and hipster guests. And no wonder: The hotel, along with being one of London’s most stylish spots right now, is home to the Punch Room, one of the hottest clubs in town. As for the bedrooms, think classy oak floors, wood-paneled walls, custom furnishings and evocative photography from Hendrik Kerstens, all of which create a cabin-like feel, akin to that of a private yacht. This is arguably London’s hippest hotel.</p>



                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 my-4">
                        <div className="blog-img">
                            <img className="img-fluid" src="http://g5p6r6b9.stackpathcdn.com/travlio/wp-content/uploads/2020/09/des-3.jpg" alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blog;
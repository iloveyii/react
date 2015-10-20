var Demo = React.createClass({
    render: function() {
        return (

        <div className="container">
            <h1>React JS Radio Group Demo</h1>
            
            <form>
                <p className="h3">How did you hear about us?</p>
                
                <p className="radio">
                    <label>
                        <input type="radio" name="referrer" value="newspaper" />
                        Newspaper
                    </label>
                </p>
                
                <p className="radio">
                    <label>
                        <input type="radio" name="referrer" value="radio" />
                        Radio
                    </label>
                </p>
                
                <p className="radio">
                    <label>
                        <input type="radio" name="referrer" value="tv" />
                        Television
                    </label>
                </p>
                
                <p className="radio">
                    <label>
                        <input type="radio" name="referrer" value="search" />
                        Search Engine
                    </label>
                </p>
                
                <p className="radio">
                    <label>
                        <input type="radio" name="referrer" value="social" />
                        Social Media
                    </label>
                </p>
                
                <p className="radio">
                    <label>
                        <input type="radio" name="referrer" value="other" />
                        Other
                    </label>
                    <label className="form-inline">
                        Please specify: <input className="form-control" type="text" />
                    </label>
                </p>
                
                <p>
                    <input type="submit" className="btn btn-success" value="Submit" />
                </p>
            </form>
            
        </div>

        );
    }

});
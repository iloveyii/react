var Demo = React.createClass({
    render: function() {
        return (

        <div className="container">
            <h1>React JS Radio Group Demo</h1>
            <hr />
            <form>
                <p className="h3">How did you hear about us?</p>
                
                <RadioOption value="newspaper">
                    Newspaper
                </RadioOption>
                <RadioOption value="radio">
                    Radio
                </RadioOption>
                <RadioOption value="tv">
                    Television
                </RadioOption>
                <RadioOption value="search">
                    Search Engine
                </RadioOption>
                <RadioOption value="social">
                    Social Media
                </RadioOption>
                <RadioOption value="newspaper">
                    Newspaper
                </RadioOption>
                
                <RadioOptionOther />
                
                <p>
                    <input type="submit" className="btn btn-success" value="Submit" />
                </p>
            </form>
            
        </div>

        );
    }

});
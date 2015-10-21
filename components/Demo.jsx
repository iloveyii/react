var Demo = React.createClass({
    
    render: function() {
        var radioOptions = [
            { value: 'newspaper', label: 'Newspaper'},
            { value: 'radio', label: 'Radio'},
            { value: 'tv', label: 'Television'},
            { value: 'search', label: 'Search Engine'},
            { value: 'social', label: 'Social Media'}
        ];

        return (

        <div className="container">
            <h1>React JS Radio Group Demo</h1>
            <hr />
            <form>
                <p className="h3">How did you hear about us?</p>
                
                <RadioOptionGroup options={radioOptions} />
                
                <p>
                    <input type="submit" className="btn btn-success" value="Submit" />
                </p>
            </form>
            
        </div>

        );
    }

});
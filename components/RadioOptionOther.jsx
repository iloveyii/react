var RadioOptionOther = React.createClass({
    render: function() {
        return (
            <p className="radio">
                <label>
                    <input type="radio" name="referrer" value="other" />
                    Other
                </label>
                <label className="form-inline">
                    Please specify: <input className="form-control" type="text" />
                </label>
            </p>
        );
    }
})
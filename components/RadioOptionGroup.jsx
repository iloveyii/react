var RadioOptionGroup = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.options.map(function() {
                    <RadioOption value="social">
                        Social Media
                    </RadioOption>
                })}

                <RadioOptionOther />
            </div>
        )
    };
});